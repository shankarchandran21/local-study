class dad:
    def car(self):
        print("Black Car")

class mom:
    def shop(self):
        print("Shop")

class daughter(dad,mom):
    def house(self):
        print("house")

obj1 =daughter()

obj1.car()
obj1.shop()