// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/javascript

const flip = (d, a) => {
  //TODO
  return d === "L" ? a.sort((x, y) => y - x) : a.sort((x, y) => x - y);
};
