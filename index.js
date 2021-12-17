// Minimal setup
const { readdir, readFile, rename, mkdir } = require("fs").promises;
const { stat } = require("fs");
const { join } = require("path");
const input = require("minimist")(process.argv.slice(2));

// Local variables
const directoryPath = input.path;
const directoryFiles = [];

// UTITLITY: Read Directory
async function readDirectory() {
  const directoryContent = await readdir(directoryPath);
  directoryContent.sort((a, b) => a.localeCompare(b, "en", { numeric: true }));

  directoryContent.forEach((content) => {
    const oldContentPath = join(directoryPath, content);
    stat(oldContentPath, async (error, stats) => {
      if (error) console.log("Error occured");
      else {
        if (stats.isFile() && content !== "titles.txt")
          directoryFiles.push(content);
      }
    });
  });
}

// UTILITY: Read File
async function readTitleFile() {
  const titleFilePath = join(directoryPath, "titles.txt");
  const readTitleFileData = await readFile(titleFilePath);

  return readTitleFileData.toString().split("\r\n");
}

// UTILITY: Move file
async function moveFile(newFilePath) {
  try {
    const currentFile = directoryFiles.shift();
    const oldContentPath = join(directoryPath, currentFile);
    await rename(oldContentPath, newFilePath);
  } catch (err) {
    console.log(`Move File Error: ${err.message}`);
  }
}

// Create Structure
const createDirectoriesStructure = async (dirPath) => {
  try {
    const titles = await readTitleFile();
    let directorySequence = 1;
    let newDirectoryPath = "";

    titles.forEach(async (title) => {
      if (title[0].match(/^[A-Z]/)) {
        const modifiedTitleName = `${directorySequence++}. ${title.slice(3)}`;
        newDirectoryPath = join(dirPath, modifiedTitleName);
        try {
          await mkdir(newDirectoryPath, { recursive: true });
        } catch (err) {
          console.log(`Directory Error: ${err.message}`);
        }
      } else {
        try {
          const newFilePath = join(newDirectoryPath, `${title}.${input.ext}`);
          moveFile(newFilePath);
        } catch (err) {
          console.log(`File Error: ${err.message}`);
        }
      }
    });
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

// Execute
readDirectory();
createDirectoriesStructure(directoryPath);
console.log("Woohooo!!! Your directory got a makeover");
