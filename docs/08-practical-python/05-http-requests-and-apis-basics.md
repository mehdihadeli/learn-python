## HTTP Requests and APIs Basics

One of the most practical early Python skills is calling HTTP APIs. In Python, this often means sending a request to a URL, receiving JSON, and then working with the returned data.

Using the popular `requests` library:

```python
import requests


response = requests.get("https://api.github.com")
print(response.status_code)
print(response.json())
```

Important beginner ideas:

- a URL identifies the endpoint you are calling
- methods such as `GET` and `POST` describe the type of request
- many APIs send and receive JSON
- network calls can fail, so exception handling and status checks matter
