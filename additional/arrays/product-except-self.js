// Given an integer array nums, return an array answer such that answer[i] 
// is equal to the product of all the elements of nums except nums[i] 

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6] 


// Method 1 - no runtime requirements
function productExceptSelf(nums) {
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
      let product = 1;
      for (let j = 0; j < nums.length; j++) {
          if (i !== j) {
              product = product * nums[j];
          }
      }
      newArr.push(product);
  }
  return newArr;
}  


// Method 2 - o(n) 
// function productExceptSelf2(nums) {
//     // product(n) / nums[i]
//    total = 1
//    for i in nums:
//      total = nums[i] * total
  
//    newArray = array()
  
//    for i in newArray:
//      newArray[i] = total / nums[i] 
//       // 1 * 2 * 3 * 4 / 1
//       // 1 * 2 * 3 * 4 / 2
//       // 1 * 2 * 3 * 4 / 3
// }
function product2(nums) {
  let total = 1;
  
  for (let i = 0; i < nums.length; i++) {
    total = total * nums[i];
  }
  
  let newArr = [];
  
  for (let i = 0; i < nums.length; i++) {
    newArr.push(total / nums[i]);
  }
  
  return newArr;
  
}
