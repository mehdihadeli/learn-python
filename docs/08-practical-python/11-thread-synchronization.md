## Thread Synchronization

When multiple threads share mutable state, synchronization tools help prevent race conditions.

Common tools include:

- `Lock`
- `RLock`
- `Event`
- `Semaphore`
- `Condition`

```python
import threading


lock = threading.Lock()
```

You do not need all of these immediately, but you should know that threads often need coordination when they touch the same data.
