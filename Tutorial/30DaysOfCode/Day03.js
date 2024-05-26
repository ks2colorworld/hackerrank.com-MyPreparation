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
  const N = parseInt(readLine().trim(), 10);
  // online : https://www.hackerrank.com/challenges/30-conditional-statements/problem?isFullScreen=true
  // console.log(N);
  const isOdd = (N % 2) !== 0;
  const isEven = !isOdd;
  if (isOdd) {
    console.log('Weird');
  }
  if (isEven && (1 < N && N < 6)) {
    console.log('Not Weird');
  }
  if (isEven && (5 < N && N < 21)) {
    console.log('Weird');
  }
  if (isEven && (20 < N)) {
    console.log('Not Weird');
  }
  /* 
  while (true) {
    let n = parseInt(readLine().trim(), 10);
    if (!n) {
      break;
    }
    console.log(n);
    func(n);
  }
  // */
}

function func(N) {
  const isOdd = (N % 2) !== 0;
  const isEven = !isOdd;
  if (isOdd) {
    console.log('Weird');
    return;
  }
  if (isEven && (1 < N && N < 6) ) {
    console.log('Not Weird');
    return;
  }
  if (isEven && (5 < N && N < 21)) {
    console.log('Weird');
    return;
  }
  if (isEven && (20 < N)) {
    console.log('Not Weird');
    return;
  }
}

/* 
node Day03.js < Day03-input.txt 
 */