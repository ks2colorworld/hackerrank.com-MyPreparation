const m = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108]
];
const n = 2;
console.log(m);
console.log(nSum(n,m));

function nSum(n, m) {
  let s = 0;
  // (a, b) : (a, 2n-1-b) : (2n-1-a, b) : (2n-1-a, 2n-1-b) 중에 최대값 
  for (let a = 0; a < n; a++){
    
    const rTop = m[a];
    const a_2n_1 = (2*n - 1) - a;
    const rBottom = m[a_2n_1];
    // console.log(rTop, rBottom);
    for (let b = 0; b < n; b++){
      const b_2n_1 = (2*n - 1) - b;
      const leftTopNum = rTop[b];
      const rightTopNum = rTop[b_2n_1];
      const leftBottomNum = rBottom[b];
      const rightBottomNum = rBottom[b_2n_1];
      console.log(leftTopNum, rightTopNum, leftBottomNum, rightBottomNum);
      s += Math.max(leftTopNum, rightTopNum, leftBottomNum, rightBottomNum);
    }
  }
  return s;
}

/* 
https://hee0.tistory.com/18
https://singo112ok.tistory.com/35
https://velog.io/@ajm0718/해커랭크-Flipping-the-Matrix
 */