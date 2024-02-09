function dotCalculator(equation) {
  let equ = Array.from(equation);
  let prevOpr;
  let aftOpr;
  let indexOpr;
  let result = 0;
  if (equ.includes("+")) {
    indexOpr = equ.indexOf("+");
    prevOpr = equ.splice(0, indexOpr - 1);
    aftOpr = equ.splice(3, equ.length);
    result = prevOpr.length + aftOpr.length;
    return ".".repeat(result);
  } else if (equ.includes("-")) {
    indexOpr = equ.indexOf("-");
    prevOpr = equ.splice(0, indexOpr - 1);
    aftOpr = equ.splice(3, equ.length);
    result = prevOpr.length - aftOpr.length;
    return ".".repeat(result);
  } else if (equ.includes("*")) {
    indexOpr = equ.indexOf("*");
    prevOpr = equ.splice(0, indexOpr - 1);
    aftOpr = equ.splice(3, equ.length);
    result = prevOpr.length * aftOpr.length;
    return ".".repeat(result);
  } else if (equ.includes("/")) {
    indexOpr = equ.indexOf("/");
    prevOpr = equ.splice(0, indexOpr - 1);
    aftOpr = equ.splice(4, equ.length);
    result = Math.floor(prevOpr.length / aftOpr.length);
    return ".".repeat(result);
  } else {
    return 0;
  }
}

console.log(dotCalculator("..... // .."));

// let equation = Array.from("..... + ...............");
// console.log(equation);
// console.log(equation.indexOf("+"));
// console.log(equation.splice(0, 5).length);
// console.log(equation.splice(3, equation.length));

//REFACTOR
function dotCalc(equation) {
  let operator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "//": (a, b) => Math.floor(a / b),
  };

  const [left, operations, right] = equation.split(" ");
  return ".".repeat(operator[operations](left.length, right.length));
}

console.log(dotCalc("..... // .."));
