# L(Local Scope) -> E (Enclosing Scope) -> G (Global Scope) -> B(Built-in Scope)

# L(Local Scope)
def order():
    food = "burger"  
    print("I ordered a", food)

order()
# print(food) it's show error NameError: name 'food' is not defined because food is in local scope 

# E(Enclosing Scope) 

def outer_function():
    outer_var = "Hello"

    def inner_function():
        inner_var = "World"
        # outer_var is in enclosing scope of inner_function
        print(outer_var,inner_var)  # Accessing variable from enclosing scope

    inner_function()

outer_function()

# B(Built-in Scope)

print(__file__) # prints the path of the current file
    

# Use Case :
delivery_partner = "Swiggy" # Example of Global Scope

def hotel():
    food_item = "Pizza" # Example of Enclosing Scope
    def deliver():
        quantity = 2 # Example of Local Scope
        print(f"Delivering {quantity} {food_item} via {delivery_partner}")
    deliver()
hotel()
