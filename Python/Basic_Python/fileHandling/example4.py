# import csv

# # if header is available in the file

# with open('input_file.csv','r') as contents:
#     reader = csv.DictReader(contents)
#     for row in reader:
#         print(row['age'])

# if the header not available in the file

with open('input_file.csv','r') as contents:
    lines = contents.readlines()
    for line in lines[1:]:
        column = line.strip().split(",")
        print(column[2])