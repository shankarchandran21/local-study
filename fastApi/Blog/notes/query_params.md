In fastApi it can easily differentiate the params and query params example /blog/{id}?limit=5
fastApi can difference the queryParams and params easily

# params

```python

@app.get('/blog/{id}')
def aboutBlog(id:int):
    return {'data':{"page":id}}

```

# QueryParams

```python

@app.get('/blog')
def index(limit:int = 0,published:bool = False,sort:Optional[str] = None):

    if published : return {"data":f"{limit} published blogs display {sort}"}
    else: return {"data":f"{limit} blogs display {sort}"}

```