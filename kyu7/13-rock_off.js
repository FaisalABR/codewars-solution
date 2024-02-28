// https://www.codewars.com/kata/5b097da6c3323ac067000036/javascript

function solve(a, b) {
  let scoreBob = 0;
  let scoreAlice = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) scoreAlice++;
    else if (a[i] < b[i]) scoreBob++;
  }

  if (scoreBob > scoreAlice)
    return `${scoreAlice}, ${scoreBob}: Bob made "Jeff" proud!`;
  else if (scoreBob < scoreAlice)
    return `${scoreAlice}, ${scoreBob}: Alice made "Kurt" proud!`;
  else return `${scoreAlice}, ${scoreBob}: that looks like a "draw"! Rock on!`;
}
