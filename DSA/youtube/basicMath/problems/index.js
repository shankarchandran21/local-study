//  find n num factorial 

function printDivisors(n) {
    for (let i = 1; i * i <= n; i++) {
        console.log(i)
        if (n % i === 0) {
            console.log(i + " value");

            if (i * i === n) continue;

            console.log(n / i + " divide");
        }
    }
}

// Example
printDivisors(12);

// Find prime number or not

const primeNumber = (n=6)=>{

    for(let i = 2 ; i*i<=n;i++){

        if(n%i === 0 ){
            console.log("It's not prime number")
            return 0
        }      
    }

    if(n=== 1){

        console.log("It's not prime number")
        return 0 
    }


    console.log("It's prime number")
    return 1
}

primeNumber(2)


const primeFactorial = (n=36)=>{
    let vector = []
    for(let i = 2 ; i*i<=n ; i++){
        console.log(i)
        if(n % i === 0){
            if(primeNumber(i)){
                vector.push(i)
            }

            if( n/ i === i){
                continue
            }else{
                if(primeNumber(n/i)){
                    vector.push(i)
                }
            }

        }
    }

console.log(vector)
}
primeFactorial(36)


const optimizedPrimeFactorial = (n=120)=>{
    let ans = []
    for(let i = 2 ; i*i <= n ; i++){
        console.log(i)
        console.log(n)
        if(n % i === 0 ){ 
            ans.push(i)

            while(n%i==0){
                n = n/i
            }
        }


    }

    if(n>1){
        ans.push(n)
    }

    console.log(ans)

}

optimizedPrimeFactorial(120)


// Find all prime number 
const sieve_of_eratosthenes = (n=36)=>{
    let count = 0
    const arr = Array(n+1).fill(true)
    
    for(let i = 2 ; i*i<=n; i++){
        if(arr[i]){
            for(let multi = i*i ; multi <= n ; multi +=i){
                console.log(multi)
                arr[multi] = false
            }
        }
    }
    
    for(let i = 1 ; i <= n;i++){
        count += arr[i]
    }
    console.log("Count of prime number : "+count)
    console.log(arr)

}

sieve_of_eratosthenes(36)

// It's apply only for counting prime number only 
const sieve_of_eratosthenes_optimized = (n=36)=>{
    let count = 1
    const arr = Array(n+1).fill(true)
    
    for(let i = 3 ; i*i<=n; i+=2){
        console.log("List " + i)
        if(arr[i]){
            count ++
            for(let multi = i*i ; multi <= n ; multi +=i){
                console.log(multi)
                arr[multi] = false
            }
        }
    }


    const root = Math.floor(Math.sqrt(n))
    const oddSqrt = root + ((root % 2===1)? 2 : 1)
    for(let i = oddSqrt ; i < n;i+=2){
        count += arr[i]
    }
    console.log("Count of prime number : "+count)
    console.log(arr)

}

sieve_of_eratosthenes_optimized(36)


const BinaryExponentiation = (base,power)=>{

    let ans = 1 

    while(power >= 1){
        if(power % 2 != 0 ){
            ans *= base
        }
        base *= base
        power /=2
    }

console.log(ans)

}

BinaryExponentiation(4,3)


const GCD = (a,b)=>{
    let temp  = a
    while(a != 0){
        temp = a
        a = b%a
        b= temp
    }
    return b
}

console.log(GCD(12,18))


const LCM = (a,b)=>{

    return (a*b)/GCD(a,b)
}

console.log(LCM(12,18))
