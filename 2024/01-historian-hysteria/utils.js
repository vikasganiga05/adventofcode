const fs = require("fs");
const path = require("path");

/**
 * Reads and processes the content of a file.
 * Each line is parsed into a pair of integers.
 * @param {string} fileName - The name of the file to read.
 * @returns {Array<[number, number]>} - An array of integer pairs from the file.
 * @throws {Error} - If the file cannot be read or parsed.
 */
const readInputFile = (fileName) => {
  try {
    const filePath = path.resolve(__dirname, fileName);
    const fileContent = fs.readFileSync(filePath, "utf8");
    return fileContent
      .trim()
      .split("\n")
      .map((line) => {
        const [a, b] = line.split(/\s+/).map(Number);
        if (isNaN(a) || isNaN(b)) {
          throw new Error(`Invalid data in file: "${line}"`);
        }
        return [a, b];
      });
  } catch (error) {
    console.error(`Error reading file "${fileName}":`, error.message);
    throw error;
  }
};

/**
 * Combines two arrays into pairs of corresponding elements.
 * @param {number[]} leftArray - The first array.
 * @param {number[]} rightArray - The second array.
 * @returns {Array<[number, number]>} - An array of paired elements.
 * @throws {Error} - If arrays are not of the same length.
 */
const zipArrays = (leftArray, rightArray) => {
  if (leftArray.length !== rightArray.length) {
    throw new Error("Arrays must be of the same length to pair.");
  }
  return leftArray.map((value, index) => [value, rightArray[index]]);
};

module.exports = {
  readInputFile,
  zipArrays,
};
