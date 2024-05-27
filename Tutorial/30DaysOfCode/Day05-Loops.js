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
  // online : https://www.hackerrank.com/challenges/30-loops/problem?isFullScreen=true
  // console.log(n);
  for (let i = 1; i < 11; i++) {
    console.log(`${n} x ${i} = ${n*i}`);
  }
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const arr = Array(10).fill().map((_, idx) => { return idx + 1 }) 
  // console.log(arr);
  // arr.map((i) => {
  //   console.log(`${n} x ${i} = ${n * i}`);
  // })
  // console.log(arr2);
}

/* 
> node Day05-Loops.js < Day05-Loops-input.txt
 */