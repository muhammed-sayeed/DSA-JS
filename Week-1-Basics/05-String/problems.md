## 1. Palindrome

1. Check if a given string is a palindrome.  
   - [LeetCode - Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)  
   - [LeetCode - Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)  
   - [GeeksForGeeks - Check if a string is palindrome](https://www.geeksforgeeks.org/check-if-a-string-is-palindrome-or-not/)  

2. Reverse a string to check palindrome property.  
   - Example: `"madam" → "madam"`  
   - [LeetCode - Reverse String](https://leetcode.com/problems/reverse-string/)  

3. Check if a sentence (with spaces and punctuation) is palindrome.  
   - Example: `"A man, a plan, a canal: Panama"`
   - Use regex or filtering to ignore non-alphanumeric characters.

---

## 2. Anagrams

1. Check if two strings are anagrams of each other.  
   - [LeetCode - Valid Anagram](https://leetcode.com/problems/valid-anagram/)  
   - [GeeksForGeeks - Check whether two strings are anagram of each other](https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/)  

2. Group words that are anagrams.  
   - [LeetCode - Group Anagrams](https://leetcode.com/problems/group-anagrams/)  

3. Find all anagram pairs in a list of words.  
   - Example: Input: `["cat", "tac", "dog", "god"]` → Output: `[["cat", "tac"], ["dog", "god"]]`

4. Check if two **sentences** are anagrams (ignore spaces and punctuation).  
   - Example: `"Dormitory"` and `"Dirty room!"` 

---

## 3. Advanced / Practice Extensions

1. Find the **longest palindromic substring** in a given string.  
   - [LeetCode - Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)  

2. Check if one string is a rotation of another (string manipulation).  
   - [GeeksForGeeks - Check if a string is rotation of another](https://www.geeksforgeeks.org/check-if-a-string-is-rotation-of-another-string/)  

3. Count the frequency of each character in a string.  
   - Useful for building anagram or palindrome logic.  

4. Check if a string can be rearranged to form a palindrome (Palindrome Permutation).  
   - [LeetCode - Palindrome Permutation](https://leetcode.com/problems/palindrome-permutation/)  

---

**Recommended Practice Flow:**
1. Start with **Valid Palindrome** (simple → regex version).  
2. Move to **Valid Anagram** using sorting & hashmap.  
3. Then solve **Group Anagrams** for better hashing logic.  
4. Finally, try **Longest Palindromic Substring** for advanced challenge.