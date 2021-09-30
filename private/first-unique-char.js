// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1
// Input: s = "loveleetcode"
// Output: 2
// Input: s = "aabb"
// Output: -1

function findUnique(str) {
  let map = {};
  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }
  for (let char of str) {
    if (map[char] === 1) {
      return str.indexOf(char);
    }
  }
  return -1;
}