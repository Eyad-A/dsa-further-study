// Increment the large integer by one and return the resulting array of digits.

// [1,2,3] => [1,2,4]
// [1,2,9] => [1,3,0]
// [9,9,9] => [1,0,0,0]

function plusOne(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++;
      return arr;
    } else {
      arr[i] = 0;
    }
  }
  arr.unshift(1);
  return arr;
}