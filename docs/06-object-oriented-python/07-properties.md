## Properties

Use properties when you want attribute-style access with logic behind it.

```python
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature cannot go below absolute zero")
        self._celsius = value
```

Properties let you start with attribute-style access and later add validation or computed behavior without changing the public API.

There are two common ways to create them:

### 1. Decorator style

This is the modern and most common style. It keeps getter, setter, and deleter behavior visually grouped.

```python
@property
def celsius(self):
    return self._celsius
```

### 2. `property()` function style

This older functional style builds the property explicitly from getter and setter functions. You may still see it in older or more dynamic code.

```python
class Temperature:
    def get_celsius(self):
        return self._celsius

    def set_celsius(self, value):
        self._celsius = value

    celsius = property(get_celsius, set_celsius)
```

The decorator form is more common in modern Python code.
