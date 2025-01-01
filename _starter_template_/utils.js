const fs = require("fs");
const path = require("path");

/**
 * Reads the content of a file and trims trailing whitespace.
 * @param {string} fileName - Name of the file to read.
 * @returns {string} - The file content as a UTF-8 string.
 * @throws {Error} - If the file cannot be read.
 */
const readInputFile = (fileName) => {
  try {
    const filePath = path.resolve(__dirname, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");
    return fileContent.trimEnd();
  } catch (error) {
    console.error(`Error reading file ${fileName}:`, error.message);
    throw error;
  }
};

module.exports = {
  readInputFile,
};
