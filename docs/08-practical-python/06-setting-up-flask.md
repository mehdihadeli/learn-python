## Setting Up Flask

Flask is a lightweight Python web framework often used to teach the basics of routes, requests, responses, and small web applications.

After installing it, a minimal app looks like this:

```python
from flask import Flask


app = Flask(__name__)


@app.get("/")
def home():
    return "Hello from Flask"
```

Flask is a good teaching tool because it exposes web concepts directly without too much framework ceremony.
