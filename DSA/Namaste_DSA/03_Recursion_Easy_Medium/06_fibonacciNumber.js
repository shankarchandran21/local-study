const fibonacciSeries = (n)=>{


    if(n <=1){ 
        return n
    }

    
    
return fibonacciSeries(n-1) + fibonacciSeries(n-2) 
    

}

console.log(fibonacciSeries(10))


const rabit = (n)=>{

    if(n === 1){
        return 2
    }
return 2*rabit(n-1)
}

console.log(rabit(2))
