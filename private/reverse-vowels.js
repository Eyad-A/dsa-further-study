// // Given a string s, reverse only all the vowels in the string and return it.
// // The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.
// Input: s = "hello"
// Output: "holle"

// Input: s = "leetcode"
// Output: "leotcede"

function reverseV(str) {
  const vowels = "aeiou";
  let currentVowels = "";
  for (let char of str) {
    if (vowels.includes(char)) currentVowels += char;
  }
  let reversedCurrentVowels = currentVowels.split("").reverse();
  let arr = str.split("");

  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      arr[i] = reversedCurrentVowels[pos];
      pos++;
    }
  }

  let resultStr = arr.join("");

  return resultStr;

}