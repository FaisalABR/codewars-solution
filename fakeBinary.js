// function fakeBin(x) {
//   let numbers = [...x]; //memisahkan string setiap karakter menjadi array
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 5) {
//       numbers[i] = 1;
//     } else {
//       numbers[i] = 0;
//     } //mengubah setiap element array sesuai intruksi dimana angka lebih dari 5 jadi 1 dan kurang dari 5 jadi 0
//   }
//   let join = numbers.join(); //menggabungkan angka yang sudah diubah
//   return join.replace(/,/g, ""); //menghilangkan koma
// }

// console.log(fakeBin("16363464"));

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

console.log(fakeBin("16363464"));
