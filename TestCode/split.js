const s = '07:20:10AM'
// const s = '7시 20분 10초'


const [time, AMPM] = s.split(/(AM|PM)/)

console.log(time);
console.log(AMPM);

// const t = time.split(/(시|분|초|:)/)
// console.log(t);

let [hh, mm, ss] = time.split(':')
if (hh == '12') {
  hh = '00'
}
if (AMPM == 'PM') {
  hh = parseInt(hh, 10) + 12;
}
console.log(`${hh}:${mm}:${ss}`);
