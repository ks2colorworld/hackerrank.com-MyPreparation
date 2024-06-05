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

}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const val = readLine().replace(/\s+$/g, '').split(' ').map(valTemp => parseInt(valTemp, 10));

  const freq = readLine().replace(/\s+$/g, '').split(' ').map(freqTemp => parseInt(freqTemp, 10));

  interQuartile(val, freq);
}
