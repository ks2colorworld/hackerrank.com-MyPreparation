function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-normal-distribution-1/problem?isFullScreen=true
  // console.log(input);
  const i = input.trim().split('\n');//.map(v => { return parseFloat(v.trim()) });
  // console.log(i);

  // 주어진 값
  const i0 = i[0].trim().split(' ');
  const mean = parseInt(i0[0]); // 20;
  const stdDev = parseInt(i0[1]); // 2;
  const x = parseFloat(i[1].trim()); // 19.5;
  // console.log(mean, stdDev, x);
  
  // Z값 계산
  const z = (x - mean) / stdDev;
  // console.log(z);

  // 누적 분포 함수 값 계산
  const probability = cumulativeDistributionFunction(z);
  console.log(probability.toFixed(3));

  const i2 = i[2].trim().split(' ').map(v => { return parseFloat(v) });
  // console.log(i2);
  const x1 = i2[0];
  const x2 = i2[1];

  // Z값 계산
  const z1 = (x1 - mean) / stdDev;
  const z2 = (x2 - mean) / stdDev;
  // console.log(z1,z2);

  // 누적 분포 함수 값 계산
  const probability1 = cumulativeDistributionFunction(z1);
  const probability2 = cumulativeDistributionFunction(z2);
  // console.log(probability1, probability2);

  // 두 값의 차이를 계산하여 구간 확률을 구함
  const probabilityBetween = probability2 - probability1;
  console.log(probabilityBetween.toFixed(3));
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
> echo "20 2\n19.5\n20 22" | node Day05-NormalDistribution-1.js
 */

// 정규 분포의 누적 분포 함수 (CDF) 계산을 위한 함수
function cumulativeDistributionFunction(z) {
  return (1.0 + erf(z / Math.sqrt(2))) / 2.0;
}

// 오차 함수 (Error Function) 계산을 위한 함수
function erf(x) {
  // Abramowitz and Stegun 공식 7.1.26 사용
  const sign = (x >= 0) ? 1 : -1;
  x = Math.abs(x);

  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

  return sign * y;
}

/* python
import scipy.stats as stats

# 주어진 값
mean = 20
std_dev = 2
x = 19.5

# Z값 계산
z = (x - mean) / std_dev

# 누적 분포 함수 값 계산
probability = stats.norm.cdf(z)

print(f"자동차가 19.5시간 이내에 조립될 확률: {probability:.4f}")

# 구간의 값
x1 = 20
x2 = 22

# Z값 계산
z1 = (x1 - mean) / std_dev
z2 = (x2 - mean) / std_dev

# 누적 분포 함수 값 계산
probability1 = stats.norm.cdf(z1)
probability2 = stats.norm.cdf(z2)

# 두 값의 차이를 계산하여 구간 확률을 구함
probability_between = probability2 - probability1

print(f"자동차가 20시간에서 22시간 사이에 조립될 확률: {probability_between:.4f}")

 */