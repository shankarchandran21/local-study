import traceback


print("Step 1:Start")

result = None

try:
    a=10
    b=0
    result = a/b
except ZeroDivisionError:
    print("Can't divide with 0")
except FileNotFoundError:
    print("File not found")
except Exception: # Exception used for don't know what error it's 
    print("Don't know what error it's",Exception)
    traceback.print_exc() # it's used for print the full error
finally:
    print("Finally Run") # it will run all the time if code get crash also it will me run

print("Step 2: Result is ",result) # it will not run if code get crashed





