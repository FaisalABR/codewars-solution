// https://www.codewars.com/kata/5912ded3f9f87fd271000120/javascript

function countCorrectCharacters(correctWord, guess) {
  // Code here
  let result = 0;
  if (correctWord.length === guess.length) {
    for (let i = 0; i < correctWord.length; i++) {
      if (correctWord[i] === guess[i]) result++;
    }
  } else {
    throw new Error();
  }
  return result;
}

function countCorrectCharactersBest(correctWord, guess) {
  // Code here
  if (correctWord.length - guess.length)
    throw new Error("you're not even trying");
  return [...correctWord].filter((item, i) => item === guess[i]).length;
}
