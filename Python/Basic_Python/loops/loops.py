names = ['shawn', 'alice', 'mike', 'elena']

for name in names:
    print(name.upper())
    

correct_pin = '1234'
enter_pin = '123123'

while enter_pin != correct_pin:
    print("Incorrect PIN. Please try again.")
    enter_pin = input("Enter your PIN: ")

print("PIN accepted. Access granted.")

for i in range(1, 10):
    if i == 5:
        break
    print(i)

# Skip negative values 
numbers = [10, -5, 3, -1, 7, -2, 0]
for number in numbers:
    if number < 0:
        continue
    print(number)

# pass loop for future implementation
for i in range(5):
    pass  # To be implemented later


# counter timer
count = 0

while count < 5:
    print("Count is:", count)
    count += 1
print("Counting completed.",count)



# Items add in cart
cart = []

while True:
    item = input("Enter an item to add to the cart (or type 'done' to finish): ")
    if item.lower() == 'done':
        break
    cart.append(item)
    print(f"{item} has been added to your cart.")


# range 

'''
range(start, stop, step)

Parameters:

        start → where to begin (default = 0)

        stop → where to end (exclusive, meaning stop–1)

        step → how much to increase each time (default = 1)

'''

for i in range(1,6):
    print("*" * i)

for i in range(5, 0, -1):
    print("*" * i)
