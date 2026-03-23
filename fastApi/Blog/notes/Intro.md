# method(get,put,patch,post,delete) in other language hear We tell as operation
# router or endpoint('/','/about') in other language hear we tell as path
# bellow the operation there is one function that we called as path operation function
```python
        @app.get('/')
        def index():
            return 'Heyyyyy'

```

# Path Creating Style
    The below code will get error when the path is /blog/unpublished because it's think as first path
    as /blog/{unpublished} it think like this for avoid this put the dynamic path below the /blog/unpublished 


```python
@app.get('/blog/{id}')
def about(id:int):
    return {'data':{"page":f"Blog {id}"}}

@app.get('/blog/unpublished')
def about():
    return {"data":"Unpublished blog"}

```

# if __name__ == "__main__":

Run the code inside this block ONLY when this file is executed directly, not when it’s imported.

    ## Why does this exist?

    Every Python file has a special variable called __name__.

    ## Python sets it automatically:

    | How the file is used | Value of `__name__` |
    | -------------------- | ------------------- |
    | File is run directly | `"__main__"`        |
    | File is imported     | `"module_name"`     |
