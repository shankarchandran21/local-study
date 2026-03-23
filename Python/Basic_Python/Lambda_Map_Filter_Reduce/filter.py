# Purpose: Keep only the items that match a condition.

nums =[ 1,2,3,4,5,10,6,7,8 ]

result = list(filter(lambda val : val%2==0,nums))

test = list(filter(lambda num : num/2 == 1,nums ))

print(test)
print(result)
