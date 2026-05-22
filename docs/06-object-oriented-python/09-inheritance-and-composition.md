## Inheritance and Composition

### Inheritance

Use inheritance when one class should extend or specialize another existing class relationship.

```python
class Animal:
    def speak(self):
        return "..."


class Dog(Animal):
    def speak(self):
        return "Woof"
```

### Composition

Use composition when one object should contain and use another object as part of its implementation. In Python, this is often the more flexible design.

```python
class Engine:
    def start(self):
        return "engine started"


class Car:
    def __init__(self):
        self.engine = Engine()
```

In Python, composition is often the simpler and safer design.

Inheritance means "is a". Composition means "has a".

The tutorial also stresses that overridden methods in subclasses are found by normal attribute lookup rules, and `super()` is the usual tool for cooperative method reuse.

```python
class Animal:
    def speak(self):
        return "..."


class Dog(Animal):
    def speak(self):
        return super().speak() + " woof"
```

Python also supports multiple inheritance, but beginners should use it carefully. Single inheritance plus composition is usually easier to reason about.

Two important built-ins here are:

- `isinstance(obj, ClassName)`
- `issubclass(Child, Parent)`

Python does not have true private fields in the way some languages do. A leading underscore is a convention for non-public attributes, and double-underscore names trigger name mangling mainly to avoid accidental clashes.
