## Variables and Naming

Python variables are names bound to objects.

```python
name = "Alice"
age = 30
is_active = True
```

Python is dynamically typed, which means you do not declare variable types up front.

```python
value = 10
value = "now I am a string"
```

Use descriptive names:

```python
user_name = "alice"
total_price = 99.99
is_logged_in = False
```

Avoid vague names unless the context is tiny and obvious.

```python
x = 99.99
```

### Naming Conventions

- `snake_case` for variables and functions
- `PascalCase` for classes
- `UPPER_CASE` for constants by convention

```python
MAX_RETRIES = 3

def calculate_total(items):
    ...

class ShoppingCart:
    ...
```

### Deleting Variables

Python lets you remove a name binding with `del`. This deletes the variable name from the current scope, not necessarily the underlying object immediately.

```python
value = 10
del value
```

This is mainly useful when removing items from containers or cleaning up names in interactive work. In ordinary application code, explicit deletion of local variables is uncommon.
