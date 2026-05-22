## Adding a User Interface

Python can also serve HTML pages or power a backend that a separate frontend calls.

With Flask, a simple UI often starts with templates:

```python
from flask import render_template
```

For beginners, the main idea is simple: not every Python web app is JSON-only. Some applications return HTML directly, and others serve an API consumed by a browser frontend.
