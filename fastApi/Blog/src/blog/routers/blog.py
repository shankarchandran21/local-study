from typing import List
from fastapi import APIRouter, Depends,Response,status
from sqlalchemy.orm import Session

# from ..oauth import get_current_user
from ..cookies import get_current_user
from ..controller.blogs import get_blogs,create_blog,get_blog_by_id,delete_blog_by_id,edit_blog
from .. import schemas,database

router = APIRouter(
    prefix="/blogs",
    tags=["Blogs"],
    
)



@router.get('/',response_model=List[schemas.Show_all_blog])
def blogs(db:Session=Depends(database.get_db)):
    return get_blogs(db)


@router.post('/',status_code=status.HTTP_201_CREATED)
def create(
           post:schemas.Blog,
           db:Session=Depends(database.get_db),
           current_user:schemas.token_user=Depends(get_current_user)):
    return create_blog(post,db,current_user)

@router.get('/{id}',status_code=status.HTTP_200_OK,response_model=schemas.Show_blog,)
def get_by_id(id:int,response:Response,db:Session=Depends(database.get_db),current_user:schemas.token_user=Depends(get_current_user)):
    return get_blog_by_id(id,response,db)

@router.delete("/{id}",status_code=status.HTTP_204_NO_CONTENT)
def delete_blog(id:int,db:Session=Depends(database.get_db),current_user:schemas.token_user=Depends(get_current_user)):
    return delete_blog_by_id(id,db)

    
@router.put('/{id}',status_code=status.HTTP_202_ACCEPTED)
def update_blog(id:int,request:schemas.Blog,db:Session=Depends(database.get_db),current_user:schemas.token_user=Depends(get_current_user)):
    return edit_blog(id,request,db)