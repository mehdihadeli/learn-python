## Decorators

Decorators wrap one callable with another callable. They are commonly used for logging, validation, timing, registration, caching, and framework hooks.

```python
def announce(func):
    def wrapper(*args, **kwargs):
        print("Calling function")
        return func(*args, **kwargs)
    return wrapper


@announce
def greet(name):
    return f"Hello, {name}"
```

The `@decorate_me` syntax is just a compact way to transform a function after it is defined. Beginners should learn the concept, even if advanced decorator patterns come later.

---
