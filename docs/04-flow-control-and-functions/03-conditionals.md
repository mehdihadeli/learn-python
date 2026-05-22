## Conditionals

Conditionals let your program choose different paths depending on whether an expression is true or false.

```python
age = 20

if age < 13:
    print("child")
elif age < 18:
    print("teen")
else:
    print("adult")
```

Python does not use braces. Indentation is part of the syntax.

The control-flow tutorial emphasizes that `if` statements work naturally with Python truth-value testing, not only with explicit booleans.

```python
items = [1, 2, 3]

if items:
    print("We have items")
```

This is more idiomatic than writing `if len(items) > 0:` in many cases.

Python also has `match` for structural pattern matching. It is not a simple replacement for every `if` chain, but it is useful when the shape of the data matters.

```python
def http_error(status):
    match status:
        case 400:
            return "Bad request"
        case 404:
            return "Not found"
        case _:
            return "Something else"
```

Use `if` when you are checking general conditions. Use `match` when you are matching structured values or a fixed set of patterns.
