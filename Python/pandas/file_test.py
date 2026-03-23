import pandas as pd
'''
we want to change dataFrame all the time after that only we can use it
but hear without using DataFrame directly using read_csv because it 
will change it automatically.

'''
df = pd.read_csv('employees_details.csv')

df.to_csv('output_employee.csv',index=False)

df['name'].to_csv("name.csv")
df[['name', 'department']].to_csv('name_department.csv')

