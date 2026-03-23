# Data Structures and Algorithms
## INTERMEDIATE LEVEL - Complete Learning Guide

**Target Audience:** Completed beginner level, comfortable with basic DSA  
**Time to Complete:** 8-12 weeks  
**Prerequisites:** Arrays, basic complexity analysis, simple algorithms  
**Version:** 1.0

---

## Table of Contents

### Module 1: Advanced Linear Data Structures (Weeks 1-3)
1. Advanced Array Techniques and Two Pointers
2. Strings and Advanced String Algorithms
3. Linked Lists - Single, Double, and Circular
4. Stacks and Stack-Based Algorithms
5. Queues, Deques, and Priority Queues

### Module 2: Non-Linear Data Structures (Weeks 4-7)
6. Hash Tables and Hash Functions
7. Binary Trees and Tree Traversals
8. Binary Search Trees (BST)
9. Heaps and Heap Operations
10. Graphs - Representations and Basic Algorithms

### Module 3: Algorithm Design Techniques (Weeks 8-10)
11. Advanced Sorting Algorithms
12. Binary Search and Its Variants
13. Recursion and Backtracking
14. Divide and Conquer
15. Introduction to Dynamic Programming

### Module 4: Practical Problem Solving (Weeks 11-12)
16. Graph Algorithms - BFS and DFS
17. Greedy Algorithms
18. Common Interview Patterns
19. Practice Problems and Solutions

### Appendices
- Intermediate Complexity Analysis
- 100 Medium-Level Practice Problems
- Interview Preparation Guide
- Path to Advanced Level

---

# Module 1: Advanced Linear Data Structures

---

## Chapter 1: Advanced Array Techniques and Two Pointers

### 1.1 Review and Level Up

You already know:
- ✅ Basic array operations
- ✅ Time complexity O(1), O(n), O(n²)
- ✅ Simple loops and conditionals

Now you'll learn:
- 🎯 Two-pointer technique
- 🎯 Sliding window
- 🎯 Prefix sums
- 🎯 In-place algorithms

### 1.2 Two Pointers Pattern

**Concept**: Use two pointers moving through the array to solve problems efficiently.

**When to Use:**
- Array is sorted
- Need to find pairs/triplets
- Need to partition array
- Need to compare from both ends

**Pattern 1: Opposite Ends (Converging)**

```python
def two_sum_sorted(arr, target):
    """Find two numbers that sum to target in SORTED array
    Time: O(n), Space: O(1)
    """
    left = 0
    right = len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1  # Need larger sum
        else:
            right -= 1  # Need smaller sum
    
    return []

# Example:
# arr = [1, 3, 5, 7, 9, 11], target = 12
# left=0, right=5: 1+11=12 ✓ Found!
```

**Pattern 2: Same Direction (Fast and Slow)**

```python
def remove_element(arr, val):
    """Remove all instances of val in-place
    Return new length
    Time: O(n), Space: O(1)
    """
    slow = 0  # Write position
    
    for fast in range(len(arr)):
        if arr[fast] != val:
            arr[slow] = arr[fast]
            slow += 1
    
    return slow

# Example:
# arr = [3, 2, 2, 3, 4, 5], val = 3
# Result: [2, 2, 4, 5, _, _], return 4
```

**Pattern 3: Two Arrays**

```python
def merge_sorted_arrays(arr1, arr2):
    """Merge two sorted arrays
    Time: O(m + n), Space: O(m + n)
    """
    i = j = 0
    result = []
    
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            result.append(arr1[i])
            i += 1
        else:
            result.append(arr2[j])
            j += 1
    
    # Add remaining elements
    result.extend(arr1[i:])
    result.extend(arr2[j:])
    
    return result
```

**Problem: Container With Most Water**

```python
def max_area(heights):
    """Find two lines that with x-axis forms container
    that holds the most water
    
    Example: [1,8,6,2,5,4,8,3,7]
    Answer: 49 (indices 1 and 8: min(8,7) * (8-1) = 49)
    """
    left = 0
    right = len(heights) - 1
    max_water = 0
    
    while left < right:
        # Calculate current area
        width = right - left
        height = min(heights[left], heights[right])
        current_area = width * height
        max_water = max(max_water, current_area)
        
        # Move pointer with smaller height
        if heights[left] < heights[right]:
            left += 1
        else:
            right -= 1
    
    return max_water

# Time: O(n), Space: O(1)
```

