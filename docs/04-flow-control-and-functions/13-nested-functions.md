## Nested Functions

Python lets you define functions inside other functions. This is useful when helper behavior only makes sense inside one outer function.

```python
def outer(name):
    def inner():
        return f"Hello, {name}"

    return inner()
```

Nested functions also matter because closures and decorators are built on the same underlying idea.
