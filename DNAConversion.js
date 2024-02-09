function translateDNA(dna) {
  let checkTimin = /T/g;
  let validate = checkTimin.test(dna);
  if (validate) {
    let replaceTimin = dna.replace(checkTimin, "U");
    return replaceTimin;
  } else {
    return dna;
  }
}

console.log(translateDNA("CAGG TTTT"));
