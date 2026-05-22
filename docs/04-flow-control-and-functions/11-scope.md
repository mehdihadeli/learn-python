## Scope

Python uses LEGB name lookup:

- Local
- Enclosing
- Global
- Built-in

```python
x = "global"


def outer():
    x = "enclosing"

    def inner():
        x = "local"
        print(x)

    inner()


outer()
```

Two related statements are worth knowing early:

- `global` to bind a name in module-level scope
- `nonlocal` to bind a name in the nearest enclosing function scope

```python
count = 0


def increment_global():
    global count
    count += 1
```

```python
def outer():
    total = 0

    def inner():
        nonlocal total
        total += 1
        return total

    return inner
```

Use these carefully. In many cases, passing values explicitly or using objects leads to clearer code.
