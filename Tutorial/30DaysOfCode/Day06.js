function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/30-review-loop/problem?isFullScreen=true
  // console.log(input);
  const arr = input.split('\n');
  // console.log(arr);
  const count = parseInt(arr[0]);
  // console.log(count);
  for (let i = 1; i < count+1; i++) {
    const element = arr[i];
    // console.log(element);
    let evenText = '';
    let oddText = '';
    for (const j in element) {
      // console.log(j, element[j]);
      if (j%2===0) {
        evenText = evenText + element[j];
      } else {
        oddText = oddText + element[j];
      }
    }
    console.log(evenText + ' ' + oddText);
    // console.log(`${evenText} ${oddText}`);
  }
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
