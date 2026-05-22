## `super()` and Method Resolution Order

`super()` is the usual way to call inherited behavior from a base class. It matters especially when methods are overridden or when multiple inheritance is involved.

```python
class Animal:
    def speak(self):
        return "..."


class Dog(Animal):
    def speak(self):
        return super().speak() + " woof"
```

Python resolves methods according to the method resolution order, often shortened to MRO. For beginners, the practical point is simple: Python has a defined search order for attributes and methods, and `super()` participates in that cooperative lookup.
