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

function readLine() {
  return input_stdin_array[input_currentline++];
}

function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  // online: https://www.hackerrank.com/challenges/30-class-vs-instance/problem?isFullScreen=true
  let age = parseInt(initialAge);
  console.log(age);
  // const isEndLine = input_currentline == input_stdin_array.length;
  // let isFirstCheckOld = true;
  // let countYearPass = 0;
  if (age<0) {
    console.log('Age is not valid, setting age to 0.');
  }
  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console
    // let msg = '';
    if (age < 13) {
      console.log('You are young.');
      // msg = 'You are young.';
    } else if (12 < age && age < 18) {
      console.log('You are a teenager.');
      // msg = 'You are a teenager.';
    } else {
      console.log('You are old.'); // 오타 : You are a old. 
      // msg = 'You are old.'; 
    }
    // endWirte(msg, isFirstCheckOld, isEndLine)
  };
  this.yearPasses = function () {
    // Increment the age of the person in here
    age += 1;
    // countYearPass += 1;
    // if (countYearPass === 3) {
      // isFirstCheckOld = false;
    // }
  };
}

// function endWirte(msg, isFirstCheckOld, isEndLine) {
//   if (isFirstCheckOld || !isEndLine) {
//     console.log(msg)
//   } else if (!isFirstCheckOld && isEndLine) {
//     process.stdout.write(`${msg}\r`) 
/* 
      `\r` : (캐리지 리턴)을 사용하여 줄바꿈 없이 출력을 덮어쓸 수 있습니다. 마지막 빈줄 출력 없애기 - 필요없음  
      The extra line at the end of the output is supposed to be there and is trimmed before being compared against the test case's expected output. 
      If you're failing this challenge, check your logic and review your print statements for spelling errors.
      출력 끝의 추가 줄은 거기에 있어야 하며 테스트 사례의 예상 출력과 비교되기 전에 잘립니다. 
      이 챌린지에 실패하면 논리를 확인하고 인쇄 문에 철자 오류가 있는지 검토하세요.
*/     
//   }
// }

function main() {

  var T = parseInt(readLine());
  for (i = 0; i < T; i++) {
    var age = parseInt(readLine());
    var p = new Person(age);
    p.amIOld();
    for (j = 0; j < 3; j++) {
      p.yearPasses();

    }
    p.amIOld();
    console.log("");
  }
}
