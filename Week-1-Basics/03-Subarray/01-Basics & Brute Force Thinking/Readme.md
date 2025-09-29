# 📅 Day 1 – Subarray Fundamentals

### 🎯 Goal
Understand what subarrays are, how to generate them, and how to calculate subarray sums (Brute Force → Prefix Sum).

---

## 🔹 What is a Subarray?
A **subarray** is a contiguous part of an array.  
- Example: For `[1, 2, 3]`, subarrays are:
  `[1], [1,2], [1,2,3], [2], [2,3], [3]`.

⚠️ `[1,3]` is NOT a subarray (not contiguous).

---

## 🔹 Step 1: Generating Subarrays (Brute Force)
We use two loops: pick a start index, then expand till end index.

---

## 🔹 Step 2: Subarray Sum (Brute Force)
For each subarray, compute sum directly.  
- Complexity: **O(n²)**.

---

## 🔹 Step 3: Prefix Sum Optimization
Instead of recalculating sums, use prefix array:
prefix[i] = arr[0] + arr[1] + … + arr[i]