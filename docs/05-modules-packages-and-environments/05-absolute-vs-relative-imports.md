## Absolute vs Relative Imports

Absolute imports start from the top-level package path. Relative imports start from the current package location.

```python
from my_app.utils.math_utils import add
from . import math_utils
from ..shared import helpers
```

In general:

- use absolute imports when you want clarity from anywhere in the project
- use relative imports mainly inside package internals where the relationship is already clear

Beginners usually find absolute imports easier to reason about.
