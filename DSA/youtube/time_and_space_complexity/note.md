# What is a time complexity?

 All of them tell time complexity is equal to time taken to run a program but it's not true because according to the
 system performance the time taken to run a program may vary(like comparing old and new computer to run program).

 Time complexity is the relationship of time grows according to the input size grows.


## To Represent time complexity we use Big notation.

    1.Big O Notation -> worst case or upper bound
    2.Big Omega Notation -> best case or lower bound
    3.Big Theta Notation -> average case or tight bound (both upper and lower bound)


## Time complexity analysis:

  1. O(1) -> Constant time complexity
        No matter how much input size grows the time taken to run the program remains constant.
        Example: Accessing an element in an array by index.
    
        ```js
        function getFirstElement(arr) {
            return arr[0];
        }
        ```

    2. O(log n) -> Logarithmic time complexity
        Time taken to run the program grows logarithmically as the input size grows.

        Example: Binary Search Algorithm.
        
        ```js
        function binarySearch(arr, target) {
            let left = 0;
            let right = arr.length - 1;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (arr[mid] === target) {
                    return mid;
                } else if (arr[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return -1;
        }
        ```

    3. O square root n -> Square Root time complexity
        Time taken to run the program grows as the square root of the input size grows.
        Example: Finding all prime numbers up to n using trial division.
        
        ```js
        function isPrime(num) {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }
        ```

    4. O(n) -> Linear time complexity
        Time taken to run the program grows linearly as the input size grows.
        Example: Finding the maximum element in an array.
        
        ```js
        function findMax(arr) {
            let max = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return max;
        }
        ```

    5. O(n square) -> Quadratic time complexity
        Time taken to run the program grows quadratically as the input size grows.
        Example: Bubble Sort Algorithm.
        
        ```js
        function bubbleSort(arr) {
            const n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
            }
            return arr;
        }
        ```

    6. O(n cube) -> Cubic time complexity
        Time taken to run the program grows cubically as the input size grows.
        Example: Matrix Multiplication.
        
        ```js
        function matrixMultiply(A, B) {
            const n = A.length;
            const result = Array.from({ length: n }, () => Array(n).fill(0));
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    for (let k = 0; k < n; k++) {
                        result[i][j] += A[i][k] * B[k][j];
                    }
                }
            }
            return result;
        }
        ```
    7. O(n power k) -> Polynomial time complexity
        Time taken to run the program grows polynomially as the input size grows.
        Example: Solving the Traveling Salesman Problem using Dynamic Programming(Recursion).
        
        ```js
        function tsp(graph, pos, visited, n, count, cost, ans) {
            if (count === n && graph[pos][0]) {
                ans = Math.min(ans, cost + graph[pos][0]);
                return ans;
            }
            for (let i = 0; i < n; i++) {
                if (!visited[i] && graph[pos][i]) {
                    visited[i] = true;
                    ans = tsp(graph, i, visited, n, count + 1, cost + graph[pos][i], ans);
                    visited[i] = false;
                }
            }
            return ans;
        }
        ```

    8. O(n log n) -> Linearithmic time complexity
        Time taken to run the program grows in linearithmic fashion as the input size grows.
        Example: Merge Sort Algorithm.
        
        ```js
        function mergeSort(arr) {
            if (arr.length <= 1) return arr;
            const mid = Math.floor(arr.length / 2);
            const left = mergeSort(arr.slice(0, mid));
            const right = mergeSort(arr.slice(mid));
            return merge(left, right);
        }
        
        function merge(left, right) {
            const result = [];
            let i = 0, j = 0;
            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }
            return result.concat(left.slice(i)).concat(right.slice(j));
        }
        ```


# Space Complexity:

 Memory space our program going to taken there are two types of memory space.

    1. Input space -> space taken by input data.
    2. Auxiliary space -> extra space taken by program to run.

 Examples of space complexity:

    1. O(1) -> Constant space complexity
        No matter how much input size grows the space taken to run the program remains constant.
        Example: Swapping two variables.
        
        ```js
        function swap(a, b) {
            let temp = a;
            a = b;
            b = temp;
            return [a, b];
        }
        ```

    2. O(n) -> Linear space complexity
        Space taken to run the program grows linearly as the input size grows.
        Example: Creating a copy of an array.
        
        ```js
        function copyArray(arr) {
            const newArr = [];
            for (let i = 0; i < arr.length; i++) {
                newArr.push(arr[i]);
            }
            return newArr;
        }
        ```
# Overview:

## ⏱ Big-O Time Complexity Order (Best → Worst):

| Big-O          | Name         | Example        |
| -------------- | ------------ | -------------- |
| **O(1)**       | Constant     | Access element |
| **O(log n)**   | Logarithmic  | Binary search  |
| **O(√n)**      | Square Root  | Prime check    |
| **O(n)**       | Linear       | Single loop    |
| **O(n log n)** | Linearithmic | Merge sort     |
| **O(n²)**      | Quadratic    | Nested loops   |
| **O(n³)**      | Cubic        | 3 loops        |
| **O(2ⁿ)**      | Exponential  | Fibonacci      |
| **O(n!)**      | Factorial    | Permutations   |

### 👉 Performance order:
    O(1) < O(log n) < O(√n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)

## 🧠 Big-O Space Complexity Order

| Big-O        | Meaning          | Example                |
| ------------ | ---------------- | ---------------------- |
| **O(1)**     | Constant space   | Variables, swap        |
| **O(log n)** | Recursion stack  | Binary search          |
| **O(n)**     | Linear space     | Array, HashMap         |
| **O(n²)**    | 2D matrix        | Graph adjacency matrix |
| **O(2ⁿ)**    | Recursive states | Subsets                |


## 🔁 Time vs Space Quick Examples

| Code Pattern            | Time     | Space           |
| ----------------------- | -------- | --------------- |
| Single loop             | O(n)     | O(1)            |
| Two nested loops        | O(n²)    | O(1)            |
| Recursion (no extra DS) | O(n)     | O(n)            |
| Binary search           | O(log n) | O(1) / O(log n) |
| Array copy              | O(n)     | O(n)            |

## 🔁 QUICK DECISION FLOW (memorize this)
n ≤ 10        → factorial / brute force
n ≤ 20        → 2ⁿ
n ≤ 400       → n³
n ≤ 2000      → n² log n
n ≤ 10⁴       → n²
n ≤ 10⁵       → n log n
n ≥ 10⁷       → n / log n
