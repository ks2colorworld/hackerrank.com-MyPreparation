// online : https://www.hackerrank.com/challenges/s10-mcq-1/problem

/* 
In a single toss of 2 fair (evenly-weighted) six-sided dice, find the probability that their sum will be at most 9.

- 2/3
- 5/6
- 1/4
- 1/6
*/

const dice1 = Array(6).fill().map((_, idx) => { return idx + 1 });
const dice2 = [...dice1];  // Array.from(dice1); 
// console.log(dice1, dice2);

let allOutcomes = 0;
let lessThan10 = 0;
for (const num1 of dice1) {
  for (const num2 of dice2) {
    allOutcomes += 1;
    if (num1+num2 < 10) { // at most 9
      lessThan10 += 1;
    }
  }
}
const gcdValue = gcd(allOutcomes, lessThan10); // gcd(lessThan10, allOutcomes);
const numerator = lessThan10 / gcdValue;
const denominator = allOutcomes / gcdValue;
console.log(`${numerator}/${denominator} = ${numerator / denominator}`);
const probLessThan10 = lessThan10 / allOutcomes;
// console.log(lessThan10,allOutcomes);
// console.log(probLessThan10);

function gcd(x,y) {
  if (y === 0) {
    return x;
  }
  return gcd(y,x%y)
}

/* 
30/36 대신 5/6으로 표현하려면 분수를 기약분수(즉, 더 이상 약분할 수 없는 형태)로 만들어야 합니다. 
이를 위해서는 최대공약수(GCD, Greatest Common Divisor)를 사용하여 분자와 분모를 나누면 됩니다.
 */
