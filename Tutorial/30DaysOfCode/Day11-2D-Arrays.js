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

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  }
  // online : https://www.hackerrank.com/challenges/30-2d-arrays/problem?isFullScreen=true
  // console.log(arr);
  let sumMax = Number.NEGATIVE_INFINITY; //0;
  // console.log(sumMax);
  for (let i = 0; i < arr.length-2; i++){
    let sum = [];
    // console.log(arr[i]);
    // console.log(arr[i+1]);
    // console.log(arr[i+2]);
    for (let j = 0; j < arr[i].length - 2; j++) {
      // console.log(arr[i][j], arr[i][j + 1], arr[i][j + 2]);
      sum[j] = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
    }
    for (let j = 1; j < arr[i+1].length - 1; j++) {
      // console.log(' ' + arr[i + 1][j] + ' ');
      sum[j - 1] += arr[i + 1][j];
    }
    for (let j = 0; j < arr[i+2].length - 2; j++) {
      // console.log(arr[i+2][j], arr[i+2][j + 1], arr[i+2][j + 2]);
      sum[j] += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
    }
    console.log(sum);
    // sum.forEach(v => {
    //   sumMax = sumMax < v ? v : sumMax;
    // })
    sumMax = Math.max(sumMax, Math.max(...sum));
  }
  console.log(sumMax);
}

/* 
let sumMax = 0;
for (let i = 0; i < arr.length; i++) {
  let sum = [];
  // do something
  sum.forEach(v => {
    sumMax = sumMax < v ? v : sumMax;
  })
}
 */