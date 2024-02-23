// https://www.codewars.com/kata/592edfda5be407b9640000b2/javascript

function decode(code, n) {
  const arr = Array.from(String(n), Number);
  return code
    .map((item, i) => String.fromCharCode(item - arr[i % arr.length] + 96))
    .join("");
}
