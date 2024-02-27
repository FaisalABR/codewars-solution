// https://www.codewars.com/kata/56f3a1e899b386da78000732/javascript

function partlist(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let firstPart = [];
    let secondPart = [];
    firstPart.push(arr.slice(0, i + 1).join(" "));
    secondPart.push(arr.slice(i + 1, arr.length).join(" "));
    const combine = [firstPart.join(), secondPart.join()];
    result.push(combine);
  }
  result.pop();
  return result;
}
