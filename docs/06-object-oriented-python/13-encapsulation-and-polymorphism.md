## Encapsulation and Polymorphism

Encapsulation means hiding internal details behind a clear interface. Polymorphism means different objects can respond to the same operation in their own way.

```python
class Dog:
    def speak(self):
        return "woof"


class Cat:
    def speak(self):
        return "meow"
```

Code that calls `speak()` can work with both objects without needing to care which concrete class it has. That is a very common Python form of polymorphism.
