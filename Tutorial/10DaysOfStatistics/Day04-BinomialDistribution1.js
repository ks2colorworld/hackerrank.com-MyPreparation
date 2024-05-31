function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-binomial-distribution-1/problem?isFullScreen=true
  // console.log(input);
  const a = input.trim().split(' ').map(v=>{return parseFloat(v)});
  // console.log(a);
  const p = a[0] / (a[0] + a[1]);
  // console.log(p);
  // const b = calculateProbability(p);
  // console.log(Math.round(b*1000)/1000);
  // console.log(b.toFixed(3));

  const n = 6 // 자녀 수 
  const k = 3 // 최소 남아수
  // const p = 1.09 / (1 + 1.09) // 남아 출생비율

  const r = cal(k, n, p);
  console.log(r.toFixed(3));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});

/* 
❯ echo "1.09 1" | node Day04-BinomialDistribution1.js
 */

/* 
// 이항 계수를 계산하는 함수
function binomialCoefficient(n, k) {
  if (k === 0 || k === n) {
    return 1;
  } else {
    let numerator = 1;
    let denominator = 1;
    for (let i = 1; i <= k; i++) {
      numerator *= (n - i + 1);
      denominator *= i;
    }
    return numerator / denominator;
  }
}

// 이항 분포의 확률을 계산하는 함수
function binomialProbability(n, p, k) {
  const binomialCoeff = binomialCoefficient(n, k);
  const q = 1 - p;
  const prob = binomialCoeff * Math.pow(p, k) * Math.pow(q, n - k);
  return prob;
}

// 남아가 3명 이상 태어날 확률 계산 예시
function calculateProbability(p) {
  const n = 6; // 자녀의 수
  // const p = 0.5215; // 남아가 태어날 확률
  let probability = 0;
  for (let k = 3; k <= n; k++) {
    probability += binomialProbability(n, p, k);
  }
  return probability;
}
//  */

// /*  -----------------------------------

// 조합 함수 : n개의 항목에서 순서없이 r개가 나올 경우의 수 
function combination(n, r) {
  // r <= n
  const numerator = permutation(n, r);// factorial(n, n+1 - r);
  const denominator = factorial(r);
  return numerator / denominator;
}

// 순열 함수 : n개의 항목에서 순서대로 r개가 나올 경우의 수
function permutation(n, r) {
  // 0 < r <= n
  if (!(0 < r && r <= n)) {
    return null;
  }
  const numerator = factorial(n, n + 1 - r);
  return numerator;
}

function factorial(n, end = 1) {
  let result = 1;
  for (let i = n; end <= i; i--) {
    result *= i;
  }
  return result;
}

function F(n, r, p, q) {
  const c = combination(n, r) * Math.pow(p, r) * Math.pow(q, n - r);
  return c;
}

function cal(k, n, p) {
  const q = 1 - p;
  let prob = 0;
  for (let kk = k; kk <= n; kk++){
    prob += F(n, kk, p, q);
  }
  return prob;
}

// n = 6 // 자녀 수 
// k = 3 // 최소 남아수
// p = 1.09 / (1 + 1.09) // 남아 출생비율

// r = cal(k, n, p);
// console.log(r.toFixed(3));
//  */