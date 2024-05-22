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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  let minSum = 0;
  let maxSum = 0;
  for (let i = 0; i < 5; i++) {
    let sum = 0;
    for (const j in arr) { //(let j = 0; j < arr.length; j++){
      if (j == i) {
        continue;
      }
      sum += arr[j];
    }
    if (minSum === 0 || sum < minSum) {
      minSum = sum;
    }
    if (maxSum === 0 || maxSum < sum) {
      maxSum = sum;
    }
  }
  console.log(`${minSum} ${maxSum}`);
}

function main() {

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
