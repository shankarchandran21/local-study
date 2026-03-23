from fastapi import HTTPException, status, Cookie
from . import token

def get_current_user(access_token: str | None = Cookie(default=None)):
    print("Access Token from Cookie:", access_token)
    if access_token is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated",
        )
    credentials_exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
        )

    return token.verify_access_token(access_token,credentials_exception)
