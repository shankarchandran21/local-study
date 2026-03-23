class parent:
    def house(self):
        print("Brown house")

class son1(parent):
    def factory(self):
        print("Factory")

class son2(parent):
    def superMarket(self):
        print("Super Market")

# super market not available for the first son but parent house will be available
son_one = son1()
son_one.house()
son_one.factory()

# factory not available for the second son but parent house will be available
sone_two = son2()
sone_two.house()
sone_two.superMarket()

