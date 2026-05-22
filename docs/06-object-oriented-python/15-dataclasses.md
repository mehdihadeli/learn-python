## Dataclasses

For data-focused classes, `dataclass` reduces boilerplate.

```python
from dataclasses import dataclass


@dataclass
class Product:
    name: str
    price: float
```

This automatically gives you an initializer and a useful string representation.

The dataclasses docs add a lot of useful detail:

- fields are discovered from type annotations
- field order matters
- generated behavior can be configured with options such as `frozen=True`, `order=True`, `slots=True`, and `kw_only=True`

### Common dataclass creation approaches

#### 1. Plain `@dataclass`

Use plain `@dataclass` when you want a straightforward data container with the default generated methods.

```python
from dataclasses import dataclass


@dataclass
class Product:
    name: str
    price: float
```

#### 2. Dataclass with defaults

Use defaults when some fields should have a normal starting value and callers should not always need to provide them.

```python
@dataclass
class Product:
    name: str
    price: float
    quantity: int = 0
```

#### 3. Dataclass with `field()` for mutable defaults

Use `field(default_factory=...)` when each instance should get its own fresh mutable value such as a list or dictionary.

```python
from dataclasses import dataclass, field


@dataclass
class Cart:
    items: list[str] = field(default_factory=list)
```

#### 4. Frozen dataclass

Use `frozen=True` when the data should behave like an immutable value object after creation.

```python
@dataclass(frozen=True)
class Point:
    x: int
    y: int
```

#### 5. Dynamic creation with `make_dataclass()`

Use `make_dataclass()` for advanced dynamic cases where the fields are not known until runtime.

```python
from dataclasses import make_dataclass


Point = make_dataclass("Point", [("x", int), ("y", int)])
```

The biggest beginner rule: do not use mutable default values directly. Use `field(default_factory=...)`.

---
