## Testing

Python commonly uses either `unittest` or `pytest`.

### `unittest`

Use `unittest` when you want the built-in standard library testing framework or when you are working in codebases that prefer xUnit-style test classes.

```python
import unittest


def add(a, b):
    return a + b


class TestAdd(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)


if __name__ == "__main__":
    unittest.main()
```

### `pytest`

Use `pytest` when you want lighter syntax, simpler test functions, and the broader ecosystem that many modern Python projects prefer.

```python
def add(a, b):
    return a + b


def test_add():
    assert add(2, 3) == 5
```

Run tests:

```bash
pytest
```

The standard library includes `unittest`, while much of the Python ecosystem prefers `pytest` for its lighter syntax.

Use both ideas to understand the landscape:

- `unittest` teaches the built-in xUnit-style model
- `pytest` is common in modern projects and works well with plain `assert`

Testing basics worth emphasizing:

- test behavior, not implementation trivia
- keep tests small and focused
- separate pure functions from side effects when possible
- use fixtures or setup helpers instead of repeating large setup blocks everywhere
