def ASCLL (val:str):
    arr=[0]*26

    for i in range(len(val)):
        count:int = ord(val[i]) - ord('A')
        arr[count] +=1

    for i in range(len(arr)):
        ch = chr(i+ord('A'))
        print(f"{ch} = {arr[i]}")

ASCLL('AABCL')

def countOfDigit(n):
    count = 0
    while(n>0):
        count +=1
        n  = int(n/10)
    print(count)

countOfDigit(123)


def reversNumber(n):
    reverse = 0

    while(n):
        reverse *= 10
        reverse += n%10
        n = int(n/10)

    print(reverse)

reversNumber(123)


def subArray(arr):
    result = []
    for i in range(len(arr)):
        subArray =[]
        # print(i)
        for j in range(i,len(arr)):
            print(j)
            subArray.append(arr[j])
            result.append(subArray.copy())
        # print(result)
    print(result)

subArray([1,2,3])

def naturalNumber(n):
    ans = int( n*(n+1)/2)
    print(ans)
    return ans

naturalNumber(5)


def sum_Odd_num(n):
    odd_or_even =  int(n/2) if n % 2 == 0 else int((n/2)) + 1

    ans = odd_or_even * odd_or_even
    print(ans)
    return ans

sum_Odd_num(5)

def sum_even_num(n):
    ans = naturalNumber(n) - sum_Odd_num(n)

    print(ans)

sum_even_num(5)

# _________________________________________________________________________________________________________________________________

def printDivisors(n):
    for i in range(1,int(n**0.5)+1):
        if(n % i == 0 ):
            print(i)
            if(i*i == n):
                continue
            print(n//i)

printDivisors(36)


def primeNumber(n):
    for i in range(2,int(n**0.5)+1):
        if(n%i == 0):
            print("It's not prime")
            return 0
        
        if(n == 1):
            print("It's not prime")
            return 0
        
        print("It's prime")
        return 1


primeNumber(5)

def primeFactorial(n):
    result =[]
    for i in range(2,int(n**0.5)+1):
        if(n%i==0):
            result.append(i)
            while(n%i== 0):
                n = n//i


    if(n > 1):
        result.append(n)
    print(result)

primeFactorial(36)

def sieve_of_eratosthenes(n):
    arr = [True]*(n + 1)
    count = 1
    for i in range(3,int(n**0.5)+1,2):
        if(arr[i]):
            count +=1
            for j in range(i*i,n+1,i):
                arr[j] = False
    
    root = int(n**0.5)
    oddEvenRoot = root + (2 if root % 2 == 1  else 1)
    for i in range(oddEvenRoot,n,2):
        if(arr[i]):
            count +=1
    print(count)


sieve_of_eratosthenes(36)


def BinaryExponentiation(base,power):
    ans = 1
    while(power > 0 ):
        if(power%2 != 0):
            print(power)
            ans *= base

        base = base * base
        power = int(power/2)
    print(ans)

BinaryExponentiation(2,5)


def GCD(a,b):
    val1=None
    val2=None
    if(a>b):
        val1 = b
        val2 = a
    else:
        val1 = a
        val2 = b


    while(val1 > 0):
        temp = val1
        val1 = val2 % val1
        val2 = temp
    print(val2)
    return val2

GCD(12,18)


def LCM(a,b):
    ans = a*b/GCD(a,b)
    print(ans)

LCM(12,18)