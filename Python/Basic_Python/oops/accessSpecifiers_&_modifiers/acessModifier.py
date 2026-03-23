class parent:
    def public_method(self):
            print("It's public method")
    def _protected_method(self):
            print("It's protected method")
    def __private_method(self):
            print("It's private method")

    def call_method(self):
           self.public_method()
           self._protected_method()
           self.__private_method()

class child(parent):
    def call_method_child(self):
           self.public_method()
           self._protected_method()
           try:
              self.__private_method()
           except:
              print("It's error")

class stager:
      def call_method_stager(self,obj):
        print(obj)
        obj.public_method()
        obj._protected_method()
        try:
            obj.__private_method()
        except:
            print("It's error")
      

p = parent()
p.call_method()

print('\n')

c=child()
c.call_method_child()

print('\n')

s= stager()
s.call_method_stager(p)