## Creating Python Objects in Multiple Ways

This is one of the most important sections for beginners. In Python, the same kind of object can often be created in several valid ways. You should know the common ones and when they make sense.

### Numbers

Numbers can be created directly with literals when you already know the value, or with constructors when the starting value comes from text or another numeric form.

```python
count = 10
count = int("10")

price = 19.5
price = float("19.5")

value = complex(2, 3)
```

- `10` is an integer literal
- `int("10")` converts text into an integer
- `19.5` is a float literal
- `float("19.5")` converts text into a floating-point number
- `complex(2, 3)` creates a complex number from real and imaginary parts

### Creating Strings

Strings are usually created either directly with literals or by converting another object to its string form.

```python
name = "Alice"
name = str(123)
```

- use a literal when you already know the text you want
- use `str()` when you want the text representation of another value

### Creating Lists

Lists can be created from literals, constructors, ranges, and comprehensions depending on whether you are declaring values, converting data, or transforming data.

```python
items = [1, 2, 3]
items = list((1, 2, 3))
items = list(range(3))
items = [x for x in range(3)]
```

- literal form is the normal default
- `list(...)` converts another iterable into a list
- `list(range(...))` builds a concrete numeric list
- a comprehension creates a list while transforming values

### Creating Tuples

Tuples can be created in a few different forms, but they are all used when the result should be ordered and immutable.

```python
point = (1, 2)
point = tuple([1, 2])
point = 1, 2
```

- tuple literal is the clearest form
- `tuple(...)` converts another iterable
- comma-separated values create a tuple even without parentheses

### Creating Sets

Sets can be created directly, by conversion, or by comprehension when you want uniqueness as part of the result.

```python
tags = {"python", "backend"}
tags = set(["python", "backend"])
tags = {word.lower() for word in ["Python", "Backend"]}
```

- set literal is the normal form for known values
- `set(...)` converts another iterable and removes duplicates
- set comprehension builds a unique transformed collection

### Creating Dictionaries

Dictionaries can be created with literals, constructors, or comprehensions depending on how the source data is shaped.

```python
config = {"debug": True}
config = dict(debug=True)
config = dict([("debug", True)])
config = {key: None for key in ["host", "port"]}
```

- literal form is the most common
- `dict(...)` with keywords is convenient for simple string keys
- `dict(...)` from pairs works well when key-value data already exists in iterable form
- dictionary comprehensions are ideal when generating mappings from other data

### Class Instances

The most common approach is direct instantiation.

```python
class User:
    def __init__(self, name):
        self.name = name


user = User("Alice")
```

You can also use class methods as factory constructors when the input shape is different.

```python
class User:
    def __init__(self, name):
        self.name = name

    @classmethod
    def from_dict(cls, data):
        return cls(data["name"])


user = User.from_dict({"name": "Alice"})
```

For plain data containers, a dataclass is often cleaner.

```python
from dataclasses import dataclass


@dataclass
class User:
    name: str
    age: int


user = User("Alice", 30)
```

### When to Use Which Approach

- use literals when possible because they are usually the most readable
- use constructors like `list()` and `dict()` when converting from another iterable or data shape
- use comprehensions when you are building a new collection by transforming data
- use classmethod factories when object creation needs validation or alternate input forms
- use `dataclass` for simple data-focused objects
