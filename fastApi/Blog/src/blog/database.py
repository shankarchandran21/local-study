from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker 

SQLALCHEMY_DATABASE_URL = 'postgresql+psycopg2://postgres:1234@localhost:5432/mydb'

# Create the engine
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Create a configured "Session" class
SessionLocal = sessionmaker(bind=engine, autocommit=False,autoflush=False)

# Create a Base class for declarative class definitions
Base = declarative_base()

def get_db():
    db=SessionLocal()

    try:
        # yield closes the connection after the request is done
        yield db
    except:
        db.close()