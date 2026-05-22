## Instance Attributes and Class Attributes

These two attribute types solve different problems: instance attributes belong to one object, while class attributes are shared at the class level.

```python
class User:
    species = "human"

    def __init__(self, name):
        self.name = name
```

- `species` is a class attribute
- `name` is an instance attribute

The docs highlight one easy mistake: do not put mutable per-instance state in a class attribute unless you intentionally want it shared.

Bad:

```python
class User:
    tags = []
```

Better:

```python
class User:
    def __init__(self, name):
        self.name = name
        self.tags = []
```

Attribute lookup also matters:

- Python checks the instance first
- then the class
- then base classes following method resolution order
