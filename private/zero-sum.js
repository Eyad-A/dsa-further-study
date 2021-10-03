// Find the first pair where the sum is zero. 
// [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6] => [-3, 3] 

function zeroSum(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === 0) return [nums[left], nums[right]];
    if (nums[left] + nums[right] > 0) right--;
    if (nums[left] + nums[right] < 0) left++;
  }
}