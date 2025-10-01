## 🎯 Goal
Understand and solve advanced subarray problems:
1. **Equilibrium Index** → Find index where left sum = right sum.
2. **Subarray Sum Equals K** → Count subarrays whose sum equals `k`.

---

## 📖 Concepts Covered

### 1. Equilibrium Index
- Definition: An index `i` where the sum of elements on the **left** of `i`  
  is equal to the sum of elements on the **right** of `i`.  
- Example:  
  arr = [1, 3, 5, 2, 2]
  Index 2 → left sum = 1+3=4, right sum=2+2=4

  - Approach:
- Compute total sum of array.
- Traverse array while maintaining left sum.
- For each index `i`, right sum = totalSum - leftSum - arr[i].
- If leftSum == rightSum → equilibrium index found.

---

### 2. Subarray Sum Equals K
- Definition: Count the number of subarrays whose sum equals a given `k`.  
- Example:  
  arr = [1, 2, 3], k = 3
  Subarrays: [1,2], [3] → count = 2

- Approaches:
1. **Brute Force** → Generate all subarrays and check sum. (O(n²))
2. **Prefix Sum + HashMap** → Efficient O(n) solution.  
   - Keep cumulative sum while iterating.  
   - For each index, check if `(prefixSum - k)` exists in the map.  
   - If yes, increment count.

---