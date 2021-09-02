// 1. Using a new array 
function moveZeros(nums) {
  const newNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      newNums.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      newNums.push(nums[i]);
    }
  }

  return newNums;

}


// 2. In-place 
function moveZeros(nums) {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;

}


// Given an integer array nums, move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements. 
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]