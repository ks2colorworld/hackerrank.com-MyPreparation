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
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  // online : https://www.hackerrank.com/challenges/js10-regexp-1/problem?isFullScreen=true

  // const re = new RegExp(/^[aeiou].*[aeiou]$/);
  const re = new RegExp(/^(a|e|i|o|u).*\1$/);
  
  /* 설명
    `^`는 문자열의 시작을 의미합니다.
    `(a|e|i|o|u)`는 모음(a, e, i, o, u)을 캡처합니다. 캡처된 모음은 나중에 `\1`로 참조할 수 있습니다.
    `.*`는 임의의 문자 0개 이상을 의미합니다.
    `\1`는 첫 번째 캡처 그룹(즉, 시작 모음)과 동일한 문자를 의미합니다.
    `$`는 문자열의 끝을 의미합니다.
   */

  /*
   * Do not remove the return statement
   */
  return re;
}


function main() {
  const re = regexVar();
  // const s = readLine();

  // console.log(re.test(s));

  let s = readLine();
  while (s) {
    console.log(s, re.test(s));
    s = readLine();
  }
}

/* 
❯ node Day07-RegularExpressions-1.js < Day07-RegularExpressions-1-input.txt
 */