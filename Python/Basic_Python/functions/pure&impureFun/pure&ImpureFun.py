total = 2

def add(amount):
   global total
   total += amount #it's called side effect of impure function it will affect the outside of  values(total) it's called impure function
   print('i am from Add fun',total)

def test():
    print("i am from test fun",total)

add(2)
test()

'''
A pure function is a function that:

        Always returns the same output for the same input

        Has no side effects

        does NOT change global variables

        does NOT modify objects outside

        does NOT do I/O (print, write files, DB calls, etc.)
'''

def square(n):
    return n * n
