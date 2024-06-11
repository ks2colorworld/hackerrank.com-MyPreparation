function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-multiple-linear-regression/problem?isFullScreen=true

  // console.log(input);
  const arr = input.trim().split('\n');
  // console.log(arr);
  const setNum = arr[0].trim().split(' ').map(Number);
  // console.log(setNum);

  // 입력 데이터
  // const m = 2, n = 7;
  const m = setNum[0], n = setNum[1];
  // const data = [
  //   [0.18, 0.89, 109.85],
  //   [1.0, 0.26, 155.72],
  //   [0.92, 0.11, 137.66],
  //   [0.07, 0.37, 76.17],
  //   [0.85, 0.16, 139.75],
  //   [0.99, 0.41, 162.6],
  //   [0.87, 0.47, 151.77]
  // ];
  // let dataString = [];
  let data = [];
  for (let i = 1; i <= n; i++){
    // dataString.push(arr[i]);
    data.push(arr[i].trim().split(' ').map(v => parseFloat(v)));
  }
  // const data = dataString.map(v => {
  //   const a = v.trim().split(' ').map(v2 => parseFloat(v2));
  //   // console.log(v);
  //   // console.log(a);
  //   // data.push(a);
  //   return a;
  // });
  // console.log(data);

  // const q = 4;
  const q = arr[n+1];
  // console.log(q);
  // const queryData = [
  //   [0.49, 0.18],
  //   [0.57, 0.83],
  //   [0.56, 0.64],
  //   [0.76, 0.18]
  // ];
  // let queryDataString = [];
  let queryData = [];
  for (let i = n+2; i < arr.length; i++) {
    // queryDataString.push(arr[i]);
    queryData.push(arr[i].trim().split(' ').map(v => parseFloat(v)));
  }
  // const queryData = queryDataString.map(v => {
  //   const a = v.trim().split(' ').map(v2 => parseFloat(v2));
  //   // console.log(v);
  //   // console.log(a);
  //   // data.push(a);
  //   return a;
  // });
  // console.log(queryDataString);
  // console.log(queryData);

  // Feature와 Target 분리
  const X = data.map(row => [1, ...row.slice(0, m)]);  // 상수항 추가
  const Y = data.map(row => [row[m]]);  // Y는 열벡터로 만듭니다

  // 회귀 계수 계산
  const XT = transposeMatrix(X);
  const XTX = multiplyMatrices(XT, X);
  const XTY = multiplyMatrices(XT, Y);

  const { L, U } = luDecomposition(XTX);
  const coefficients = luSolve(L, U, XTY.map(row => row[0]));

  // 새로운 Feature Set에 대해 예측
  const queryX = queryData.map(row => [1, ...row]);
  const predictions = queryX.map(row => row.reduce((sum, val, idx) => sum + val * coefficients[idx], 0));

  // 결과 출력
  predictions.forEach(prediction => {
    console.log(prediction);
    // console.log(prediction.toFixed(3));
  });

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

// 행렬 곱셈 함수
function multiplyMatrices(a, b) {
  let result = Array(a.length).fill().map(() => Array(b[0].length).fill(0));
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b[0].length; j++) {
      for (let k = 0; k < b.length; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return result;
}

// 행렬 전치 함수
function transposeMatrix(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

// LU 분해 함수
function luDecomposition(A) {
  const n = A.length;
  let L = Array(n).fill().map(() => Array(n).fill(0));
  let U = Array(n).fill().map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    L[i][i] = 1;
    for (let j = i; j < n; j++) {
      U[i][j] = A[i][j];
      for (let k = 0; k < i; k++) {
        U[i][j] -= L[i][k] * U[k][j];
      }
    }
    for (let j = i + 1; j < n; j++) {
      L[j][i] = A[j][i];
      for (let k = 0; k < i; k++) {
        L[j][i] -= L[j][k] * U[k][i];
      }
      L[j][i] /= U[i][i];
    }
  }
  return { L, U };
}

// LU 분해를 사용한 방정식 풀이 함수
function luSolve(L, U, b) {
  const n = L.length;
  let y = Array(n).fill(0);
  let x = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    y[i] = b[i];
    for (let j = 0; j < i; j++) {
      y[i] -= L[i][j] * y[j];
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    x[i] = y[i];
    for (let j = i + 1; j < n; j++) {
      x[i] -= U[i][j] * x[j];
    }
    x[i] /= U[i][i];
  }

  return x;
}

/* 
❯ node Day09-MultipleLinearRegression.js < Day09-MultipleLinearRegression-input.txt
 */