function processData(input) {
  //Enter your code here

  const arr = input.trim().split('\n').map(v => parseFloat(v));
  //   console.log(arr);

  const x = arr[0], // 250,
    n = arr[1], // 100,
    m0 = arr[2], // 2.4,
    std0 = arr[3]; // 2;

  const m = n * m0;
  const std = Math.sqrt(n) * std0;

  console.log(cdf(m, std, x).toFixed(4));
}

function cdf(m, std, x) {
  return 0.5 * (1 + erf((x - m) / (std * Math.sqrt(2))));
}

function erf(x) {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  const t = 1 / (1 + p * x);
  const y =
    1 -
    ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) *
    t *
    Math.exp(-x * x);

  return sign * y;
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
