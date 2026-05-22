## Decorators Deep Dive

At a deeper level, decorators are closures that receive a function and return a new callable. Real decorators often need `*args`, `**kwargs`, and metadata preservation with `functools.wraps`.

```python
from functools import wraps


def announce(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print("calling", func.__name__)
        return func(*args, **kwargs)

    return wrapper
```

This matters because decorators are common in frameworks, testing tools, caching helpers, and registration systems.
