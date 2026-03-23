# Purpose: Transform each item in a list and return a new list.

fruits = ['apple','orange','mango']

result = list(map(lambda fruit:fruit.upper(),fruits))
print(result)

