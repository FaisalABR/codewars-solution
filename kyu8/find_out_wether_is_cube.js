const cubeChecker = (volume, side) =>
  Math.cbrt(volume) === side && volume + side > 0 ? true : false;
