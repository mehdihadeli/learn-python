## Modules

A module is a single Python file.

Example file `math_utils.py`:

```python
def add(a, b):
    return a + b
```

Use it from another file:

```python
import math_utils

print(math_utils.add(2, 3))
```

The tutorial frames modules as the basic unit of code organization in Python.

- a module has its own namespace
- top-level names in the module become attributes on the module object
- module code is executed the first time it is imported in an interpreter session

```python
import math

print(math.pi)
print(math.sqrt(16))
```

That is why `import module_name` does not copy every function into your current scope. It binds the module object, and you access its attributes through dot notation.
