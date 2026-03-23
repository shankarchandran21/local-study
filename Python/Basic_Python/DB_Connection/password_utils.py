from cryptography.fernet import Fernet


class FakeStr(str):

    def __str__(self): # if i try to print it will run automatically
        return '*******'
    def __repr__(self): # if i try to log it will run automatically
        return '*******'
    
# Read the key from the file
def load_key():
    return open('secret.key','rb').read()


# encrypt Function
def encrypt_password(password):
    key = load_key() #  get secret key
    f= Fernet(key)
    # using secret key the password is encrypt
    return f.encrypt(password.encode())

# decrypt Function
def decrypt_password(encrypted_password):
    key = load_key() #  get secret key
    f= Fernet(key)
    # using secret key the password is decrypt
    decrypted = f.decrypt(encrypted_password).decode()

    return FakeStr(decrypted)

def get_decrypted_password():
    # this is the value of decrypted by secret key and password
    encrypted_password =b'gAAAAABpOpEbzEbVMEmr4aUBUt-XJxsR2SPSx_LysWhT6oDgQC9Oi3GvIFHIyHP37AbtOikju1seyFVIC4qyLIBb9wCelECDpA=='
    return decrypt_password(encrypted_password)
