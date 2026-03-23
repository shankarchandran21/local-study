with open('input_file.csv','r') as input_content , open('output_content.csv','w') as output_content :
    for line in input_content:
        print(line.strip())
        output_content.write(line)
    