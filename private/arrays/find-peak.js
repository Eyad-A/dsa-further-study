var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid+1]) {
            right = mid;
        } else {
            left = mid+1;
        }
    }
    return left;    
};

// A peak element is an element that is strictly greater than its neighbors.
// Given an integer array nums, find a peak element, and return its index. 
// If the array contains multiple peaks, return the index to any of the peaks. 

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2. 

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, 
// or index number 5 where the peak element is 6.
// 



// Gavin's solution 

// Gavin's solution 
/**
 *
 * Given an array nums, determine where the "peaks" of
 * the array are located
 *
 * Peaks = [i-1] < [i] > [i+1] || [i+1] > [i] < [i+1]
 *
 *
 * return a list containing the indexes of the peaks
 * and valleys
 *
 * [3, 7, 9, 8, 10, 20]
 *                        /
 *            -       /
 *                \
 *        /
 *    /
 * /
 * left
 *
 *
 *
 */

//[1, 3, 2, 5, 3]
const findPeaks = (nums) => {
    let result = [];
    for (let i = 1; i < nums.length - 1; i++) {
      if (
        (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) ||
        (nums[i] < nums[i - 1] && nums[i] < nums[i + 1])
      ) {
        result.push(i);
      }
    }
    return result;
  };
  
  /*
  [1,2,3,2,1]
   ^       ^
  left 
  right
  mid
  1) if mid > mid+1 => right = mid
  2) i mid < mid-1 => left = mid+1
  
   */