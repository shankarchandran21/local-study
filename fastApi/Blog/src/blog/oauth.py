from fastapi import HTTPException,status
from fastapi.params import Depends
from . import token
from fastapi.security import OAuth2PasswordBearer

# OAuth2 scheme setup
# tokenUrl is the endpoint where the client can get the token
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# Get the current user from the access token
def get_current_user(access_token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    return token.verify_access_token(access_token, credentials_exception)