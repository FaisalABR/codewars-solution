//https://www.codewars.com/kata/57eaeb9578748ff92a000009/javascript

function sumMix(x) {
  const allInt = x.map((i) => (typeof i === typeof "s" ? parseInt(i) : i));
  return allInt.reduce((cv, n) => cv + n, 0);
}
