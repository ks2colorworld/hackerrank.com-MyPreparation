// online : https://www.hackerrank.com/challenges/s10-mcq-3/problem

/* 
There are 3 urns labeled X, Y, and Z.


Urn X contains 4 red balls and 3 black balls.
Urn Y contains 5 red balls and 4 black balls.
Urn Z contains 4 red balls and 4 black balls.

One ball is drawn from each of the 3 urns. What is the probability that, of the 3 balls drawn, 2 are red and 1 is black?

- 10/63
- 2/7
- 17/42
- 31/126
 */


const pRedX = [4, 7];
const pRedY = [5, 9];
const pRedZ = [4, 8];

const pBlackX = [3, 7];
const pBlackY = [4, 9];
const pBlackZ = [4, 8];

// const i = addFractions(pBlackX, pBlackZ);
// const i = multiplyFractions(pBlackX, pBlackZ);
// console.log(i);

// pBlackX * pRedY * pRedZ
const a = multiplyFractions(multiplyFractions(pBlackX, pRedY), pRedZ);
console.log('a:',a);
// pRedX * pBlackY * pRedZ
const b = multiplyFractions(multiplyFractions(pRedX, pBlackY), pRedZ);
console.log('b:',b);
// pRedX * pRedY * pBlackZ
const c = multiplyFractions(multiplyFractions(pRedX, pRedY), pBlackZ);
console.log('c:',c);
const d = addFractions(addFractions(a, b), c);
console.log('d:',d);


// 최대공약수 - 두 수의 공통 약수 중에 가장 큰수
// 분수의 분자와 분모를 가장 작은 수로 단순화하기 위해, 분자와 분모를 최대공약수로 나눈다.
function gcd(x,y) {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
}

// 최소공배수 - 두 수의 공통 배수 중에 가장 작은 수
// 서로 다른 두개의 분수를 더하기 위해 두 분수의 분모를 최소공배수로 만들고, 그 분자에는(최소공배수 / 분모)를 곱한다.  
function lcm(x,y) {
  return (x * y) / gcd(x, y);
}

// 두 x,y 분수[분자,분모] 더하기
function addFractions(x, y) {
  // console.log(x,y);
  // 두 분모의 최소공배수를 구한다.
  const lcmValue = lcm(x[1], y[1]);
  // console.log(lcmValue);
  // 두 분자에 각 분모를 최소공배수로 만든 수를 곱한다.
  const xNumerator = x[0] * (lcmValue / x[1]);
  const yNumerator = y[0] * (lcmValue / y[1]);
  // console.log(xNumerator, yNumerator);
  // 곱하여진 두 분자를 더한다.
  const addedNumerator = xNumerator + yNumerator;
  // 기약분수 계산을 위한 분자와 분모의 최대공약수를 구한다.
  const gcdValue = gcd(addedNumerator, lcmValue);
  return [addedNumerator / gcdValue, lcmValue / gcdValue];
}

// 두 x,y 분수[분자,분모] 곱하기
function multiplyFractions(x,y) {
  // console.log(x,y);
  const numerator = x[0] * y[0];
  const denominator = x[1] * y[1];
  // console.log(numerator, denominator);
  // 분자와 분모의 최대공약수를 구한다.
  const gcdValue = gcd(numerator, denominator);
  // console.log(gcdValue);
  // 분자와 분모를 최대공약수로 나눈다. 기약분수
  return [numerator / gcdValue, denominator / gcdValue];
}
