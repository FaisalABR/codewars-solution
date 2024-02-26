// https://www.codewars.com/kata/59f69fefa0143109e5000019/javascript

function didWeWin(plays) {
  var s = 0;
  for (var i = 0; i < 4; ++i) {
    if (plays[i].length > 1) {
      if (plays[i][1] == "turnover") return false;
      if (plays[i][1] == "sack") s -= plays[i][0];
      else s += plays[i][0];
    }
  }
  return s > 10;
}
