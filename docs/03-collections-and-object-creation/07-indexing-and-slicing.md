## Indexing and Slicing

Indexing lets you access one item at a time, while slicing lets you extract a range of items from a sequence such as a string, list, or tuple.

```python
items = [10, 20, 30, 40, 50]

print(items[0])
print(items[-1])
print(items[1:4])
print(items[:3])
print(items[::2])
```

Important slicing rules, aligned with the docs:

- the start index is included
- the end index is excluded
- omitted start means the beginning
- omitted end means the end
- negative indices count from the end
- the step cannot be zero

```python
letters = ["a", "b", "c", "d", "e"]

print(letters[:])
print(letters[::-1])
print(letters[1:5:2])
```
