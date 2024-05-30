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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  // Complete the function
  // online : https://www.hackerrank.com/challenges/js10-arrays/problem?isFullScreen=true
  // console.log(nums);
  // Reorder by size.
  nums.sort((x, y) => { return x - y });
  // console.log(nums);
  
  // Remove duplicate numbers.
  const unq = new Set(nums);
  // console.log(unq);
  const nums2 = [...unq]; //Array.from(unq);

  // const nums2 = nums.filter((value, index, self) => {
  //   console.log(value, index, self.indexOf(value) ,self);
  //   return self.indexOf(value) === index;
  // });
  // console.log(nums2);

  return nums2[nums2.length-2];
}


function main() {
  const n = +(readLine());
  const nums = readLine().split(' ').map(Number);

  console.log(getSecondLargest(nums));
}

/* 
> node Day03-Arrays.js < Day03-Arrays-input.txt
 */