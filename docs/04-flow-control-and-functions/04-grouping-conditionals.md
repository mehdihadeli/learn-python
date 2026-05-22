## Grouping Conditionals

Complex decisions often require grouping smaller conditions together with `and`, `or`, and `not`.

```python
age = 25
has_ticket = True

if age >= 18 and has_ticket:
    print("allowed")
```

When grouped conditions become hard to read, it is usually better to name intermediate boolean variables or move the logic into a helper function.
