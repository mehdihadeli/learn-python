## Creating and Starting Threads

Threads are one way to run multiple I/O-heavy tasks so they can make progress while waiting on external operations.

```python
import threading


def work():
    print("working")


thread = threading.Thread(target=work)
thread.start()
thread.join()
```

The important beginner idea is that starting a thread begins concurrent execution, and `join()` waits for it to finish.
