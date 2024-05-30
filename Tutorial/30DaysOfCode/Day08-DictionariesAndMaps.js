function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?isFullScreen=true
  
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
