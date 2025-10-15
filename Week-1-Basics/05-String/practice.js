// ------------------------------
// 1️⃣ Check if a string is Palindrome
// ------------------------------
function isPalindrome(str) {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// ------------------------------
// 2️⃣ Valid Palindrome (Ignore case & symbols)
// ------------------------------
function isValidPalindrome(s) {
    let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
console.log(isValidPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isValidPalindrome("race a car")); // false

// ------------------------------
// 3️⃣ Valid Anagram (HashMap method)
// ------------------------------
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    let count = {};
    for (let char of s) count[char] = (count[char] || 0) + 1;
    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false

// ------------------------------
// 4️⃣ Group Anagrams
// ------------------------------
function groupAnagrams(strs) {
    let map = {};
    for (let str of strs) {
        let key = str.split('').sort().join('');
        if (!map[key]) map[key] = [];
        map[key].push(str);
    }
    return Object.values(map);
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// [["eat","tea","ate"],["tan","nat"],["bat"]]