function sumArray(array) {
  if (!array) return 0;
  const sorted = array.sort((a, b) => a - b);
  const arr = sorted.slice(1, -1);
  return arr.reduce((cv, n) => cv + n, 0);
}
