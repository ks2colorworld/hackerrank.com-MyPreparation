'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = ''; //: string = '';
let inputLines = []; //: string[] = [];
let currentLine = 0; //: number = 0;
process.stdin.on('data', function (inputStdin){ //: string): void {
  inputString += inputStdin;
});

process.stdin.on('end', function (){ // : void {
  inputLines = inputString.split('\n');
  inputString = '';
  main();
});

function readLine(){ // : string {
  return inputLines[currentLine++];
}

function main() {
  // Enter your code here
  // online : https://www.hackerrank.com/challenges/30-scope/problem?isFullScreen=true
}