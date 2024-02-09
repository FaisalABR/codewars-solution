function flickSwitch(arr) {
  let list = [];
  //check if array is empty or not
  if (arr.length !== 0) {
    //check the first element
    let firstElement = arr[0] === "flick" ? list.push(false) : list.push(true);

    //loop the all next element
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === "flick") {
        list.push(!list[i - 1]);
      } else {
        list.push(list[i - 1]);
      }
    }
    return list;
  } else {
    return list;
  }
}
console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
console.log(flickSwitch(["flick", "chocolate", "adven", "sunshine"]));
console.log(flickSwitch(["bicyc", "jarmony", "flick", "sheep", "flick"]));
console.log(flickSwitch(["flick", "flick", "flick"]));
