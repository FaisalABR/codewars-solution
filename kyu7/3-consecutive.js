//https://www.codewars.com/kata/5f6d533e1475f30001e47514/javascript

function consecutive(arr, a, b) {
  const indexA = arr.indexOf(a);
  const indexB = arr.indexOf(b);
  return indexA + 1 === indexB || indexA - 1 === indexB ? true : false;
}

//best practices
function consecutiveBest(arr, a, b) {
  return Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;
}
