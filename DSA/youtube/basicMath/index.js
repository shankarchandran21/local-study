const string = "A"
const num = 65
console.log(string.charCodeAt(0))
console.log(String.fromCharCode(num))

const ASCLL =(val)=>{
    const arr = new Array(26).fill(0)

    for(let  i = 0 ; i< val.length ; i++){
        const index = val.charCodeAt(i) - 'A'.charCodeAt(0)
        arr[index]++
    }
for (let i = 0; i < 26; i++) {
    let ch = String.fromCharCode(i + 'A'.charCodeAt(0));
    console.log(ch + " -> " + arr[i]);
}
}

ASCLL('AABCJ')


/*
if you need last value n%10
if you want to remove the last value means n/10
*/ 
console.log(760/10)
console.log(760%10)


//  count of digits

const countOfDigits = (digit) => {
    let num = digit
    let count = 0

    while (num > 0) {
        count++
        num = parseInt(num / 10)
    }

    console.log(count)
}

countOfDigits(12348) // 5

// Reverse number

const reverseNumber = (num)=>{

    let removeNum = num
    let reverse = 0

    while(removeNum>0){
        reverse = reverse * 10
        reverse += removeNum%10
        removeNum = parseInt(removeNum/10)
    }

    console.log(reverse)
     

}

reverseNumber(456)

// Natural Number formula is n*(n+1)/2
const naturalNumber = (num)=>{
    // example : 1+2+3+4+5
    const add = num*(num+1)/2
    console.log(add)
}

naturalNumber(5)


function getSubarrays(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
      let subarray = [];
      for (let j = i; j < arr.length; j++) {
        console.log(j)
          subarray.push(arr[j]);
          result.push([...subarray]);
         
    }
    console.log(result)
  }

  return result;
}

console.log(getSubarrays([1, 2, 3,4]));

const getCountSubarray = (arr)=>{

    let n= arr.length

    let count = n*(n+1)/2
    console.log(count)

}

getCountSubarray([1, 2, 3])

/*
How find count of value inside range
Formula:> high-low+1
*/ 


// Sum of odd Numbers
/*
1.if the  n is even so that even and odd values num count will be same so that x=n/2
2.if the n is odd , because starting in odd number (1) alway one greater that even number so that x=n/2+1 
3.To get add value of odd is  x square
*/
const sum_odd_num = (n)=>{
let getSum = n % 2 === 0  ? Math.floor(n/2) : Math.floor(n/2)+1
let square = getSum*getSum
console.log(square)
}

sum_odd_num(5)

//  For Even number formula seen in chatgpt n/2 * (n/2+1)
//  In below code using odd number formula and natural number formula to find even number
//  Below code formula is:> natural number formula - odd number formula
const sum_even_num = (n) => {
// odd number formula
let getSumOdd = n % 2 === 0  ? Math.floor(n/2) : Math.floor(n/2)+1
let square = getSumOdd*getSumOdd
// natural number formula
let sumAllNum = n*(n+1)/2
let removeOddValue = sumAllNum - square
  console.log(removeOddValue);
};

sum_even_num(5)


const countOfOddNumber = (arr)=>{
    let count = 0
    for(let i = 0 ; i<arr.length ; i++){
        console.log(arr[i] & 1) // odd = 1 even = 0
        count += arr[i] & 1
    }

console.log(count)
}

countOfOddNumber([1,2,3,4,5,6])


const printDivisors = (n)=>{
    for(let i = 1 ; i*i<=n ; i++){
        if(12 % i == 0){
            console.log(i)
            console.log(n/i)
        }
    }
}
printDivisors(12)


const primeFactorial = (n)=>{
let vector = []

for(let i = 2 ; i*i<= n ; i++){
    if(n % i == 0){
        vector.push(i)
        while(n%i == 0){
            n = n/i
        }
    }
}
    if(n>1){
        vector.push(n)
    }

    return vector
}

console.log(primeFactorial(120))


const sieve_of_eratosthenes_optimized = (n)=>{

    const arr = Array(n+1).fill(true)
    let count = 1
    for(let i = 3 ; i*i<=n ; i+=2){
        if(arr[i]){
            count ++

            for(let multi = i*i ; multi <= n ; multi += i){
                    arr[multi] = false
            }
        }
    }

const root = Math.floor(Math.sqrt(n))
const oddRoot = root + ((root%2 === 0 ? 1 : 2))

for(let i = oddRoot ; i< n ; i+=2){
    count +=arr[i]
}
return count
}
console.log(sieve_of_eratosthenes_optimized(36))


const BinaryExponentiation = (base,power)=>{
    let ans = 1
    while(power >= 1){

        if(power % 2 != 0 ){
            ans *=base
        }

        base *= base
        power /=2

    }

    return ans

}

console.log(BinaryExponentiation(4,3))


const GCD = (a,b)=>{
    let x ,y
    if(a>b){
        x=b
        y=a
    }else{
        x=a
        y=b
    }

    while( x != 0){
        temp = x
        x = y%x
        y = temp
    }

    return y

}

console.log(GCD(12,18))



const LCM = (a,b)=>{
    return a*b/GCD(a,b)
}

console.log(LCM(12,18))