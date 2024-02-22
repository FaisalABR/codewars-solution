// https://www.codewars.com/kata/57eb936de1051801d500008a

function explode(x) {
  const firstEl = x[0];
  const lastEl = x[1];
  let result = [];

  if (typeof firstEl === "number" && typeof lastEl === "number") {
    for (let i = 1; i <= firstEl + lastEl; i++) {
      result.push(x);
    }
    return result;
  } else if (typeof lastEl === "number") {
    for (let i = 1; i <= lastEl; i++) {
      result.push(x);
    }
    return result;
  } else if (typeof firstEl === "number") {
    for (let i = 1; i <= firstEl; i++) {
      result.push(x);
    }
    return result;
  } else {
    return "Void!";
  }
}

//Best practicex
function explodeBest(x) {
  let [a, b] = x;

  if (typeof a === "number" && typeof b === "number")
    return new Array(a + b).fill(x);
  else if (typeof a === "number") return new Array(a).fill(x);
  else if (typeof b === "number") return new Array(b).fill(x);

  return "Void!";
}
