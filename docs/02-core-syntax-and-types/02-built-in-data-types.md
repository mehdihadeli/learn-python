## Built-in Data Types

Common built-in types:

| Type       | Example     | Notes              |
| ---------- | ----------- | ------------------ |
| `int`      | `10`        | whole numbers      |
| `float`    | `3.14`      | decimal numbers    |
| `complex`  | `2 + 3j`    | complex numbers    |
| `bool`     | `True`      | boolean values     |
| `str`      | `"hello"`   | text               |
| `list`     | `[1, 2, 3]` | ordered, mutable   |
| `tuple`    | `(1, 2, 3)` | ordered, immutable |
| `set`      | `{1, 2, 3}` | unique values      |
| `dict`     | `{"a": 1}`  | key-value pairs    |
| `NoneType` | `None`      | absence of value   |

Check a type:

```python
value = 10
print(type(value))
```

### Boolean Type

The `bool` type has only two values: `True` and `False`. It is used for conditions, comparisons, flags, and any situation where you want a yes-or-no result.

```python
is_ready = True
is_admin = False

print(10 > 3)
print(bool(""))
```

Although `bool` is closely related to integers in Python, you should treat booleans as truth values, not as numbers in normal code.

### A More Accurate Mental Model

The official Python docs describe these values as objects. Variables do not contain raw values directly in the way beginners often imagine; instead, names are bound to objects.

This matters because Python behavior depends heavily on:

- whether an object is mutable or immutable
- whether an object is hashable
- whether an object has a truth value
- whether an operation creates a new object or mutates an existing one

For example:

- strings and tuples are immutable
- lists, dictionaries, and sets are mutable
- immutable objects such as tuples can often be used as dictionary keys if all their contents are hashable
- mutable objects such as lists cannot be used as dictionary keys

### Truth Value Testing

According to the standard type documentation, any object can be tested for truth value.

These values are considered false in common Python code:

- `False`
- `None`
- zero numbers such as `0`, `0.0`, and `0j`
- empty collections such as `""`, `[]`, `()`, `{}`, `set()`, and `range(0)`

Everything else is usually treated as true.

```python
print(bool(""))
print(bool("hello"))
print(bool([]))
print(bool([1]))
print(bool(0))
print(bool(42))
```

This is why code like this works naturally in Python:

```python
items = []

if not items:
    print("No items found")
```

### Numeric Types

Python has three main built-in numeric types:

- `int`
- `float`
- `complex`

Important details from the docs:

- Python integers have arbitrary precision, so they do not overflow like fixed-width integers in many other languages
- `float` values are floating-point numbers and therefore have the usual precision limitations of binary floating-point arithmetic
- complex numbers have real and imaginary parts and are written with `j`, such as `2 + 3j`

```python
big_number = 10**50
print(big_number)

print(0.1 + 0.2)
print(2 + 3j)
```

#### `int` (Integer)

`int` represents whole numbers of arbitrary size. Unlike many languages with fixed-width integers, Python integers can grow as large as memory allows.

```python
count = 42
huge = 10**100
```

Use integers for counts, indexes, IDs, and exact whole-number arithmetic.

#### `float` (Floating-Point)

`float` represents decimal numbers using binary floating-point. This is efficient and widely used, but it also means some decimal values cannot be represented exactly.

```python
price = 19.99
result = 0.1 + 0.2
print(result)
```

Use floats for measurements and approximate numeric work, but remember that exact decimal behavior may require `decimal.Decimal` in advanced cases.

#### `complex` (Complex Numbers)

`complex` numbers have a real part and an imaginary part. Python writes the imaginary part with `j`.

```python
value = 2 + 3j
print(value.real)
print(value.imag)
```

Complex numbers are less common in everyday application code, but they are built into the language and useful in mathematics, engineering, and scientific work.
