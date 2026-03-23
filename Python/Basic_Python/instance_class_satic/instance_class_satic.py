class Employee:
    company = "OpenAI" # class level variable

    def instant_method(self,new_name):
        # Because instance attributes override class attributes.
        self.company = new_name # Python creates an instance-level variable. It does not modify the class-level variable.

    @classmethod
    def change_company(cls,new_name):
        cls.company = new_name

    @staticmethod
    def try_change_company(new_name):
        company = new_name # it's treated as local variable so it will not change class variable


# calling Class method, it's will modified company and there is no need to create obj to call method we can call method directly using class name
Employee.change_company("Google")
print(Employee.company)

# Calling Static method, it's not modified company and there is no need to create obj to call method we can call method directly using class name
Employee.try_change_company("Deloitte")
print(Employee.company)

# calling Instant method, it's not modified company
employee = Employee()
employee.instant_method("BMW")
print(Employee.company) 
