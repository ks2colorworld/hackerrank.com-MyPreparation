function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-geometric-distribution-1/problem?isFullScreen=true
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
❯ echo "1 3\n5" | node Day04-GeometircDistribution1.js 
 */

