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
  const n = readLine();
  const arr = readLine().trim().split(/[ \n]+/).map(v => { return parseInt(v.trim()) });
  // const arr = readLine().trim().split(new RegExp('[ \n]+')).map(v => { return parseInt(v.trim()) });
  // console.log(n, arr);
  const max = Math.max(...arr);
  // console.log(max);
  const min = Math.min(...arr);
  // console.log(min);
  console.log(max - min);
  /* 
  // 1<= arr[i] <= 100
  let max2 = 0;
  let min2 = 101;
  for (let i = 0; i < n; i++) {
    const e = arr[i];
    max2 = max2 < e ? e : max2;
    min2 = e < min2 ? e : min2;
  }
  console.log(max2 - min2);
   */
}