//https://www.codewars.com/kata/566efcfbf521a3cfd2000056/javascript

function flipNumber(n) {
  let result = "";
  const arr = n.split("");
  for (let i = 1; i <= n.length; i++) {
    arr.reverse();
    result += arr[0];
    arr.shift();
  }

  return result;
}
