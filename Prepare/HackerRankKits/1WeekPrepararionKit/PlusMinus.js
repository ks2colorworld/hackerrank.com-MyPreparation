'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  const totalNum = arr.length;
  let plusNum = 0;
  let minusNum = 0;
  let zeroNum = 0;
  for (const num of arr) {
    if (0 < num) {
      plusNum++;
      continue;
    }
    if (num < 0) {
      minusNum++;
      continue;
    }
    if (num === 0) {
      zeroNum++;
      continue;
    }
  }
  console.log(convert6Digits(plusNum / totalNum));
  console.log(convert6Digits(minusNum / totalNum));
  console.log(convert6Digits(zeroNum / totalNum));
}

function convert6Digits(num) {
  return num.toFixed(6);
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
