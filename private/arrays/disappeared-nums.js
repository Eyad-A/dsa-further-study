// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

function missingNums(nums) {
  let results = [];
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  console.log(map);

  for (let i = 1; i <= nums.length; i++) {
    if (!map.hasOwnProperty(i)) results.push(i);
  }

  return results;

}