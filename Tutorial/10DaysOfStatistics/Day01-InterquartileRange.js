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
 * Complete the 'interQuartile' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY values
 *  2. INTEGER_ARRAY freqs
 */

function interQuartile(values, freqs) {
  // Print your answer to 1 decimal place within this function
  // online : https://www.hackerrank.com/challenges/s10-interquartile-range/problem?isFullScreen=true
  let S = [];
  let i = 0;
  for (const v of values) {
    // console.log(v);
    let freq = freqs[i];
    // console.log(freq);
    for (let j = 0; j < freq; j++) {
      S.push(v);
    }
    i++;
  }
  // console.log(values);
  // console.log(freqs);
  // console.log(S);
  S.sort((x, y) => x - y);
  // console.log(S);
  const lengthS = S.length;
  const isOdd = (lengthS % 2) != 0;
  const mid2 = (lengthS / 2) | 0;
  const mid1 = isOdd ? mid2 : mid2 - 1;
  const LowerHalf = S.slice(0, mid2);
  const UpperHalf = S.slice(mid1+1, lengthS);
  console.log(LowerHalf);
  console.log(UpperHalf);
  const medianL = median(LowerHalf);
  const medianU = median(UpperHalf);
  console.log(medianL, medianU);
  console.log((medianU-medianL).toFixed(1));
}

function median(S) {
  // S.sort((x, y) => x - y);
  const lengthS = S.length;
  const isOdd = (lengthS % 2) != 0;
  const mid2 = (lengthS / 2) | 0;
  const mid1 = isOdd ? mid2 : mid2 - 1;
  return (S[mid1] + S[mid2])/2
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const val = readLine().replace(/\s+$/g, '').split(' ').map(valTemp => parseInt(valTemp, 10));

  const freq = readLine().replace(/\s+$/g, '').split(' ').map(freqTemp => parseInt(freqTemp, 10));

  interQuartile(val, freq);
}

/* 
// GPT 
function median(arr) {
    if (arr.length === 0) return undefined; // 빈 배열 처리

    // 배열을 정렬합니다.
    arr.sort((a, b) => a - b);

    const mid = Math.floor(arr.length / 2); // (arr.length / 2) | 0;

    // 배열 길이가 홀수인 경우
    if (arr.length % 2 === 1) {
        return arr[mid];
    } else {
        // 배열 길이가 짝수인 경우
        return (arr[mid - 1] + arr[mid]) / 2;
    }
}

  Math.floor() : 내림
  Math.ceil() : 올림
  Math.round() : 반올림
 */