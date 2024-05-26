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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  // online : https://www.hackerrank.com/challenges/js10-loops/problem?isFullScreen=true
  let consonant = '';
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (const t of s) {
    if (vowels.includes(t)) {
      console.log(t)
      continue
    }
    consonant = consonant + t;
    // console.log(t)
  }
  for (const t of consonant) {
    console.log(t);
  }
}


function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}