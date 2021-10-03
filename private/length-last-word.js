// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
// Input: s = "Hello World"
// Output: 5

function lastWord(str) {
  str = str.trim();
  if (str.length === 1) return 1;
  let lastWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
      return lastWord.length;
    } else {
      lastWord = str[i] + lastWord;
    }
  }
  return lastWord.length;
}

