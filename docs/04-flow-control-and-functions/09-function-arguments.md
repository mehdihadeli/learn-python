## Function Arguments

Python supports several argument styles.

### Positional arguments

This is the default calling style. Arguments are matched by their position in the function call.

```python
def power(base, exponent):
    return base ** exponent


print(power(2, 3))
```

### Keyword arguments

Use keyword arguments when you want the call to be more explicit and self-documenting.

```python
print(power(exponent=3, base=2))
```

### Default arguments

Use default arguments when a parameter usually has one common value but should still be overrideable.

```python
def greet(name, message="Hello"):
    return f"{message}, {name}"
```

### Variable positional arguments

Use `*args` style parameters when a function should accept any number of extra positional values.

```python
def total(*numbers):
    return sum(numbers)
```

### Variable keyword arguments

Use `**kwargs` style parameters when a function should accept an open-ended set of named options.

```python
def show_info(**kwargs):
    print(kwargs)
```

### Argument unpacking

Use unpacking when your arguments already exist inside a list, tuple, or dictionary and you want to pass them into a function call cleanly.

```python
values = [2, 3]
print(power(*values))

settings = {"base": 2, "exponent": 4}
print(power(**settings))
```

### Positional-only and Keyword-only Parameters

The official tutorial covers this because it becomes important in real APIs.

`/` marks positional-only parameters.

```python
def ratio(a, b, /):
    return a / b


print(ratio(10, 2))
```

`*` marks the start of keyword-only parameters.

```python
def create_user(name, *, is_admin=False):
    return {"name": name, "is_admin": is_admin}


print(create_user("Alice", is_admin=True))
```

This helps API design because it makes some arguments more explicit and prevents ambiguous calling styles.

### Docstrings and Annotations

The official tutorial also introduces documentation strings and annotations as part of function design.

```python
def area(width: float, height: float) -> float:
    """Return the area of a rectangle."""
    return width * height
```

Docstrings explain usage. Type annotations describe intended types for readers and tools.
