'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}



function main() {
  const n = parseInt(readLine().trim(), 10);

  const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

  // Write your code here
  // online : https://www.hackerrank.com/challenges/30-sorting/problem?isFullScreen=true
  console.log(a);
  const result = bubbleSort(a);
  const swapsCount = result.swapCount;
  const sortedA = result.sortedArray;
  
  console.log(`Array is sorted in ${swapsCount} swaps.\nFirst Element: ${sortedA[0]}\nLast Element: ${sortedA[sortedA .length-1]}`);

}

// 버블 정렬 함수
function bubbleSort(array) {
  let n = array.length;
  let swapped;
  let swapCount = 0; // 교환 횟수를 저장할 변수
  // 배열의 끝까지 반복
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      // 현재 요소와 다음 요소를 비교
      if (array[i] > array[i + 1]) {
        // 요소 교환
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
        swapCount++; // 교환 횟수 증가
      }
    }
    // 마지막 요소는 이미 정렬되어 있으므로 다음 반복에서는 고려하지 않음
    n--;
  } while (swapped);
  // console.log(swapCount);
  return { sortedArray: array, swapCount: swapCount };
}

/* 
node Day20-Sorting.js < Day20-Sorting-input.txt
 */
