## Context Managers Deep Dive

Context managers define setup and cleanup behavior around a block of code. The `with` statement is the standard way to use them.

Files are the most familiar example, but the same idea appears in locks, database transactions, temporary resources, and many library APIs.

Under the hood, context managers are based on `__enter__()` and `__exit__()` methods, or helper tools such as `contextlib`.
