function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-least-square-regression-line/problem?isFullScreen=true
  let x = [];
  let y = [];
  const arr = input.trim().split('\n').map(v => {
    a = v.trim().split(' ').map(Number);
    x.push(a[0]);
    y.push(a[1]);
    return [a[0], a[1]];
  });
  console.log(arr);
  console.log(x,y);

  // 주어진 데이터
  // const x = [95, 85, 80, 70, 60];
  // const y = [85, 95, 70, 65, 70];

  // 데이터의 개수
  const n = x.length;

  // 합계 계산
  const sum = arr => arr.reduce((a, b) => a + b, 0);
  const sum_x = sum(x);
  const sum_y = sum(y);
  const sum_xy = sum(x.map((xi, i) => xi * y[i]));
  const sum_x_squared = sum(x.map(xi => xi * xi));

  // 기울기 b1 계산
  const b1 = (n * sum_xy - sum_x * sum_y) / (n * sum_x_squared - sum_x * sum_x);

  // 절편 b0 계산
  const b0 = (sum_y - b1 * sum_x) / n;

  // 회귀 방정식 출력
  console.log(`회귀 방정식: y = ${b0.toFixed(4)} + ${b1.toFixed(4)}x`);

  // x = 80일 때 y 값 예측
  const x_new = 80;
  const y_pred = b0 + b1 * x_new;
  // console.log(y_pred.toFixed(3));
  console.log(`x = ${x_new}일 때 예측 y 값: ${y_pred.toFixed(3)}`);
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
❯ node Day08-LeastSquareRegressionLine.js < Day08-LeastSquareRegressionLine-input.txt
 */