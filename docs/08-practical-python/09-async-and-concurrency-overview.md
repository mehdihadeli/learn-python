## Async and Concurrency Overview

Python supports several concurrency models.

### Concurrency vs Parallelism

Concurrency means structuring work so multiple tasks can make progress over time. Parallelism means multiple tasks are literally executing at the same time.

This distinction matters because some Python tools are about managing many waiting tasks efficiently, while others are about using multiple CPU cores.

### The Global Interpreter Lock (GIL)

In CPython, the global interpreter lock affects how Python threads execute Python bytecode. The practical beginner takeaway is:

- threads are often useful for I/O-bound tasks
- CPU-bound work often benefits more from multiprocessing than from threads

### `threading`

Useful for I/O-bound work.

Use `threading` when tasks spend much of their time waiting on external operations such as network calls or file I/O.

### `multiprocessing`

Useful for CPU-bound work.

Use `multiprocessing` when the work is heavy computation and you want separate processes to run in parallel.

### `asyncio`

Useful for large amounts of asynchronous I/O.

Use `asyncio` when you want many I/O operations to cooperate efficiently in a single-threaded event loop using `async` and `await`.

Small async example:

```python
import asyncio


async def main():
    print("Hello")
    await asyncio.sleep(1)
    print("Async world")


asyncio.run(main())
```

The official `asyncio` docs position it as concurrent I/O using `async` and `await`, not as a universal replacement for threads or processes.

Choose the model based on the problem:

- `threading` for I/O-bound tasks when a blocking library is acceptable
- `multiprocessing` for CPU-bound work that needs true parallelism
- `asyncio` for large amounts of cooperative asynchronous I/O

Core `asyncio` ideas:

- an `async def` defines a coroutine function
- calling it creates a coroutine object
- `await` pauses until another awaitable finishes
- `asyncio.run()` is the common entry point for top-level async programs

```python
import asyncio


async def fetch_one():
    await asyncio.sleep(1)
    return "done"


async def main():
    result = await fetch_one()
    print(result)
```
