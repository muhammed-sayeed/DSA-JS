// ===============================
// PRACTICE: Array Rotation
// ===============================

/**
 * Q1: Rotate [1,2,3,4,5] by k=2 (right rotation)
 * Expected Output: [4,5,1,2,3]
 */

// Approach: Reversal Algorithm
function rotateArray(nums, k) {
  let n = nums.length;
  k = k % n;

  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverse(0, n - 1);    // Reverse whole array
  reverse(0, k - 1);    // Reverse first k elements
  reverse(k, n - 1);    // Reverse remaining n-k elements

  return nums;
}

console.log("Q1:", rotateArray([1, 2, 3, 4, 5], 2));
// Output: [4,5,1,2,3]


/**
 * Q2: Rotate left [1,2,3,4,5] by k=2
 * Expected Output: [3,4,5,1,2]
 */
function leftRotateArray(nums, k) {
  let n = nums.length;
  k = k % n;
  return nums.slice(k).concat(nums.slice(0, k));
}

console.log("Q2:", leftRotateArray([1, 2, 3, 4, 5], 2));
// Output: [3,4,5,1,2]
// Explanation: slice from k → end, then start → k


/**
 * Q3: Check if arr2 is a rotation of arr1
 * Example: arr1=[1,2,3,4,5], arr2=[3,4,5,1,2] → true
 */
function isRotation(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return (arr1.concat(arr1).join(",").includes(arr2.join(",")));
}

console.log("Q3:", isRotation([1,2,3,4,5], [3,4,5,1,2])); // true
console.log("Q3:", isRotation([1,2,3,4,5], [4,3,5,1,2])); // false
// Explanation: concatenate arr1 with itself, check if arr2 is substring