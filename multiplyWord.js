function modifyMultiply(str, loc, num) {
  //Code here
  let word = str.split(" ")[loc];
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = word;
  }
  return arr.join("-");
}

console.log(modifyMultiply("This is a string", 3, 5));
