const { readInputFile, zipArrays } = require("./utils.js");

try {
  const input = readInputFile("input.txt");

  const left = input.map(([a]) => a);
  const right = input.map(([, b]) => b);

  const sortedLeft = left.sort((a, b) => a - b);
  const sortedRight = right.sort((a, b) => a - b);

  const sortedPair = zipArrays(sortedLeft, sortedRight);

  const partOneAns = sortedPair
    .map(([a, b]) => Math.abs(a - b))
    .reduce((acc, diff) => acc + diff, 0);

  const partTwoAns = null;

  console.log("Historian Hysteria Puzzle Answers");
  console.log("----------------------------------");
  console.log(`Part One Answer : ${partOneAns}`);
  console.log(`Part Two Answer : ${partTwoAns}`);
} catch (error) {
  console.error("An error occurred:", error.message);
}
