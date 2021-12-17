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
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

// Execute
createDirectoriesStructure(directoryPath);
