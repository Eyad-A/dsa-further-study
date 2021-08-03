function countZeroes(arr) {
  let firstZero = findFirstZero(arr);
  if (firstZero === -1) return 0;
  return arr.length - firstZero;
}

function findFirstZero(arr, start = 0, end = arr.length - 1) {
  if (end >= start) {
    let mid = start + Math.floor((end - start) / 2);
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return findFirstZero(arr, mid + 1, end);
    }
    return findFirstZero(arr, start, mid - 1);
  }
  return -1;
}

module.exports = countZeroes


// countZeroes([1, 1, 1, 1, 0, 0]) // 2
// countZeroes([1, 0, 0, 0, 0]) // 4
// countZeroes([0, 0, 0]) // 3
// countZeroes([1, 1, 1, 1]) // 0