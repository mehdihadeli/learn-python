## Imports

### Import the whole module

Use this form when you want the module name to stay visible at the call site. It keeps the source of each function or constant explicit.

```python
import math
print(math.sqrt(16))
```

### Import a specific name

Use this when you need one or two names frequently and the full module prefix would add noise.

```python
from math import sqrt
print(sqrt(16))
```

### Import with alias

Use an alias when a library has a widely accepted short name or when the original name is too long to use comfortably.

```python
import numpy as np
```

### Avoid wildcard imports

Avoid this in normal application code:

Wildcard imports make it harder to tell where names come from and increase the chance of accidental name collisions.

```python
from math import *
```

### What Imports Really Do

An import does two related things:

1. it finds and loads a module
2. it binds a name in the current namespace

This is why these forms behave differently:

```python
import math
from math import sqrt
```

The first binds the module name `math`. The second binds `sqrt` directly.

### The `__name__` Pattern

You will often see this in Python files:

```python
def main():
    print("running as a script")


if __name__ == "__main__":
    main()
```

This means the file can be imported as a module without running its script entry logic automatically.

### Module Search Path

Python resolves imports using its module search path. In practice, that path is influenced by:

- the current working context
- the standard library location
- installed packages
- environment configuration

For beginners, the main takeaway is: import behavior depends on project structure, not only on file names.
