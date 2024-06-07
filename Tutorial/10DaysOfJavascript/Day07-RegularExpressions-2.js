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

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
   * followed by one or more letters.
   */
  // online : https://www.hackerrank.com/challenges/js10-regexp-2/problem?isFullScreen=true

  const re = new RegExp(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]*$/);
  /*
   * Do not remove the return statement
   */
  return re;
}


function main() {
  const re = regexVar();
  // const s = readLine();

  // console.log(!!s.match(re)); // if s.match(re) = null (Falsy Data), !s.match(re) = true. so, !!s.match(re) = false
  
  
  let s = readLine();
  while (s) {
    console.log(!!s.match(re));
    // console.log(s, !!s.match(re), !s.match(re), 'match:',s.match(re),'test:', re.test(s));
    s = readLine();
  }
}