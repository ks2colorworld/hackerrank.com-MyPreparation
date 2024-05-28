// online : https://www.hackerrank.com/challenges/s10-mcq-2/problem?isFullScreen=true

/* 
In a single toss of 2 fair (evenly-weighted) six-sided dice, 
find the probability that the values rolled by each die will be different and the two dice have a sum of 6.

- 1/9
- 1/6
- 2/3
- 5/6
*/

// const dice1 = [1, 2, 3, 4, 5, 6];
const dice1 = Array(6).fill().map((_, idx) => { return idx + 1 });
const dice2 = Array.from(dice1);

console.log(dice1, dice2);

let allCase = 0;
let thisCase = 0;
for (const num1 of dice1) {
  for (const num2 of dice2) {
    allCase += 1;
    if (num1+num2===6 && (num1 != num2)) {
      thisCase += 1;
    }
  }
}
console.log(thisCase, allCase);
const gcdValue = gcd(thisCase, allCase);
const u = thisCase / gcdValue;
const l = allCase / gcdValue;
console.log(u + '/' + l);

function gcd(x,y) {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
}