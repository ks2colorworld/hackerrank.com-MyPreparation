'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
  _input = _input.split(new RegExp('[ \n]+')); // 빈칸 혹은 줄바꿈 기준으로 나누기
  // console.log(_input);
  main();
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " + this.lastName + ", " + this.firstName
      + "\nID: " + this.idNumber
    )
  }
}

class Student extends Person {
  /*	
  *   Class Constructor
  *   
  *   @param firstName - A string denoting the Person's first name.
  *   @param lastName - A string denoting the Person's last name.
  *   @param id - An integer denoting the Person's ID number.
  *   @param scores - An array of integers denoting the Person's test scores.
  */
  // Write your constructor here
  constructor(first, last, id, scores) {
    super(first, last, id);
    this.scores = scores;
  }
  /*
  *   Method Name: calculate
  *   @return A character denoting the grade.
  */
  // Write your method here
  // online : https://www.hackerrank.com/challenges/30-inheritance/problem?isFullScreen=true
  calculate() {
    // let sum = 0;
    // for (let i = 0; i < this.scores.length; i++) {
    //   const score = this.scores[i];
    //   sum += score;
    // }
    const sum = this.scores.reduce((acc, score) => { return acc + score }, 0);
    const avg = sum/this.scores.length;

    if (90 <= avg) {
      return 'O'; // Outstanding
    }
    if (80 <= avg) {
      return 'E'; // Exceeds Expectations
    }
    if (70 <= avg) {
      return 'A'; // Acceptable
    }
    if (55 <= avg) {
      return 'P'; // Poor
    }
    if (40 <= avg) {
      return 'D'; // Dreadful
    }

    return 'T'; // Troll
  }
}

function main() {
  let firstName = read()
  let lastName = read()
  let id = +read() // + 숫자로 변환
  let numScores = +read()
  let testScores = new Array(numScores)

  for (var i = 0; i < numScores; i++) {
    testScores[i] = +read()
  }

  let s = new Student(firstName, lastName, id, testScores)
  s.printPerson()
  s.calculate()
  console.log('Grade: ' + s.calculate())
}
