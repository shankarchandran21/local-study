# There is two type installation UV and PIP you can choose any one to create project

# Create environment

    ## pip
```powershell

            python -m venv folderName

```
    ## UV
```powershell

            uv init .

```


# Activate the environment
    For uv not need to activate part

    ## pip
```powershell

            .\folderName\Scripts\Activate.ps1

```

    ### outPut: (fastapi-env) PS C:\Users\MT066\Desktop\Study\fastApi\Blog> 

# Install fastApi

    ## pip
```powershell

            pip install fastapi

```
    ## UV
```powershell

        uv add fastapi

```

# Install uvicorn
    Uvicorn is the server that runs your FastAPI app and listens for HTTP requests.

    ## pip

```powershell

        pip install uvicorn[standard]

```
    ## UV
```powershell

        uv add uvicorn[standard]

```

# Run Project

    ## pip

        ### Syntax:  uvicorn filename:variable_for_FASTAPI_in_Filename --reload(optional)

```powershell

            uvicorn main:app --reload

```

    ## UV

```powershell

        uv run .\main.py

```
