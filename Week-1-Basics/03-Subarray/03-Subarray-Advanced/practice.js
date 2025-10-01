// Equilibrium Index Problem
// Time: O(n), Space: O(1)

function equilibriumIndex(arr) {
    let totalSum = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i];
        if (leftSum === rightSum) {
            return i; // Found equilibrium index
        }
        leftSum += arr[i];
    }
    return -1; // No equilibrium index
}

// Example
console.log(equilibriumIndex([1, 3, 5, 2, 2])); // Output: 2

// Subarray Sum Equals K
// Brute Force: O(n^2)
function subarraySumBrute(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === k) count++;
        }
    }
    return count;
}

// Optimized: Prefix Sum + HashMap, O(n)
function subarraySumOptimized(arr, k) {
    let count = 0, prefixSum = 0;
    let map = new Map();
    map.set(0, 1); // base case

    for (let num of arr) {
        prefixSum += num;
        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    return count;
}

// Example
console.log(subarraySumBrute([1, 2, 3], 3));       // Output: 2
console.log(subarraySumOptimized([1, 2, 3], 3));  // Output: 2