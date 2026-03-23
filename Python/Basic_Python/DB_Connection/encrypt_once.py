from password_utils import encrypt_password
from cryptography.fernet import Fernet

'''
This file run only once because it will encrypted one time only when project start time only
that time only uncomment the generate_key() function so that only key will written in secret.key file
after that comment it that

'''

def generate_key():
    key = Fernet.generate_key()
    with open('secret.key',"wb") as f:
        f.write(key)
    print("Key saved to secret.key file")
    

if __name__ =="__main__":
    # Uncomment this only the first time
    generate_key()
    dbPassword=input("Enter your DB password : ")
    try:

        encrypted = encrypt_password(dbPassword)
        print("Encrypted password (copy this to password_utils.py)")
        print(encrypted)
    except Exception as e:
        print("Something went wrong",e)