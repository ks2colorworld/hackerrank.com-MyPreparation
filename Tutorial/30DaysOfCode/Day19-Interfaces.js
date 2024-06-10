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

class AdvancedArithmetic {
  constructor() { // (title, author) {
    if (this.constructor === AdvancedArithmetic) {
      throw new TypeError('Do not attempt to directly instantiate an abstract class.');
    }
    else {
      // this.title = title;
      // this.author = author;
    }
  }

  divisorSum() {
    throw new Error('Method "divisorSum()" must be implemented.');
  }
}

class Calculator extends AdvancedArithmetic {
  divisorSum(n) {
    //Write your code here
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
    return sum;
  }
}

function main() {
  const n = readLine();
  const myCalculator = new Calculator();
  // const myCalculator = new AdvancedArithmetic(); 
  const sum = myCalculator.divisorSum(n);
  console.log("I implemented: AdvancedArithmetic\n" + sum); 
}