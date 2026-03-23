# Data Structures and Algorithms
## ADVANCED LEVEL - Complete Learning Guide

**Target Audience:** Completed intermediate level, competitive programmers, senior engineers  
**Time to Complete:** 12-16 weeks  
**Prerequisites:** All intermediate topics, strong problem-solving skills  
**Version:** 1.0

---

## Table of Contents

### Module 1: Advanced Data Structures (Weeks 1-4)
1. Advanced Tree Structures (AVL, Red-Black, B-Trees)
2. Segment Trees and Fenwick Trees
3. Trie and Suffix Trees/Arrays
4. Disjoint Set Union (Union-Find)
5. Advanced Graph Structures

### Module 2: Advanced Algorithms (Weeks 5-8)
6. Advanced Dynamic Programming
7. Advanced Graph Algorithms
8. Network Flow Algorithms
9. String Algorithms (KMP, Rabin-Karp, Z-Algorithm)
10. Computational Geometry

### Module 3: Algorithm Design & Optimization (Weeks 9-12)
11. Bit Manipulation and Bitmasking
12. Meet in the Middle
13. Game Theory and Minimax
14. Randomized Algorithms
15. Parallel Algorithms

### Module 4: Advanced Problem Solving (Weeks 13-16)
16. Hard Interview Problems
17. Competitive Programming Techniques
18. System Design Considerations
19. Optimization Techniques

### Appendices
- Advanced Complexity Analysis (Amortized, Expected)
- 150 Hard Practice Problems
- Competitive Programming Guide
- Research Topics in Algorithms

---

# Module 1: Advanced Data Structures

---

## Chapter 1: Advanced Tree Structures

### 1.1 Self-Balancing Trees Overview

**Why Self-Balancing?**

Regular BST can degenerate to O(n) operations:
```
Worst case (linked list):
    1
     \
      2
       \
        3
         \
          4
Height = n, Search = O(n)
```

**Self-balancing trees maintain O(log n) height!**

### 1.2 AVL Trees

**AVL Invariant**: For every node, heights of left and right subtrees differ by at most 1.

```python
class AVLNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def get_height(self, node):
        if not node:
            return 0
        return node.height
    
    def get_balance(self, node):
        if not node:
            return 0
        return self.get_height(node.left) - self.get_height(node.right)
    
    def update_height(self, node):
        if not node:
            return
        node.height = 1 + max(self.get_height(node.left),
                              self.get_height(node.right))
    
    def rotate_right(self, y):
        """Right rotation
        
            y              x
           / \            / \
          x   C   -->    A   y
         / \                / \
        A   B              B   C
        """
        x = y.left
        B = x.right
        
        # Perform rotation
        x.right = y
        y.left = B
        
        # Update heights
        self.update_height(y)
        self.update_height(x)
        
        return x
    
    def rotate_left(self, x):
        """Left rotation
        
          x                y
         / \              / \
        A   y    -->     x   C
           / \          / \
          B   C        A   B
        """
        y = x.right
        B = y.left
        
        # Perform rotation
        y.left = x
        x.right = B
        
        # Update heights
        self.update_height(x)
        self.update_height(y)
        
        return y
    
    def insert(self, node, val):
        """Insert with balancing
        
        1. Normal BST insert
        2. Update height
        3. Get balance factor
        4. Perform rotations if needed
        """
        # Step 1: Normal BST insert
        if not node:
            return AVLNode(val)
        
        if val < node.val:
            node.left = self.insert(node.left, val)
        elif val > node.val:
            node.right = self.insert(node.right, val)
        else:
            return node  # Duplicate values not allowed
        
        # Step 2: Update height
        self.update_height(node)
        
        # Step 3: Get balance factor
        balance = self.get_balance(node)
        
        # Step 4: Balance if needed
        # Left-Left Case
        if balance > 1 and val < node.left.val:
            return self.rotate_right(node)
        
        # Right-Right Case
        if balance < -1 and val > node.right.val:
            return self.rotate_left(node)
        
        # Left-Right Case
        if balance > 1 and val > node.left.val:
            node.left = self.rotate_left(node.left)
            return self.rotate_right(node)
        
        # Right-Left Case
        if balance < -1 and val < node.right.val:
            node.right = self.rotate_right(node.right)
            return self.rotate_left(node)
        
        return node
    
    def delete(self, node, val):
        """Delete with balancing"""
        if not node:
            return node
        
        # Step 1: Normal BST delete
        if val < node.val:
            node.left = self.delete(node.left, val)
        elif val > node.val:
            node.right = self.delete(node.right, val)
        else:
            # Node to be deleted found
            if not node.left:
                return node.right
            elif not node.right:
                return node.left
            
            # Node with two children
            temp = self.get_min_value_node(node.right)
            node.val = temp.val
            node.right = self.delete(node.right, temp.val)
        
        if not node:
            return node
        
        # Step 2: Update height
        self.update_height(node)
        
        # Step 3: Get balance
        balance = self.get_balance(node)
        
        # Step 4: Balance if needed
        # Left-Left Case
        if balance > 1 and self.get_balance(node.left) >= 0:
            return self.rotate_right(node)
        
        # Left-Right Case
        if balance > 1 and self.get_balance(node.left) < 0:
            node.left = self.rotate_left(node.left)
            return self.rotate_right(node)
        
        # Right-Right Case
        if balance < -1 and self.get_balance(node.right) <= 0:
            return self.rotate_left(node)
        
        # Right-Left Case
        if balance < -1 and self.get_balance(node.right) > 0:
            node.right = self.rotate_right(node.right)
            return self.rotate_left(node)
        
        return node
    
    def get_min_value_node(self, node):
        current = node
        while current.left:
            current = current.left
        return current

# Time Complexity: O(log n) for all operations
# Space Complexity: O(log n) for recursion stack
```

