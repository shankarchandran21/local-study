def email_builder(domain):

    def build(name):
        return f"{name}@{domain}"
    
    return build


gmail = email_builder('gmail')('alex')
ymail = email_builder('yamil')
print(ymail('Shankar'))