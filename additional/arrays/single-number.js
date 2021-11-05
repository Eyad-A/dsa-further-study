var singleNumber = function (nums) {
  const map = {};

  for (let num of nums) {
    if (map[num] == null) map[num] = 0;
    map[num]++;
  }

  for (let num in map) {
    if (map[num] === 1) return Number(num);
  }
};

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Input: nums = [2,2,1]
// Output: 1