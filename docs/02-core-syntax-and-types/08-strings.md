## Strings

Strings are immutable sequences of Unicode characters.

That description from the docs is important. A Python string is not a mutable character array. Any operation that appears to "change" a string is really creating a new string object.

### String Creation

Strings can be created with different literal forms depending on whether you need single-line text, multi-line text, or easier handling of backslashes.

```python
name = "Python"
message = 'Hello'
multiline = """This is
multiple lines"""
```

You will also see raw strings, especially in regular expressions and Windows-style paths:

```python
path = r"C:\Users\PC\projects"
pattern = r"\d+"
```

Raw strings do not turn off all syntax rules, but they do reduce normal backslash escaping.
