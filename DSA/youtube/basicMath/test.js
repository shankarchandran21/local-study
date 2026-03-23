const ASCLL = (val)=>{

    const Arr = Array(26).fill(0)

    for(let i = 0 ; i<= val.length -1 ; i++){
        let index = val.charCodeAt(i) - 'A'.charCodeAt(0)
        Arr[index]++
    }

    for(let i = 0 ; i<= Arr.length -1 ; i++){
        let ch = String.fromCharCode(i + "A".charCodeAt(0))
        console.log(ch +" = " + Arr[i])
    }


}
ASCLL('AABCJ')


const countOfDigits = (digit)=>{

    let count = 0

    while(digit > 0 ){
        count += digit%10
        digit = parseInt(digit/10)
    }
    console.log(count)

}

countOfDigits(123)


const ReverseNumber = (digit)=>{

    let reverse = 0

    while(digit > 0){
        reverse *= 10
        reverse += digit%10
        digit = parseInt(digit/10)

    }
    console.log(reverse)
}

ReverseNumber(123)


const naturalNumbers = (n)=>{
    const num = n*(n+1)/2
    console.log(num)
    return num
}
naturalNumbers(5)

const sum_odd_num = (n)=>{

    let odd_or_even = n % 2 === 0  ? parseInt(n/2) : parseInt(n/2)+1
    let answer = odd_or_even *odd_or_even
    console.log(answer)
    return answer

}

sum_odd_num(5)


const sum_even_number = (n)=>{
    let ans = naturalNumbers(n) - sum_odd_num(n)
    console.log(ans)
}
sum_even_number(5)


// ____________________________________________________________________________________________________

const printDivisors = (n)=>{

    for(let i = 1 ; i*i<=n ; i++){

        if(n % i === 0){
            console.log(i)

            if(i * i === n) continue

            console.log(n/i)
        }

    }

}

printDivisors(36)

// Prime means 1 , not prime means 0
const isPrime = (n)=>{

    for(let i = 2 ;  i*i<=n ; i++){

        if(n%i === 0){
            return 0
        }

        if(n === 1){
            return 0
        }
    }
    return 1

}

console.log(isPrime(36))

const primeFactorial = (n)=>{
    let ans = []
    for(let i = 2 ; i*i<= n ; i++){
        if(n % i === 0 ){
            ans.push(i)
            console.log(n)
            while(n%i === 0 ){
                n = parseInt(n/i)
            }

        }
    }

    if(n>1){
        ans.push(n)
    }
    console.log(ans)
}

primeFactorial(36)


const sieve_of_eratosthenes = (n)=>{
    let arr = Array(n+1).fill(true)
    let count = 0
    for(let i = 2 ; i*i<=n ; i++){  
        if(arr[i]){
            for(let multi = i*i ; multi <= n ; multi +=i){
                arr[multi] = false
            }
        }
    }
    for(let i = 2 ; i<=n ; i++){
        count += arr[i]
    }
    console.log(count)
    console.log(arr)
}

sieve_of_eratosthenes(33)


const sieve_of_eratosthenes_optimized = (n)=>{
    let arr = Array(n+1).fill(true)
    let count = 1
    for(let i = 3 ; i*i<=n ; i+=2){  

        if(arr[i]){
            count ++
            for(let multi = i*i ; multi < n ; multi +=i){
                console.log(multi)
                console.log(n)
                console.log(i)
                arr[multi] = false
            }
        }
    }

    const root = parseInt(Math.sqrt(n))
    const oddRoot = root + ((root % 2 === 1) ? 2 : 1)
    for(let i = oddRoot ; i<n ; i+=2){
        if(arr[i]){
            count++
        }
    }
    console.log(count)
    console.log(arr)
}

sieve_of_eratosthenes_optimized(33)


const BinaryExponentiation =(base,power)=>{
    let ans = 1;
    while(power >= 1 ){
        if(power % 2 != 0){
            ans *=base
        }
        base *= base
        power = parseInt(power/2)
    }
    console.log(ans)
}

BinaryExponentiation(2,4)

const GCD = (a,b)=>{
    let val1
    let val2
    let temp

    if(a>b){
        val1 = a
        val2=b
    }else{
        val1 =b
        val2 =a
    }

    while(val1!=0){
        temp = val1
        val1 = val2%val1
        val2 = temp
    }

return val2

}

console.log(GCD(18,12))

const LCM = (a,b)=>{
    const ans = (a*b)/GCD(a,b)
    console.log(ans)
}

LCM(12,18)