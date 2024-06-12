'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
  // Write your code here
  // online : https://www.hackerrank.com/challenges/one-week-preparation-kit-countingsort1/problem?isFullScreen=true
  const countArr = new Array(100).fill(0);
  for (const num of arr) {
    countArr[num]++;
  }
  return countArr;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const result = countingSort(arr);

  ws.write(result.join(' ') + '\n');

  ws.end();
}

/* 
OUTPUT_PATH=Counting-Sort-1-output.txt node Counting-Sort-1.js < Counting-Sort-1-input.txt
 */