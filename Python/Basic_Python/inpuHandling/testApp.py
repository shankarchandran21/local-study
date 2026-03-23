import sys # It is a built-in module that comes with Python.

if len(sys.argv) == 2:
    print("Usage: python testApp.py <full_name> <email>")
    sys.exit(1)

full_name = sys.argv[1]
email = sys.argv[2]
allParams = " ".join(sys.argv[1:]) # Join all parameters except the script name and 1: will take all parameters after script name
print(sys.argv)



print("Hello,", full_name)
print("Your email is:", email)
print("All parameters:", allParams)

