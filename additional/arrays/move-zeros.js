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

// 2. In-place, disregarding order of numbers
function moveZeros(nums) {
  let left = 0;
  let right = nums.length-1;
  
  while (left < right) {
    if (nums[left] === 0 && nums[right] === 0) {
      right--;
    }
    if (nums[left] === 0 && nums[right] !== 0) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
    if (nums[left] !== 0 && nums[right] === 0) {
      left++;
      right--;
    }
    if (nums[left] !== 0 && nums[right] !== 0) {
      left++;
    }
  }
  
  return nums;
  
}


// 2. In-place, keeping order of numbers 
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

// 2. In-place, another method
function moveZeros(nums) {
  for (let i = nums.length-1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
    }
  }
  return nums;
}


// Given an integer array nums, move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements. 
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]