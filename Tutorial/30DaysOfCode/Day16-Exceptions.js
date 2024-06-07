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
  const S = readLine();
  // online : https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem?isFullScreen=true
  const n = parseInt(S);
  console.log(!!n? n : 'Bad String');
  
  // let s = S;
  // for (let i = 0; i < inputString.length; i++){
  //   console.log(s);
  //   const n = parseInt(s);
  //   console.log(!!n? n : 'Bad String');
  //   s = readLine();
  // }
}
