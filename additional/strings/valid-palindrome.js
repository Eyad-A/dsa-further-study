// // Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Input: "hannah"
// Output: true

// solution 1, letters only 
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}


// solution 2, special chars, using regex
function isPalindrome(str) {
  let regex = /[^a-z0-9$]/gi;
  let cleaned = [...str.toLowerCase().replace(regex, "")];
  
  let left = 0, right = cleaned.length-1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  } 
  return true;
}

// Problem 2:
/**
 * Given a string, return whether it is a palindrome
 * hannah
 *   ^^
 * left pointer
 * right pointer
 * while left < right
 * if left = right
 *  left++ right--
 * if left != right
 *  return false
 *  return true
 */

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

//hannah => anna => nn
function isPalindromeRecursive(str) {
  if (str.length < 2) return true;

  let left = 0;
  let right = str.length - 1;
  if (str[left] !== str[right]) {
    return false;
  } else {
    // "hello" (1, 4) => "ell"
    // str = str.slice(1, str.length-2);
    let result = "";
    for (let i = 1; i < str.length - 1; i++) {
      result += str[i];
    }
    return isPalindromeRecursive(result);
  }
}

console.log(isPalindromeRecursive("hannah"));