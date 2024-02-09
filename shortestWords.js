import oddeven from "./oddeven";
function shortWords(words) {
  let word = words.split(" ");
  let wordLength = word.map((n) => n.length);
  return Math.min.apply(this, wordLength);
}

console.log(shortWords("Faisal Abu Bakar Riza"));

// let nama = "Faisal Abu Bakar";
// let kata = nama.split(" ");
// let panjang = kata.map((n) => n.length);
// console.log(Math.min.apply(this, panjang));
console.log(oddeven(2));
