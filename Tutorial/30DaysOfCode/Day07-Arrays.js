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
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  // online : https://www.hackerrank.com/challenges/30-arrays/problem?isFullScreen=true
  // console.log(arr);
  arr.reverse();
  // console.log(arr);
  let outputText = '';
  arr.map(v => { outputText += v + ' '; });
  console.log(outputText.replace(/\s+$/g,'')); 
}

/* 
node Day07-Arrays.js < Day07-Arrays-input.txt
 */