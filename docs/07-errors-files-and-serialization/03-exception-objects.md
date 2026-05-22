## Exception Objects

Exceptions are objects. They can carry messages and other useful information about what went wrong.

```python
try:
    int("abc")
except ValueError as exc:
    print(type(exc))
    print(exc)
```

Treating exceptions as objects is useful for logging, debugging, and custom error design.
