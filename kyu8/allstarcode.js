// src
// https://www.codewars.com/kata/55a5befdf16499bffb00007b/javascript
function strCount(str, letter) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      result++;
    }
  }
  return result;
}
