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

/*
 * Complete the 'stdDev' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function stdDev(arr) {
  // Print your answers to 1 decimal place within this function
  // online: https://www.hackerrank.com/challenges/s10-standard-deviation/problem?isFullScreen=true
  // 1. Mean of Data
  let mean = 0, sumArr = 0;
  const n = arr.length;
  for (const v of arr) {
    // console.log(v);
    sumArr += v;
  }
  // sumArr = arr.reduce((acc,value)=>acc+value,0)
  mean = sumArr / n;
  console.log(mean);

  // 2. Mean of Squared Differences(Data-1.)
  let meanOfSquaredDiff = 0, sumSquaredDiff = 0;
  for (const v  of arr) {
    const diff = v - mean;
    const squaredDiff = diff * diff;
    sumSquaredDiff += squaredDiff;
  }
  // sumSquaredDiff = arr.reduce((acc, v) => {
  //   const diff = v - mean;
  //   const squaredDiff = diff * diff;
  //   return acc + squaredDiff;
  // }, 0);
  // sumSquaredDiff = arr.reduce((acc, value) => acc + ((value - mean) * (value - mean)), 0);
  meanOfSquaredDiff = sumSquaredDiff / n;
  console.log(sumSquaredDiff);
  console.log(meanOfSquaredDiff);
  
  // 3. square root of 2.
  console.log(Math.sqrt(meanOfSquaredDiff).toFixed(1));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const vals = readLine().replace(/\s+$/g, '').split(' ').map(valsTemp => parseInt(valsTemp, 10));

  stdDev(vals);
}

/* 
.reduce()
Math.sqrt()
 */