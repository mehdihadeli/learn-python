## Comments and Docstrings

Comments explain code for human readers. Docstrings document modules, classes, and functions in a structured way that tools can also read.

Use `#` for line comments:

```python
# This stores the user's display name.
name = "Alice"
```

Use triple-quoted strings as docstrings for modules, classes, and functions:

```python
def greet(name):
    """Return a greeting for the given name."""
    return f"Hello, {name}"
```

Good comments explain why something exists or why a choice was made. Good docstrings explain purpose, inputs, outputs, and usage expectations.
