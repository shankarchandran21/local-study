const ASCLL = (string)=>{   
    const arr = Array(26).fill(0)

for(let i = 0 ; i<string.length ; i++){
    let index = string.charCodeAt(i) - 'A'.charCodeAt(0)
    arr[index]++
}

for(let i = 0 ; i< arr.length ; i++){
    let ch = String.fromCharCode(i+'A'.charCodeAt(0))
    console.log(ch + " -> " + arr[i]);
}

}

ASCLL('AAJJLL')


const letterCount = (string)=>{
let map = {}

for(let i = 0 ; i< string.length ; i++){
    if(map[string[i]]){
        map[string[i]]++
    }else{
        map[string[i]] = 1
    }
}

return map

}

console.log(letterCount('AAJJLL'))


const countDigits = (num)=>{
    let count = 0
  
    while(num > 0){
        num = Math.floor(num/10)
        count++
    }
return count

}

console.log(countDigits(143))

const reverseNumber = (num)=>{
    let reverse = 0

    while(num > 0){
        reverse *= 10
        reverse += num%10
        num = Math.floor(num/10)
    }

 return reverse

}

console.log(reverseNumber(234))


const naturalNumbers = (num)=>{

    return (num*(num+1))/2
}

console.log(naturalNumbers(5))


const getSubArray = (arr)=>{
let result = []
for(let i = 0 ; i< arr.length ; i++ ){
    let subArray=[]
    for(let j = i ; j< arr.length ; j++){
        subArray.push(arr[j])
        result.push([...subArray])
    }
}
return result
}

console.log(getSubArray([1,2,3,4]))

const countSubArray = (arr)=>{
    n = arr.length

    return (n*(n+1))/2
}
console.log(countSubArray([1,2,3,4]))

const sumOddNum = (n)=>{
    
    let getSum =  n%2 === 0  ? Math.floor(n/2) : Math.floor(n/2) + 1
    let x = getSum * getSum
    return x
}

console.log(sumOddNum(5))

const sumEvenNum = (n)=>{

    return naturalNumbers(n) - sumOddNum(n)
}

console.log(sumEvenNum(5))


