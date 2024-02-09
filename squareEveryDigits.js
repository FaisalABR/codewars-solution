function squareDigits(num) {
  let numbers = num.toString().split("");
  return parseInt(numbers.map((e) => Math.pow(parseInt(e), 2)).join(""));
}

console.log(squareDigits(3212));
