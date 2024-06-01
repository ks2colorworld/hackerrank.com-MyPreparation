/* 
#python
import math
p=0.12
q=1-p
case1=0
case2=0
for x in range(0, 3):
    case1+=math.comb(10, x)* (p**x)*(q**(10-x))
for x in range(2, 11):
    case2+=math.comb(10, x)* (p**x)*(q**(10-x))
print(round(case1, 3), round(case2, 3), sep='\n')
 */

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function comb(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

let p = 0.12;
// let q = 1 - p;
// let case1 = 0;
// let case2 = 0;

// for (let k = 0; k < 3; k++) {
//   case1 += comb(10, k) * (Math.pow(p, k)) * (Math.pow(q, 10 - k));
// }

// for (let k = 2; k < 11; k++) {
//   case2 += comb(10, k) * (Math.pow(p, k)) * (Math.pow(q, 10 - k));
// }

// console.log(case1.toFixed(3));
// console.log(case2.toFixed(3));

const case3 = Math.pow(2/3,4)*1/3;
console.log(case3.toFixed(3));
console.log(16/243);

// 0.066
