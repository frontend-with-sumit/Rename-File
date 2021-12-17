// Minimal setup
const { readFile, rename, mkdir, writeFile } = require("fs").promises;
const { join } = require("path");

/*
    TODO: Inputs to be accepted from user - directoryPath, titleFileName (optional)
*/

// Local variables
const directoryPath = `C:\\Users\\Dumbo\\Desktop\\Package\\Dummy`;

// Create Structure
const createDirectoriesStructure = async (dirPath) => {
  try {
    const titleFilePath = join(dirPath, "titles.txt");
    const readTitleFileData = await readFile(titleFilePath);
    const titles = readTitleFileData.toString().split("\r\n");

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
          await writeFile(join(newDirectoryPath, `${title}.txt`), "");
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
createDirectoriesStructure(directoryPath);
