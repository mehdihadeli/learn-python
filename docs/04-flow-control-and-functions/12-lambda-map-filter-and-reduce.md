## Lambda, map, filter, and reduce

### Lambda

Use `lambda` for very small anonymous functions that are simple enough to read inline. For anything non-trivial, a normal `def` is usually clearer.

```python
square = lambda x: x * x
print(square(4))
```

### `map()`

Use `map()` when you want to apply the same function to every item in an iterable. In many codebases, a comprehension is preferred if it reads more clearly.

```python
numbers = [1, 2, 3]
print(list(map(lambda x: x * 2, numbers)))
```

### `filter()`

Use `filter()` when you want to keep only items that satisfy a condition. As with `map()`, a comprehension is often easier to read in normal application code.

```python
numbers = [1, 2, 3, 4]
print(list(filter(lambda x: x % 2 == 0, numbers)))
```

### `reduce()`

Use `reduce()` when you need to combine an iterable into one accumulated result through repeated application of a function.

```python
from functools import reduce


numbers = [1, 2, 3, 4]
result = reduce(lambda acc, x: acc + x, numbers, 0)
print(result)
```

In modern Python code, comprehensions are often preferred over `map()` and `filter()` when they are easier to read.
