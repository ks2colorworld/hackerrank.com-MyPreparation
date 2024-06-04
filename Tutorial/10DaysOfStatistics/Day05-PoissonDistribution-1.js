function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-poisson-distribution-1/problem?isFullScreen=true
  // console.log(input);
  const i = input.trim().split('\n').map(v => { return parseFloat(v) });
  // console.log(i);
  const lambda = i[0];
  const k = i[1];
  const result = poissonProbability(lambda, k);
  console.log(result.toFixed(3));
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
❯ echo "2.5\n5" | node Day05-PoissonDistribution-1.js
 */

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// gpt
function poissonProbability(lambda, k) {
  // Calculate the factorial of k
  let kFactorial = factorial(k);

  // Calculate λ^k
  let lambdaToTheK = Math.pow(lambda, k);

  // Calculate e^(-λ)
  let eToTheMinusLambda = Math.exp(-lambda);

  // Calculate the Poisson probability
  let probability = (lambdaToTheK * eToTheMinusLambda) / kFactorial;

  return probability;
}