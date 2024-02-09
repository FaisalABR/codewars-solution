let sumAndMultiply = function (sum, multiply) {
  let x = 0;
  let y = 0;
  for (let i = 0; i <= 1000; i++) {
    for (let j = 0; j <= 1000; j++) {
      if (sum == i + j && multiply == i * j) {
        x = j;
        y = i;
        return [x, y];
      } else {
        console.log("test");
        return null;
      }
    }
  }
};

console.log(sumAndMultiply(6, 9));

// Solution
// return null
//     }
// 1
// let sumAndMultiply = function (sum, multiply) {
// 2
//     let x, y = 0;
// 3
//     let a = 1;
// 4
//     let b = -sum
// 5
//     let c = multiply
// 6
//     let discriminant = (b ** 2) - (4 * a * c)
// 7
//     if (discriminant >= 0) {
// 8
//         x = parseInt((-b - Math.sqrt(discriminant)) / (2 * a))
// 9
//         y = parseInt((-b + Math.sqrt(discriminant)) / (2 * a))
// 10
//         if (x + y === -1 * b && x * y === c) {
// 11
//             return ([x, y])
// 12
//         }
// 13
//         else {
// 14
//             return null
// 15
//         }
// 16
//     }
// 17
//     else {
// 18
//         return null
// 19
//     }
// 20
// ​
// 21
// }
//  Excellent
