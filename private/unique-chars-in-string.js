// Input : abcd10jk
// Output : true

// Input : hutg9mnd!nk9
// Output : false

// 1. Using nested loop
function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (i !== j) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
  }
  return true;
}

// 2. Using hashmap 
function isUnique(str) {
  let map = {};
  for (let char of str) {
    if (map[char]) {
      return false;
    } else {
      map[char] = 1;
    }
  }
  return true;
}