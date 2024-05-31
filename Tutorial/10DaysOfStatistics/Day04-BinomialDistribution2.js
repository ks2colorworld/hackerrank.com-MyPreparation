function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-binomial-distribution-2/problem?isFullScreen=true
  const a = input.trim().split(' ').map(v => parseFloat(v));
  const n = a[1]; // 10
  const p = a[0] / 100; // 12%
  const k = 2;
  const r = noMoreThan_k(k, n, p);
  console.log(r.toFixed(3));
  const r2 = atLeast_k(k, n, p);
  console.log(r2.toFixed(3));
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

 */

// /*  -----------------------------------

// 조합 함수 : n개의 항목에서 순서없이 r개가 나올 경우의 수 
function combination(n, r) {
  const numerator = permutation(n, r);// factorial(n, n+1 - r);
  const denominator = factorial(r);
  return numerator / denominator;
}

// 순열 함수 : n개의 항목에서 순서대로 r개가 나올 경우의 수
function permutation(n, r) {
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

// k 이상 - 최소 k
function atLeast_k(k, n, p) {
  const q = 1 - p;
  let prob = 0;
  for (let _k = k; _k <= n; _k++) {
    prob += F(n, _k, p, q);
  }
  // let prob = 1 - noMoreThan_k(k - 1, n, p);
  return prob;
}

// k 이하 - k 보다 많지 않게 
function noMoreThan_k(k, n, p) {
  const q = 1 - p;
  let prob = 0;
  for (let _k = 0; _k <= k; _k++) {
    prob += F(n, _k, p, q);
    // console.log(_k, prob);
  }
  return prob;
}

// n = 10 // 생산수량 
// k = 2 // 불량수량 기준
// p = 0.12 // 불량생산 비율

// r = noMoreThan_k(k, n, p); // 2개 이하 - 2보다 많지 않게
// console.log(r.toFixed(3));
// r2 = atLeast_k(k, n, p); // 2개 이상 - 최소 2개
// console.log(r2.toFixed(3));
// r3 = noMoreThan_k(k-1, n, p);
// console.log((1-r3).toFixed(3));
//  */