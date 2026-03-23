'''
⭐ What is Inheritance?

Inheritance means one class can get (or inherit) features from another class.
Just like a child inherits qualities from parents.

Overriding means writing a new version of a method (function) in the child class that already exists in the parent class.
'''
# Single level inheritance
# Single Level Inheritance means one parent class → one child class.
class dad:
    def house(self):
        print("I am from dad class")

class son(dad):
    def factory(self):
        print("I am from factory class")

d=dad()
d.house()

s=son()
s.house()
s.factory()

# Create App with Single level inheritance

class app: # parent
    def v1(self):
        print("orders")

class appV2(app): # child
    def v2(self):
        print("Refund")

aUpdate = appV2()
aUpdate.v1()
aUpdate.v2()

# overriding

class daddy: #parent
    def house(self):
        print("White color house")


class daughter(daddy): # child
       
    def house(self): # this method overriding parent method
            print("Brown color house")

    def factory(self):
            print("Factory")

properties = daughter()
properties.house()
properties.factory()