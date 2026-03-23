import csv
import matplotlib.pyplot as plt

months =[]
sales=[]

with open('data.csv','r') as file_data:
    reader = csv.DictReader(file_data)
    for row in reader:
        months.append(row['Monthly'])
        sales.append(row['Sales'])


plt.plot(months,sales,marker='o')
plt.title('Monthly Sales')
plt.xlabel('Month')
plt.ylabel('Sales')
plt.grid(True)
plt.tight_layout()
plt.show()