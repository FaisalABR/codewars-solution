// https://www.codewars.com/kata/59b710ed70a3b7dd8f000027

function isAllPossibilities(x) {
  return x.length > 0 ? x.every((item, index) => x.includes(index)) : false;
}
