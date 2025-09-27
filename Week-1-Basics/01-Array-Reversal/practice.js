// ===============================
// PRACTICE: Array Reversal
// ===============================

/**
 * Q1: Reverse an array [1,2,3,4,5]
 * Expected Output: [5,4,3,2,1]
 */

// Approach: In-Place (Two pointer swap method) 

function reverseArray(arr) {
   let start = 0, end = arr.length - 1;
   while(start < end){
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start ++;
    end --
   }
   return arr;
}
console.log("Q1:", reverseArray([1, 2, 3, 4, 5])); 
// Output: [5,4,3,2,1]

// Extra Space
function reverse_Array(arr) {
  let n = arr.length;
  const result = [];
  for(let i = n-1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log("Q2:", reverse_Array([1, 2, 3, 4, 5])); 
// Output: [5,4,3,2,1]