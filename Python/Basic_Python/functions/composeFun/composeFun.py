# A compose function is when the output of one function become the input of another -like f(g())

'''
imagine if user need value to do multiply and add with 2 for given value
'''

def add (val):
    return val +2

def multiply(val):
    return val * 2

def composeFun(val):
    return add(multiply(val))

print(composeFun(2))