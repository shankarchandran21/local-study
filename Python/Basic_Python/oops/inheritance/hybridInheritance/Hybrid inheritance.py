
# Hybrid inheritance is a combination of two or more types of inheritance in one program.
# Here is a program using multilevel + multiple inheritance:
# Parent class (Base)
class A:
    def featureA(self):
        print("Feature A")

# Child class of A (Multilevel part)
class B(A):
    def featureB(self):
        print("Feature B")

# Another parent class
class C:
    def featureC(self):
        print("Feature C")

# Class D inherits from both B and C (Multiple inheritance part)
class D(B, C):
    def featureD(self):
        print("Feature D")

obj = D()
obj.featureA()
obj.featureB()
obj.featureC()
obj.featureD()
