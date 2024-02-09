// function breakChocolate(n, m) {
//   if (n > 1 && m > 0) {
//     return n * m - 1;
//   } else if (n > 0 && m > 1) {
//     return n * m - 1;
//   } else {
//     return 0;
//   }
// }

function breakChocolate(n, m) {
  if (n === 0 || m === 0) return 0;
  return n * m - 1;
}

console.log(breakChocolate(8, 1));
