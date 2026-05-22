## Comprehensions

### List comprehension

Use a list comprehension when you want to build a list from another iterable in a compact way.

```python
squares = [x * x for x in range(5)]
```

### Conditional list comprehension

Use this form when you want to filter items and keep only those that match a condition while building the list.

```python
evens = [x for x in range(10) if x % 2 == 0]
```

### Dictionary comprehension

Use a dictionary comprehension when you want to generate keys and values from another iterable.

```python
mapping = {x: x * x for x in range(5)}
```

### Set comprehension

Use a set comprehension when you want transformed results but also want duplicates removed automatically.

```python
unique_lengths = {len(word) for word in ["cat", "lion", "dog"]}
```

Comprehensions are a compact way to build new collections by looping, optionally filtering, and transforming values.

There are multiple related approaches, and it helps to know when each fits:

- list comprehension when you want a list immediately
- set comprehension when uniqueness matters
- dictionary comprehension when building key-value mappings
- generator expression when you want lazy iteration instead of building the whole result at once

```python
numbers = [1, 2, 3, 4]

list_result = [x * 2 for x in numbers]
set_result = {x * 2 for x in numbers}
dict_result = {x: x * 2 for x in numbers}
generator_result = (x * 2 for x in numbers)
```

Generator expressions are especially useful when passing data directly into another function:

```python
total = sum(x * x for x in range(10))
```

Prefer a comprehension when it clearly expresses “build a new collection from this iterable”. Prefer a normal loop when the logic becomes hard to read.
