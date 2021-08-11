function sum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (difference in map) {
      return true;
    }

    map[nums[i]] = i;
  }

  return false;
}

// Given an array of unique numbers and a number,
// return true if there exists a pair of numbers in the array that sum to the
// number given? 

// sum([2,3,5,9], 7) // true 
// sum([2,3,5,9], 99); // false 