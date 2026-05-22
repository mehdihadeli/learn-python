## Generators

Generators produce values one at a time instead of building the entire result in memory up front. They are important for efficient iteration and for understanding how Python handles lazy data production.

Use `yield` inside a function to create a generator:

```python
def countdown(start):
    while start > 0:
        yield start
        start -= 1
```

Use a generator expression for small lazy pipelines:

```python
squares = (x * x for x in range(5))
print(sum(squares))
```

Generators are especially useful when working with large inputs, streams, and pipeline-style transformations.
