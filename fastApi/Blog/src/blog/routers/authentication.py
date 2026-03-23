from fastapi import APIRouter,Depends,HTTPException,status,Response
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import User
from ..hash import HashPassword 
from ..token import create_access_token
from fastapi.security import OAuth2PasswordRequestForm
router = APIRouter(
    tags=["Authentication"]
)

  
@router.post('/login')
def login(response: Response,user:OAuth2PasswordRequestForm = Depends(),db:Session =Depends(get_db)):
    
    verify_user = db.query(User).filter(User.email == user.username).first()


    if not verify_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"user not found in this {user.username}")
    
    
    if HashPassword.verify_password(user.password,verify_user.password):
         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f"Incorrect Password")
    
    # We store user information in the token
    access_token = create_access_token(data={"sub":verify_user.email,"username":verify_user.name,"id":verify_user.id})

    response.set_cookie(
        key="access_token",   # 🔑 must match Cookie() name
        value=access_token,
        httponly=True,
        secure=False,         # True in production
        samesite="lax",
        max_age=60 * 60,
        path="/"
    )


    return {"access_token":access_token,"token_type":"bearer"}


@router.post("/logout")
def logout(response: Response):
    response.delete_cookie("access_token")
    return {"message": "Logged out"}