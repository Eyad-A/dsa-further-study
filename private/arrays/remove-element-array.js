// // Given an integer array nums and an integer val, 
// // remove all occurrences of val in nums
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// 1. in place, using splice 
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};


// 2. in place, without splice 
var removeElement = function(nums, val) {
  var pos = 0;
  for(let i=0;i<nums.length;i++){
      if(nums[i]!==val){
          nums[pos]=nums[i];
          pos++
      }
  }
  return pos; 
};