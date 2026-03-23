/*
Basic Corner Cases For Array Problems:
1. Empty Array: If the input array is empty, the function should return an appropriate value (e.g., null or -1) to indicate that there are no elements to process.
2. Single Element Array: If the input array contains only one element, the function should handle this case correctly, especially when finding the second largest number, which may not exist.
3. All Elements are the Same: If all elements in the array are identical, the function should return the correct result (e.g., for finding the second largest number, it may return null or indicate that there is no second largest).

Basic Corner Cases For Number Problems:
1. Negative Numbers: If the input number is negative, the function should handle it appropriately, especially when counting digits or determining if it's even or odd.
2. Zero: If the input number is zero, the function should return the correct result (e.g., for counting digits, it should return 1).
3. Large Numbers: If the input number is very large, the function should be efficient and not run into performance issues.

*/ 

const voteAge = (age)=>{
    if(age<=0){
        console.log("Invalid Age")
    }else if(age>=18){
        console.log("You can vote")

    }else{
        console.log("You can't vote")
    }
}
voteAge(20)

const evenOdd = (num)=>{
    console.log(num & 1) // odd num get 1 even num get 0
    if(num & 1){
        console.log("Odd Number")
    }else{
        console.log("Even Number")
    }
    
}
evenOdd(18)


const findNum = (arr,target)=>{
    for(let i = 0 ; i< arr.length ; i++){

        if(arr[i] === target){
            return i
        }
    }

    return -1
}

console.log(findNum([1,22,76,45,3,23,5,7],23))


const negativeNum = (arr)=>{
    let count = 0
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i]< 0){
            count++
        }
    }
    return count
}
console.log(negativeNum([1,-2,3,4,5,6,7,-7,8,]))

const findLargestNumber=(arr)=>{
    let largest = -Infinity
    for(let i=0 ; i<arr.length ; i++){
        if(largest < arr[i]){
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLargestNumber([1,2,3,4,5,6,7,8,9]))

const findMinimumNumber=(arr)=>{
let min = Infinity

  for(let i = 0 ; i<arr.length ; i++){
    if(arr[i] < min){
        min = arr[i]
    }
  }
  return min
}
console.log(findMinimumNumber([1,2,3,4,5,6,7,8,9]))


const findSecondLargestNumber=(arr)=>{
    let largest = -Infinity
    let secondLargest = -Infinity

    if(arr.length < 2){
        return null
    }

    for(let i=0 ; i<arr.length ; i++){
        if(largest < arr[i]){
            secondLargest = largest
            largest = arr[i]
        }else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(findSecondLargestNumber([1,20,0,4,5,20,7,8,9]))


const countDigit = (num)=>{
    let count = 0

    if(num === 0){
        return 1
    }
    num = Math.abs(num)
    while (num > 0){
        num = Math.floor(num/10)
        count++
    }
    console.log(count)
}

countDigit(-456)


const NumPalindrome = (num)=>{
    if(num == 0){
        console.log("Give valid number")
        return null
    }
    let reverse = 0
    let temp = Math.abs(num)

    if(num < 0){
        console.log("Negative Number can't be Palindrome")
        return 
    }
    while(num > 0){
        reverse = reverse * 10
        reverse += num % 10
        num = Math.floor(num/10)
    }

    if(temp === reverse){
        console.log("Palindrome Number")
    }else{
        console.log("Not a Palindrome Number")
    }
}
NumPalindrome(0)


const reverseNum = (num)=>{

    let temp = num
    let reverse = 0

    while(num > 0){
        reverse = reverse * 10
        reverse += num % 10
        num = Math.floor(num/10)
    }

     reverse = temp < 0 ? -reverse : reverse
     return reverse
}

console.log(reverseNum(120))

