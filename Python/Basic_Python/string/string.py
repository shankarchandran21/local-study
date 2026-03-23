name = 'Shankar chandran'
smallWord = name.lower()

print(name.lower())      # shankar  chandran
print(name.upper())      # SHANKAR CHANDRAN
print(smallWord.capitalize())  # Shankar chandran
print(smallWord.title())       # Shankar Chandran


phoneNumber = '9952170125'

firstTwo = phoneNumber[:2]
lastTwo = phoneNumber[-2:]

print(firstTwo+ '******' + lastTwo)  # 99******25

#Replace
location = 'chennai'
newLocation = location.replace('chennai', 'bangalore')

print(newLocation)  # bangalore

# Split

message = "your uber booking: UBER1234 has been confirmed"
bookingID = message.split(':')[1].split()[0]

print(bookingID)  # UBER1234

# Search Value in String

promo = "Use code SAVE20 to get 20% off on your next ride"
if 'SAVE20' in promo:
    print("Promo code is valid!")  # Promo code is valid!

#Find Position

feedBack = "The driver was very friendly and punctual"
position = feedBack.find('friendly')
print(position)  # 16

# take first name first letter and last name first letter and make it uppercase
name = " Shankar Chandran  "

# with list comprehension
print([word[0].upper() for word in name.split()])  # [logic first , for in loop second]

# without list comprehension
print(" ".join([word[0].upper() for word in name.split()]))  # [logic first , for in loop second]

# Remove White space from the beginning and end of the string
print(name.strip())  # "Shankar Chandran"

# Words Count in a String
sentence = "The quick brown fox jumps over the lazy dog"
word_count = len(sentence.split())
print(word_count)  # 9