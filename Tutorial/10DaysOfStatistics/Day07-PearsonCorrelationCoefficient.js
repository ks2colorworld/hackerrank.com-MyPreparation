function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-pearson-correlation-coefficient/problem?isFullScreen=true
  console.log(input);
  const _i = input.trim().split('\n');
  
  const X = //[10, 9.8, 8, 7.8, 7.7, 7, 6, 5, 4, 2];
    _i[1].trim().split(' ').map(v => parseFloat(v));
  const Y = // [200, 44, 32, 24, 22, 17, 15, 12, 8, 4];
    _i[2].trim().split(' ').map(v => parseFloat(v));
  console.log(X,Y);

  const r = pearsonCorrelation(X, Y);
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

function pearsonCorrelation(X, Y) {
  const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  const mean_X = mean(X);
  const mean_Y = mean(Y);

  const numerator = X.map((xi, i) => (xi - mean_X) * (Y[i] - mean_Y))
    .reduce((a, b) => a + b, 0);

  const denominatorX = X.map(xi => (xi - mean_X) ** 2)
    .reduce((a, b) => a + b, 0);

  const denominatorY = Y.map(yi => (yi - mean_Y) ** 2)
    .reduce((a, b) => a + b, 0);

  const denominator = Math.sqrt(denominatorX * denominatorY);

  return numerator / denominator;
}

/* 
node Day07-PearsonCorrelationCoefficient.js < Day07-PearsonCorrelationCoefficient-input.txt
 */