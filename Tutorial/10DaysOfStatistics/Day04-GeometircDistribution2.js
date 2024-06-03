function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/s10-geometric-distribution-2/problem?isFullScreen=true
  const str = input.split('\n');
  // console.log(str);
  const prob = str[0].split(' ').map(v => parseInt(v));
  // console.log(prob);
  const order = parseInt(str[1]);
  let probSum = 0;
  for (let i = 1; i <= order; i++) {
    probSum += Math.pow(prob[0] / prob[1], 1) * Math.pow(1 - prob[0] / prob[1], i - 1);
    // console.log(probSum);
  }
  console.log(probSum.toFixed(3));
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
❯ echo "1 3\n5" | node Day04-GeometircDistribution2.js 
 */


/* GPT
첫 번째 질문:
질문 내용: 기계가 불량품을 생산할 확률이 1/3 일 때, 첫 번째 불량품이 5번째 생산된 제품일 확률은 얼마인가?
설명: 여기서는 정확히 5번째 생산된 제품이 첫 번째 불량품일 확률을 묻고 있습니다. 즉, 앞의 네 제품은 모두 불량이 아니고, 다섯 번째 제품이 처음으로 불량인 경우입니다.

두 번째 질문:
질문 내용: 기계가 불량품을 생산할 확률이 1/3 일 때, 첫 번째 불량품이 첫 5개의 검사에서 발견될 확률은 얼마인가?
설명: 여기서는 첫 5개의 제품 중에서 처음으로 불량품이 발견되는 확률을 묻고 있습니다. 즉, 첫 번째부터 다섯 번째 제품 중 하나가 불량품일 경우를 포함합니다.

따라서 첫 번째 질문은 "정확히 다섯 번째 제품이 불량품일 확률"을 묻고 있으며, 두 번째 질문은 "첫 5개의 제품 중 하나가 불량품일 확률"을 묻고 있습니다.
 */
