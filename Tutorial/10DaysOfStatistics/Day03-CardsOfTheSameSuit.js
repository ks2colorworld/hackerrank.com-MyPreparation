// online : https://www.hackerrank.com/challenges/s10-mcq-5/problem?isFullScreen=true

/* 
You draw 2 cards from a standard 52-card deck without replacing them. 
What is the probability that both cards are of the same suit?

- 1 / 156
- 1 / 39
- 12 / 39
- 12 / 51
 */

/* 
1. 52장의 카드에서 2장을 순서와 상관없이 뽑는 경우의 수 : 조합(combination) 
- 52장 중 하나를 뽑는 경우의 수 : 52
- 남은 51장 중 하나를 뽑는 경우의 수 : 51
- 순서가 상관없으므로 나누기 2
- C(n,r) = n!/r!*(n-r)! = C(52,2) = 52!/2!*(52-2)! = 52*51/2*1 = 1326

2. 뽑은 2장의 카드가 동일한 문양일 경우의 수 : 조합(combination)
- 동일한 총 카드 13장 중에 (순서없이) 2장을 뽑는 경우의 수 : C(13,2) = 13!/2!*(13-2)! = 13*12/2*1 = 78
- 각 4종류 모양(13장*4)에서 같은 모양 2장을 뽑는 경우의 수 : 78*4 = 312

1에서 2의 확률 : 312/1326 = 12/51 = 4/17
 */

const a = combination(52, 2);
console.log(a);
const b = combination(13, 2);
const b2 = b * 4;
console.log(b2);
const gcdValue = gcd(b2,a);
console.log(gcdValue);
console.log(b2 / gcdValue, a / gcdValue);

const c = 12, d = 51;
const e = gcd(c, d);
console.log(c / e, d / e);

// 조합 함수 : n개의 항목에서 순서없이 r개가 나올 경우의 수 
function combination(n, r) {
  // r <= n
  const numerator = permutation(n, r);// factorial(n, n+1 - r);
  const denominator = factorial(r);
  return numerator / denominator;
}

// 순열 함수 : n개의 항목에서 순서대로 r개가 나올 경우의 수
function permutation(n,r) {
  // 0 < r <= n
  if (!(0 < r && r <= n)) {
    return null;
  }
  const numerator = factorial(n, n+1 - r);
  return numerator ;
}

// const a = combination(4, 2);
// const a = permutation(4, 2);
// const a = factorial(4);
// console.log(a);

function gcd(x,y) {
  if (y===0) {
    return x
  }
  return gcd(y, x % y);
}

function lcm(x,y) {
  return (x * y) / gcd(x, y);
}

function addFractions(x, y) {
  const lcmValue = lcm(x[1], y[1]);
  const xNumerator = x[0] * (lcmValue / x[1]);
  const yNumerator = y[0] * (lcmValue / y[1]);
  const addedNumerator = xNumerator + yNumerator;
  const gcdValue = gcd(addedNumerator, lcmValue);
  return [addedNumerator / gcdValue, lcmValue / gcdValue];
}

function multiplyFractions(x, y) {
  const numerator = x[0] * y[0];
  const denominator = x[1] * y[1];
  const gcdValue = gcd(numerator, denominator);
  return [numerator / gcdValue, denominator / gcdValue];
}

function factorial(n, end = 1) {
  let result = 1;
  for (let i = n; end <= i; i--) {
    result *= i;
  }
  return result;
}
// const a = factorial(52,51)
// const a = factorial(4);
// console.log(a);
// const z = factorial(0);
// console.log(z);