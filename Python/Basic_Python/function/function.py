#Syntax for defining a function in Python
def function_name():
    #logic here
    pass

def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Output: Hello, Alice!

def add(a, b):
    return a + b


def addMultipleNumbers(*args):
    print(type(args))  # <class 'tuple'>
    total = 0
    for number in args:
        total += number
    return total

result_args =addMultipleNumbers(1, 2, 3, 4, 5)  # Numbers to add: (1, 2, 3, 4, 5)

print(result_args)  # Output: 15


def keyValueFunction(**kwargs):
    print(type(kwargs))  # <class 'dict'>
    for key, value in kwargs.items():
        print(f"{key}: {value}")

keyValueFunction(name="Alice", age=30, city="New York")