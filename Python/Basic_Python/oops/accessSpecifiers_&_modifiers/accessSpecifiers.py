class parent:
    def __init__(self):
        self.publicUser = 'Public Variable'
        self._protectedUser = 'protected'
        self.__privateUser = 'private'

    def accessSpecifier(self):
            print(f"it's public : {self.publicUser}")
            print(f"it's protected : {self._protectedUser}")
            print(f"it's private : {self.__privateUser}")


class child(parent):
      def ChildAccessSpecifier(self):
            print(f"it's public : {self.publicUser}")
            print(f"it's protected : {self._protectedUser}")
            try:  

                print(f"it's private : {self.__privateUser}")
            except AttributeError:
                print("Private: cannot access (AttributeError)")


class stranger:
     def access_from_other_class(self,obj):
            print(f"it's public : {obj.publicUser}")
            print(f"it's protected : {obj._protectedUser}") #it's work but not recommended
            print(f"it's private : {obj._parent__privateUser}") #it's work but not recommended and it's called name mangling

            try:  
                print(f"it's private : {obj.__privateUser}") #it's throw error
            except AttributeError:
                print("Private: cannot access (AttributeError)")          
        

p = parent()
s1 = child()

s1.ChildAccessSpecifier()
print("\n")

s2 = stranger()
s2.access_from_other_class(s1)
print("\n")
s2.access_from_other_class(p)