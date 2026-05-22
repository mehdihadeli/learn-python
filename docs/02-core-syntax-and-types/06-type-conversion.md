## Type Conversion

Python lets you convert between types explicitly.

```python
age = "25"
age_number = int(age)

price = 19
price_float = float(price)

number = 123
number_text = str(number)
```

Be careful: conversion can fail.

```python
int("hello")
# ValueError
```
