//https://www.codewars.com/kata/58c218efd8d3cad11c0000ef/javascript
function binStr(s) {
  //coding and coding..
  let arr = s.split("");
  let countFlip = 0;
  if (arr.every((item) => item == "0")) {
    return countFlip;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "1") {
        const flipped = arr
          .splice(i, arr.length)
          .map((item) => (item === "1" ? "0" : "1"));
        const before = arr.splice(0, i);
        arr = [...before, ...flipped];
        countFlip += 1;
      }
    }
  }

  return countFlip;
}
