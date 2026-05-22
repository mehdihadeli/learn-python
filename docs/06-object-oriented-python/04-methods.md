## Methods

### Instance method

Use an instance method when the behavior needs access to data stored on a particular object.

```python
class User:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello, I am {self.name}"
```

### Class method

Use a class method when the logic belongs to the class itself rather than to one specific instance. Alternate constructors are the most common example.

```python
class User:
    def __init__(self, name):
        self.name = name

    @classmethod
    def anonymous(cls):
        return cls("Anonymous")
```

### Static method

Use a static method for utility behavior that belongs conceptually to the class but does not need instance state or class state.

```python
class MathHelper:
    @staticmethod
    def add(a, b):
        return a + b
```

### What method binding means

When you access a function through an instance, Python turns it into a bound method.

```python
class User:
    def greet(self):
        return "hello"


user = User()
print(user.greet())
```

Conceptually, `user.greet()` is like `User.greet(user)`.

That is why instance methods take `self` as the first parameter by convention.

### When to use which kind of method

- instance method: needs instance state
- class method: needs the class, often for alternate constructors
- static method: related utility, but no instance or class state needed
