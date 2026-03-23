# I need first 3 line only

with open('textFile.txt','r') as contents : 
    for _ in range(2):
        print(contents.readline().strip())
