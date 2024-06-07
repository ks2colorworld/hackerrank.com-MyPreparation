
document.getElementById('btn0').onclick = clickZero;
document.getElementById('btn1').onclick = clickOne;
document.getElementById('btnClr').onclick = clickClr;
document.getElementById('btnEql').onclick = clickEql;
document.getElementById('btnSum').onclick = clickSum;
document.getElementById('btnSub').onclick = clickSub;
document.getElementById('btnMul').onclick = clickMul;
document.getElementById('btnDiv').onclick = clickDiv;

let elem = document.getElementById('res');

function checkOperator() {
  const str = elem.innerHTML;
  return str.endsWith('+') ||
    str.endsWith('-') ||
    str.endsWith('*') ||
    str.endsWith('/');
}

function clickClr() {
  elem.innerHTML = '';
}
function clickZero() {
  if (elem.innerHTML.length == 0 || checkOperator()) {
    return;
  }
  elem.innerHTML += '0';
}
function clickOne() {
  elem.innerHTML += '1';
}
function clickSum() {
  if (0 < elem.innerHTML.length && !checkOperator()) {
    elem.innerHTML += '+';
  }
}
function clickSub() {
  if (0 < elem.innerHTML.length && !checkOperator()) {
    elem.innerHTML += '-';
  }
}
function clickMul() {
  if (0 < elem.innerHTML.length && !checkOperator()) {
    elem.innerHTML += '*';
  }
}
function clickDiv() {
  if (0 < elem.innerHTML.length && !checkOperator()) {
    elem.innerHTML += '/';
  }
}

function clickEql() {
  if (elem.innerHTML.length == 0 || checkOperator()) {
    return;
  }

  // let result = elem.innerHTML;
  let re = /\d+/g
  let re2 = /[\+\-\*\/]+/g
  let numbers = elem.innerHTML.match(re).map(v => {
    const i = parseInt(v, 2)
    // console.log(v, i);
    return i
  });
  let operations = elem.innerHTML.match(re2);
  console.log(numbers);
  console.log(operations);

  if (!operations) {
    // console.log('null');
    return;
  }

  let calSum = 0;
  while(true) {
    const firstNum = numbers.shift();
    const secondNum = numbers.shift();
    const operater = operations.shift();
    console.log(firstNum, operater, secondNum);
    if (!secondNum || !operater) {
      // calSum = firstNum;
      break;
    }
    switch (operater) {
        case '+':
          calSum = firstNum + secondNum;
          break;
        case '-':
          calSum = firstNum - secondNum;
          break;
        case '*':
          calSum = firstNum * secondNum;
          break;
        case '/':
          calSum = (firstNum / secondNum) | 0;
          break;
    }
    // calSum = eval(firstNum + operater + secondNum); // simple 
    if (operater) {
      numbers.unshift(calSum);
    }
    if (numbers.length == 0) {
      break;
    }
  }

  // 결과가 음수일 경우 (로직을 좀더 보강해야 함.)
  // if (calSum < 0) { 
  //   const p = (1 << 8) + calSum;
  //   elem.innerHTML = p.toString(2).padStart(8, 0);
  // } else {
  //   elem.innerHTML = calSum.toString(2);
  // }
  
  elem.innerHTML = calSum.toString(2);
  // elem.innerHTML += `=${calSum.toString(2)}(${calSum})`;

}
