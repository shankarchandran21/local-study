import psycopg2
import psycopg2.extras
import csv
from password_utils import get_decrypted_password

def connect_to_db():
    return psycopg2.connect(
        host="localhost",
        database="test",
        user="postgres",
        password=str.__str__(get_decrypted_password()),
        cursor_factory=psycopg2.extras.DictCursor
    )



connection = connect_to_db()
try:
    print(get_decrypted_password().upper())
    print(get_decrypted_password())
    with connection.cursor() as cursor:
        create_query = """
            CREATE TABLE IF NOT EXISTS employees (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                department VARCHAR(100)
            );
            """
        cursor.execute(create_query) # it will execute the query


        insert_query = "INSERT INTO employees(name,department) VALUES(%s,%s)"
        values= [("John","IT"),("Alice","HR"),("Bob","Finance")]
        cursor.executemany(insert_query,values) # it will execute the query
        connection.commit()

        select_query = "SELECT * FROM employees"
        cursor.execute(select_query) # it will execute the query
        result = cursor.fetchall() # it will get all the data
        result_dicts = [dict(row) for row in result] # convert array in dictionary
        
        with open('employees_details.csv','w',newline='') as contents:
            writer = csv.DictWriter(contents,fieldnames=['id','name','department'])
            writer.writeheader()
            writer.writerows(result_dicts)


except Exception as e:
    print("Error",e)
finally:
    if connection:
        connection.close()