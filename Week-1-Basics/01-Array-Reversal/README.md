# Array Reversal

Reversing an array means changing the order of elements so that the first element becomes the last, and the last becomes the first.

---

## Approaches

1. **Using Extra Space (O(n))**
   - Create a new array and fill it from the end of the original array.
   - Simple but requires additional memory.

2. **In-place Reversal (O(n), O(1))**
   - Use two pointers (`start` and `end`).
   - Swap elements until they meet in the middle.
   - Optimal solution.

---

## Example

Input:
arr = [1, 2, 3, 4, 5]

Output:
[5, 4, 3, 2, 1]