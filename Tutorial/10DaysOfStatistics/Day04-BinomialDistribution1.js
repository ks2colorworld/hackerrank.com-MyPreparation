function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-binomial-distribution-1/problem?isFullScreen=true
  // console.log(input);
  const a = input.trim().split(' ').map(v=>{return parseFloat(v)});
  // console.log(a);
  const p = a[0] / (a[0] + a[1]);
  // console.log(p);
  const b = calculateProbability(p);
  // console.log(Math.round(b*1000)/1000);
  console.log(b.toFixed(3));
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
