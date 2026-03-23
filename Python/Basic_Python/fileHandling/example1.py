with open('textFile.txt') as contents:

    while True:
        
        line = contents.readline()
        if not line:
            break
        if "new" in line:
            print("Found Error : ,",line.strip())