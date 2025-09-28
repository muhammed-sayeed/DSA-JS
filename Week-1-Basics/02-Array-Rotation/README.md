# Array Rotation

Array rotation means shifting elements of the array to the left or right.

---

## Types

1. **Left Rotation (by k)**
   - Move each element `k` positions to the left.
   - Example: `[1,2,3,4,5], k=2 → [3,4,5,1,2]`

2. **Right Rotation (by k)**
   - Move each element `k` positions to the right.
   - Example: `[1,2,3,4,5], k=2 → [4,5,1,2,3]`

---

## Approaches

1. **Brute Force (O(n*k))**
   - Rotate one step at a time.

2. **Using Extra Space (O(n))**
   - Place elements in a new array at rotated positions.

3. **Optimal (O(n), O(1)) → Reversal Algorithm**
   - Reverse parts of the array:
     - Reverse full array
     - Reverse first `k` elements
     - Reverse last `n-k` elements

---
