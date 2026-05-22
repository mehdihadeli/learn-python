## Regular Expressions

Regular expressions let you search, validate, and transform text patterns using the `re` module.

```python
import re


pattern = r"\d+"
print(re.findall(pattern, "Room 12, floor 3"))
```

They are useful, but they can become hard to read quickly. For simple string tasks, normal string methods are often easier to maintain.
