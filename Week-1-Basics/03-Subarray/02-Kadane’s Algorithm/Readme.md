### 🎯 Goal
Learn how to find the **maximum sum subarray** — the contiguous part of the array with the largest possible sum.  

We will study two approaches:
1. **Brute Force (O(n²))**  
   - Generate all subarrays and calculate their sums.  
   - Simple but inefficient for large arrays.  

2. **Kadane’s Algorithm (O(n))**  
   - Dynamic approach that decides at each step whether to **extend the previous subarray** or **start a new one**.  
   - Efficient and works even for arrays with negative numbers.  