**AVL vs Regular BST:**
```
Regular BST worst case: O(n)
AVL Tree always: O(log n)

Trade-off: AVL requires extra rotations on insert/delete
```

### 1.3 Red-Black Trees

**Red-Black Properties:**
1. Every node is either red or black
2. Root is always black
3. All leaves (NIL) are black
4. Red nodes have black children (no two consecutive reds)
5. All paths from node to leaves have same number of black nodes

```python
class RBNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None
        self.color = 'RED'  # New nodes are red

class RedBlackTree:
    def __init__(self):
        self.NIL = RBNode(None)
        self.NIL.color = 'BLACK'
        self.root = self.NIL
    
    def rotate_left(self, x):
        y = x.right
        x.right = y.left
        
        if y.left != self.NIL:
            y.left.parent = x
        
        y.parent = x.parent
        
        if x.parent is None:
            self.root = y
        elif x == x.parent.left:
            x.parent.left = y
        else:
            x.parent.right = y
        
        y.left = x
        x.parent = y
    
    def rotate_right(self, y):
        x = y.left
        y.left = x.right
        
        if x.right != self.NIL:
            x.right.parent = y
        
        x.parent = y.parent
        
        if y.parent is None:
            self.root = x
        elif y == y.parent.right:
            y.parent.right = x
        else:
            y.parent.left = x
        
        x.right = y
        y.parent = x
    
    def insert(self, val):
        """Insert and fix violations"""
        node = RBNode(val)
        node.left = self.NIL
        node.right = self.NIL
        
        parent = None
        current = self.root
        
        # Find position for new node
        while current != self.NIL:
            parent = current
            if node.val < current.val:
                current = current.left
            else:
                current = current.right
        
        node.parent = parent
        
        if parent is None:
            self.root = node
        elif node.val < parent.val:
            parent.left = node
        else:
            parent.right = node
        
        # Fix Red-Black properties
        self.fix_insert(node)
    
    def fix_insert(self, node):
        """Fix violations after insert"""
        while node.parent and node.parent.color == 'RED':
            if node.parent == node.parent.parent.left:
                uncle = node.parent.parent.right
                
                if uncle.color == 'RED':
                    # Case 1: Uncle is red
                    node.parent.color = 'BLACK'
                    uncle.color = 'BLACK'
                    node.parent.parent.color = 'RED'
                    node = node.parent.parent
                else:
                    if node == node.parent.right:
                        # Case 2: Node is right child
                        node = node.parent
                        self.rotate_left(node)
                    
                    # Case 3: Node is left child
                    node.parent.color = 'BLACK'
                    node.parent.parent.color = 'RED'
                    self.rotate_right(node.parent.parent)
            else:
                # Mirror cases
                uncle = node.parent.parent.left
                
                if uncle.color == 'RED':
                    node.parent.color = 'BLACK'
                    uncle.color = 'BLACK'
                    node.parent.parent.color = 'RED'
                    node = node.parent.parent
                else:
                    if node == node.parent.left:
                        node = node.parent
                        self.rotate_right(node)
                    
                    node.parent.color = 'BLACK'
                    node.parent.parent.color = 'RED'
                    self.rotate_left(node.parent.parent)
        
        self.root.color = 'BLACK'

# Time Complexity: O(log n) for all operations
# Less rotations than AVL (max 2 for insert, 3 for delete)
```

