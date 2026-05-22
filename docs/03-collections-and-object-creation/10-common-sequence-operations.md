## Common Sequence Operations

Python sequence types such as strings, lists, and tuples share many common operations. Learning these once gives you a lot of leverage across the language.

Common operations include:

- indexing with `items[0]`
- slicing with `items[1:4]`
- length with `len(items)`
- membership with `value in items`
- concatenation with `a + b`
- repetition with `items * 3`

```python
letters = ["a", "b", "c"]

print(len(letters))
print("b" in letters)
print(letters + ["d"])
print(letters * 2)
```

Lists and tuples also support helpful methods such as `count()` and `index()`:

```python
numbers = [1, 2, 2, 3]

print(numbers.count(2))
print(numbers.index(3))
```
