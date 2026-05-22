## Tasks and Coroutines

In `asyncio`, an `async def` function defines a coroutine function. Calling it creates a coroutine object. Tasks are wrappers scheduled by the event loop so coroutines can run concurrently.

```python
import asyncio


async def fetch_one(delay):
    await asyncio.sleep(delay)
    return delay


async def main():
    task1 = asyncio.create_task(fetch_one(1))
    task2 = asyncio.create_task(fetch_one(2))
    print(await task1)
    print(await task2)
```

Understanding the difference between a coroutine object and a scheduled task is one of the key steps in learning `asyncio` well.