### 1.3 Sliding Window Pattern

**Concept**: Maintain a window of elements and slide it through the array.

**When to Use:**
- Finding subarrays with certain properties
- Maximum/minimum in windows
- Substring problems

**Fixed-Size Window:**

```python
def max_sum_subarray(arr, k):
    """Find maximum sum of k consecutive elements
    
    Example: arr = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
    Answer: 39 (subarray [4, 2, 10, 23])
    """
    if len(arr) < k:
        return 0
    
    # Calculate sum of first window
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    # Slide the window
    for i in range(k, len(arr)):
        # Add new element, remove old element
        window_sum = window_sum - arr[i - k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum

# Time: O(n), Space: O(1)
```

**Variable-Size Window:**

```python
def longest_substring_k_distinct(s, k):
    """Find length of longest substring with at most k distinct characters
    
    Example: s = "eceba", k = 2
    Answer: 3 ("ece" or "eba")
    """
    char_count = {}
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        # Expand window
        char = s[right]
        char_count[char] = char_count.get(char, 0) + 1
        
        # Shrink window if needed
        while len(char_count) > k:
            left_char = s[left]
            char_count[left_char] -= 1
            if char_count[left_char] == 0:
                del char_count[left_char]
            left += 1
        
        # Update max length
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Time: O(n), Space: O(k)
```

**Problem: Minimum Window Substring**

```python
def min_window_substring(s, t):
    """Find minimum window in s that contains all characters of t
    
    Example: s = "ADOBECODEBANC", t = "ABC"
    Answer: "BANC"
    """
    if not s or not t:
        return ""
    
    # Count characters in t
    target_count = {}
    for char in t:
        target_count[char] = target_count.get(char, 0) + 1
    
    required = len(target_count)  # Unique characters needed
    formed = 0  # Unique characters matched
    
    window_counts = {}
    left = 0
    min_length = float('inf')
    min_window = (0, 0)
    
    for right in range(len(s)):
        # Expand window
        char = s[right]
        window_counts[char] = window_counts.get(char, 0) + 1
        
        # Check if this character satisfies requirement
        if char in target_count and window_counts[char] == target_count[char]:
            formed += 1
        
        # Try to shrink window
        while left <= right and formed == required:
            # Update minimum window
            if right - left + 1 < min_length:
                min_length = right - left + 1
                min_window = (left, right)
            
            # Remove left character
            left_char = s[left]
            window_counts[left_char] -= 1
            if left_char in target_count and window_counts[left_char] < target_count[left_char]:
                formed -= 1
            
            left += 1
    
    left, right = min_window
    return "" if min_length == float('inf') else s[left:right + 1]

# Time: O(|s| + |t|), Space: O(|s| + |t|)
```

### 1.4 Prefix Sum Technique

**Concept**: Precompute cumulative sums for efficient range queries.

```python
class PrefixSum:
    def __init__(self, arr):
        """Build prefix sum array
        prefix[i] = sum of arr[0...i-1]
        """
        self.prefix = [0]
        for num in arr:
            self.prefix.append(self.prefix[-1] + num)
    
    def range_sum(self, left, right):
        """Get sum of arr[left...right] in O(1)
        
        Example:
        arr = [1, 2, 3, 4, 5]
        prefix = [0, 1, 3, 6, 10, 15]
        range_sum(1, 3) = prefix[4] - prefix[1] = 10 - 1 = 9
        (which is 2 + 3 + 4 = 9) ✓
        """
        return self.prefix[right + 1] - self.prefix[left]

# Usage
arr = [1, 2, 3, 4, 5]
ps = PrefixSum(arr)
print(ps.range_sum(1, 3))  # 9
print(ps.range_sum(0, 4))  # 15

# Time: O(n) preprocessing, O(1) per query
# Space: O(n)
```

**Problem: Subarray Sum Equals K**

