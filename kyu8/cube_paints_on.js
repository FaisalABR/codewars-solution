//https://www.codewars.com/kata/5763bb0af716cad8fb000580/javascript

function countSquares(cuts) {
  // total little cubes = no red cubes + red cubes
  if (cuts === 0) return 1;

  const littleCubes = (cuts + 1) ** 3;
  const noRedCubes = (cuts - 1) ** 3;
  return littleCubes - noRedCubes;
}
