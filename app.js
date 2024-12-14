const { type } = require("express/lib/response");
const fs = require("fs");
const path = require("path");

const namesArr = ["1", "2", "3"]; // array of file names

let textOut = ""; // string that we will add to for the required output text

let currentLine = ""; // string that will represent each line at its turn

let maxLines = findMostLinesText(); // max number of lines (out of the 3 files)

let iterations = 1;

let indexIncrem = 0;

for (let line = 0; line < maxLines; line++) {
  for (i = 0; i < namesArr.length; i++) {
    for (let j = 0 + indexIncrem; j < iterations + indexIncrem; j++) {
      const textIn = fs.readFileSync(
        path.join(__dirname, `f${namesArr[i]}.txt`),
        "utf-8" // reading each text file in a loop
      );

      const lines = textIn.split("\n"); // array of all the lines of the txt files

      if (line < lines.length) currentLine = lines[line];
      // if the current line exists in this text file
      else currentLine = undefined;

      if (typeof currentLine == "string" && currentLine.trim().length > 0)
        textOut += currentLine + "\n";
    }
  }
  iterations++;
  indexIncrem++;
}

fs.writeFileSync(`${__dirname}/res.txt`, textOut); // outputing the content to the result file

function findMostLinesText() {
  // calculatuing the maximum amount of lines
  let count = 0;

  for (i = 0; i < namesArr.length; i++) {
    const res = fs.readFileSync(
      path.join(__dirname, `f${namesArr[i]}.txt`),
      "utf-8" // reading each text file in a loop
    );

    let arr = res.split("\n");

    if (arr.length > count) count = arr.length;
  }

  return count - 1; // -1 because the theres an empty line at the end of each arr of lines
}