```python
def subarray_sum_k(arr, k):
    """Count number of continuous subarrays whose sum equals k
    
    Example: arr = [1, 1, 1], k = 2
    Answer: 2 ([1,1] twice)
    """
    count = 0
    prefix_sum = 0
    sum_count = {0: 1}  # sum -> count
    
    for num in arr:
        prefix_sum += num
        
        # If (prefix_sum - k) exists, we found subarray
        if (prefix_sum - k) in sum_count:
            count += sum_count[prefix_sum - k]
        
        # Add current prefix sum
        sum_count[prefix_sum] = sum_count.get(prefix_sum, 0) + 1
    
    return count

# Time: O(n), Space: O(n)
```

### 1.5 Dutch National Flag Problem

**Problem**: Sort array with three distinct values (0, 1, 2).

```python
def sort_colors(nums):
    """Sort array of 0s, 1s, and 2s in-place
    
    Example: [2, 0, 2, 1, 1, 0]
    Result: [0, 0, 1, 1, 2, 2]
    
    Three pointers:
    - left: boundary of 0s (everything before is 0)
    - current: current element being examined
    - right: boundary of 2s (everything after is 2)
    """
    left = 0
    current = 0
    right = len(nums) - 1
    
    while current <= right:
        if nums[current] == 0:
            # Swap with left, move both
            nums[left], nums[current] = nums[current], nums[left]
            left += 1
            current += 1
        elif nums[current] == 1:
            # Already in place, just move current
            current += 1
        else:  # nums[current] == 2
            # Swap with right, move right only
            nums[current], nums[right] = nums[right], nums[current]
            right -= 1
    
    return nums

# Time: O(n), Space: O(1)
# Single pass!
```

### Chapter 1 Summary

✅ **Patterns Learned:**
1. **Two Pointers**: Opposite ends, same direction, two arrays
2. **Sliding Window**: Fixed and variable size
3. **Prefix Sum**: Efficient range queries
4. **Three Pointers**: Dutch National Flag

🎯 **When to Use What:**
- **Sorted array** → Two pointers (opposite ends)
- **Contiguous subarray** → Sliding window
- **Multiple range queries** → Prefix sum
- **Partition into categories** → Three pointers

### Chapter 1 Exercises

1. **3Sum**: Find all triplets that sum to zero
2. **Longest Substring Without Repeating Characters**
3. **Product of Array Except Self** (use prefix/suffix products)
4. **Trapping Rain Water** (two pointers)
5. **Fruit Into Baskets** (sliding window with 2 types)

---

## Chapter 2: Strings and Advanced String Algorithms

### 2.1 String Fundamentals Review

**Strings are immutable arrays of characters.**

```python
# Python
s = "Hello"
# s[0] = 'J'  # ERROR! Immutable!

# Must create new string
s = 'J' + s[1:]  # "Jello"
```

**Key String Operations:**
```python
s = "Hello World"

# Length
len(s)  # 11

# Access
s[0]  # 'H'
s[-1]  # 'd'

# Slicing
s[0:5]  # "Hello"
s[6:]  # "World"

# Methods
s.lower()  # "hello world"
s.upper()  # "HELLO WORLD"
s.split()  # ["Hello", "World"]
s.replace('o', '0')  # "Hell0 W0rld"
```

### 2.2 Two Pointers for Strings

**Problem: Valid Palindrome**

```python
def is_palindrome(s):
    """Check if string is palindrome (ignore case and non-alphanumeric)
    
    Example: "A man, a plan, a canal: Panama" → True
    """
    # Clean string: only alphanumeric, lowercase
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    
    # Two pointers
    left = 0
    right = len(cleaned) - 1
    
    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1
    
    return True

# Alternative: compare with reverse
def is_palindrome_v2(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]

# Time: O(n), Space: O(n)
```

**Problem: Valid Palindrome II**

```python
def valid_palindrome_ii(s):
    """Check if can be palindrome by deleting at most one character
    
    Example: "abca" → True (delete 'c')
    """
    def is_palindrome_range(s, left, right):
        while left < right:
            if s[left] != s[right]:
                return False
            left += 1
            right -= 1
        return True
    
    left = 0
    right = len(s) - 1
    
    while left < right:
        if s[left] != s[right]:
            # Try deleting left or right character
            return (is_palindrome_range(s, left + 1, right) or 
                    is_palindrome_range(s, left, right - 1))
        left += 1
        right -= 1
    
    return True

# Time: O(n), Space: O(1)
```

