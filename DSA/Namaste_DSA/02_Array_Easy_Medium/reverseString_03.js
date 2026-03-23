/*

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/ 

let reverseString = function(s) {
    let left = 0
    let right = s.length-1

    while(left < right){
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
return s
};

console.log(reverseString(["h","e","l","l","o"]))

let reverseArray = (arr)=>{

// We can give arr.length/2 also instead of i*i < arr.length 
    for(let i = 0 ; i*i< arr.length ; i++){
        
        let temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp

    }
    return arr;
}

console.log(reverseArray(["h","e","l","l","o"]))
