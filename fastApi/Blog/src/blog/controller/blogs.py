from fastapi import Depends, HTTPException, Response,status
from sqlalchemy.orm import Session
from .. import database,models,schemas
from ..oauth import get_current_user

def get_blogs(db:Session=Depends(database.get_db)):

    blog = db.query(models.Blog).all()
    return blog

def create_blog(post:schemas.Blog,db:Session=Depends(database.get_db),current_user:schemas.User=Depends(get_current_user)):
    new_blog = models.Blog(title=post.title,body=post.body,user_id=current_user.id)
    db.add(new_blog)
    db.commit()
    db.refresh(new_blog)

    return new_blog

def get_blog_by_id(id:int,response:Response,db:Session=Depends(database.get_db)):
    get_blog = db.query(models.Blog).filter(models.Blog.id == id).first()

    if not get_blog:
        # response.status_code = status.HTTP_404_NOT_FOUND
        # return {"details":f"Blog with {id} is not available"}

        # We can use this without using above two line
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Blog with {id} is not available")
    return get_blog


def delete_blog_by_id(id:int,db:Session=Depends(database.get_db)):
    #synchronize_session have 3 values false,evaluate,fetch
    # false no sync orm object with db it's faster
    # fetch sync orm object with db
    #evaluate seeing python logic and execute
    # orm object means db giving data(delete_post) that is orm object

    delete_post = db.query(models.Blog).filter(models.Blog.id == id)
    if not delete_post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Blog with {id} is not available")
    
    delete_post.delete(synchronize_session=False)
    db.commit()


    return {"message": "Post deleted successfully"}

def edit_blog(id:int,request:schemas.Blog,db:Session=Depends(database.get_db)):
    
    update_blog_single = db.query(models.Blog).filter(models.Blog.id == id)
    
    if not update_blog_single.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Blog with id {id} not found")
    
    # it's bulk update example if user have same email using that email to filter it will make the changes for all user match the email
    update_blog_single.update({'title':request.title,'body':request.body})
    db.commit()
    return 'Updated Successfully'