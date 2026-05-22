## The `__init__.py` File and Package Exports

The `__init__.py` file marks a directory as a package in the traditional Python packaging model and can also expose selected names at the package level.

Example:

```python
from .math_utils import add
```

This can make imports cleaner for users of the package. You may also see `__all__` used to describe intended public exports:

```python
__all__ = ["add"]
```

That does not create hard privacy, but it does communicate the package's public API more clearly.