**AVL vs Red-Black:**
```
AVL:
- More strictly balanced
- Faster lookups
- More rotations on insert/delete

Red-Black:
- Less strictly balanced (faster insert/delete)
- Fewer rotations
- Used in: Java TreeMap, C++ map, Linux kernel
```

### 1.4 Segment Trees

**Use Case**: Efficient range queries and updates

```python
class SegmentTree:
    def __init__(self, arr):
        """Build segment tree for range sum queries
        
        Tree structure:
                    [0-3: 10]
                   /          \
            [0-1: 3]          [2-3: 7]
            /      \          /      \
        [0:1]    [1:2]    [2:3]    [3:4]
        """
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        if arr:
            self.build(arr, 0, 0, self.n - 1)
    
    def build(self, arr, node, start, end):
        """Build tree recursively"""
        if start == end:
            # Leaf node
            self.tree[node] = arr[start]
        else:
            mid = (start + end) // 2
            left_child = 2 * node + 1
            right_child = 2 * node + 2
            
            # Build left and right subtrees
            self.build(arr, left_child, start, mid)
            self.build(arr, right_child, mid + 1, end)
            
            # Internal node = sum of children
            self.tree[node] = self.tree[left_child] + self.tree[right_child]
    
    def update(self, node, start, end, idx, val):
        """Update value at index idx
        
        Time: O(log n)
        """
        if start == end:
            # Leaf node
            self.tree[node] = val
        else:
            mid = (start + end) // 2
            left_child = 2 * node + 1
            right_child = 2 * node + 2
            
            if idx <= mid:
                # Update in left subtree
                self.update(left_child, start, mid, idx, val)
            else:
                # Update in right subtree
                self.update(right_child, mid + 1, end, idx, val)
            
            # Update current node
            self.tree[node] = self.tree[left_child] + self.tree[right_child]
    
    def query(self, node, start, end, left, right):
        """Query sum in range [left, right]
        
        Time: O(log n)
        """
        if right < start or left > end:
            # No overlap
            return 0
        
        if left <= start and end <= right:
            # Complete overlap
            return self.tree[node]
        
        # Partial overlap
        mid = (start + end) // 2
        left_child = 2 * node + 1
        right_child = 2 * node + 2
        
        left_sum = self.query(left_child, start, mid, left, right)
        right_sum = self.query(right_child, mid + 1, end, left, right)
        
        return left_sum + right_sum
    
    def update_public(self, idx, val):
        """Public update method"""
        self.update(0, 0, self.n - 1, idx, val)
    
    def query_public(self, left, right):
        """Public query method"""
        return self.query(0, 0, self.n - 1, left, right)

# Usage
arr = [1, 3, 5, 7, 9, 11]
seg_tree = SegmentTree(arr)

print(seg_tree.query_public(1, 3))  # Sum of arr[1:3] = 3+5+7 = 15
seg_tree.update_public(2, 10)        # arr[2] = 10
print(seg_tree.query_public(1, 3))  # Now = 3+10+7 = 20

# Time: O(n) build, O(log n) query/update
# Space: O(n)
```

**Lazy Propagation** (for range updates):

