## Diving Deeper into Iterable Methods

Beyond core sequence operations, Python offers built-in functions and iterable-oriented tools that work across many collection types.

Some especially important ones are:

- `len()` for size
- `min()` and `max()` for smallest and largest values
- `sum()` for numeric accumulation
- `sorted()` for producing a new sorted list
- `reversed()` for reverse iteration
- `any()` and `all()` for truth-value aggregation

```python
numbers = [3, 1, 4]

print(len(numbers))
print(sorted(numbers))
print(any(x > 3 for x in numbers))
print(all(x > 0 for x in numbers))
```

These functions are central to idiomatic Python because they let you express common iterable logic directly and clearly.
