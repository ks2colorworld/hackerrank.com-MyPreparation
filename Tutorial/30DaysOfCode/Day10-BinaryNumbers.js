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



function main() {
  let n = parseInt(readLine().trim(), 10);
  // online : https://www.hackerrank.com/challenges/30-binary-numbers/problem?isFullScreen=true
  // console.log(n);
  let s = [];
  while (n>0) {
    const remainder = n % 2;
    n = (n / 2) | 0;
    s.push(remainder);
  }
  // console.log(s.reverse());
  let max1Count = 0;
  let count1 = 0;
  for (const v of s) {
    // console.log(v);
    if (v === 1) {
      count1 += 1;
    } else {
      count1 = 0;
    }
    if (max1Count < count1) {
      max1Count = count1;
    }

  }
  console.log(max1Count);
}

/* 
❯ echo "130" | node Day10-BinaryNumbers.js
 */
