function processData(input) {
  //Enter your code here
  // online : https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem?isFullScreen=true
  // console.log(input);
  const inputDataArr=input.split('\n')
  // console.log(inputDataArr);
  const n = parseInt(inputDataArr[0]);
  const endLine = inputDataArr.length;
  let d = {};
  for (let i = 1; i <= n; i++){
    // console.log(inputDataArr[i]);
    const e = inputDataArr[i].split(' ');
    d[e[0]] = e[1];
  }
  for (let i = n + 1; i < endLine; i++) {
    const key = inputDataArr[i]
    if (Object.hasOwnProperty.call(d, key)) {
      const value = d[key];
      console.log(`${key}=${value}`);
    } else {
      console.log('Not found');
    }
  }
  // console.log(d);
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
