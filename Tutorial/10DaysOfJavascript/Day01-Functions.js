'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readLine() {
  return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
// online : https://www.hackerrank.com/challenges/js10-function?isFullScreen=true

function main() {
  const n = +(readLine());

  console.log(factorial(n));
}