// Unsorted
function intersect(nums1, nums2) {

  const map = {};

  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]]) {
      map[nums1[i]]++
    } else {
      map[nums1[i]] = 1;
    }
  }

  const results = [];

  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] > 0) {
      results.push(nums2[i]);
      map[nums2[i]]--;
    }
  }

  return results;

}

// Sorted
function intersect(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let n1 = 0, n2 = 0;

  const results = [];

  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1] === nums2[n2]) {
      results.push(nums1[n1]);
      n1++;
      n2++;
    } else if (nums1[n1] < nums2[n2]) {
      n1++;
    } else {
      n2++;
    }
  }

  return results;

}


// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]