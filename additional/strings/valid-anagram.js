var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      map[t[i]]--;
    } else {
      return false;
    }
  }

  return true;

};

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// isAnagram("anagram", "nagaram") // true 
