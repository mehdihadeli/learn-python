## Iteration

### Iterating Directly

This is the most natural Python style when you care about each value itself, not about its numeric position.

```python
for item in [1, 2, 3]:
    print(item)
```

### With `range()`

Use `range()` when you need a numeric sequence, such as counting a fixed number of times or generating index-like values.

```python
for i in range(5):
    print(i)
```

### With `enumerate()`

Use `enumerate()` when you need both the index and the value while looping. This is usually better than manually updating a counter variable.

```python
for index, value in enumerate(["a", "b", "c"]):
    print(index, value)
```

### With `zip()`

Use `zip()` when you want to iterate over multiple iterables in parallel, taking one item from each on every loop step.

```python
names = ["Alice", "Bob"]
scores = [90, 95]

for name, score in zip(names, scores):
    print(name, score)
```

Under the hood, Python iteration is based on the iterator protocol. In practice, that means `for` works with objects that can produce values one at a time.

This is why you can iterate over many different things:

- lists
- tuples
- strings
- dictionaries
- sets
- files
- generators

When looping over dictionaries, remember the defaults:

```python
user = {"name": "Alice", "age": 30}

for key in user:
    print(key)

for value in user.values():
    print(value)

for key, value in user.items():
    print(key, value)
```
