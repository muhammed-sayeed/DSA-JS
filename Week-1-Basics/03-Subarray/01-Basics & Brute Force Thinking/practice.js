// 1️⃣ Generate all subarrays (Brute Force)
function printSubarrays(arr){
  let n = arr.length;
  for(let start = 0; start < n; start ++){
    for(let end = start; end < n; end ++){
        console.log(arr.slice(start, end+1));
    }
  }
}
console.log("All subarrays of [1,2,3]:");
printSubarrays([1, 2, 3]);

// -----------------------------------------------------

// 2️⃣ Subarray Sums (Brute Force O(n^2))
function subarraySums(arr){
    let n = arr.length;
    let sums = [];
    for(let start = 0; start < n; start++){
        let sum = 0;
        for(let end = start; end < n; end++){
            sum += arr[end];
            sums.push(sum);
        }
    }
    return sums;
}
console.log("\nSubarray sums of [1,2,3]:");
console.log(subarraySums([1, 2, 3])); 
// Expected: [1,3,6,2,5,3]

// -----------------------------------------------------

// 3️⃣ Prefix Sum Approach
function prefixSums(arr){
    let n = arr.length;
    let prefix = new Array(n);
    prefix[0] = arr[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
    return prefix;
}
let arr = [1, 2, 3, 4];
let prefix = prefixSums(arr);
console.log("\nPrefix sums of [1,2,3,4]:");
console.log(prefix); // [1,3,6,10]

// -----------------------------------------------------

// 📝 Practice:
// 1. Print all subarrays of [1,2,3,4]
// 2. Find total sum of all subarrays of [1,2,3] (Expected 20)
// 3. Using prefix sums, verify queries: [2,3,4] -> 9, [3,4] -> 7