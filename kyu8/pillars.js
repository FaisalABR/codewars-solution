//https://www.codewars.com/kata/5bb0c58f484fcd170700063d/javascript

function pillars(numPill, dist, width) {
  // your code here
  if (numPill === 1) return 0;
  const totalDistance = (numPill - 1) * dist * 100;
  const pillarBetween = (numPill - 2) * width;
  return totalDistance + pillarBetween;
}
