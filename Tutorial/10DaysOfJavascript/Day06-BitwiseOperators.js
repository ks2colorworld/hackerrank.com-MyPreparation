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

// online : https://www.hackerrank.com/challenges/js10-bitwise/problem?isFullScreen=true
function getMaxLessThanK(n,k) {
  // console.log(n, k);
  let arr = Array(n).fill().map((_, i) => { return i + 1 });
  // for (let i = 0; i < n; i++){
  //   a[i] = i + 1;
  // }
  // console.log(arr);
  let maxAandB = 0;
  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    for (let j = i+1; j < arr.length; j++) {
      const b = arr[j];
      // console.log('a:', a, 'b:', b, 'a&b:', a & b);
      const aANDb = a & b;
      // const bitA = '0'.repeat(4 - a.toString(2).length) + a.toString(2);
      // const bitB = '0'.repeat(4 - b.toString(2).length) + b.toString(2);
      // const bitAandB = '0'.repeat(4 - aANDb.toString(2).length) + aANDb.toString(2);
      // console.log(bitA, bitB, bitAandB);
      if (maxAandB < aANDb && aANDb < k) {
        maxAandB = aANDb;
        // console.log(maxAandB);
      }
    }
  }
  return maxAandB;
}

function main() {
  const q = +(readLine());

  for (let i = 0; i < q; i++) {
    const [n, k] = readLine().split(' ').map(Number);

    console.log(getMaxLessThanK(n, k));
  }
}