feedback= input("Enter your feedback: ")

with open('textFile.txt','a') as updateContents:
    updateContents.write(f"{feedback}\n")

print("Thanks for adding feedback")