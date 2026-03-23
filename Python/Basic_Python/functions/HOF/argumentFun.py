def gmail_email(name,domain='gmail.com'):
    return f"{name}@{domain}"

def ymail_email(name,domain='ymail.com'):
    return f"{name}@{domain}"



def build_email(name,email_fun):
    return email_fun(name)

print(build_email('Shankar',gmail_email))
