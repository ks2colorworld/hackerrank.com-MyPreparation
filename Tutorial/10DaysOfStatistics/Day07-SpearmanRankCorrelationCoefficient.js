// online : https://www.hackerrank.com/challenges/s10-spearman-rank-correlation-coefficient/problem?isFullScreen=true
function processData(input) {
  //Enter your code here
  console.log(input);
  const _i = input.trim().split('\n');

  const X = _i[1].trim().split(' ').map(v => parseFloat(v));
  const Y = _i[2].trim().split(' ').map(v => parseFloat(v));
  console.log(X, Y);

  const r = spearmanCorrelation(X, Y);
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

function spearmanCorrelation(X, Y) {
  const rank = (arr) => {
    const sorted = [...arr].sort((a, b) => a - b);
    return arr.map(v => sorted.indexOf(v) + 1);
  };

  const rank_X = rank(X);
  const rank_Y = rank(Y);

  const d = rank_X.map((rankX, i) => rankX - rank_Y[i]);
  const d_squared_sum = d.map(di => di ** 2).reduce((a, b) => a + b, 0);

  const n = X.length;
  const rho = 1 - (6 * d_squared_sum) / (n * (n ** 2 - 1));

  return rho;
}

/* 
node Day07-SpearmanRankCorrelationCoefficient.js < Day07-SpearmanRankCorrelationCoefficient-input.txt

 */
