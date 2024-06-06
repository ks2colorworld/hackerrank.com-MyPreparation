'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  let dayName;
  // Write your code here
  // online : https://www.hackerrank.com/challenges/js10-date/problem?isFullScreen=true
  const d = new Date(dateString);
  const dayNum = d.getDay();
  console.log(dayNum);
  switch (dayNum) {
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
    default:
      dayName = '';
      break;
  }
  return dayName;
}


function main() {
  const d = +(readLine());

  for (let i = 0; i < d; i++) {
    const date = readLine();

    console.log(getDayName(date));
  }
}

/* 
❯ node Day06-JavascriptDates.js < Day06-JavascriptDates-input.txt
 */