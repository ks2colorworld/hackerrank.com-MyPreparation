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
online : https://www.hackerrank.com/challenges/s10-weighted-mean/problem?isFullScreen=true
 * Complete the 'weightedMean' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY X
 *  2. INTEGER_ARRAY W
 */

function weightedMean(X, W) {
  // Write your code here
  let vals = 0, weights = 0;
  for (const i of W) {
    weights += i;
  }
  for (let i = 0; i < X.length; i++) {
    const val = X[i];
    const weight = W[i];
    vals += (val * weight);
  }
  console.log((vals/weights).toFixed(1));
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const vals = readLine().replace(/\s+$/g, '').split(' ').map(valsTemp => parseInt(valsTemp, 10));

  const weights = readLine().replace(/\s+$/g, '').split(' ').map(weightsTemp => parseInt(weightsTemp, 10));

  weightedMean(vals, weights);
}

/* 
note : 
테스트 실행 명령어 : node Day00-WeightedMean.js < Day00-input-WeightedMean.txt  
.toFixed(1) : 소숫점으로 표현되는 데이터 형식의 소숫점 표시 갯수(1개)를 제한하는 문법 

for of : 데이터 구조내 반복문 동작시 value를 다룰 때
for in : 데이터 구조에서의 key를 다룰 때
 */