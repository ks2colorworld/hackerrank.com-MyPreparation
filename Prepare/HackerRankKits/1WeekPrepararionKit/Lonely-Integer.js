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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  // Write your code here
  // online : https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?isFullScreen=true
  const iCount = {};
  for (let i = 0; i < a.length; i++){
    const num = a[i];
    if (!iCount[num.toString()]) {
      iCount[num.toString()] = 1;
      continue;
    }
    iCount[num.toString()] += 1;
  }
  // console.log(iCount);
  let result = 0;
  for (const key in iCount) {
    if (iCount[key] == 1) {
      // console.log(key);
      result = key;
      break;
    }
  }
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

  const result = lonelyinteger(a);

  ws.write(result + '\n');

  ws.end();
}

/* 
OUTPUT_PATH=Lonely-Integer-output.txt node Lonely-Integer.js < Lonely-Integer-input.txt
 */