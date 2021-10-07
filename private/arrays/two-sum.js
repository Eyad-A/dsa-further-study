// Two pass 
function twoSums(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    let found = map[difference];
    if (found !== undefined && found !== i) return [i, found];
  }

  return [0,0];
}


// One pass
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