function processData(input) {
  //Enter your code here

  const arr = input.trim().split('\n').map(v => parseFloat(v));
  //   console.log(arr);

  const n = arr[0]; // 100;
  const mean = arr[1]; // 500;
  const std = arr[2]; // 80;
  const zScore = arr[4]; // 1.96;

  const A = mean - zScore * (std / Math.sqrt(n))
  const B = mean + zScore * (std / Math.sqrt(n))

  console.log(A.toFixed(2));
  console.log(B.toFixed(2));
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