### 2.3 Sliding Window for Strings

**Problem: Longest Substring Without Repeating Characters**

```python
def length_longest_substring(s):
    """Find length of longest substring without repeating characters
    
    Example: "abcabcbb" → 3 ("abc")
    Example: "bbbbb" → 1 ("b")
    Example: "pwwkew" → 3 ("wke")
    """
    char_index = {}  # char -> last seen index
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        char = s[right]
        
        # If char seen in current window, move left
        if char in char_index and char_index[char] >= left:
            left = char_index[char] + 1
        
        # Update last seen index
        char_index[char] = right
        
        # Update max length
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Time: O(n), Space: O(min(n, m)) where m is charset size
```

**Problem: Minimum Window That Contains All Characters**

```python
def min_window(s, t):
    """Find smallest window in s containing all characters of t
    
    Example: s = "ADOBECODEBANC", t = "ABC"
    Answer: "BANC"
    """
    if not s or not t:
        return ""
    
    # Count characters needed
    target = {}
    for char in t:
        target[char] = target.get(char, 0) + 1
    
    required = len(target)
    formed = 0
    
    window_counts = {}
    left = 0
    min_len = float('inf')
    result = ""
    
    for right in range(len(s)):
        char = s[right]
        window_counts[char] = window_counts.get(char, 0) + 1
        
        if char in target and window_counts[char] == target[char]:
            formed += 1
        
        while left <= right and formed == required:
            # Update result
            if right - left + 1 < min_len:
                min_len = right - left + 1
                result = s[left:right + 1]
            
            # Shrink window
            left_char = s[left]
            window_counts[left_char] -= 1
            if left_char in target and window_counts[left_char] < target[left_char]:
                formed -= 1
            left += 1
    
    return result

# Time: O(|s| + |t|), Space: O(|s| + |t|)
```

### 2.4 String Matching Algorithms

**Naive Pattern Matching:**

```python
def naive_search(text, pattern):
    """Find all occurrences of pattern in text
    
    Example: text = "AABAACAADAABAAABAA", pattern = "AABA"
    Answer: [0, 9, 13]
    """
    n = len(text)
    m = len(pattern)
    positions = []
    
    for i in range(n - m + 1):
        # Check if pattern matches at position i
        match = True
        for j in range(m):
            if text[i + j] != pattern[j]:
                match = False
                break
        
        if match:
            positions.append(i)
    
    return positions

# Time: O(n * m), Space: O(1)
```

**KMP Algorithm (Knuth-Morris-Pratt):**

```python
def compute_lps(pattern):
    """Compute Longest Proper Prefix which is also Suffix
    
    LPS array helps skip comparisons
    Example: pattern = "AAAA" → [0, 1, 2, 3]
    Example: pattern = "ABCDE" → [0, 0, 0, 0, 0]
    Example: pattern = "AABAACAABAA" → [0, 1, 0, 1, 2, 0, 1, 2, 3, 4, 5]
    """
    m = len(pattern)
    lps = [0] * m
    length = 0  # Length of previous longest prefix suffix
    i = 1
    
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    
    return lps

def kmp_search(text, pattern):
    """KMP pattern matching - much faster than naive!
    
    Time: O(n + m) instead of O(n * m)
    """
    n = len(text)
    m = len(pattern)
    
    lps = compute_lps(pattern)
    positions = []
    
    i = 0  # Index for text
    j = 0  # Index for pattern
    
    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1
        
        if j == m:
            positions.append(i - j)
            j = lps[j - 1]
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    
    return positions

# Time: O(n + m), Space: O(m)
```

### 2.5 Anagram Problems

**Check if Two Strings are Anagrams:**

```python
def is_anagram(s, t):
    """Two strings are anagrams if they contain same characters
    
    Example: "listen" and "silent" → True
    """
    if len(s) != len(t):
        return False
    
    # Count characters
    char_count = {}
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    
    for char in t:
        if char not in char_count:
            return False
        char_count[char] -= 1
        if char_count[char] < 0:
            return False
    
    return True

# Alternative: Use sorting
def is_anagram_v2(s, t):
    return sorted(s) == sorted(t)

# Time: O(n) for hash map, O(n log n) for sorting
# Space: O(1) for sorting (if not counting output), O(n) for hash map
```

