x='10'
y='5'

a=int(x)  # type casting str to int
b=int(y)  # type casting str to int

print(a+b)  # output:15

# can't cast str to int if str contains non-numeric characters

str="A"
# c=int(str)  # it will show ValueError: invalid literal for int() with base 10: 'A'
print(int(str))

# we cant cast float str to int directly
f="9.8"
# d=int(f)  # it will show ValueError: invalid literal for int() with base 10: '9.8'
print(int(float(f)))  # first cast to float then to int