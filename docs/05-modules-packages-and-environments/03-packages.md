## Packages

A package is a directory of Python modules, typically used to organize larger codebases.

Example:

```text
my_app/
    app.py
    utils/
        __init__.py
        math_utils.py
```

Packages are how Python structures larger module namespaces using dotted names such as `my_app.utils.math_utils`.

Important practical ideas from the docs:

- a package is usually a directory containing `__init__.py`
- importing a package or submodule follows the filesystem and `sys.path`
- `from package import item` may import either a submodule or a name exposed by the package

### Common import approaches inside packages

These forms show different levels of specificity. Choose the one that makes the dependency clear without making the call sites noisy.

```python
import my_app.utils.math_utils
from my_app.utils import math_utils
from my_app.utils.math_utils import add
```

For code inside a package, you may also see relative imports:

```python
from . import math_utils
from ..shared import helpers
```

Relative imports are based on the current package, which is why they are typically used inside package code, not top-level scripts.
