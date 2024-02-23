const code = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function encode(str, n) {
  const arr = Array.from(String(n), Number);
  return str.split("").map((item, i) => code[item] + arr[i % arr.length]);
}

//best practice
function encodeBest(str, n) {
  const key = String(n);
  return Array.from(
    str,
    (c, i) => c.charCodeAt(0) + Number(key[i % key.length])
  );
}
