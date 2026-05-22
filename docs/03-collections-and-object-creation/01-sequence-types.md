## Sequence Types

Sequence types are ordered collections that support positional access. In beginner Python, the most important sequence types are strings, lists, tuples, ranges, bytes, and bytearrays.

They usually support shared ideas such as:

- indexing
- slicing
- length with `len(...)`
- membership checks with `in`
- iteration with `for`

```python
text = "python"
numbers = [1, 2, 3]
point = (10, 20)

print(text[0])
print(numbers[1])
print(point[-1])
```

What differs between sequence types is mutability, typical use case, and the methods available on each concrete type.

### Useful Operations

String methods let you inspect, transform, and query text without modifying the original string, because strings are immutable.

```python
text = "python"

print(text.upper())
print(text.capitalize())
print(text.replace("py", "Py"))
print(text.startswith("py"))
print(len(text))
```

Strings also support indexing and slicing because they are sequence types:

```python
text = "Python"

print(text[0])
print(text[-1])
print(text[1:4])
```

In Python there is no separate character type. Indexing a string returns another string of length 1.

```python
letter = "Python"[0]
print(letter)
print(type(letter))
```

### String Formatting

#### 1. f-strings

Preferred for most modern Python code.

Use f-strings when you want the clearest and most direct way to insert values into text. They are usually the best default in new Python code because the expression and the surrounding text stay easy to read.

```python
name = "Alice"
age = 30
print(f"{name} is {age} years old")
```

f-strings can do more than simple insertion. They can also format values and help with debugging.

```python
price = 12.34567
print(f"{price:.2f}")

user = "alice"
print(f"{user=}")
```

#### 2. `str.format()`

Use `str.format()` when you want explicit placeholder-based formatting or when you are working in code that already uses this style.

```python
print("{} is {} years old".format("Alice", 30))
```

#### 3. Old `%` formatting

Still seen in older code.

You should mostly learn this for reading existing codebases. It still works, but it is usually not the first choice in modern Python.

```python
print("%s is %d years old" % ("Alice", 30))
```

Use f-strings by default in new code. They are usually clearer and align better with current Python style.

### Important String Notes

- strings are immutable
- repeated string concatenation inside loops can become inefficient
- `"separator".join(parts)` is usually the preferred way to combine many strings
- methods like `strip()` remove characters from the ends, not exact prefixes or suffixes unless you use `removeprefix()` or `removesuffix()`

```python
parts = ["learn", "python", "well"]
print(" ".join(parts))

text = "---hello---"
print(text.strip("-"))
print("prefix_value".removeprefix("prefix_"))
```
