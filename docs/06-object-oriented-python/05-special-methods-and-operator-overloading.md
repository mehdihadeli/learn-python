## Special Methods and Operator Overloading

Python classes can define special methods, often called dunder methods, to integrate with built-in language behavior.

Examples include:

- `__init__` for initialization
- `__repr__` for developer-facing string representation
- `__str__` for user-facing string representation
- `__len__` for `len(obj)`
- `__add__` for `obj1 + obj2`

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
```

This is how operator overloading works in Python: special methods define what built-in operations mean for your custom objects.
