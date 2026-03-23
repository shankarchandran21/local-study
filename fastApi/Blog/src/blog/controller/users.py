from fastapi import Depends, HTTPException, Response,status
from sqlalchemy.orm import Session
from .. import database,models,schemas,hash


def create_users(user:schemas.User,db:Session=Depends(database.get_db)):
    print(user)
    hash_password = hash.HashPassword.bcrypt(user.password)
    new_user = models.User(name=user.name,email=user.email,password=hash_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def get_user_by_id(id:int,db:Session=Depends(database.get_db)):
    user = db.query(models.User).filter(models.User.id == id).first()

    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"user with {id} is not found")
    
    return user
