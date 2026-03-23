class grandfather:
    def car(self):
        print("Black car")
    
class parent(grandfather):

    def house(self):
        print("Brown house")

class son(parent):

    def factory(self):
        print("I have factory")


property = son()

property.car()
property.factory()
property.house()