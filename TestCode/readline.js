process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

// Reads complete line from STDIN ('Standard Input'의 약자로, 표준 입력을 의미)
function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  while (input_currentline < input_stdin_array.length) {
    console.log(readLine());
  }
}

/* 터미널에서 실행 후 결과 확인 (node 설치 필요)
 echo 'Hello, World!' | node readline.js
 echo -e "Hello, World!\nThis is a test.\nMultiple lines of input." | node readline.js
 node readline.js < input.txt 
 */

/* input.txt 내용
Hello, World!
This is a test.
Multiple lines of input.
 */