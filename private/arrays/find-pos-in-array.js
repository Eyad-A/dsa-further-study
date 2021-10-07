// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the 
// index where it would be if it were inserted in order.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// 1. O(n)
function findPos(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return arr.indexOf(arr[i]);
    } else if (target > arr[i] && target < arr[i + 1]) {
      return i + 1;
    }
  }
}


// 2. O(log n)
function findPos(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left+right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid+1;
    if (arr[mid] > target) right = mid-1;
  }
  return left;
}