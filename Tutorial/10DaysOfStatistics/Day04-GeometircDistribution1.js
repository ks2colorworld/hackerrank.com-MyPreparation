function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-geometric-distribution-1/problem?isFullScreen=true
  const str = input.split('\n');
  // console.log(str);
  const prob = str[0].split(' ').map(v=>parseInt(v));
  // console.log(prob);
  const order = parseInt(str[1]);
  // console.log(order);
  const geoDist = Math.pow(prob[0] / prob[1], 1) * Math.pow(1 - prob[0] / prob[1], order - 1);
  console.log(geoDist.toFixed(3));
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

/* 
2/3 x 2/3 x 2/3 x 2/3 x 1/3
 */