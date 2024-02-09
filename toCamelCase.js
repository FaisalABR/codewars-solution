const toCamelCase = (s) => {
  let arr = [];
  let str = "";
  const words = s.split("-");
  const beCamel = words.map((item, i) => {
    if (i > 0) {
      item[i].toUpperCase();
      arr.push(item[i]);
    } else {
      arr.push(item[i]);
    }
  });
  beCamel.map((item) => (str += item));
  return str;
};

console.log(toCamelCase("this-is-my"));
