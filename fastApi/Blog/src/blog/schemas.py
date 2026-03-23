from typing import List
from pydantic import BaseModel

class BaseBlog(BaseModel):
    title:str
    body:str 



class Blog(BaseBlog):
    class Config():
        orm_mode = True 




class User(BaseModel):

    name:str
    email:str
    password:str



class Login(BaseModel):
    username:str
    password:str

class Show_User_Detail(BaseModel):
    name:str
    email:str

class token_user(BaseModel):
    id:int
    email:str
    username:str

class Show_User(Show_User_Detail):

    blogs: List[Blog] = []
    class Config():
        orm_mode = True



class Show_all_blog(BaseModel):
    # if you want only title you can specified the key(title,body) or remove the key(title,body) if you remove key(title,body) you can see full object in response
    id:int
    title:str
    body:str


    class Config():
        orm_mode = True
#'orm_mode' has been renamed to 'from_attributes'

class Show_blog(BaseBlog):
    creator:Show_User_Detail


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None