```python
class LazySegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.lazy = [0] * (4 * self.n)  # Lazy propagation array
        if arr:
            self.build(arr, 0, 0, self.n - 1)
    
    def build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
        else:
            mid = (start + end) // 2
            left = 2 * node + 1
            right = 2 * node + 2
            self.build(arr, left, start, mid)
            self.build(arr, right, mid + 1, end)
            self.tree[node] = self.tree[left] + self.tree[right]
    
    def push_down(self, node, start, end):
        """Push lazy value down to children"""
        if self.lazy[node] != 0:
            # Apply pending update
            self.tree[node] += (end - start + 1) * self.lazy[node]
            
            if start != end:
                # Not a leaf, propagate to children
                left = 2 * node + 1
                right = 2 * node + 2
                self.lazy[left] += self.lazy[node]
                self.lazy[right] += self.lazy[node]
            
            self.lazy[node] = 0
    
    def update_range(self, node, start, end, left, right, val):
        """Add val to all elements in range [left, right]
        
        Time: O(log n) amortized
        """
        self.push_down(node, start, end)
        
        if right < start or left > end:
            return
        
        if left <= start and end <= right:
            # Complete overlap
            self.lazy[node] += val
            self.push_down(node, start, end)
            return
        
        # Partial overlap
        mid = (start + end) // 2
        left_child = 2 * node + 1
        right_child = 2 * node + 2
        
        self.update_range(left_child, start, mid, left, right, val)
        self.update_range(right_child, mid + 1, end, left, right, val)
        
        self.push_down(left_child, start, mid)
        self.push_down(right_child, mid + 1, end)
        
        self.tree[node] = self.tree[left_child] + self.tree[right_child]
    
    def query_range(self, node, start, end, left, right):
        """Query sum in range [left, right]"""
        if right < start or left > end:
            return 0
        
        self.push_down(node, start, end)
        
        if left <= start and end <= right:
            return self.tree[node]
        
        mid = (start + end) // 2
        left_child = 2 * node + 1
        right_child = 2 * node + 2
        
        left_sum = self.query_range(left_child, start, mid, left, right)
        right_sum = self.query_range(right_child, mid + 1, end, left, right)
        
        return left_sum + right_sum

# Allows O(log n) range updates!
```

### 1.5 Fenwick Tree (Binary Indexed Tree)

**More space-efficient than Segment Tree for prefix queries**

```python
class FenwickTree:
    def __init__(self, n):
        """Initialize with size n
        
        1-indexed for easier implementation
        """
        self.n = n
        self.tree = [0] * (n + 1)
    
    def update(self, idx, delta):
        """Add delta to element at idx
        
        Time: O(log n)
        """
        while idx <= self.n:
            self.tree[idx] += delta
            idx += idx & (-idx)  # Add last set bit
    
    def prefix_sum(self, idx):
        """Get sum of elements [1...idx]
        
        Time: O(log n)
        """
        total = 0
        while idx > 0:
            total += self.tree[idx]
            idx -= idx & (-idx)  # Remove last set bit
        return total
    
    def range_sum(self, left, right):
        """Get sum of elements [left...right]
        
        Time: O(log n)
        """
        return self.prefix_sum(right) - self.prefix_sum(left - 1)

# Usage
fenwick = FenwickTree(6)

# Build from array [1, 3, 5, 7, 9, 11]
arr = [1, 3, 5, 7, 9, 11]
for i, val in enumerate(arr, 1):
    fenwick.update(i, val)

print(fenwick.prefix_sum(3))     # 1+3+5 = 9
print(fenwick.range_sum(2, 4))   # 3+5+7 = 15

fenwick.update(3, 5)             # arr[2] += 5 (now 10)
print(fenwick.range_sum(2, 4))   # 3+10+7 = 20

# Time: O(log n) per operation
# Space: O(n) - less than segment tree!
```

**Segment Tree vs Fenwick Tree:**
```
Fenwick Tree:
✅ Simpler code
✅ Less space (O(n) vs O(4n))
✅ Faster constants
❌ Only works for cumulative operations (sum, XOR)
❌ Cannot do range updates easily

Segment Tree:
✅ Works for any associative operation
✅ Easy range updates with lazy propagation
✅ More flexible
❌ More complex
❌ More space
```

### Chapter 1 Summary

✅ **Advanced Trees Covered:**
1. **AVL Trees**: Strictly balanced, O(log n) guaranteed
2. **Red-Black Trees**: Less balanced, fewer rotations
3. **Segment Trees**: Range queries and updates
4. **Fenwick Trees**: Space-efficient prefix sums

