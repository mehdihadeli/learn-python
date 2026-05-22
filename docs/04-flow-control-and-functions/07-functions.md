## Functions

Define functions with `def`.

```python
def greet(name):
    return f"Hello, {name}"
```

### Returning Multiple Values

Python returns them as a tuple.

```python
def min_max(values):
    return min(values), max(values)


smallest, largest = min_max([1, 5, 2])
```

Functions are first-class objects in Python. That means you can:

- assign them to variables
- pass them to other functions
- return them from functions

```python
def greet(name):
    return f"Hello, {name}"


say_hello = greet
print(say_hello("Alice"))
```
