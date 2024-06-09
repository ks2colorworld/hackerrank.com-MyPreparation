function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-pearson-correlation-coefficient/problem?isFullScreen=true
  console.log(input);
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
node Day07-PearsonCorrelationCoefficient.js < Day07-PearsonCorrelationCoefficient-input.txt
 */