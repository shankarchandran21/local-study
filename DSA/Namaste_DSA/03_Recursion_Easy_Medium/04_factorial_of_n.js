const factorialOfN = (n)=>{
    if(n === 1){
        return n 
    }
    return n * (factorialOfN(n-1))

}

console.log(factorialOfN(5))