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
 * Complete the 'quartiles' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function quartiles(arr) {
  // Write your code here
  arr.sort((x, y) => x - y);
  // console.log(arr);
  const i = arr.length;
  const isOdd = (i % 2) === 1;
  const mid = (i / 2) | 0; 
  const mid2 = isOdd ? mid : mid - 1; 
  const medianX = (arr[mid] + arr[mid2]) / 2;
  // console.log((arr[mid] + arr[mid2]) / 2);
  
  let lowerHalf, upperHalf;
  lowerHalf = arr.slice(0, mid);
  // console.log(lowerHalf);
  upperHalf = arr.slice(mid2+1, i);
  // console.log(upperHalf);
  const medianL = median(lowerHalf);
  // console.log(medianL);
  const medianU = median(upperHalf);
  // console.log(medianU);
  return [medianL,medianX,medianU];
}

function median(arr) {
  // arr.sort((x, y) => x - y);
  const i = arr.length;
  const isOdd = (i % 2) === 1;
  const mid = (i / 2) | 0;
  const mid2 = isOdd ? mid : mid - 1;
  const median = (arr[mid] + arr[mid2]) / 2;
  // console.log((arr[mid] + arr[mid2]) / 2);
  return median;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const data = readLine().replace(/\s+$/g, '').split(' ').map(dataTemp => parseInt(dataTemp, 10));

  const res = quartiles(data);

  ws.write(res.join('\n') + '\n');

  ws.end();
}

/* 
note : 
로컬에서 코드 실행 방법
> OUTPUT_PATH=output.txt node Day01-Quartiles.js < Day01-Quartiles-input.txt
 */
