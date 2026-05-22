## Tuples

Tuples are ordered, immutable collections.

The docs often position tuples as a good fit for fixed structure data. They are also useful when immutability matters or when you need a hashable sequence.

### Common Ways to Create a Tuple

#### 1. Tuple literal

This is the clearest way to create a tuple when you already know the values. It is a good fit for fixed-size grouped data.

```python
point = (10, 20)
```

#### 2. Without parentheses

Python uses commas, not parentheses, to define a tuple. Parentheses often improve readability, but the commas are what actually matter.

```python
point = 10, 20
```

#### 3. Empty tuple

Use this when you specifically want an empty immutable sequence.

```python
empty = ()
```

#### 4. `tuple()` constructor

Use `tuple()` when you want to convert another iterable into a tuple. This is similar to `list()`, but the result is immutable.

```python
values = tuple([1, 2, 3])
letters = tuple("abc")
```

This is useful when you want fixed data that should not be changed after creation.

#### 5. Single-item tuple

This is a common beginner trap.

A trailing comma is required. Without it, Python treats the expression as just a parenthesized value, not a tuple.

```python
single = (1,)
not_a_tuple = (1)
```

### When Tuples Are a Better Fit Than Lists

Use a tuple when:

- the number and meaning of elements are fixed
- the data should not change after creation
- you want to use the value as a dictionary key or set element and its contents are hashable

```python
point = (10, 20)
locations = {point: "origin-like sample"}
```

Remember: it is the comma that makes a tuple, not the parentheses.
