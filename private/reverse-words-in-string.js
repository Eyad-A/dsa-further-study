// Given a string s, reverse the order of characters in each word within 
// a sentence while still preserving whitespace and initial word order. 
// Input: s = "hello world"
// Output: "olleh dlrow"

// Solution 1
function reverse(str) {
  let res = '';
  let word = '';
  for (let char of str) {
    if (char === ' ') {
      res += word + char;
      word = '';
    } else {
      word = char + word;
    }
  }
  return res + word;
}


// Solution 2
let reverse = (start, end, array) => {
  while(start < end) {
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;
      start++;
      end--; 
  }
}
let reverseWords = function(s) {
  let copy = [...s];
  let i = 0, j = 0;
  while( j < s.length) {
      if( copy[j] === ' ') {
          reverse(i,j-1,copy);
          i = j + 1;
      }
      j++;
  }
  reverse(i,s.length-1,copy);
  return copy.join('');
};