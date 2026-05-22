## Naming Conventions for Functions

Python function names usually follow `snake_case`. Good function names are action-oriented and communicate intent clearly.

```python
def calculate_total(items):
    ...


def send_email(message):
    ...
```

Prefer names that describe what the function does rather than vague names like `handle()` or `process()` unless the context is extremely clear.

### Important Warning About Mutable Defaults

Avoid this:

```python
def add_item(item, items=[]):
    items.append(item)
    return items
```

Prefer this:

```python
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items
```
