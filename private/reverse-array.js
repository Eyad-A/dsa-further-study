var reverseString = function (s) {
  for (let [a, b] = [0, s.length - 1]; a < b; a++, b--) {
    [s[a], s[b]] = [s[b], s[a]];
  }
};

// Reverse a string 
// reverseString([1,2,3]) // [3,2,1] 