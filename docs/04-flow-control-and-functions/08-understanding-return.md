## Understanding return

`return` ends a function call and sends a value back to the caller. If a function reaches the end without an explicit `return`, Python returns `None`.

```python
def add(a, b):
    return a + b


def do_nothing():
    pass
```

Understanding `return` is important because it separates computing a value from merely printing a value.