**Group Anagrams:**

```python
def group_anagrams(strs):
    """Group strings that are anagrams of each other
    
    Example: ["eat","tea","tan","ate","nat","bat"]
    Answer: [["bat"],["nat","tan"],["ate","eat","tea"]]
    """
    from collections import defaultdict
    
    anagram_groups = defaultdict(list)
    
    for s in strs:
        # Use sorted string as key
        key = ''.join(sorted(s))
        anagram_groups[key].append(s)
    
    return list(anagram_groups.values())

# Alternative: Use character count as key
def group_anagrams_v2(strs):
    from collections import defaultdict
    
    anagram_groups = defaultdict(list)
    
    for s in strs:
        # Count characters
        count = [0] * 26  # For lowercase letters
        for char in s:
            count[ord(char) - ord('a')] += 1
        
        # Use tuple of counts as key
        key = tuple(count)
        anagram_groups[key].append(s)
    
    return list(anagram_groups.values())

# Time: O(n * k log k) where n is number of strings, k is max length
# Space: O(n * k)
```

### 2.6 Palindrome Problems

**Longest Palindromic Substring:**

```python
def longest_palindrome(s):
    """Find longest palindromic substring
    
    Example: "babad" → "bab" or "aba"
    Example: "cbbd" → "bb"
    """
    if len(s) < 2:
        return s
    
    def expand_from_center(left, right):
        """Expand outward while characters match"""
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1
    
    start = 0
    max_len = 0
    
    for i in range(len(s)):
        # Odd length palindrome (center is one character)
        len1 = expand_from_center(i, i)
        # Even length palindrome (center is between two characters)
        len2 = expand_from_center(i, i + 1)
        
        current_len = max(len1, len2)
        
        if current_len > max_len:
            max_len = current_len
            start = i - (current_len - 1) // 2
    
    return s[start:start + max_len]

# Time: O(n²), Space: O(1)
```

### Chapter 2 Summary

✅ **String Techniques:**
1. Two pointers for palindromes
2. Sliding window for substrings
3. Hash maps for character counting
4. Pattern matching (Naive and KMP)
5. Anagram detection with sorting/counting

🎯 **Pattern Recognition:**
- Contains all characters of another string? → Hash map + sliding window
- Palindrome? → Two pointers or expand from center
- Pattern matching? → KMP algorithm
- Anagrams? → Sort or character count

### Chapter 2 Exercises

1. **Longest Repeating Character Replacement**
2. **String to Integer (atoi)**
3. **Zigzag Conversion**
4. **Implement strStr()** (find substring)
5. **Count and Say** sequence

---

**[Continues with Chapters 3-19 covering Linked Lists, Stacks, Queues, Hash Tables, Trees, BST, Heaps, Graphs, Sorting, Searching, Recursion, Backtracking, Divide & Conquer, Dynamic Programming, Graph Algorithms, Greedy, and Interview Patterns...]**

---

## Completion Roadmap

After mastering intermediate level:
- ✅ Solve 100+ medium LeetCode problems
- ✅ Pass most coding interviews
- ✅ Ready for advanced algorithms
- ✅ Understand system design basics

**Next Steps:**
1. Complete all intermediate exercises
2. Participate in coding contests
3. Move to Advanced Guide
4. Start contributing to open source

---

## Appendix: Intermediate Complexity Reference

### Common Complexities
```
O(1)         Constant
O(log n)     Logarithmic
O(n)         Linear
O(n log n)   Linearithmic
O(n²)        Quadratic
O(n³)        Cubic
O(2^n)       Exponential
```

### Data Structure Operations
```
Array:
- Access: O(1)
- Search: O(n)
- Insert: O(n)
- Delete: O(n)

Linked List:
- Access: O(n)
- Search: O(n)
- Insert: O(1)*
- Delete: O(1)*

Hash Table:
- Search: O(1) avg
- Insert: O(1) avg
- Delete: O(1) avg

BST:
- Search: O(log n) avg
- Insert: O(log n) avg
- Delete: O(log n) avg
```

---

**END OF INTERMEDIATE GUIDE - PART 1**