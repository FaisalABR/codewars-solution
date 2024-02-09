function switches(x) {
  const arr = x.split("");
  let result = [];
  for (let i = 0; i < x.length; i++) {
    if (arr[i] === "a") {
      arr[i] = "b";
      result.push(arr[i]);
    } else if (arr[i] === "b") {
      arr[i] = "a";
      result.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result.toString().replaceAll(",", "");
}

// const a = "abc";
// console.log(a.split(""));
console.log(switches("bac"));
