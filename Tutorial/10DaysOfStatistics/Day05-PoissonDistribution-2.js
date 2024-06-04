function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-poisson-distribution-2/problem?isFullScreen=true
  // console.log(input);
  const i = input.trim().split(' ').map(v => { return parseFloat(v.trim()) });
  console.log(i[0], i[1]);
  // X = 0.88 , C_A = 160+40X^2
  const lambdaA = i[0];
  const E_X2 = lambdaA + Math.pow(lambdaA, 2);
  const CostA = 160 + 40 * E_X2;
  console.log(CostA.toFixed(3));

  // Y = 1.55 , C_B = 128 + 40Y^2
  const lambdaB = i[1];
  const E_Y2 = lambdaB + Math.pow(lambdaB, 2);
  const CostB = 128 + 40 * E_Y2;
  console.log(CostB.toFixed(3));

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
> echo "0.88 1.55" | node Day05-PoissonDistribution-2.js
 */
