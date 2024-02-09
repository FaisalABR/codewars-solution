function getCount(str) {
  return str.split("").filter((n) => /[aiueo]/g.test(n)).length;
}

let test = getCount("aaaaaiiiiuuuiyutyu");
console.log(test);

//jadi kita pisahin dulu stringnya jadi array trus kita filter menggunakan regex dan menggunakan metode length
//untuk mengetahui berapa banyak jumlah dari hasil filter tersebut yang berupa array

// let word = "abbceea";
// console.log(word.split(""));
// let regex = /[aiueo]/g;
// console.log(regex.test("i"));
