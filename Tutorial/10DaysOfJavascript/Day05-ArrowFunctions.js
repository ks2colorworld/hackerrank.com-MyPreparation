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
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
// online : https://www.hackerrank.com/challenges/js10-arrows/problem?isFullScreen=true
function modifyArray(nums) {
  // console.log(nums);
  const f = (a, b) => { return a * b };
  const nums2 = nums.map(v => {
    const a = v % 2 === 0 ? 2 : 3;
    return f(a, v)
  });
  return nums2;
}


function main() {
  const n = +(readLine());
  const a = readLine().split(' ').map(Number);

  console.log(modifyArray(a).toString().split(',').join(' '));
}