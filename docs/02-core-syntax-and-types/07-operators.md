## Operators

### Arithmetic

Arithmetic operators are used when you want to perform numeric calculations such as addition, subtraction, multiplication, division, powers, and remainders.

```python
print(10 + 2)
print(10 - 2)
print(10 * 2)
print(10 / 2)
print(10 // 3)
print(10 % 3)
print(2 ** 3)
```

### Comparison

Comparison operators are used when you want to compare two values and get a boolean result such as `True` or `False`.

```python
print(5 == 5)
print(5 != 3)
print(5 > 3)
print(5 < 3)
print(5 >= 5)
print(5 <= 6)
```

### Logical

Logical operators combine or invert truth values. They are commonly used in conditions, filters, and branching logic.

```python
print(True and False)
print(True or False)
print(not True)
```

### Membership

Membership operators answer the question “is this value contained inside that collection or sequence?”

```python
print("a" in "apple")
print(3 in [1, 2, 3])
```

### Identity

Identity checks answer a different question from equality: they tell you whether two names refer to the same object in memory.

```python
a = [1, 2]
b = a
c = [1, 2]

print(a is b)
print(a is c)
print(a == c)
```

Use `==` for value equality. Use `is` for identity checks, most commonly with `None`.

```python
value = None
print(value is None)
```

### Operator Notes That Matter in Real Code

Python comparison operators can be chained.

```python
age = 20
print(18 <= age < 30)
```

Logical operators use short-circuit evaluation:

- `a and b` stops early if `a` is false
- `a or b` stops early if `a` is true

```python
user_name = ""
display_name = user_name or "Anonymous"
print(display_name)
```

Membership and identity are also regular comparison operations, but they answer different questions:

- `in` checks containment
- `==` checks value equality
- `is` checks object identity

Keeping those separate avoids a large class of beginner bugs.
