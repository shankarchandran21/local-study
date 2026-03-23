# ✅ What is Pandas?
Pandas is a data analysis and data manipulation library for Python.
It provides fast, flexible tools to read, clean, transform, and analyze data.
You install it using:
pip install pandas

And use it like:
import pandas as pd


# ✅ Why do we use Pandas?

## 1. To work easily with table-like data
Example: reading a CSV file
import pandas as pd

df = pd.read_csv('employees.csv')

This loads your data into a DataFrame, like an Excel sheet inside Python.

## 2. To filter and select data

``` Python
df[df['age'] > 30]

```

# 3. To clean data
Examples:


Removing NA values


Fixing wrong formats


Renaming columns


df.dropna()
df.rename(columns={'empname': 'name'})


## 4. To analyze data
Example: find average salary
df['salary'].mean()


## 5. To transform data
Example: create a new column
df['bonus'] = df['salary'] * 0.10


## 6. To export data
Example: save back to CSV
df.to_csv('output.csv', index=False)


## 🧠 Simple Explanation
Think of Pandas as:
✔ Excel inside Python
✔ For reading, modifying & analyzing data
✔ Super fast and powerful

