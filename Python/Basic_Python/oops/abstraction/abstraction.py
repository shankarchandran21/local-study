from abc import ABC, abstractmethod

'''
If a child class inherits an abstract class, it MUST implement all abstract methods.
'''
class featurePlan(ABC):
    @abstractmethod
    def login(self):
        pass
    @abstractmethod
    def logout(self):
        pass

class webApp(featurePlan):
    def login(self):
        print("Login")
    def logout(self):
        print("logout")


s1=webApp()
s1.login()
    