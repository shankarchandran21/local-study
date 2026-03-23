with open('textFile.txt','r') as contents:

    for content in contents:
        print(content.strip())