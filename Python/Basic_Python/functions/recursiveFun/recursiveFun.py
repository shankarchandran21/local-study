# A recursive function is a function that calls itself in order to solve a smaller version of the same problem

def factorial(n):
    if n == 1: return 1
    return n * factorial(n-1) 

print(factorial(5))
