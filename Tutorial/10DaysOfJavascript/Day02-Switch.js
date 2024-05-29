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

function getLetter(s) {
  let letter;
  // Write your code here
  // online : https://www.hackerrank.com/challenges/js10-switch/problem?isFullScreen=true
  const f = s[0]; // s.charAt(0);
  switch (f) {
    case 'a' || 'e' || 'i' || 'o' || 'u':
      letter = 'A'
      break;
    case 'b' || 'c' || 'd' || 'f' || 'g':
      letter = 'B'
      break;
    case 'h' || 'j' || 'k' || 'l' || 'm':
      letter = 'C'
      break;
  
    default: // n,p,q,r,s,t,v,w,x,y,z
      letter = 'D'
      break;
  }
  return letter;
}


function main() {
  const s = readLine();

  console.log(getLetter(s));
}

/* 
> node Day02-Switch.js < Day02-Switch-input.txt 
 */