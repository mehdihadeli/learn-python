## Creating Routes (GET, POST)

Routes connect URLs and HTTP methods to Python functions.

```python
from flask import Flask, request


app = Flask(__name__)


@app.get("/users")
def list_users():
    return {"users": []}


@app.post("/users")
def create_user():
    return {"received": request.json}, 201
```

This introduces an important API idea: different HTTP methods on related URLs express different operations.
