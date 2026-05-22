## Raising and Handling Errors

### `try` and `except`

Use `try` and `except` when an operation may fail in a known way and you want to handle that failure without crashing the whole program.

```python
try:
    number = int("abc")
except ValueError:
    print("That was not a valid integer")
```

### Handling Multiple Exceptions

Sometimes different exceptions should be handled differently, and sometimes several exception types can share one recovery path.

```python
try:
    value = int(text)
except ValueError:
    print("Bad number")
except TypeError:
    print("Wrong input type")
```

You can also catch a tuple of exception types when the handling is the same.

### `else` and `finally`

Use `else` for code that should run only when no exception happened, and use `finally` for cleanup that must happen either way.

```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Cannot divide by zero")
else:
    print(result)
finally:
    print("Done")
```

### Raise your own error

Raise your own exception when invalid input or invalid program state should stop the current operation clearly.

```python
def divide(a, b):
    if b == 0:
        raise ValueError("b must not be zero")
    return a / b
```

### Custom exceptions

Create a custom exception when built-in exception types are too general and your code needs a clearer domain-specific failure type.

```python
class InvalidAgeError(Exception):
    pass
```

### Exception Chaining

When one error happens because of another, Python lets you chain exceptions.

```python
def parse_age(text):
    try:
        return int(text)
    except ValueError as exc:
        raise ValueError("Age must be a whole number") from exc
```

This preserves the original cause and makes debugging easier.

### Cleanup and `with`

The tutorial emphasizes cleanup behavior for a reason. Resources such as files should be released reliably even when exceptions occur.

```python
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()
```

The `with` statement uses a context manager so setup and cleanup happen in a controlled way.
