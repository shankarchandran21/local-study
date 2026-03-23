import pandas as pd

data ={
    'Name':['Alice','Bob','Charlie'],
    'Age':[25,30,35],
    'City':['New york','London','Mumbai']
}

df = pd.DataFrame(data) # we want to change dataFrame all the time after that only we can use it
print(df)
print(df['Name'])