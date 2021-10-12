// solution 1
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  };
  return nums;
};

// solution 2
var rotate = function (nums, k) {
  k %= nums.length

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      i++
      j--
    }
  }
  reverse(0, nums.length - 1);
  reverse(0, k - 1)
  reverse(k, nums.length - 1)
};



// Given an array, rotate the array to the right by k steps, where k is non-negative. 
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]