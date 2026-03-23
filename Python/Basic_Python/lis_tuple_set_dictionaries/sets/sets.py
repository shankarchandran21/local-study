'''
it's unOrder list
set remove the duplicates
it's mutable but we can't edit we can do only add or remove
'''

# convert list into set
uber_cities = ['chennai','banglore','delhi','coimbatore']
aSet=set(uber_cities)
print(aSet)

citiesOne = {'chennai','banglore','delhi','coimbatore'}
citiesTwo={"banglore","hyd","delhi"}

#union combine two sets and remove the duplicate
print(citiesOne.union(citiesTwo))

#intersection combine only the same values
print(citiesOne.intersection(citiesTwo))

#find difference (Python checks only citiesOne, not both sets.)
print(citiesOne.difference(citiesTwo))

#add value in set
citiesOne.add('karur')
print(citiesOne)

#remove value in set
citiesOne.remove('chennai')
print(citiesOne)

#check value in the set and remove 
'''
why we using discard?
If the removed value is not in set it's throw error so that we using discard
'''
citiesOne.discard('sanjay')
