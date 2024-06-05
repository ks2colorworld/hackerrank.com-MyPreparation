function processData(input) {
  //Enter your code here
  /*
  online : https://www.hackerrank.com/challenges/s10-basic-statistics/problem?isFullScreen=true
   */
  const len = parseInt(readLine())
  // console.log(len)
  const arr = readLine().replace(/\s+$/g, '').split(' ').map(num => parseInt(num))
  // console.log(arr)

  // Mean
  let i = 0;
  let sum = 0;
  for (const n of arr) {
    sum += n;
    // console.log(n)
    i++;
  }
  console.log((sum / i).toFixed(1))

  // Median
  // i = len // 9;
  const isEven = (i % 2 == 0)
  const mid = (i / 2) | 0;
  // console.log(isEven, mid)
  arr.sort((x, y) => x - y)
  // console.log(arr)
  if (isEven) {
    const a = arr[mid - 1]
    const b = arr[mid]
    // console.log(a,b)
    console.log((a + b) / 2)
  } else {
    console.log(arr[mid])
  }

  // Mode
  let counts = {};
  for (const num of arr) {
    if (counts[num]) {
      counts[num] += 1;
    } else {
      counts[num] = 1;
    }
  }

  // console.log(counts);

  let maxCountNum = arr[0];
  let maxCount = counts[maxCountNum];
  // console.log(maxCountNum, maxCount);

  for (const num in counts){
    if (maxCount < counts[num]) {
      maxCountNum = num;
      maxCount = counts[num]
    }
  }
  console.log(maxCountNum);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
currentLine = 0;
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  _input = _input.split('\n')
  processData(_input);
});

function readLine() {
  return _input[currentLine++]
}

/* 설명 1
`/\s+$/g`: 
  - \s+는 하나 이상의 공백 문자를 의미합니다.
  - $는 문자열의 끝을 나타내며, 문자열의 끝에 있는 공백을 찾기 위해 사용됩니다.
  - /g는 정규 표현식의 전역 플래그로, 문자열 내의 모든 해당 패턴을 찾아 변경하도록 지시합니다.
 */
