## Dictionaries

Dictionaries store key-value pairs.

The standard docs define `dict` as the main built-in mapping type. Dictionaries map hashable keys to arbitrary values.

### Common Ways to Create a Dictionary

#### 1. Dictionary literal

This is the most common and readable way to create a dictionary when you already know the keys and values.

```python
user = {"name": "Alice", "age": 30}
```

#### 2. Empty dictionary

Use this when you want to start with no key-value pairs and add them later.

```python
user = {}
```

#### 3. `dict()` constructor with keyword arguments

This style can be convenient when the keys are simple identifier-like strings.

```python
user = dict(name="Alice", age=30)
```

It is readable, but it only works when the keys are valid keyword names.

#### 4. `dict()` from pairs

Use this when your data already exists as key-value pairs, such as tuples coming from another iterable.

```python
user = dict([("name", "Alice"), ("age", 30)])
```

#### 5. Dictionary comprehension

Use this when you want to build a dictionary by computing keys, values, or both from some source iterable.

```python
squares = {x: x * x for x in range(5)}
```

This is one of the cleanest ways to transform data into a mapping.

#### 6. `fromkeys()`

Use `fromkeys()` when you want several keys to start with the same initial value.

```python
defaults = dict.fromkeys(["host", "port"], None)
```

This is useful for quick initialization, but it needs extra care when the shared default is mutable.

### Common Dictionary Operations

These dictionary operations cover the most common tasks: reading values, updating entries, and iterating through stored key-value pairs.

```python
user = {"name": "Alice", "age": 30}

print(user["name"])
print(user.get("email"))

user["email"] = "alice@example.com"
user.update({"age": 31})

for key, value in user.items():
    print(key, value)
```

What each operation does:

- `user["name"]` performs direct key lookup and raises `KeyError` if the key is missing
- `user.get("email")` performs a safer lookup and returns `None` by default if the key is missing
- `user["email"] = ...` adds a new key or updates an existing one
- `user.update({...})` merges another mapping or set of key-value pairs into the dictionary
- `user.items()` returns key-value pairs, which makes it convenient to loop over both together

Dictionaries are usually the best choice when you need fast lookup by name, ID, or some other key.

### Important Dictionary Behavior

Modern Python dictionaries preserve insertion order. That means iteration follows the order in which keys were inserted.

```python
data = {"first": 1, "second": 2, "third": 3}
print(list(data))
```

Some important key rules:

- keys must be hashable
- values can be almost anything
- keys that compare equal share the same entry, so `1`, `1.0`, and `True` behave as the same key

```python
example = {1: "int", True: "bool"}
print(example)
```

Be careful with `fromkeys()` and mutable defaults. All keys will share the same value object.

```python
bad = dict.fromkeys(["a", "b"], [])
bad["a"].append(1)
print(bad)

good = {key: [] for key in ["a", "b"]}
good["a"].append(1)
print(good)
```

Dictionary view methods like `keys()`, `values()`, and `items()` return dynamic views, not frozen snapshots.
