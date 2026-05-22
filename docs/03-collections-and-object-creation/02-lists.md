## Lists

Lists are ordered, mutable collections.

The Python docs describe them as mutable sequences. They are the default general-purpose collection when you need order and expect the contents to change over time.

### Common Ways to Create a List

#### 1. List literal

This is the most common way to create a list when you already know the values you want to store. It is short, readable, and usually the best default choice.

```python
numbers = [1, 2, 3]
```

#### 2. Empty list literal

Use this when you want to start with an empty list and add items later with methods such as `append()` or `extend()`.

```python
numbers = []
```

#### 3. `list()` constructor

Use `list()` when you want to convert another iterable object into a list. This is useful when the original data is a tuple, string, range, generator, or some other iterable.

```python
numbers = list((1, 2, 3))
letters = list("abc")
```

In the first example, the tuple becomes a list. In the second, each character of the string becomes an element in the list.

#### 4. From `range()`

This is a common way to build a list of numbers in sequence. `range(5)` itself is not a list, so `list(range(5))` converts that sequence object into a real list.

```python
numbers = list(range(5))
```

The result is `[0, 1, 2, 3, 4]`. This is useful when you need actual list storage instead of a lazy numeric sequence.

#### 5. List comprehension

Use a list comprehension when you want to build a new list by looping over data and optionally transforming each value. This is one of the most important Python patterns.

```python
squares = [x * x for x in range(5)]
```

This creates a list by taking each number from `range(5)`, squaring it, and storing the result in the new list.

### Common List Operations

These are some of the most common list methods you will use when adding, removing, reordering, and updating elements.

```python
items = ["a", "b", "c"]

items.append("d")
items.extend(["e", "f"])
items.insert(1, "x")
items.remove("b")
last = items.pop()
items.sort()
items.reverse()
```

What each operation does:

- `append("d")` adds one item to the end of the list
- `extend(["e", "f"])` adds each item from another iterable to the end of the list
- `insert(1, "x")` inserts a value at a specific index and shifts later items to the right
- `remove("b")` removes the first matching value
- `pop()` removes and returns an item, by default the last one
- `sort()` sorts the list in place
- `reverse()` reverses the list in place

These methods mutate the original list. That is why lists are often chosen when you need a collection that can grow, shrink, or be reordered.

### Important List Behavior

Lists are mutable, so methods like `append()`, `sort()`, and `reverse()` usually change the list in place and return `None`.

```python
numbers = [3, 1, 2]
result = numbers.sort()

print(numbers)
print(result)
```

This is different from functions like `sorted()`, which return a new list.

```python
numbers = [3, 1, 2]
ordered = sorted(numbers)

print(numbers)
print(ordered)
```

Also be careful with list repetition when nested mutable values are involved:

```python
bad = [[]] * 3
bad[0].append("x")
print(bad)

good = [[] for _ in range(3)]
good[0].append("x")
print(good)
```
