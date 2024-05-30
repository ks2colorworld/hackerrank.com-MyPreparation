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
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  // online : https://www.hackerrank.com/challenges/js10-objects/problem?isFullScreen=true
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  // this.area = a * b;
  Object.defineProperty(this, 'area', {
    // get: function () {
    //   return this.length * this.width;
    // }
    get: ()=> this.length*this.width
  })
}


function main() {
  const a = +(readLine());
  const b = +(readLine());

  const rec = new Rectangle(a, b);

  console.log(rec.length);
  console.log(rec.width);
  console.log(rec.perimeter);
  console.log(rec.area);
}