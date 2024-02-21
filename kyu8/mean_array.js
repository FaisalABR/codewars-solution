// https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript

function getAverage(marks) {
  return Math.floor(marks.reduce((cv, n) => cv + n, 0) / marks.length);
}
