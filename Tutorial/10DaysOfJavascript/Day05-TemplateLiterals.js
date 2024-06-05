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
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
//  online : https://www.hackerrank.com/challenges/js10-template-literals/problem?isFullScreen=true
function sides(literals, ...expressions) {
  console.log(literals);
  console.log(expressions);
  const A = expressions[0];
  const P = expressions[1];
  console.log('A:',A,'P:',P);

  const sqrtPart = Math.sqrt(P * P - 16 * A);

  const s1 = (P + sqrtPart) / 4;
  const s2 = (P - sqrtPart) / 4;
  console.log(s1, s2);
  return [s1, s2].sort();
}


function main() {
  let s1 = +(readLine());
  let s2 = +(readLine());
  console.log(s1,s2);
  
  [s1, s2] = [s1, s2].sort();
  console.log(s1,s2);

  const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

  console.log((s1 === x) ? s1 : -1);
  console.log((s2 === y) ? s2 : -1);
}

/* 
> echo "10\n14" | node Day05-TemplateLiterals.js
 */