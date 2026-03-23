age = 30

if age < 18:
    print("You are a minor.")

if age < 18:
    print("You are a minor.")
elif age >= 18 and age < 65:
    print("You are an adult.")
else:
    print("You are a senior citizen.")


recharge_amount =  200
data_balance = 1.5

if recharge_amount >= 399 or data_balance >= 1:
    print("You are eligible for a free movie ticket.")
else:
    print("You are not eligible for a free movie ticket.")


order_amount = 1500
day = "sat"
memberShip_status = "gold"

if order_amount >= 1000 and day in ["sat", "sun"] or memberShip_status == "gold":
    print("You get a 20% discount on your order.")  
else:
    print("No discount applicable on your order.")
