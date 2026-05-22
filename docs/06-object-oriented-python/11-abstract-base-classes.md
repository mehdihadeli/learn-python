## Abstract Base Classes

Abstract base classes, often imported from `abc`, let you define required methods for a family of related classes.

```python
from abc import ABC, abstractmethod


class Shape(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError
```

Use ABCs when you want to define a shared interface and communicate that subclasses are expected to implement certain behavior.
