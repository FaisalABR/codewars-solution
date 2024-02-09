function isLate(last, today, cycleLength) {
  return Math.floor(today.getTime() - last.getTime()) / 86400000 > cycleLength;
}

const last = new Date("2023-06-13").getTime();
const today = new Date("2023-07-16").getTime();
console.log((today - last) / 86400000);
// console.log(isLate(last, today, 28));
