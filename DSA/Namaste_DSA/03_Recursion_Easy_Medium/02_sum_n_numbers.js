const sumNNum = (n)=>{
     if(n === 0){
        return 0
     }
     console.log(n)
    return n + sumNNum(n-1)
}
console.log(sumNNum(5))