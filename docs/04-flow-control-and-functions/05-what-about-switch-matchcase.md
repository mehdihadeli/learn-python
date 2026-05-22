## What About switch? (Match/Case)

Python does not have a traditional `switch` statement like some other languages. Modern Python instead provides `match` and `case` for structural pattern matching.

```python
def describe_status(code):
    match code:
        case 200:
            return "ok"
        case 404:
            return "not found"
        case _:
            return "unknown"
```

This is more powerful than a classic switch because it can match not only literal values, but also structured data patterns.
