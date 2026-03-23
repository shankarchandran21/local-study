from functools import reduce

# Purpose: Take a list and reduce it to a single value.
num = [1,2,3,4,5]

result = reduce(lambda a,b:a+b,num)
print(result)

findMax = reduce(lambda a,b:a if a>b else b,num)
print(findMax)