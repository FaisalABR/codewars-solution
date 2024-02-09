let arr = [];
let newArr = [, , 0];
function generateIntegers(n) {
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }
  return (newArr = [...arr, ...arr, 0]);
}
console.log(generateIntegers(5));
