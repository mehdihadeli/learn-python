## Loops

### `for`

Use a `for` loop when you want to iterate over items from an iterable such as a list, string, dictionary, file, or range.

```python
for item in [1, 2, 3]:
    print(item)
```

### `while`

Use a `while` loop when repetition should continue until a condition becomes false, rather than over a fixed iterable.

```python
count = 0
while count < 3:
    print(count)
    count += 1
```

### `break` and `continue`

Use `continue` to skip the rest of the current loop iteration and move to the next one. Use `break` to stop the loop entirely.

```python
for number in range(5):
    if number == 2:
        continue
    if number == 4:
        break
    print(number)
```

### `range()` and iteration style

The official tutorial stresses that Python `for` loops iterate over items, not just counters.

```python
for word in ["cat", "window", "defenestrate"]:
    print(word, len(word))
```

When you do need numbers, `range()` is the standard tool:

```python
print(list(range(5)))
print(list(range(2, 10, 2)))
print(list(range(10, 0, -3)))
```

`range()` is an immutable sequence-like object. It does not build a full list unless you explicitly convert it.

### Loop `else`

Python loops can have an `else` clause. It runs when the loop finishes normally, not when it stops because of `break`.

```python
for number in range(2, 10):
    if number % 7 == 0:
        print("found")
        break
else:
    print("not found")
```

This is unusual at first, but it is useful for search-style loops.

### `pass`

`pass` is a real statement that does nothing. It is often used as a placeholder while sketching code.

```python
def todo():
    pass
```
