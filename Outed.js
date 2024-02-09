function outed(meet, boss) {
  const overall =
    (Object.values(meet).reduce((val, curr) => val + curr) + meet[boss]) /
    Object.keys(meet).length;

  return overall <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
