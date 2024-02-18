function findMultiples(integer, limit) {
  let result = [];
  for (let i = integer; i <= limit; i += integer) {
    result.push(i);
  }
  return result;
}

// src
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/javascript
