function howMuchILoveYou(nbPetals) {
  const word = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  return nbPetals % 6 === 0 ? word[5] : word[(nbPetals % 6) - 1];
}
