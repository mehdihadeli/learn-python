## Special Behavior with Numbers

Python numeric types have a few behaviors that surprise beginners if they come from other languages.

Important examples:

- integer division with `/` produces a float
- floor division with `//` rounds down toward negative infinity
- floating-point arithmetic can show precision artifacts
- booleans behave like integers in some arithmetic contexts because `bool` is a subclass of `int`

```python
print(5 / 2)
print(5 // 2)
print(-5 // 2)
print(True + True)
```

Understanding these details helps avoid subtle bugs in arithmetic and comparisons.

### `None`

`None` is the single null-like object in Python. It usually means:

- no value
- missing value
- not yet initialized
- a function returned nothing explicitly

```python
def log_message(message):
    print(message)


result = log_message("hello")
print(result is None)
```

Prefer identity checks with `None`:

```python
value = None

if value is None:
    print("No value yet")
```

### Binary Data Types

Python also includes built-in types for working with raw binary data.

- `bytes` for immutable byte sequences
- `bytearray` for mutable byte sequences
- `memoryview` for viewing binary data without copying it

```python
payload = b"ABC"
mutable = bytearray(b"ABC")
view = memoryview(payload)
```

These types matter when working with files, sockets, encodings, images, and lower-level protocols. They are different from `str`, which represents Unicode text.

#### `bytes`

`bytes` is an immutable sequence of byte values from `0` to `255`.

```python
payload = b"hello"
print(payload[0])
```

Use `bytes` when data should not change after creation.

#### `bytearray`

`bytearray` is the mutable counterpart to `bytes`.

```python
data = bytearray(b"hello")
data[0] = 72
print(data)
```

Use it when you need to modify binary data in place.

#### `memoryview`

`memoryview` lets you view binary data without copying it.

```python
payload = b"abcdef"
view = memoryview(payload)
print(view[1:4])
```

This is useful for performance-sensitive code and lower-level data handling.
