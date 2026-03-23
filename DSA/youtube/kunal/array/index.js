ReverseArray = (arr)=>{
    

let start = 0
let end = arr.length-1

while(start < end){
    temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
}

console.log(arr)
}

ReverseArray([1,2,3,4,5])



const FindNFibonacci=(n)=>{
let a = 0
let b = 1
let temp

for(let i = 1 ; i<= n ; i++){
    temp = b
    b= a+b
    a=temp
}
console.log(a)
}

FindNFibonacci(6)

const generateFibonacci = (n)=>{
let arr = [0,1]
for(let i =2 ; i<n ;i++){
    arr[i] = arr[i-1] + arr[i-2]
}
console.log(arr)
}

generateFibonacci(7)

const FindNFibonacciWhileLoop=(n)=>{
let a = 0
let b = 1
let count =2

while(count<=n){
    let temp = b
    b=b+a;
    a=temp
    count++
    console.log(b)
}



console.log(b)
}

FindNFibonacciWhileLoop(6)







