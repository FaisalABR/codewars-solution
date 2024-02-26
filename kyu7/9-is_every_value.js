// https://www.codewars.com/kata/582c81d982a0a65424000201/javascript

const arrCheck = (value) =>
  value.map((item) => Array.isArray(item)).every((item) => item === true);
