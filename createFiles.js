const { text } = require("express");
const fs = require("fs");
const path = require("path");

let textOut = "";
for (let i = 1; i <= 3; i++) {
  for (let j = 0; j < Math.floor(Math.random() * 11) + 2; j++) {
    // Generating a random number of lines from 2 to 10
    textOut = textOut + `This is Line ${j + 1} from file ${i} \n`;
  }
  fs.writeFileSync(`${__dirname}/f${i}.txt`, textOut);
  textOut = "";
}
