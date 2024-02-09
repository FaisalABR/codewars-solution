function sum(...args) {
  return args.reduce((val, curr) => val + curr);
}

console.log(sum(1, 2, 3));
