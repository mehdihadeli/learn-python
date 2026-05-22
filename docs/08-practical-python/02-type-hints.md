## Type Hints

Type hints improve readability, tooling, and refactoring support.

```python
def greet(name: str) -> str:
    return f"Hello, {name}"
```

Examples with collections:

```python
def total(values: list[int]) -> int:
    return sum(values)


def invert(mapping: dict[str, int]) -> dict[int, str]:
    return {value: key for key, value in mapping.items()}
```

The typing docs make one key point explicit: type hints are not enforced by the Python runtime.

They are mainly for:

- readers
- IDEs
- linters
- static type checkers such as `mypy` or `pyright`

```python
def greet(name: str) -> str:
    return f"Hello, {name}"
```

This annotation does not stop you from calling `greet(123)` at runtime unless you add your own checks.

### Common modern hinting approaches

#### 1. Built-in generic types

Use built-in generic forms such as `list[int]` and `dict[str, int]` in modern Python instead of older `typing.List` and `typing.Dict` forms.

```python
values: list[int] = [1, 2, 3]
mapping: dict[str, int] = {"a": 1}
```

#### 2. Union types with `|`

Use `|` when a value may validly be one of several types, such as a string or `None`.

```python
def parse(text: str | None) -> int:
    return 0 if text is None else int(text)
```

#### 3. Type aliases

Use a type alias when a type meaning deserves a domain name, even if the underlying runtime type is simple.

```python
type UserId = int
```

#### 4. More precise mapping and sequence abstractions

Often it is better to type against behavior:

Use abstract collection types when your function only depends on behavior such as iteration or indexing, not on one concrete container implementation.

```python
from collections.abc import Sequence


def total(values: Sequence[int]) -> int:
    return sum(values)
```

That is often more flexible than requiring a concrete `list[int]`.
