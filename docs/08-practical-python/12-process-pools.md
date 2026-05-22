## Process Pools

For CPU-bound work, process pools make it easier to spread jobs across worker processes.

```python
from concurrent.futures import ProcessPoolExecutor


def square(x):
    return x * x


with ProcessPoolExecutor() as executor:
    results = list(executor.map(square, [1, 2, 3, 4]))
```

This is often easier to manage than manually starting and coordinating many processes yourself.
