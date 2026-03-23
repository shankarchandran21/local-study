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