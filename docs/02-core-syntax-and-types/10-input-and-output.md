## Input and Output

Input and output are how a simple Python program receives data from a user and shows results back on the screen.

```python
name = input("What is your name? ")
print(f"Hello, {name}")
```

`input()` always returns a string.

```python
age = int(input("Enter your age: "))
```

The built-in docs make two details worth remembering:

- `input()` always returns text, not numbers
- `print()` is flexible: `sep=`, `end=`, `file=`, and `flush=` change its behavior

```python
print("a", "b", "c", sep=" | ")
print("loading", end="...")
print("done")
```

Python also has several ways to format output:

- f-strings for most modern code
- `str.format()` for explicit field-based formatting
- manual formatting methods like `rjust()`, `ljust()`, and `center()` when you want direct control

```python
value = 42
print(f"value = {value:>6}")
print("value = {:>6}".format(value))
print(str(value).rjust(6))
```

---
