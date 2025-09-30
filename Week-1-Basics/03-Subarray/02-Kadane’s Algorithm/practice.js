// 1️⃣ Brute Force (O(n^2))
function maxSubarrayBrute(arr) {
    let n = arr.length;
    let maxSum = -Infinity;

    for (let start = 0; start < n; start++) {
        let sum = 0;
        for (let end = start; end < n; end++) {
            sum += arr[end];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}

console.log("Brute Force:");
console.log(maxSubarrayBrute([-2,1,-3,4,-1,2,1,-5,4])); // 6

// -----------------------------------------------------

// 2️⃣ Kadane’s Algorithm (O(n))
function kadane(arr) {
    let currMax = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currMax = Math.max(arr[i], currMax + arr[i]);
        maxSoFar = Math.max(maxSoFar, currMax);
    }

    return maxSoFar;
}

console.log("\nKadane’s Algorithm:");
console.log(kadane([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(kadane([5,4,-1,7,8]));            // 23
console.log(kadane([-3,-2,-5,-1]));           // -1

// -----------------------------------------------------

// 3️⃣ Bonus: Kadane with Subarray Extraction
function kadaneWithSubarray(arr) {
    let currMax = arr[0];
    let maxSoFar = arr[0];

    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currMax + arr[i]) {
            currMax = arr[i];
            tempStart = i;
        } else {
            currMax += arr[i];
        }

        if (currMax > maxSoFar) {
            maxSoFar = currMax;
            start = tempStart;
            end = i;
        }
    }

    return { maxSum: maxSoFar, subarray: arr.slice(start, end + 1) };
}

console.log("\nKadane with subarray:");
console.log(kadaneWithSubarray([1,2,-5,4,3,2,-1])); 
// { maxSum: 9, subarray: [4,3,2] }

// -----------------------------------------------------

// 📝 Practice:
// 1. Test [-2,1,-3,4,-1,2,1,-5,4] → 6
// 2. Test [5,4,-1,7,8] → 23
// 3. Test [-3,-2,-5,-1] → -1
// 4. Bonus: Find subarray itself using kadaneWithSubarray
