// https://www.codewars.com/kata/63b06ea0c9e1ce000f1e2407/javascript

function alphabet(ns) {
  let sorted = ns.sort((a, b) => a - b);
  return sorted[7] / sorted[sorted[0] * sorted[1] === sorted[2] ? 3 : 2];
}
