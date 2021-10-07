var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  };
  return nums;
}; 

// Given an array, rotate the array to the right by k steps, where k is non-negative. 
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]