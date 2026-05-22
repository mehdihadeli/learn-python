## Classes and Instances

Python classes define custom object types.

```python
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age


user = User("Alice", 30)
print(user.name)
```

The official tutorial treats classes as a way to bundle data and behavior together.

Important beginner ideas:

- a class defines a new object type
- calling the class creates an instance
- `__init__()` customizes the initial state of each instance
- attribute access uses dot notation

When you write `user = User("Alice", 30)`, Python creates an instance and then calls `__init__()` on it.

### Multiple approaches for creating custom objects

Python gives you several ways to create structured objects depending on the job:

#### 1. Ordinary class instantiation

Use ordinary class instantiation when you already have the constructor arguments in the exact form that the class expects.

```python
user = User("Alice", 30)
```

#### 2. Classmethod factory

Use a classmethod factory when objects may need to be built from a different input shape, such as dictionaries, environment data, or text lines.

```python
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_dict(cls, data):
        return cls(data["name"], data["age"])
```

#### 3. Dataclass construction

Use a dataclass when the object mainly stores data and you do not want to manually write common boilerplate such as `__init__()` and `__repr__()`.

```python
from dataclasses import dataclass


@dataclass
class User:
    name: str
    age: int
```

#### 4. Named tuple style records

Use `NamedTuple` when you want a lightweight, immutable record with named fields.

```python
from typing import NamedTuple


class User(NamedTuple):
    name: str
    age: int
```

#### 5. Dynamic class creation with `type()`

Advanced, but still a real built-in approach:

Use `type()` directly only when you are doing advanced metaprogramming or dynamic framework behavior. It is not the normal beginner-facing way to define classes.

```python
User = type("User", (), {"role": "member"})
user = User()
```

For most learning code:

- use a normal class when behavior matters
- use `@dataclass` when the object is mostly data
- use `NamedTuple` when the data should be lightweight and immutable
