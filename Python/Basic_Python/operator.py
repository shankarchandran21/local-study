a = 10
b=5

print(a+b)  # output:20
print(a/b)  # output:1.0
print(a%b)  # output:0
print(a-b)  # output:0
print(a*b)  # output:100
print(a**b)  # output:100000 Step: 10 raised to power 5
print(a//b)  # output:1 Step: Floor division (removes decimal part)

# Comparison Operators

x=10
y=5
print(x>y)   # output: True
print(x<y)   # output: False
print(x==y)  # output: False
print(x!=y)  # output: True
print(x>=y)  # output: True
print(x<=y)  # output: False

# Logical Operators
p=True
q=False
print(p and q)  # output: False
print(p or q)   # output: True  
print(not p)    # output: False
print(not q)    # output: True


# Assignment Operators
m=10
m +=5  # m=m+5
print(m)  # output:15
m -=3  # m=m-3
print(m)  # output:12
m *=2  # m=m*2
print(m)  # output:24
m /=4  # m=m/4
print(m)  # output:6.0
m %=4  # m=m%4  
print(m)  # output:2.0
m **=3  # m=m**3
print(m)  # output:8.0
m //=2  # m=m//2
print(m)  # output:4.0


# Task:>

amount = 1200

tax = amount*0.18
total_amount = amount + tax

if(total_amount > 1000):
    discount = total_amount * 0.10
    total_amount -= discount
print("Total amount to be paid:", total_amount)

#Task 2:>
age = 19
student = 'yes'
amount_ticket = 250

if age >= 60 or student.lower() == 'yes':
    discount = amount_ticket * 0.15
    amount_ticket -= discount
print("Amount to be paid for ticket:", amount_ticket)
