// 1. With a new array 
function sortByParity(nums) {
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArr.push(nums[i]);
    }
  }

  for (let i = 0;i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      newArr.push(nums[i]);
    }
  }

  return newArr;

}

// 2. In place
function sortByParity(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    
    while (nums[left] % 2 == 0) {
      left++;
    }
    
    while (nums[right] % 2 == 1) {
      right--;
    }
    
    if (left < right) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right--;
    }
    
  }
  
  return nums;
  
}


// Given an integer array nums, move all the even integers at the beginning of 
// the array followed by all the odd integers.
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]