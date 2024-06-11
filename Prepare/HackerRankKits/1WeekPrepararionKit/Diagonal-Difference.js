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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  // online : https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?isFullScreen=true
  // console.log(arr);
  const n = arr.length;
  const l = n - 1;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < n; i++){
    const iArr = arr[i];
    // console.log(iArr[i], iArr[l - i]);
    sum1 += iArr[i];
    sum2 += iArr[l - i];
  }
  // console.log(sum1, sum2);
  const r = Math.abs(sum1 - sum2);
  // const r = sum1 > sum2 ? sum1 - sum2 : sum2 - sum1;
  // console.log(r);
  return r;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + '\n');

  ws.end();
}

/* 
OUTPUT_PATH=Diagonal-Difference-output.txt node Diagonal-Difference.js < Diagonal-Difference-input.txt
 */