🎯 **When to Use:**
- Need guaranteed O(log n)? → AVL or Red-Black
- Range queries on array? → Segment Tree or Fenwick
- Only prefix sums? → Fenwick (simpler)
- Complex range operations? → Segment Tree with lazy propagation

### Chapter 1 Exercises

1. Implement AVL tree deletion with all rotation cases
2. Count inversions in array using Fenwick Tree
3. Range minimum query using Segment Tree
4. Implement 2D Fenwick Tree (2D prefix sums)
5. Dynamic median using two heaps or balanced BST

---

## Chapter 2: Disjoint Set Union (Union-Find)

### 2.1 The Union-Find Data Structure

**Use Cases:**
- Detect cycles in graphs
- Kruskal's MST algorithm
- Dynamic connectivity
- Image segmentation

**Basic Operations:**
1. **Find**: Which set does element belong to?
2. **Union**: Merge two sets

### 2.2 Naive Implementation

```python
class UnionFind:
    def __init__(self, n):
        """Initialize n separate sets"""
        self.parent = list(range(n))
    
    def find(self, x):
        """Find root of x's set
        
        Time: O(n) worst case - chain of parents
        """
        while x != self.parent[x]:
            x = self.parent[x]
        return x
    
    def union(self, x, y):
        """Merge sets containing x and y
        
        Time: O(n)
        """
        root_x = self.find(x)
        root_y = self.find(y)
        
        if root_x != root_y:
            self.parent[root_x] = root_y
    
    def connected(self, x, y):
        """Check if x and y in same set"""
        return self.find(x) == self.find(y)
```

### 2.3 Optimized with Union by Rank and Path Compression

```python
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n  # Tree height
        self.count = n  # Number of disjoint sets
    
    def find(self, x):
        """Find with path compression
        
        Makes tree flat as we traverse
        Time: O(α(n)) amortized (inverse Ackermann, practically O(1))
        """
        if x != self.parent[x]:
            # Path compression: point directly to root
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        """Union by rank
        
        Attach smaller tree under larger tree
        Time: O(α(n)) amortized
        """
        root_x = self.find(x)
        root_y = self.find(y)
        
        if root_x == root_y:
            return False  # Already in same set
        
        # Union by rank
        if self.rank[root_x] < self.rank[root_y]:
            self.parent[root_x] = root_y
        elif self.rank[root_x] > self.rank[root_y]:
            self.parent[root_y] = root_x
        else:
            self.parent[root_y] = root_x
            self.rank[root_x] += 1
        
        self.count -= 1
        return True
    
    def connected(self, x, y):
        """Check if connected"""
        return self.find(x) == self.find(y)
    
    def get_count(self):
        """Number of disjoint sets"""
        return self.count

# Time Complexity: O(α(n)) per operation
# α(n) is inverse Ackermann function
# For all practical n, α(n) ≤ 5, so essentially O(1)!
```

### 2.4 Applications

**Problem 1: Number of Connected Components**

```python
def count_components(n, edges):
    """Count connected components in undirected graph
    
    Example: n=5, edges=[[0,1],[1,2],[3,4]]
    Answer: 2 (components: {0,1,2} and {3,4})
    """
    uf = UnionFind(n)
    
    for u, v in edges:
        uf.union(u, v)
    
    return uf.get_count()

# Time: O(E * α(V)) ≈ O(E)
# Space: O(V)
```

**Problem 2: Detect Cycle in Undirected Graph**

```python
def has_cycle(n, edges):
    """Detect if graph has cycle
    
    If we find an edge connecting two nodes already in same set,
    that means there's a cycle!
    """
    uf = UnionFind(n)
    
    for u, v in edges:
        if uf.connected(u, v):
            return True  # Cycle found!
        uf.union(u, v)
    
    return False

# Time: O(E * α(V))
```

**Problem 3: Accounts Merge**

