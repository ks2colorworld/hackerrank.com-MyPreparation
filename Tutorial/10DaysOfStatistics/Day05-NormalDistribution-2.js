function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-normal-distribution-2/problem?isFullScreen=true
  // 평균과 표준 편차 설정
  const mean = 70;
  const stdDev = 10;
  const x80 = 80;
  const x60 = 60;

  // Z값 계산
  const z1 = (x80 - mean) / stdDev;
  const z2 = (x60 - mean) / stdDev;

  // 누적 분포 함수 값 계산 (점수 > 80)
  const probability1 = 1 - cumulativeDistributionFunction(z1);
  // 누적 분포 함수 값 계산 (점수 < 60)
  const probability3 = cumulativeDistributionFunction(z2);
  // 누적 분포 함수 값 계산 (점수 >= 60)
  const probability2 = 1 - probability3;
  
  console.log((probability1*100).toFixed(2));
  console.log((probability2*100).toFixed(2));
  console.log((probability3*100).toFixed(2));
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