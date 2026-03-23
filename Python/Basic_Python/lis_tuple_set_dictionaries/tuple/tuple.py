'''
1.tuple is immutable
2.it's faster when compare list because of it's read only we can't edit update
'''

names=('shankar','alex','sanjay','dhanush')

# access the value
any_name = names[1]
print(any_name )  

#count in tuple
count = names.count('shankar')
print(count)

#index of the value
index= names.index('shankar')
print(index)