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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  // online : https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem?isFullScreen=true
  // console.log(s);
  try {
    const a = s.split('');
    // console.log(a);
    let result = '';
    for (let i = a.length - 1; 0 <= i; i--){
      result += a[i];
    }
    console.log(result);
  } catch (error) {
    console.log(error.message);
    console.log(s);
  }

}


function main() {
  const s = eval(readLine());
  
  reverseString(s);
  
  /* for test
  const n = eval(readLine());

  reverseString(n); // error
  //  */
}