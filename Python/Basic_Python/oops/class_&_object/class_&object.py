'''
In Python, a class is a blueprint for creating objects.
Think of a class like a template, and an object as something created from that template.

A class groups together:
    1.Data (variables) → called attributes
    2.Functions (methods) that work on that data
    
It helps you structure your program in an organized, reusable way.

Constructor:
    when we using same data for all the method we can use constructor that will store it and we can recycle 
    if you using diff data for diff method that time no need to create constructor
     __init__ used for declare constructor
'''

class Student:
  
    def __init__(self,name,age): #Constructor
        self.UserName = name # attribute
        self.UserAge = age # attribute
   
    def say_hell(self): #it's method
        print(f"My name is {self.UserName} and my age {self.UserAge}")


s1 = Student('Shankar',26) # s1 is obj
'''
#s1.say_hello(s1)
what is this means when you call method(s1.say_hell()) it will send same obj as parameter to that method 
so that only we using self in parameter it's rule of python so that only python know which object (obj(s1)) 
is calling
'''
s1.say_hell() 

s2 = Student()
s1.say_hell() 


# class without constructor

class calculator:
    def square(self,a): # method
        return a*a
    def cube(self,a): # method
        return a*a*a
    
tool = calculator() # tool is object
print(tool.square(2))
print(tool.cube(2))


