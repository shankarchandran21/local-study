from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

app = FastAPI()

@app.get('/blog')
def index(limit:int = 0,published:bool = False,sort:Optional[str] = None):

    if published : return {"data":f"{limit} published blogs display {sort}"}
    else: return {"data":f"{limit} blogs display {sort}"}


@app.get('/blog/unpublished')
def about():
    return {"data":"Unpublished blog"}

@app.get('/blog/{id}')
def aboutBlog(id:int):
    return {'data':{"page":id}}


class Blog(BaseModel):
    title:str
    body:str
    published:Optional[bool] = None

@app.post('/blog')
def post_blog(blog:Blog):

    return {"data":f"post is created in title name of {blog.title}"}


if __name__  == '__main__':
    uvicorn.run(app,host='0.0.0.0',port='9000')