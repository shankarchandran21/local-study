let arr =[1,2,3,4,5]

const sumArray = (n)=>{

if(n === 0){
    return arr[n]
}

return arr[n] + sumArray(n-1)
}

console.log(sumArray(arr.length-1))


let arr2 =[1,2,3,4,5]
const countOddNum = (n)=>{

const isOdd = arr2[n]%2 != 0

if(n===0){

    return isOdd? arr2[n] : 0
}

return isOdd ? arr2[n] + countOddNum(n-1) : countOddNum(n-1)
}

console.log(countOddNum(arr2.length-1))

