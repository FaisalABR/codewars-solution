// function cap(word) {
//   let capital = word.split("")[0].toUpperCase();
//   let replace = word.replace(word[0], capital);
//   return replace;
// }

// console.log(cap("mili"));

function cap(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(cap("mili"));

// let nama = "mili";
// let slice = nama.slice(0);
// console.log(slice);
