from fastapi import APIRouter, Depends,status
from sqlalchemy.orm import Session
from .. import schemas,database
from ..controller.users import create_users,get_user_by_id

router = APIRouter(
    prefix="/user",
    tags=["Users"]
)

@router.post('/',status_code=status.HTTP_201_CREATED,response_model=schemas.Show_User)
def create_user(user:schemas.User,db:Session=Depends(database.get_db)):
    return create_users(user,db)

@router.get('/{id}',response_model=schemas.Show_User)
def get_user(id:int,db:Session=Depends(database.get_db)):    
    return get_user_by_id(id,db)