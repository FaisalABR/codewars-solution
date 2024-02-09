function moveTen(s) {
  return s
    .split("")
    .map((n) =>
      n.charCodeAt() + 10 > 122
        ? String.fromCharCode(n.charCodeAt() - 16)
        : String.fromCharCode(n.charCodeAt() + 10)
    )
    .join("");
}

console.log(moveTen("zzz"));
