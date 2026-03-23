from functools import partial


# Normal function
def calCulate_price(base_price,tax_rate):
    return base_price * (1+tax_rate)

print(calCulate_price(1000,0.18))
print(calCulate_price(1800,0.18))

'''
hear tax_rate is same for every argument so we send it at once and reuse that again and again tha is called partial function
'''
# partial Function
def GST_calculate(base_price,tax_rate):
    return base_price * (1+tax_rate)

# create partial function
price_with_get = partial(GST_calculate,tax_rate=0.18)

# hear we called the partial function
print(price_with_get(1000))