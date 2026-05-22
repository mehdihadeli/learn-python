## Sets

Sets store unique values and are unordered.

The docs define a set as an unordered collection of distinct hashable objects. A set is mainly about membership and uniqueness, not position.

### Common Ways to Create a Set

#### 1. Set literal

Use a set literal when you already know the unique values you want. This is the most direct and readable way to create a non-empty set.

```python
unique_numbers = {1, 2, 3}
```

#### 2. `set()` constructor

Use `set()` when you want to convert another iterable into a set. This automatically removes duplicate values.

```python
unique_letters = set("hello")
```

The result contains only unique characters, so repeated letters are discarded.

#### 3. Empty set

Use `set()`, not `{}`.

This matters because `{}` creates an empty dictionary, not an empty set.

```python
empty_set = set()
empty_dict = {}
```

#### 4. Set comprehension

Use a set comprehension when you want to build a set by filtering or transforming data while also keeping only unique results.

```python
evens = {x for x in range(10) if x % 2 == 0}
```

This is especially useful when uniqueness is part of the goal of the transformation.

### Common Set Operations

These set operators are useful when you want to compare groups of unique values or combine them in mathematically meaningful ways.

```python
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)
print(a & b)
print(a - b)
print(a ^ b)
```

What each operation does:

- `a | b` gives the union, meaning all distinct elements from both sets
- `a & b` gives the intersection, meaning only elements present in both sets
- `a - b` gives the difference, meaning elements in `a` that are not in `b`
- `a ^ b` gives the symmetric difference, meaning elements that appear in exactly one of the two sets

These operations are one reason sets are powerful when solving membership and uniqueness problems.

### `set` vs `frozenset`

Python has two built-in set types:

- `set`, which is mutable
- `frozenset`, which is immutable and hashable

```python
normal = {1, 2, 3}
frozen = frozenset([1, 2, 3])
```

Use `frozenset` when you need set semantics but also need the object itself to be hashable.

### Set Caveats

- sets do not support indexing or slicing
- iteration order should not be treated as meaningful program logic
- elements must be hashable

```python
values = {1, 2, 3}
print(2 in values)
```
