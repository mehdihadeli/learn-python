## Assertions and Debug Logging

Assertions are useful for internal sanity checks during development, while logging helps you inspect runtime behavior without sprinkling ad hoc `print()` calls everywhere.

Use an assertion when something should always be true if the program logic is correct:

```python
value = 10
assert value > 0
```

Use the `logging` module when you want structured debug information:

```python
import logging


logging.basicConfig(level=logging.INFO)
logging.info("Application started")
```

As a general rule:

- assertions are for developer assumptions
- exceptions are for recoverable or reportable runtime problems
- logging is for observability and debugging