```python
def accounts_merge(accounts):
    """Merge accounts with common emails
    
    Input: [["John","john@mail.com","john_newyork@mail.com"],
            ["John","john@mail.com","john_work@mail.com"],
            ["Mary","mary@mail.com"]]
    Output: [["John","john@mail.com","john_newyork@mail.com","john_work@mail.com"],
             ["Mary","mary@mail.com"]]
    """
    from collections import defaultdict
    
    # Map email to account index
    email_to_account = {}
    
    # Create union-find for accounts
    uf = UnionFind(len(accounts))
    
    # Union accounts with common emails
    for i, account in enumerate(accounts):
        for email in account[1:]:
            if email in email_to_account:
                uf.union(i, email_to_account[email])
            else:
                email_to_account[email] = i
    
    # Group emails by root account
    root_to_emails = defaultdict(set)
    for email, account_idx in email_to_account.items():
        root = uf.find(account_idx)
        root_to_emails[root].add(email)
    
    # Build result
    result = []
    for root, emails in root_to_emails.items():
        name = accounts[root][0]
        result.append([name] + sorted(emails))
    
    return result

# Time: O(N * K * α(N)) where N is number of accounts, K is max emails per account
# Space: O(N * K)
```

**Problem 4: Redundant Connection**

```python
def find_redundant_connection(edges):
    """Find edge that can be removed to make tree
    
    Input: [[1,2],[1,3],[2,3]]
    Output: [2,3] (removing this edge makes it a tree)
    """
    n = len(edges)
    uf = UnionFind(n + 1)  # 1-indexed
    
    for u, v in edges:
        if uf.connected(u, v):
            return [u, v]  # This edge creates cycle
        uf.union(u, v)
    
    return []

# Time: O(E * α(V))
```

### Chapter 2 Summary

✅ **Union-Find Operations:**
- Find: Determine set membership
- Union: Merge two sets
- With optimizations: O(α(n)) ≈ O(1)!

🎯 **Optimizations:**
1. **Path Compression**: Flatten tree during find
2. **Union by Rank**: Attach smaller tree to larger

**When to Use Union-Find:**
- Dynamic connectivity
- Cycle detection
- Kruskal's MST
- Connected components
- Grouping/clustering problems

### Chapter 2 Exercises

1. **Friend Circles**: Count number of friend circles
2. **Satisfiability of Equality Equations**
3. **Smallest String With Swaps**
4. **Number of Islands II** (dynamic)
5. **Graph Valid Tree**

---

**[Guide continues with Chapters 3-19 covering Tries, Advanced DP, Advanced Graphs, Network Flow, String Algorithms, Geometry, Bit Manipulation, Game Theory, Randomized Algorithms, Parallel Algorithms, and Advanced Problem Solving...]**

---

## Completion Roadmap

After mastering advanced level:
- ✅ Competitive programming ready
- ✅ Senior engineer level DSA
- ✅ Can tackle any interview
- ✅ Research-level understanding

**Career Paths:**
1. Competitive Programming (IOI, ICPC, Google Code Jam)
2. Algorithm Research
3. Senior/Staff Engineer at FAANG
4. System Architecture
5. Teaching/Mentoring

---

## Appendix A: Amortized Analysis

### Aggregate Method
Total cost over n operations divided by n.

Example: Dynamic Array
- Most appends: O(1)
- Occasional resize: O(n)
- Total over n operations: O(n)
- Amortized: O(n)/n = O(1)

### Accounting Method
Assign different charges to operations.

### Potential Method
Define potential function Φ.
Amortized cost = actual cost + ΔΦ

---

## Appendix B: 150 Hard Problems

### Advanced Trees (20)
1. Serialize and Deserialize Binary Tree
2. Binary Tree Maximum Path Sum
3. Recover Binary Search Tree
4. Count of Smaller Numbers After Self
...

### Advanced Graphs (25)
1. Word Ladder II
2. Alien Dictionary
3. Critical Connections in Network
4. Minimum Cost to Connect All Points
...

### Dynamic Programming (30)
1. Regular Expression Matching
2. Wildcard Matching
3. Longest Increasing Path in Matrix
4. Burst Balloons
...

### String Algorithms (15)
1. KMP Implementation
2. Suffix Array Construction
3. Longest Common Substring
...

### Computational Geometry (10)
1. Convex Hull
2. Closest Pair of Points
3. Line Segment Intersection
...

---

**END OF ADVANCED GUIDE - Complete DSA Mastery Achieved! 🎓**