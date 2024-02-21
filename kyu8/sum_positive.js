// https://www.codewars.com/kata/5715eaedb436cf5606000381/javascript

const positiveSum = (arr) =>
  arr.filter((item) => item > 0).reduce((a, b) => a + b, 0);
