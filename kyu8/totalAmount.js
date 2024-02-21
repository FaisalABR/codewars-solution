// https://www.codewars.com/kata/5bb904724c47249b10000131/javascript

function points(games) {
  return games
    .map((item) => {
      const point = item.split(":");
      if (point[0] > point[1]) {
        return 3;
      } else if (point[0] < point[1]) {
        return 0;
      } else {
        return 1;
      }
    })
    .reduce((cv, n) => cv + n, 0);
}
