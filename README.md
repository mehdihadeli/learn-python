# Learn Python

Learn Python from the ground up with a practical, readable path inspired by course-style learning repositories, but written specifically for Python.

This repository should help:

- beginners who want a structured roadmap
- developers coming from other languages
- engineers who want a quick Python reference with clear examples

The goal is not to collect random notes. The goal is to build a clean learning path that is accurate, readable, and easy to expand with runnable examples later.

This README now aims to stay close to the spirit of the official Python documentation:

- the Python Tutorial for informal, step-by-step learning
- the Python Standard Library docs for built-in types and practical APIs
- the Language Reference for exact syntax and semantics

## What This Repository Should Teach

- Python fundamentals in a logical order
- correct mental models for core language features
- multiple valid ways to create common Python objects
- practical examples you can run and modify
- modern Python practices, not outdated habits

## How To Use This README

If you are new to Python, read from top to bottom.

If you already know the basics, jump directly to the section you need:

- syntax and built-in types
- collections and object creation
- functions and scope
- modules and packages
- object-oriented programming
- exceptions, files, and JSON
- testing, type hints, and next steps

---

## Table of Contents

### Getting Started

- [What Is Python?](#what-is-python)
- [Why Learn Python?](#why-learn-python)
- [Python Alternatives](#python-alternatives)
- [Python Versions](#python-versions)
- [Installation and Setup](#installation-and-setup)
- [Setting Up Python on macOS](#setting-up-python-on-macos)
- [Installing an IDE (VS Code)](#installing-an-ide-vs-code)
- [Your First Program](#your-first-program)
- [How Python Runs Code](#how-python-runs-code)
- [How To Run Python Programs](#how-to-run-python-programs)

### Chapter I: Core Syntax and Types

- [Variables and Naming](#variables-and-naming)
- [Built-in Data Types](#built-in-data-types)
- [Special Behavior with Numbers](#special-behavior-with-numbers)
- [Comments and Docstrings](#comments-and-docstrings)
- [The Documentation Interlude](#the-documentation-interlude)
- [Type Conversion](#type-conversion)
- [Operators](#operators)
- [Strings](#strings)
- [Escaping Characters](#escaping-characters)
- [Input and Output](#input-and-output)

### Chapter II: Collections and Object Creation

- [Sequence Types](#sequence-types)
- [Lists](#lists)
- [Tuples](#tuples)
- [Sets](#sets)
- [Dictionaries](#dictionaries)
- [Creating Python Objects in Multiple Ways](#creating-python-objects-in-multiple-ways)
- [Indexing and Slicing](#indexing-and-slicing)
- [Iteration](#iteration)
- [Comprehensions](#comprehensions)
- [Common Sequence Operations](#common-sequence-operations)
- [Diving Deeper into Iterable Methods](#diving-deeper-into-iterable-methods)
- [Choosing the Right Collection](#choosing-the-right-collection)

### Chapter III: Flow Control and Functions

- [Introducing Python Statements](#introducing-python-statements)
- [Assignments, Expressions, and Prints](#assignments-expressions-and-prints)
- [Conditionals](#conditionals)
- [Grouping Conditionals](#grouping-conditionals)
- [What About switch? (Match/Case)](#what-about-switch-matchcase)
- [Loops](#loops)
- [Functions](#functions)
- [Understanding return](#understanding-return)
- [Function Arguments](#function-arguments)
- [Naming Conventions for Functions](#naming-conventions-for-functions)
- [Scope](#scope)
- [Lambda, map, filter, and reduce](#lambda-map-filter-and-reduce)
- [Nested Functions](#nested-functions)
- [Generators](#generators)
- [Decorators](#decorators)

### Chapter IV: Modules, Packages, and Environments

- [Libraries](#libraries)
- [Modules](#modules)
- [Packages](#packages)
- [Imports](#imports)
- [Absolute vs Relative Imports](#absolute-vs-relative-imports)
- [Advanced Module Topics](#advanced-module-topics)
- [The `__init__.py` File and Package Exports](#the-__init__py-file-and-package-exports)
- [The `__pycache__` Folder and Reloading Modules](#the-__pycache__-folder-and-reloading-modules)
- [Module Docstrings](#module-docstrings)
- [Using PyPI, the Python Package Index](#using-pypi-the-python-package-index)
- [Virtual Environments](#virtual-environments)
- [Package Management](#package-management)
- [Python Package Index (PyPI)](#python-package-index-pypi)
- [Package Versioning](#package-versioning)
- [uv](#uv)
- [pipenv](#pipenv)
- [poetry](#poetry)
- [Comparison and Recommendations](#comparison-and-recommendations)

### Chapter V: Object-Oriented Python

- [What is OOP?](#what-is-oop)
- [Classes and Instances](#classes-and-instances)
- [Instance Attributes and Class Attributes](#instance-attributes-and-class-attributes)
- [Methods](#methods)
- [Special Methods and Operator Overloading](#special-methods-and-operator-overloading)
- [Private & Public Attributes](#private--public-attributes)
- [Properties](#properties)
- [Properties vs Attributes](#properties-vs-attributes)
- [Inheritance and Composition](#inheritance-and-composition)
- [super() and Method Resolution Order](#super-and-method-resolution-order)
- [Abstract Base Classes](#abstract-base-classes)
- [Designing with Classes](#designing-with-classes)
- [Encapsulation and Polymorphism](#encapsulation-and-polymorphism)
- [Advanced Class Topics](#advanced-class-topics)
- [Dataclasses](#dataclasses)

### Chapter VI: Errors, Files, and Serialization

- [Exceptions](#exceptions)
- [Exception Hierarchy](#exception-hierarchy)
- [Exception Objects](#exception-objects)
- [Raising and Handling Errors](#raising-and-handling-errors)
- [Designing with Exceptions](#designing-with-exceptions)
- [Assertions and Debug Logging](#assertions-and-debug-logging)
- [Finding Errors with the Debugger](#finding-errors-with-the-debugger)
- [Common Debugging Techniques](#common-debugging-techniques)
- [Which Errors Should You Handle?](#which-errors-should-you-handle)
- [Files](#files)
- [JSON](#json)
- [Pickle](#pickle)
- [Comparing JSON and Pickle](#comparing-json-and-pickle)

### Chapter VII: Practical Python

- [Testing](#testing)
- [Type Hints](#type-hints)
- [Linting, Formatting, and PEP 8](#linting-formatting-and-pep-8)
- [Useful Standard Library Modules](#useful-standard-library-modules)
- [HTTP Requests and APIs Basics](#http-requests-and-apis-basics)
- [Setting Up Flask](#setting-up-flask)
- [Creating Routes (GET, POST)](#creating-routes-get-post)
- [Adding a User Interface](#adding-a-user-interface)
- [Async and Concurrency Overview](#async-and-concurrency-overview)
- [Creating and Starting Threads](#creating-and-starting-threads)
- [Thread Synchronization](#thread-synchronization)
- [Process Pools](#process-pools)
- [Tasks and Coroutines](#tasks-and-coroutines)
- [Unicode and Byte Strings](#unicode-and-byte-strings)
- [Decorators Deep Dive](#decorators-deep-dive)
- [Metaclasses](#metaclasses)
- [Iterators and Generators Deep Dive](#iterators-and-generators-deep-dive)
- [Context Managers Deep Dive](#context-managers-deep-dive)
- [Regular Expressions](#regular-expressions)
- [C Extensions (ctypes)](#c-extensions-ctypes)
- [Building and Distributing Packages](#building-and-distributing-packages)
- [Documentation](#documentation)
- [Next Steps](#next-steps)
- [References](#references)

---

## What Is Python?

Python is a high-level, general-purpose programming language designed to be readable and productive.

It is widely used for:

- automation and scripting
- backend development
- data analysis and machine learning
- testing and DevOps
- APIs, tooling, and internal platforms

Python supports multiple programming styles:

- procedural programming
- object-oriented programming
- functional programming

One of Python's biggest strengths is developer productivity. You can express useful ideas with relatively little code.

## Why Learn Python?

Python is a strong first language and also a strong working language.

### 1. Readable Syntax

Python code is usually close to pseudocode, so you can focus on solving problems instead of fighting syntax.

### 2. Excellent Ecosystem

Python has mature libraries for web development, automation, testing, data engineering, AI, and scripting.

### 3. Useful in Real Projects

Python is common in startups, enterprise systems, internal tooling, data teams, cloud automation, and backend services.

### 4. Good for Learning Core Concepts

You can learn variables, control flow, functions, classes, modules, files, and tests without too much ceremony.

## Python Alternatives

Python is not the only language used for scripting, backend development, data work, or automation. Knowing the alternatives helps you understand where Python is especially strong and where another tool may fit better.

Some common alternatives are:

- JavaScript or TypeScript for full-stack web development and Node.js tooling
- Go for simple deployment, concurrency, and fast command-line services
- Rust for performance-critical and memory-safe systems work
- Java or C# for large enterprise ecosystems and statically typed application development
- Bash or PowerShell for small shell automation tasks

Python remains a strong default when readability, ecosystem breadth, and development speed matter more than raw runtime performance.

## Python Versions

Use modern Python 3.

Do not start new work with Python 2.

Practical guidance:

- install the latest stable Python 3 release available for your machine
- prefer modern language features such as f-strings, `pathlib`, and type hints
- when reading older tutorials, check whether they use outdated syntax or obsolete libraries

Verify your version:

```bash
python --version
# or on some systems
python3 --version
```

## Installation and Setup

Install Python from the official site:

- [Python Downloads](https://www.python.org/downloads/)

Recommended tools:

- Python 3
- VS Code
- Python extension for VS Code

Important for Windows users: enable the option that adds Python to `PATH` during installation.

Verify the installation:

```bash
python --version
```

Open the Python REPL:

```bash
python
```

Exit the REPL:

```python
exit()
```

## Setting Up Python on macOS

On macOS, Python may already exist on the system, but that does not always mean it is the version you want for learning or project work.

Practical guidance:

- install a current Python 3 release from the official Python website or a trusted package manager
- verify which interpreter runs with `python3 --version`
- prefer using virtual environments for project work instead of relying on the system interpreter

Many macOS users run Python with `python3` instead of `python`:

```bash
python3 --version
python3 -m venv .venv
```

## Installing an IDE (VS Code)

You can learn Python in a plain text editor, but VS Code gives you a much better beginner workflow with syntax highlighting, linting, debugging, and terminal integration.

Recommended setup:

- install VS Code
- install the Python extension for VS Code
- open your project folder, not just a single file
- choose the correct Python interpreter or virtual environment from the command palette

This helps later when you start running tests, debugging, and working with multiple files.

## Your First Program

Create a file called `main.py`:

```python
print("Hello, World!")
```

Run it:

```bash
python main.py
```

## How Python Runs Code

Python is commonly described as an interpreted language, but a more accurate beginner-friendly model is:

1. Python reads your source code.
2. It compiles it to bytecode.
3. The Python virtual machine executes that bytecode.

For everyday learning, the important part is simple: you write `.py` files and run them with the Python interpreter.

## How To Run Python Programs

There are several common ways to run Python code, and beginners should know all of them because they fit different stages of learning.

Use the REPL for quick experiments:

```bash
python
```

Use a script file for normal learning and project work:

```bash
python main.py
```

Use module execution when the code is structured as a package or tool:

```bash
python -m package_name
```

In practice:

- use the REPL for tiny checks
- use `.py` files for most learning code
- use `python -m ...` when running modules, tools, or package entry points

---

## Variables and Naming

Python variables are names bound to objects.

```python
name = "Alice"
age = 30
is_active = True
```

Python is dynamically typed, which means you do not declare variable types up front.

```python
value = 10
value = "now I am a string"
```

Use descriptive names:

```python
user_name = "alice"
total_price = 99.99
is_logged_in = False
```

Avoid vague names unless the context is tiny and obvious.

```python
x = 99.99
```

### Naming Conventions

- `snake_case` for variables and functions
- `PascalCase` for classes
- `UPPER_CASE` for constants by convention

```python
MAX_RETRIES = 3

def calculate_total(items):
    ...

class ShoppingCart:
    ...
```

### Deleting Variables

Python lets you remove a name binding with `del`. This deletes the variable name from the current scope, not necessarily the underlying object immediately.

```python
value = 10
del value
```

This is mainly useful when removing items from containers or cleaning up names in interactive work. In ordinary application code, explicit deletion of local variables is uncommon.

## Built-in Data Types

Common built-in types:

| Type       | Example     | Notes              |
| ---------- | ----------- | ------------------ |
| `int`      | `10`        | whole numbers      |
| `float`    | `3.14`      | decimal numbers    |
| `complex`  | `2 + 3j`    | complex numbers    |
| `bool`     | `True`      | boolean values     |
| `str`      | `"hello"`   | text               |
| `list`     | `[1, 2, 3]` | ordered, mutable   |
| `tuple`    | `(1, 2, 3)` | ordered, immutable |
| `set`      | `{1, 2, 3}` | unique values      |
| `dict`     | `{"a": 1}`  | key-value pairs    |
| `NoneType` | `None`      | absence of value   |

Check a type:

```python
value = 10
print(type(value))
```

### Boolean Type

The `bool` type has only two values: `True` and `False`. It is used for conditions, comparisons, flags, and any situation where you want a yes-or-no result.

```python
is_ready = True
is_admin = False

print(10 > 3)
print(bool(""))
```

Although `bool` is closely related to integers in Python, you should treat booleans as truth values, not as numbers in normal code.

### A More Accurate Mental Model

The official Python docs describe these values as objects. Variables do not contain raw values directly in the way beginners often imagine; instead, names are bound to objects.

This matters because Python behavior depends heavily on:

- whether an object is mutable or immutable
- whether an object is hashable
- whether an object has a truth value
- whether an operation creates a new object or mutates an existing one

For example:

- strings and tuples are immutable
- lists, dictionaries, and sets are mutable
- immutable objects such as tuples can often be used as dictionary keys if all their contents are hashable
- mutable objects such as lists cannot be used as dictionary keys

### Truth Value Testing

According to the standard type documentation, any object can be tested for truth value.

These values are considered false in common Python code:

- `False`
- `None`
- zero numbers such as `0`, `0.0`, and `0j`
- empty collections such as `""`, `[]`, `()`, `{}`, `set()`, and `range(0)`

Everything else is usually treated as true.

```python
print(bool(""))
print(bool("hello"))
print(bool([]))
print(bool([1]))
print(bool(0))
print(bool(42))
```

This is why code like this works naturally in Python:

```python
items = []

if not items:
    print("No items found")
```

### Numeric Types

Python has three main built-in numeric types:

- `int`
- `float`
- `complex`

Important details from the docs:

- Python integers have arbitrary precision, so they do not overflow like fixed-width integers in many other languages
- `float` values are floating-point numbers and therefore have the usual precision limitations of binary floating-point arithmetic
- complex numbers have real and imaginary parts and are written with `j`, such as `2 + 3j`

```python
big_number = 10**50
print(big_number)

print(0.1 + 0.2)
print(2 + 3j)
```

#### `int` (Integer)

`int` represents whole numbers of arbitrary size. Unlike many languages with fixed-width integers, Python integers can grow as large as memory allows.

```python
count = 42
huge = 10**100
```

Use integers for counts, indexes, IDs, and exact whole-number arithmetic.

#### `float` (Floating-Point)

`float` represents decimal numbers using binary floating-point. This is efficient and widely used, but it also means some decimal values cannot be represented exactly.

```python
price = 19.99
result = 0.1 + 0.2
print(result)
```

Use floats for measurements and approximate numeric work, but remember that exact decimal behavior may require `decimal.Decimal` in advanced cases.

#### `complex` (Complex Numbers)

`complex` numbers have a real part and an imaginary part. Python writes the imaginary part with `j`.

```python
value = 2 + 3j
print(value.real)
print(value.imag)
```

Complex numbers are less common in everyday application code, but they are built into the language and useful in mathematics, engineering, and scientific work.

## Special Behavior with Numbers

Python numeric types have a few behaviors that surprise beginners if they come from other languages.

Important examples:

- integer division with `/` produces a float
- floor division with `//` rounds down toward negative infinity
- floating-point arithmetic can show precision artifacts
- booleans behave like integers in some arithmetic contexts because `bool` is a subclass of `int`

```python
print(5 / 2)
print(5 // 2)
print(-5 // 2)
print(True + True)
```

Understanding these details helps avoid subtle bugs in arithmetic and comparisons.

### `None`

`None` is the single null-like object in Python. It usually means:

- no value
- missing value
- not yet initialized
- a function returned nothing explicitly

```python
def log_message(message):
    print(message)


result = log_message("hello")
print(result is None)
```

Prefer identity checks with `None`:

```python
value = None

if value is None:
    print("No value yet")
```

### Binary Data Types

Python also includes built-in types for working with raw binary data.

- `bytes` for immutable byte sequences
- `bytearray` for mutable byte sequences
- `memoryview` for viewing binary data without copying it

```python
payload = b"ABC"
mutable = bytearray(b"ABC")
view = memoryview(payload)
```

These types matter when working with files, sockets, encodings, images, and lower-level protocols. They are different from `str`, which represents Unicode text.

#### `bytes`

`bytes` is an immutable sequence of byte values from `0` to `255`.

```python
payload = b"hello"
print(payload[0])
```

Use `bytes` when data should not change after creation.

#### `bytearray`

`bytearray` is the mutable counterpart to `bytes`.

```python
data = bytearray(b"hello")
data[0] = 72
print(data)
```

Use it when you need to modify binary data in place.

#### `memoryview`

`memoryview` lets you view binary data without copying it.

```python
payload = b"abcdef"
view = memoryview(payload)
print(view[1:4])
```

This is useful for performance-sensitive code and lower-level data handling.

## Comments and Docstrings

Comments explain code for human readers. Docstrings document modules, classes, and functions in a structured way that tools can also read.

Use `#` for line comments:

```python
# This stores the user's display name.
name = "Alice"
```

Use triple-quoted strings as docstrings for modules, classes, and functions:

```python
def greet(name):
    """Return a greeting for the given name."""
    return f"Hello, {name}"
```

Good comments explain why something exists or why a choice was made. Good docstrings explain purpose, inputs, outputs, and usage expectations.

## The Documentation Interlude

Learning Python well includes learning how to use the documentation. The official docs are part of the language learning process, not something you wait to read only after becoming advanced.

In practice, you should get comfortable with:

- the Python Tutorial for step-by-step learning
- the Standard Library docs for built-in modules and types
- the Language Reference for exact rules and semantics
- `help()` and docstrings in the REPL

```python
help(str)
help(len)
```

One of the best Python habits is checking the docs when you are unsure what a method returns, whether it mutates in place, or what edge cases it has.

## Type Conversion

Python lets you convert between types explicitly.

```python
age = "25"
age_number = int(age)

price = 19
price_float = float(price)

number = 123
number_text = str(number)
```

Be careful: conversion can fail.

```python
int("hello")
# ValueError
```

## Operators

### Arithmetic

Arithmetic operators are used when you want to perform numeric calculations such as addition, subtraction, multiplication, division, powers, and remainders.

```python
print(10 + 2)
print(10 - 2)
print(10 * 2)
print(10 / 2)
print(10 // 3)
print(10 % 3)
print(2 ** 3)
```

### Comparison

Comparison operators are used when you want to compare two values and get a boolean result such as `True` or `False`.

```python
print(5 == 5)
print(5 != 3)
print(5 > 3)
print(5 < 3)
print(5 >= 5)
print(5 <= 6)
```

### Logical

Logical operators combine or invert truth values. They are commonly used in conditions, filters, and branching logic.

```python
print(True and False)
print(True or False)
print(not True)
```

### Membership

Membership operators answer the question “is this value contained inside that collection or sequence?”

```python
print("a" in "apple")
print(3 in [1, 2, 3])
```

### Identity

Identity checks answer a different question from equality: they tell you whether two names refer to the same object in memory.

```python
a = [1, 2]
b = a
c = [1, 2]

print(a is b)
print(a is c)
print(a == c)
```

Use `==` for value equality. Use `is` for identity checks, most commonly with `None`.

```python
value = None
print(value is None)
```

### Operator Notes That Matter in Real Code

Python comparison operators can be chained.

```python
age = 20
print(18 <= age < 30)
```

Logical operators use short-circuit evaluation:

- `a and b` stops early if `a` is false
- `a or b` stops early if `a` is true

```python
user_name = ""
display_name = user_name or "Anonymous"
print(display_name)
```

Membership and identity are also regular comparison operations, but they answer different questions:

- `in` checks containment
- `==` checks value equality
- `is` checks object identity

Keeping those separate avoids a large class of beginner bugs.

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

## Escaping Characters

Escape sequences let you include special characters inside strings, such as newlines, tabs, quotes, and backslashes.

```python
print("Line 1\nLine 2")
print("Column A\tColumn B")
print("She said \"hello\"")
print("C:\\Users\\PC")
```

Common escapes include:

- `\n` for newline
- `\t` for tab
- `\"` or `\'` for quotes inside strings
- `\\` for a literal backslash

Raw strings help reduce escaping, but they do not replace understanding escape sequences.

## Sequence Types

Sequence types are ordered collections that support positional access. In beginner Python, the most important sequence types are strings, lists, tuples, ranges, bytes, and bytearrays.

They usually support shared ideas such as:

- indexing
- slicing
- length with `len(...)`
- membership checks with `in`
- iteration with `for`

```python
text = "python"
numbers = [1, 2, 3]
point = (10, 20)

print(text[0])
print(numbers[1])
print(point[-1])
```

What differs between sequence types is mutability, typical use case, and the methods available on each concrete type.

### Useful Operations

String methods let you inspect, transform, and query text without modifying the original string, because strings are immutable.

```python
text = "python"

print(text.upper())
print(text.capitalize())
print(text.replace("py", "Py"))
print(text.startswith("py"))
print(len(text))
```

Strings also support indexing and slicing because they are sequence types:

```python
text = "Python"

print(text[0])
print(text[-1])
print(text[1:4])
```

In Python there is no separate character type. Indexing a string returns another string of length 1.

```python
letter = "Python"[0]
print(letter)
print(type(letter))
```

### String Formatting

#### 1. f-strings

Preferred for most modern Python code.

Use f-strings when you want the clearest and most direct way to insert values into text. They are usually the best default in new Python code because the expression and the surrounding text stay easy to read.

```python
name = "Alice"
age = 30
print(f"{name} is {age} years old")
```

f-strings can do more than simple insertion. They can also format values and help with debugging.

```python
price = 12.34567
print(f"{price:.2f}")

user = "alice"
print(f"{user=}")
```

#### 2. `str.format()`

Use `str.format()` when you want explicit placeholder-based formatting or when you are working in code that already uses this style.

```python
print("{} is {} years old".format("Alice", 30))
```

#### 3. Old `%` formatting

Still seen in older code.

You should mostly learn this for reading existing codebases. It still works, but it is usually not the first choice in modern Python.

```python
print("%s is %d years old" % ("Alice", 30))
```

Use f-strings by default in new code. They are usually clearer and align better with current Python style.

### Important String Notes

- strings are immutable
- repeated string concatenation inside loops can become inefficient
- `"separator".join(parts)` is usually the preferred way to combine many strings
- methods like `strip()` remove characters from the ends, not exact prefixes or suffixes unless you use `removeprefix()` or `removesuffix()`

```python
parts = ["learn", "python", "well"]
print(" ".join(parts))

text = "---hello---"
print(text.strip("-"))
print("prefix_value".removeprefix("prefix_"))
```

## Input and Output

Input and output are how a simple Python program receives data from a user and shows results back on the screen.

```python
name = input("What is your name? ")
print(f"Hello, {name}")
```

`input()` always returns a string.

```python
age = int(input("Enter your age: "))
```

The built-in docs make two details worth remembering:

- `input()` always returns text, not numbers
- `print()` is flexible: `sep=`, `end=`, `file=`, and `flush=` change its behavior

```python
print("a", "b", "c", sep=" | ")
print("loading", end="...")
print("done")
```

Python also has several ways to format output:

- f-strings for most modern code
- `str.format()` for explicit field-based formatting
- manual formatting methods like `rjust()`, `ljust()`, and `center()` when you want direct control

```python
value = 42
print(f"value = {value:>6}")
print("value = {:>6}".format(value))
print(str(value).rjust(6))
```

---

## Lists

Lists are ordered, mutable collections.

The Python docs describe them as mutable sequences. They are the default general-purpose collection when you need order and expect the contents to change over time.

### Common Ways to Create a List

#### 1. List literal

This is the most common way to create a list when you already know the values you want to store. It is short, readable, and usually the best default choice.

```python
numbers = [1, 2, 3]
```

#### 2. Empty list literal

Use this when you want to start with an empty list and add items later with methods such as `append()` or `extend()`.

```python
numbers = []
```

#### 3. `list()` constructor

Use `list()` when you want to convert another iterable object into a list. This is useful when the original data is a tuple, string, range, generator, or some other iterable.

```python
numbers = list((1, 2, 3))
letters = list("abc")
```

In the first example, the tuple becomes a list. In the second, each character of the string becomes an element in the list.

#### 4. From `range()`

This is a common way to build a list of numbers in sequence. `range(5)` itself is not a list, so `list(range(5))` converts that sequence object into a real list.

```python
numbers = list(range(5))
```

The result is `[0, 1, 2, 3, 4]`. This is useful when you need actual list storage instead of a lazy numeric sequence.

#### 5. List comprehension

Use a list comprehension when you want to build a new list by looping over data and optionally transforming each value. This is one of the most important Python patterns.

```python
squares = [x * x for x in range(5)]
```

This creates a list by taking each number from `range(5)`, squaring it, and storing the result in the new list.

### Common List Operations

These are some of the most common list methods you will use when adding, removing, reordering, and updating elements.

```python
items = ["a", "b", "c"]

items.append("d")
items.extend(["e", "f"])
items.insert(1, "x")
items.remove("b")
last = items.pop()
items.sort()
items.reverse()
```

What each operation does:

- `append("d")` adds one item to the end of the list
- `extend(["e", "f"])` adds each item from another iterable to the end of the list
- `insert(1, "x")` inserts a value at a specific index and shifts later items to the right
- `remove("b")` removes the first matching value
- `pop()` removes and returns an item, by default the last one
- `sort()` sorts the list in place
- `reverse()` reverses the list in place

These methods mutate the original list. That is why lists are often chosen when you need a collection that can grow, shrink, or be reordered.

### Important List Behavior

Lists are mutable, so methods like `append()`, `sort()`, and `reverse()` usually change the list in place and return `None`.

```python
numbers = [3, 1, 2]
result = numbers.sort()

print(numbers)
print(result)
```

This is different from functions like `sorted()`, which return a new list.

```python
numbers = [3, 1, 2]
ordered = sorted(numbers)

print(numbers)
print(ordered)
```

Also be careful with list repetition when nested mutable values are involved:

```python
bad = [[]] * 3
bad[0].append("x")
print(bad)

good = [[] for _ in range(3)]
good[0].append("x")
print(good)
```

## Tuples

Tuples are ordered, immutable collections.

The docs often position tuples as a good fit for fixed structure data. They are also useful when immutability matters or when you need a hashable sequence.

### Common Ways to Create a Tuple

#### 1. Tuple literal

This is the clearest way to create a tuple when you already know the values. It is a good fit for fixed-size grouped data.

```python
point = (10, 20)
```

#### 2. Without parentheses

Python uses commas, not parentheses, to define a tuple. Parentheses often improve readability, but the commas are what actually matter.

```python
point = 10, 20
```

#### 3. Empty tuple

Use this when you specifically want an empty immutable sequence.

```python
empty = ()
```

#### 4. `tuple()` constructor

Use `tuple()` when you want to convert another iterable into a tuple. This is similar to `list()`, but the result is immutable.

```python
values = tuple([1, 2, 3])
letters = tuple("abc")
```

This is useful when you want fixed data that should not be changed after creation.

#### 5. Single-item tuple

This is a common beginner trap.

A trailing comma is required. Without it, Python treats the expression as just a parenthesized value, not a tuple.

```python
single = (1,)
not_a_tuple = (1)
```

### When Tuples Are a Better Fit Than Lists

Use a tuple when:

- the number and meaning of elements are fixed
- the data should not change after creation
- you want to use the value as a dictionary key or set element and its contents are hashable

```python
point = (10, 20)
locations = {point: "origin-like sample"}
```

Remember: it is the comma that makes a tuple, not the parentheses.

## Sets

Sets store unique values and are unordered.

The docs define a set as an unordered collection of distinct hashable objects. A set is mainly about membership and uniqueness, not position.

### Common Ways to Create a Set

#### 1. Set literal

Use a set literal when you already know the unique values you want. This is the most direct and readable way to create a non-empty set.

```python
unique_numbers = {1, 2, 3}
```

#### 2. `set()` constructor

Use `set()` when you want to convert another iterable into a set. This automatically removes duplicate values.

```python
unique_letters = set("hello")
```

The result contains only unique characters, so repeated letters are discarded.

#### 3. Empty set

Use `set()`, not `{}`.

This matters because `{}` creates an empty dictionary, not an empty set.

```python
empty_set = set()
empty_dict = {}
```

#### 4. Set comprehension

Use a set comprehension when you want to build a set by filtering or transforming data while also keeping only unique results.

```python
evens = {x for x in range(10) if x % 2 == 0}
```

This is especially useful when uniqueness is part of the goal of the transformation.

### Common Set Operations

These set operators are useful when you want to compare groups of unique values or combine them in mathematically meaningful ways.

```python
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)
print(a & b)
print(a - b)
print(a ^ b)
```

What each operation does:

- `a | b` gives the union, meaning all distinct elements from both sets
- `a & b` gives the intersection, meaning only elements present in both sets
- `a - b` gives the difference, meaning elements in `a` that are not in `b`
- `a ^ b` gives the symmetric difference, meaning elements that appear in exactly one of the two sets

These operations are one reason sets are powerful when solving membership and uniqueness problems.

### `set` vs `frozenset`

Python has two built-in set types:

- `set`, which is mutable
- `frozenset`, which is immutable and hashable

```python
normal = {1, 2, 3}
frozen = frozenset([1, 2, 3])
```

Use `frozenset` when you need set semantics but also need the object itself to be hashable.

### Set Caveats

- sets do not support indexing or slicing
- iteration order should not be treated as meaningful program logic
- elements must be hashable

```python
values = {1, 2, 3}
print(2 in values)
```

## Dictionaries

Dictionaries store key-value pairs.

The standard docs define `dict` as the main built-in mapping type. Dictionaries map hashable keys to arbitrary values.

### Common Ways to Create a Dictionary

#### 1. Dictionary literal

This is the most common and readable way to create a dictionary when you already know the keys and values.

```python
user = {"name": "Alice", "age": 30}
```

#### 2. Empty dictionary

Use this when you want to start with no key-value pairs and add them later.

```python
user = {}
```

#### 3. `dict()` constructor with keyword arguments

This style can be convenient when the keys are simple identifier-like strings.

```python
user = dict(name="Alice", age=30)
```

It is readable, but it only works when the keys are valid keyword names.

#### 4. `dict()` from pairs

Use this when your data already exists as key-value pairs, such as tuples coming from another iterable.

```python
user = dict([("name", "Alice"), ("age", 30)])
```

#### 5. Dictionary comprehension

Use this when you want to build a dictionary by computing keys, values, or both from some source iterable.

```python
squares = {x: x * x for x in range(5)}
```

This is one of the cleanest ways to transform data into a mapping.

#### 6. `fromkeys()`

Use `fromkeys()` when you want several keys to start with the same initial value.

```python
defaults = dict.fromkeys(["host", "port"], None)
```

This is useful for quick initialization, but it needs extra care when the shared default is mutable.

### Common Dictionary Operations

These dictionary operations cover the most common tasks: reading values, updating entries, and iterating through stored key-value pairs.

```python
user = {"name": "Alice", "age": 30}

print(user["name"])
print(user.get("email"))

user["email"] = "alice@example.com"
user.update({"age": 31})

for key, value in user.items():
    print(key, value)
```

What each operation does:

- `user["name"]` performs direct key lookup and raises `KeyError` if the key is missing
- `user.get("email")` performs a safer lookup and returns `None` by default if the key is missing
- `user["email"] = ...` adds a new key or updates an existing one
- `user.update({...})` merges another mapping or set of key-value pairs into the dictionary
- `user.items()` returns key-value pairs, which makes it convenient to loop over both together

Dictionaries are usually the best choice when you need fast lookup by name, ID, or some other key.

### Important Dictionary Behavior

Modern Python dictionaries preserve insertion order. That means iteration follows the order in which keys were inserted.

```python
data = {"first": 1, "second": 2, "third": 3}
print(list(data))
```

Some important key rules:

- keys must be hashable
- values can be almost anything
- keys that compare equal share the same entry, so `1`, `1.0`, and `True` behave as the same key

```python
example = {1: "int", True: "bool"}
print(example)
```

Be careful with `fromkeys()` and mutable defaults. All keys will share the same value object.

```python
bad = dict.fromkeys(["a", "b"], [])
bad["a"].append(1)
print(bad)

good = {key: [] for key in ["a", "b"]}
good["a"].append(1)
print(good)
```

Dictionary view methods like `keys()`, `values()`, and `items()` return dynamic views, not frozen snapshots.

## Creating Python Objects in Multiple Ways

This is one of the most important sections for beginners. In Python, the same kind of object can often be created in several valid ways. You should know the common ones and when they make sense.

### Numbers

Numbers can be created directly with literals when you already know the value, or with constructors when the starting value comes from text or another numeric form.

```python
count = 10
count = int("10")

price = 19.5
price = float("19.5")

value = complex(2, 3)
```

- `10` is an integer literal
- `int("10")` converts text into an integer
- `19.5` is a float literal
- `float("19.5")` converts text into a floating-point number
- `complex(2, 3)` creates a complex number from real and imaginary parts

### Creating Strings

Strings are usually created either directly with literals or by converting another object to its string form.

```python
name = "Alice"
name = str(123)
```

- use a literal when you already know the text you want
- use `str()` when you want the text representation of another value

### Creating Lists

Lists can be created from literals, constructors, ranges, and comprehensions depending on whether you are declaring values, converting data, or transforming data.

```python
items = [1, 2, 3]
items = list((1, 2, 3))
items = list(range(3))
items = [x for x in range(3)]
```

- literal form is the normal default
- `list(...)` converts another iterable into a list
- `list(range(...))` builds a concrete numeric list
- a comprehension creates a list while transforming values

### Creating Tuples

Tuples can be created in a few different forms, but they are all used when the result should be ordered and immutable.

```python
point = (1, 2)
point = tuple([1, 2])
point = 1, 2
```

- tuple literal is the clearest form
- `tuple(...)` converts another iterable
- comma-separated values create a tuple even without parentheses

### Creating Sets

Sets can be created directly, by conversion, or by comprehension when you want uniqueness as part of the result.

```python
tags = {"python", "backend"}
tags = set(["python", "backend"])
tags = {word.lower() for word in ["Python", "Backend"]}
```

- set literal is the normal form for known values
- `set(...)` converts another iterable and removes duplicates
- set comprehension builds a unique transformed collection

### Creating Dictionaries

Dictionaries can be created with literals, constructors, or comprehensions depending on how the source data is shaped.

```python
config = {"debug": True}
config = dict(debug=True)
config = dict([("debug", True)])
config = {key: None for key in ["host", "port"]}
```

- literal form is the most common
- `dict(...)` with keywords is convenient for simple string keys
- `dict(...)` from pairs works well when key-value data already exists in iterable form
- dictionary comprehensions are ideal when generating mappings from other data

### Class Instances

The most common approach is direct instantiation.

```python
class User:
    def __init__(self, name):
        self.name = name


user = User("Alice")
```

You can also use class methods as factory constructors when the input shape is different.

```python
class User:
    def __init__(self, name):
        self.name = name

    @classmethod
    def from_dict(cls, data):
        return cls(data["name"])


user = User.from_dict({"name": "Alice"})
```

For plain data containers, a dataclass is often cleaner.

```python
from dataclasses import dataclass


@dataclass
class User:
    name: str
    age: int


user = User("Alice", 30)
```

### When to Use Which Approach

- use literals when possible because they are usually the most readable
- use constructors like `list()` and `dict()` when converting from another iterable or data shape
- use comprehensions when you are building a new collection by transforming data
- use classmethod factories when object creation needs validation or alternate input forms
- use `dataclass` for simple data-focused objects

## Indexing and Slicing

Indexing lets you access one item at a time, while slicing lets you extract a range of items from a sequence such as a string, list, or tuple.

```python
items = [10, 20, 30, 40, 50]

print(items[0])
print(items[-1])
print(items[1:4])
print(items[:3])
print(items[::2])
```

Important slicing rules, aligned with the docs:

- the start index is included
- the end index is excluded
- omitted start means the beginning
- omitted end means the end
- negative indices count from the end
- the step cannot be zero

```python
letters = ["a", "b", "c", "d", "e"]

print(letters[:])
print(letters[::-1])
print(letters[1:5:2])
```

## Iteration

### Iterating Directly

This is the most natural Python style when you care about each value itself, not about its numeric position.

```python
for item in [1, 2, 3]:
    print(item)
```

### With `range()`

Use `range()` when you need a numeric sequence, such as counting a fixed number of times or generating index-like values.

```python
for i in range(5):
    print(i)
```

### With `enumerate()`

Use `enumerate()` when you need both the index and the value while looping. This is usually better than manually updating a counter variable.

```python
for index, value in enumerate(["a", "b", "c"]):
    print(index, value)
```

### With `zip()`

Use `zip()` when you want to iterate over multiple iterables in parallel, taking one item from each on every loop step.

```python
names = ["Alice", "Bob"]
scores = [90, 95]

for name, score in zip(names, scores):
    print(name, score)
```

Under the hood, Python iteration is based on the iterator protocol. In practice, that means `for` works with objects that can produce values one at a time.

This is why you can iterate over many different things:

- lists
- tuples
- strings
- dictionaries
- sets
- files
- generators

When looping over dictionaries, remember the defaults:

```python
user = {"name": "Alice", "age": 30}

for key in user:
    print(key)

for value in user.values():
    print(value)

for key, value in user.items():
    print(key, value)
```

## Comprehensions

### List comprehension

Use a list comprehension when you want to build a list from another iterable in a compact way.

```python
squares = [x * x for x in range(5)]
```

### Conditional list comprehension

Use this form when you want to filter items and keep only those that match a condition while building the list.

```python
evens = [x for x in range(10) if x % 2 == 0]
```

### Dictionary comprehension

Use a dictionary comprehension when you want to generate keys and values from another iterable.

```python
mapping = {x: x * x for x in range(5)}
```

### Set comprehension

Use a set comprehension when you want transformed results but also want duplicates removed automatically.

```python
unique_lengths = {len(word) for word in ["cat", "lion", "dog"]}
```

Comprehensions are a compact way to build new collections by looping, optionally filtering, and transforming values.

There are multiple related approaches, and it helps to know when each fits:

- list comprehension when you want a list immediately
- set comprehension when uniqueness matters
- dictionary comprehension when building key-value mappings
- generator expression when you want lazy iteration instead of building the whole result at once

```python
numbers = [1, 2, 3, 4]

list_result = [x * 2 for x in numbers]
set_result = {x * 2 for x in numbers}
dict_result = {x: x * 2 for x in numbers}
generator_result = (x * 2 for x in numbers)
```

Generator expressions are especially useful when passing data directly into another function:

```python
total = sum(x * x for x in range(10))
```

Prefer a comprehension when it clearly expresses “build a new collection from this iterable”. Prefer a normal loop when the logic becomes hard to read.

## Common Sequence Operations

Python sequence types such as strings, lists, and tuples share many common operations. Learning these once gives you a lot of leverage across the language.

Common operations include:

- indexing with `items[0]`
- slicing with `items[1:4]`
- length with `len(items)`
- membership with `value in items`
- concatenation with `a + b`
- repetition with `items * 3`

```python
letters = ["a", "b", "c"]

print(len(letters))
print("b" in letters)
print(letters + ["d"])
print(letters * 2)
```

Lists and tuples also support helpful methods such as `count()` and `index()`:

```python
numbers = [1, 2, 2, 3]

print(numbers.count(2))
print(numbers.index(3))
```

## Diving Deeper into Iterable Methods

Beyond core sequence operations, Python offers built-in functions and iterable-oriented tools that work across many collection types.

Some especially important ones are:

- `len()` for size
- `min()` and `max()` for smallest and largest values
- `sum()` for numeric accumulation
- `sorted()` for producing a new sorted list
- `reversed()` for reverse iteration
- `any()` and `all()` for truth-value aggregation

```python
numbers = [3, 1, 4]

print(len(numbers))
print(sorted(numbers))
print(any(x > 3 for x in numbers))
print(all(x > 0 for x in numbers))
```

These functions are central to idiomatic Python because they let you express common iterable logic directly and clearly.

## Introducing Python Statements

Python code is made of statements and expressions. A statement performs an action, while an expression produces a value.

Examples of statements include:

- assignment statements
- `if` statements
- `for` and `while` loops
- `def` and `class` definitions
- `return`, `break`, and `import`

This distinction matters because Python syntax is built around readable statement blocks defined by indentation.

## Assignments, Expressions, and Prints

Assignment binds a name to an object. Expressions compute values. `print()` sends output to the console for the user to see.

```python
total = 10 + 5
message = "value: " + str(total)
print(message)
```

Understanding the difference helps you reason about what code stores, what code computes, and what code only displays.

## Choosing the Right Collection

| Type    | Use When                                   | Mutable |
| ------- | ------------------------------------------ | ------- |
| `list`  | order matters and values may change        | yes     |
| `tuple` | order matters and values should not change | no      |
| `set`   | uniqueness matters                         | yes     |
| `dict`  | you need key-value lookup                  | yes     |

---

## Conditionals

Conditionals let your program choose different paths depending on whether an expression is true or false.

```python
age = 20

if age < 13:
    print("child")
elif age < 18:
    print("teen")
else:
    print("adult")
```

Python does not use braces. Indentation is part of the syntax.

The control-flow tutorial emphasizes that `if` statements work naturally with Python truth-value testing, not only with explicit booleans.

```python
items = [1, 2, 3]

if items:
    print("We have items")
```

This is more idiomatic than writing `if len(items) > 0:` in many cases.

Python also has `match` for structural pattern matching. It is not a simple replacement for every `if` chain, but it is useful when the shape of the data matters.

```python
def http_error(status):
    match status:
        case 400:
            return "Bad request"
        case 404:
            return "Not found"
        case _:
            return "Something else"
```

Use `if` when you are checking general conditions. Use `match` when you are matching structured values or a fixed set of patterns.

## Grouping Conditionals

Complex decisions often require grouping smaller conditions together with `and`, `or`, and `not`.

```python
age = 25
has_ticket = True

if age >= 18 and has_ticket:
    print("allowed")
```

When grouped conditions become hard to read, it is usually better to name intermediate boolean variables or move the logic into a helper function.

## What About switch? (Match/Case)

Python does not have a traditional `switch` statement like some other languages. Modern Python instead provides `match` and `case` for structural pattern matching.

```python
def describe_status(code):
    match code:
        case 200:
            return "ok"
        case 404:
            return "not found"
        case _:
            return "unknown"
```

This is more powerful than a classic switch because it can match not only literal values, but also structured data patterns.

## Loops

### `for`

Use a `for` loop when you want to iterate over items from an iterable such as a list, string, dictionary, file, or range.

```python
for item in [1, 2, 3]:
    print(item)
```

### `while`

Use a `while` loop when repetition should continue until a condition becomes false, rather than over a fixed iterable.

```python
count = 0
while count < 3:
    print(count)
    count += 1
```

### `break` and `continue`

Use `continue` to skip the rest of the current loop iteration and move to the next one. Use `break` to stop the loop entirely.

```python
for number in range(5):
    if number == 2:
        continue
    if number == 4:
        break
    print(number)
```

### `range()` and iteration style

The official tutorial stresses that Python `for` loops iterate over items, not just counters.

```python
for word in ["cat", "window", "defenestrate"]:
    print(word, len(word))
```

When you do need numbers, `range()` is the standard tool:

```python
print(list(range(5)))
print(list(range(2, 10, 2)))
print(list(range(10, 0, -3)))
```

`range()` is an immutable sequence-like object. It does not build a full list unless you explicitly convert it.

### Loop `else`

Python loops can have an `else` clause. It runs when the loop finishes normally, not when it stops because of `break`.

```python
for number in range(2, 10):
    if number % 7 == 0:
        print("found")
        break
else:
    print("not found")
```

This is unusual at first, but it is useful for search-style loops.

### `pass`

`pass` is a real statement that does nothing. It is often used as a placeholder while sketching code.

```python
def todo():
    pass
```

## Functions

Define functions with `def`.

```python
def greet(name):
    return f"Hello, {name}"
```

### Returning Multiple Values

Python returns them as a tuple.

```python
def min_max(values):
    return min(values), max(values)


smallest, largest = min_max([1, 5, 2])
```

Functions are first-class objects in Python. That means you can:

- assign them to variables
- pass them to other functions
- return them from functions

```python
def greet(name):
    return f"Hello, {name}"


say_hello = greet
print(say_hello("Alice"))
```

## Understanding return

`return` ends a function call and sends a value back to the caller. If a function reaches the end without an explicit `return`, Python returns `None`.

```python
def add(a, b):
    return a + b


def do_nothing():
    pass
```

Understanding `return` is important because it separates computing a value from merely printing a value.

## Function Arguments

Python supports several argument styles.

### Positional arguments

This is the default calling style. Arguments are matched by their position in the function call.

```python
def power(base, exponent):
    return base ** exponent


print(power(2, 3))
```

### Keyword arguments

Use keyword arguments when you want the call to be more explicit and self-documenting.

```python
print(power(exponent=3, base=2))
```

### Default arguments

Use default arguments when a parameter usually has one common value but should still be overrideable.

```python
def greet(name, message="Hello"):
    return f"{message}, {name}"
```

### Variable positional arguments

Use `*args` style parameters when a function should accept any number of extra positional values.

```python
def total(*numbers):
    return sum(numbers)
```

### Variable keyword arguments

Use `**kwargs` style parameters when a function should accept an open-ended set of named options.

```python
def show_info(**kwargs):
    print(kwargs)
```

### Argument unpacking

Use unpacking when your arguments already exist inside a list, tuple, or dictionary and you want to pass them into a function call cleanly.

```python
values = [2, 3]
print(power(*values))

settings = {"base": 2, "exponent": 4}
print(power(**settings))
```

### Positional-only and Keyword-only Parameters

The official tutorial covers this because it becomes important in real APIs.

`/` marks positional-only parameters.

```python
def ratio(a, b, /):
    return a / b


print(ratio(10, 2))
```

`*` marks the start of keyword-only parameters.

```python
def create_user(name, *, is_admin=False):
    return {"name": name, "is_admin": is_admin}


print(create_user("Alice", is_admin=True))
```

This helps API design because it makes some arguments more explicit and prevents ambiguous calling styles.

### Docstrings and Annotations

The official tutorial also introduces documentation strings and annotations as part of function design.

```python
def area(width: float, height: float) -> float:
    """Return the area of a rectangle."""
    return width * height
```

Docstrings explain usage. Type annotations describe intended types for readers and tools.

## Naming Conventions for Functions

Python function names usually follow `snake_case`. Good function names are action-oriented and communicate intent clearly.

```python
def calculate_total(items):
    ...


def send_email(message):
    ...
```

Prefer names that describe what the function does rather than vague names like `handle()` or `process()` unless the context is extremely clear.

### Important Warning About Mutable Defaults

Avoid this:

```python
def add_item(item, items=[]):
    items.append(item)
    return items
```

Prefer this:

```python
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items
```

## Scope

Python uses LEGB name lookup:

- Local
- Enclosing
- Global
- Built-in

```python
x = "global"


def outer():
    x = "enclosing"

    def inner():
        x = "local"
        print(x)

    inner()


outer()
```

Two related statements are worth knowing early:

- `global` to bind a name in module-level scope
- `nonlocal` to bind a name in the nearest enclosing function scope

```python
count = 0


def increment_global():
    global count
    count += 1
```

```python
def outer():
    total = 0

    def inner():
        nonlocal total
        total += 1
        return total

    return inner
```

Use these carefully. In many cases, passing values explicitly or using objects leads to clearer code.

## Nested Functions

Python lets you define functions inside other functions. This is useful when helper behavior only makes sense inside one outer function.

```python
def outer(name):
    def inner():
        return f"Hello, {name}"

    return inner()
```

Nested functions also matter because closures and decorators are built on the same underlying idea.

## Lambda, map, filter, and reduce

### Lambda

Use `lambda` for very small anonymous functions that are simple enough to read inline. For anything non-trivial, a normal `def` is usually clearer.

```python
square = lambda x: x * x
print(square(4))
```

### `map()`

Use `map()` when you want to apply the same function to every item in an iterable. In many codebases, a comprehension is preferred if it reads more clearly.

```python
numbers = [1, 2, 3]
print(list(map(lambda x: x * 2, numbers)))
```

### `filter()`

Use `filter()` when you want to keep only items that satisfy a condition. As with `map()`, a comprehension is often easier to read in normal application code.

```python
numbers = [1, 2, 3, 4]
print(list(filter(lambda x: x % 2 == 0, numbers)))
```

### `reduce()`

Use `reduce()` when you need to combine an iterable into one accumulated result through repeated application of a function.

```python
from functools import reduce


numbers = [1, 2, 3, 4]
result = reduce(lambda acc, x: acc + x, numbers, 0)
print(result)
```

In modern Python code, comprehensions are often preferred over `map()` and `filter()` when they are easier to read.

## Generators

Generators produce values one at a time instead of building the entire result in memory up front. They are important for efficient iteration and for understanding how Python handles lazy data production.

Use `yield` inside a function to create a generator:

```python
def countdown(start):
    while start > 0:
        yield start
        start -= 1
```

Use a generator expression for small lazy pipelines:

```python
squares = (x * x for x in range(5))
print(sum(squares))
```

Generators are especially useful when working with large inputs, streams, and pipeline-style transformations.

## Decorators

Decorators wrap one callable with another callable. They are commonly used for logging, validation, timing, registration, caching, and framework hooks.

```python
def announce(func):
    def wrapper(*args, **kwargs):
        print("Calling function")
        return func(*args, **kwargs)
    return wrapper


@announce
def greet(name):
    return f"Hello, {name}"
```

The `@decorate_me` syntax is just a compact way to transform a function after it is defined. Beginners should learn the concept, even if advanced decorator patterns come later.

---

## Libraries

In Python, the word library usually means a reusable collection of code. The standard library ships with Python itself, while third-party libraries are installed separately.

Examples:

- `json`, `pathlib`, and `itertools` from the standard library
- `requests`, `flask`, and `pytest` from the broader Python ecosystem

Learning this distinction matters because Python development constantly involves deciding whether something is built in, part of the standard library, or an external dependency.

## Modules

A module is a single Python file.

Example file `math_utils.py`:

```python
def add(a, b):
    return a + b
```

Use it from another file:

```python
import math_utils

print(math_utils.add(2, 3))
```

The tutorial frames modules as the basic unit of code organization in Python.

- a module has its own namespace
- top-level names in the module become attributes on the module object
- module code is executed the first time it is imported in an interpreter session

```python
import math

print(math.pi)
print(math.sqrt(16))
```

That is why `import module_name` does not copy every function into your current scope. It binds the module object, and you access its attributes through dot notation.

## Packages

A package is a directory of Python modules, typically used to organize larger codebases.

Example:

```text
my_app/
    app.py
    utils/
        __init__.py
        math_utils.py
```

Packages are how Python structures larger module namespaces using dotted names such as `my_app.utils.math_utils`.

Important practical ideas from the docs:

- a package is usually a directory containing `__init__.py`
- importing a package or submodule follows the filesystem and `sys.path`
- `from package import item` may import either a submodule or a name exposed by the package

### Common import approaches inside packages

These forms show different levels of specificity. Choose the one that makes the dependency clear without making the call sites noisy.

```python
import my_app.utils.math_utils
from my_app.utils import math_utils
from my_app.utils.math_utils import add
```

For code inside a package, you may also see relative imports:

```python
from . import math_utils
from ..shared import helpers
```

Relative imports are based on the current package, which is why they are typically used inside package code, not top-level scripts.

## Imports

### Import the whole module

Use this form when you want the module name to stay visible at the call site. It keeps the source of each function or constant explicit.

```python
import math
print(math.sqrt(16))
```

### Import a specific name

Use this when you need one or two names frequently and the full module prefix would add noise.

```python
from math import sqrt
print(sqrt(16))
```

### Import with alias

Use an alias when a library has a widely accepted short name or when the original name is too long to use comfortably.

```python
import numpy as np
```

### Avoid wildcard imports

Avoid this in normal application code:

Wildcard imports make it harder to tell where names come from and increase the chance of accidental name collisions.

```python
from math import *
```

### What Imports Really Do

An import does two related things:

1. it finds and loads a module
2. it binds a name in the current namespace

This is why these forms behave differently:

```python
import math
from math import sqrt
```

The first binds the module name `math`. The second binds `sqrt` directly.

### The `__name__` Pattern

You will often see this in Python files:

```python
def main():
    print("running as a script")


if __name__ == "__main__":
    main()
```

This means the file can be imported as a module without running its script entry logic automatically.

### Module Search Path

Python resolves imports using its module search path. In practice, that path is influenced by:

- the current working context
- the standard library location
- installed packages
- environment configuration

For beginners, the main takeaway is: import behavior depends on project structure, not only on file names.

## Absolute vs Relative Imports

Absolute imports start from the top-level package path. Relative imports start from the current package location.

```python
from my_app.utils.math_utils import add
from . import math_utils
from ..shared import helpers
```

In general:

- use absolute imports when you want clarity from anywhere in the project
- use relative imports mainly inside package internals where the relationship is already clear

Beginners usually find absolute imports easier to reason about.

## Advanced Module Topics

Once the basics are clear, a few module details become important in real projects:

- import timing and side effects
- package exports and public APIs
- module caching
- reload behavior in interactive workflows
- search path rules

You do not need every detail on day one, but it helps to know that import behavior is more than just “open another file”.

## The `__init__.py` File and Package Exports

The `__init__.py` file marks a directory as a package in the traditional Python packaging model and can also expose selected names at the package level.

Example:

```python
from .math_utils import add
```

This can make imports cleaner for users of the package. You may also see `__all__` used to describe intended public exports:

```python
__all__ = ["add"]
```

That does not create hard privacy, but it does communicate the package's public API more clearly.

## The `__pycache__` Folder and Reloading Modules

Python may create a `__pycache__` directory when modules are imported. It stores bytecode cache files that help Python start modules more efficiently.

You normally do not edit these files manually.

During interactive development, you may also hear about reloading modules. In advanced workflows, a module can be reloaded, but beginners should first understand normal import behavior well before relying on reload patterns.

## Module Docstrings

Modules can have docstrings too. A module docstring is a triple-quoted string at the top of the file that explains what the module contains and how it is meant to be used.

```python
"""Utilities for formatting user-facing messages."""


def greet(name):
    return f"Hello, {name}"
```

Module docstrings improve readability and help documentation tools present a package more clearly.

## Using PyPI, the Python Package Index

PyPI is the main public index for Python packages. It is where many third-party libraries are published and discovered.

In practice, developers use it to:

- search for reusable packages
- install dependencies
- check package versions and metadata
- publish their own packages in more advanced workflows

PyPI is one reason Python has such a broad ecosystem.

## Virtual Environments

Virtual environments isolate project dependencies.

Create one:

```bash
python -m venv .venv
```

Activate on Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Activate on bash in Windows:

```bash
source .venv/Scripts/activate
```

Activate on Linux or macOS:

```bash
source .venv/bin/activate
```

Why they matter:

- each project can keep its own installed packages
- you avoid polluting the global Python installation
- dependency versions become easier to reproduce

In practice, a virtual environment changes which Python interpreter and `site-packages` directory your shell uses.

## Package Management

Package management is how you discover, install, pin, upgrade, and reproduce dependencies in a Python project.

### Install packages with `pip`

Use this command when you want to add a package to the currently active Python environment.

```bash
pip install requests
```

### Save dependencies

Use this when you want to record the currently installed packages and versions into a `requirements.txt` file.

```bash
pip freeze > requirements.txt
```

### Install from requirements

Use this when you want to recreate an environment from a previously saved dependency list.

```bash
pip install -r requirements.txt
```

Modern Python projects may also use:

- `pyproject.toml`
- `uv`
- `poetry`
- `pip-tools`

If this repository grows beyond a single README, moving toward `pyproject.toml` is a good next step.

There are multiple common approaches to dependency management in modern Python:

- `pip` with a virtual environment
- pinned dependencies in `requirements.txt`
- `pyproject.toml` based project metadata
- tools such as `uv`, `poetry`, and `pip-tools`

For a learning repository, start simple. Learn `venv`, `pip install`, and `requirements.txt` first. Then learn `pyproject.toml` once the project structure grows.

## Python Package Index (PyPI)

PyPI is the registry that package tools talk to by default when you install most public Python packages.

```bash
pip install requests
```

That command usually resolves the package from PyPI unless another index is configured.

## Package Versioning

Package versioning matters because dependency changes can alter behavior, APIs, and compatibility.

You will commonly see version constraints such as:

- exact pins like `requests==2.32.0`
- minimum versions like `requests>=2.32.0`
- compatible ranges depending on tool syntax

Exact pins improve reproducibility. Broader ranges improve flexibility. Real projects choose based on stability needs.

## `uv`

`uv` is a fast modern Python packaging and environment tool. Many teams use it because it can handle environment creation, dependency resolution, and command execution with a streamlined workflow.

It is especially attractive when you want modern tooling with strong performance.

## `pipenv`

`pipenv` combines dependency management and virtual environment management in one workflow.

It became popular as a way to simplify using `pip` and virtual environments together, though modern teams may also choose tools like `uv` or `poetry`.

## `poetry`

`poetry` is a popular tool for dependency management and packaging, especially in projects that use `pyproject.toml` as a central configuration file.

It is commonly chosen when a project wants a more integrated packaging workflow than plain `pip` and `requirements.txt`.

## Comparison and Recommendations

For learning:

- start with `venv`, `pip`, and `requirements.txt`
- learn `pyproject.toml` next
- explore tools like `uv` or `poetry` after the basics are comfortable

That sequence keeps the mental model simple while still preparing you for modern Python workflows.

---

## What is OOP?

Object-oriented programming organizes code around objects that combine state and behavior. In Python, OOP is one style among several, not the only way to write programs.

You usually reach for OOP when:

- related data and behavior belong together
- many values share the same operations
- you want reusable abstractions with clear interfaces

Python supports OOP naturally, but it also encourages simpler procedural or functional code when that is the better fit.

## Classes and Instances

Python classes define custom object types.

```python
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age


user = User("Alice", 30)
print(user.name)
```

The official tutorial treats classes as a way to bundle data and behavior together.

Important beginner ideas:

- a class defines a new object type
- calling the class creates an instance
- `__init__()` customizes the initial state of each instance
- attribute access uses dot notation

When you write `user = User("Alice", 30)`, Python creates an instance and then calls `__init__()` on it.

### Multiple approaches for creating custom objects

Python gives you several ways to create structured objects depending on the job:

#### 1. Ordinary class instantiation

Use ordinary class instantiation when you already have the constructor arguments in the exact form that the class expects.

```python
user = User("Alice", 30)
```

#### 2. Classmethod factory

Use a classmethod factory when objects may need to be built from a different input shape, such as dictionaries, environment data, or text lines.

```python
class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_dict(cls, data):
        return cls(data["name"], data["age"])
```

#### 3. Dataclass construction

Use a dataclass when the object mainly stores data and you do not want to manually write common boilerplate such as `__init__()` and `__repr__()`.

```python
from dataclasses import dataclass


@dataclass
class User:
    name: str
    age: int
```

#### 4. Named tuple style records

Use `NamedTuple` when you want a lightweight, immutable record with named fields.

```python
from typing import NamedTuple


class User(NamedTuple):
    name: str
    age: int
```

#### 5. Dynamic class creation with `type()`

Advanced, but still a real built-in approach:

Use `type()` directly only when you are doing advanced metaprogramming or dynamic framework behavior. It is not the normal beginner-facing way to define classes.

```python
User = type("User", (), {"role": "member"})
user = User()
```

For most learning code:

- use a normal class when behavior matters
- use `@dataclass` when the object is mostly data
- use `NamedTuple` when the data should be lightweight and immutable

## Instance Attributes and Class Attributes

These two attribute types solve different problems: instance attributes belong to one object, while class attributes are shared at the class level.

```python
class User:
    species = "human"

    def __init__(self, name):
        self.name = name
```

- `species` is a class attribute
- `name` is an instance attribute

The docs highlight one easy mistake: do not put mutable per-instance state in a class attribute unless you intentionally want it shared.

Bad:

```python
class User:
    tags = []
```

Better:

```python
class User:
    def __init__(self, name):
        self.name = name
        self.tags = []
```

Attribute lookup also matters:

- Python checks the instance first
- then the class
- then base classes following method resolution order

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

## Special Methods and Operator Overloading

Python classes can define special methods, often called dunder methods, to integrate with built-in language behavior.

Examples include:

- `__init__` for initialization
- `__repr__` for developer-facing string representation
- `__str__` for user-facing string representation
- `__len__` for `len(obj)`
- `__add__` for `obj1 + obj2`

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"
```

This is how operator overloading works in Python: special methods define what built-in operations mean for your custom objects.

## Private & Public Attributes

Python does not enforce strict private fields the same way some other languages do, but it does use naming conventions and name mangling.

Common patterns:

- `name` for normal public attributes
- `_name` for non-public-by-convention attributes
- `__name` for name-mangled attributes meant to avoid accidental clashes

These are conventions and mechanisms for design clarity, not absolute access barriers.

## Properties

Use properties when you want attribute-style access with logic behind it.

```python
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature cannot go below absolute zero")
        self._celsius = value
```

Properties let you start with attribute-style access and later add validation or computed behavior without changing the public API.

There are two common ways to create them:

### 1. Decorator style

This is the modern and most common style. It keeps getter, setter, and deleter behavior visually grouped.

```python
@property
def celsius(self):
    return self._celsius
```

### 2. `property()` function style

This older functional style builds the property explicitly from getter and setter functions. You may still see it in older or more dynamic code.

```python
class Temperature:
    def get_celsius(self):
        return self._celsius

    def set_celsius(self, value):
        self._celsius = value

    celsius = property(get_celsius, set_celsius)
```

The decorator form is more common in modern Python code.

## Properties vs Attributes

An ordinary attribute stores data directly. A property looks like an attribute from the outside, but runs getter or setter logic behind the scenes.

Use a normal attribute when no logic is needed. Use a property when access should include validation, computation, or compatibility behavior without changing the public API shape.

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

## Designing with Classes

Good class design usually starts with clear responsibilities. A class should represent one coherent concept and manage the behavior that naturally belongs with that concept.

In practice:

- prefer small focused classes over large catch-all classes
- use composition when reuse does not require inheritance
- keep public APIs simple and predictable
- avoid putting unrelated responsibilities into one class just because the data happens to live together

Python code is often better when classes are useful but not overused.

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

## Advanced Class Topics

Advanced class work includes descriptors, metaclasses, multiple inheritance details, cooperative `super()` usage, and customization hooks in object creation.

Beginners do not need to master these all at once, but it helps to know that Python classes are highly customizable and extend far beyond basic constructors and methods.

## Dataclasses

For data-focused classes, `dataclass` reduces boilerplate.

```python
from dataclasses import dataclass


@dataclass
class Product:
    name: str
    price: float
```

This automatically gives you an initializer and a useful string representation.

The dataclasses docs add a lot of useful detail:

- fields are discovered from type annotations
- field order matters
- generated behavior can be configured with options such as `frozen=True`, `order=True`, `slots=True`, and `kw_only=True`

### Common dataclass creation approaches

#### 1. Plain `@dataclass`

Use plain `@dataclass` when you want a straightforward data container with the default generated methods.

```python
from dataclasses import dataclass


@dataclass
class Product:
    name: str
    price: float
```

#### 2. Dataclass with defaults

Use defaults when some fields should have a normal starting value and callers should not always need to provide them.

```python
@dataclass
class Product:
    name: str
    price: float
    quantity: int = 0
```

#### 3. Dataclass with `field()` for mutable defaults

Use `field(default_factory=...)` when each instance should get its own fresh mutable value such as a list or dictionary.

```python
from dataclasses import dataclass, field


@dataclass
class Cart:
    items: list[str] = field(default_factory=list)
```

#### 4. Frozen dataclass

Use `frozen=True` when the data should behave like an immutable value object after creation.

```python
@dataclass(frozen=True)
class Point:
    x: int
    y: int
```

#### 5. Dynamic creation with `make_dataclass()`

Use `make_dataclass()` for advanced dynamic cases where the fields are not known until runtime.

```python
from dataclasses import make_dataclass


Point = make_dataclass("Point", [("x", int), ("y", int)])
```

The biggest beginner rule: do not use mutable default values directly. Use `field(default_factory=...)`.

---

## Exceptions

Python uses exceptions to report runtime errors.

Common exception types:

- `ValueError`
- `TypeError`
- `KeyError`
- `IndexError`
- `FileNotFoundError`
- `ZeroDivisionError`

It helps to separate three ideas:

- syntax errors: the code cannot even be parsed
- exceptions: the code is valid, but something goes wrong while running
- logical errors: the program runs, but the result is wrong

## Exception Hierarchy

Python exception types form a hierarchy. More specific exceptions inherit from more general exception classes.

This matters because catching a broad base class can also catch many more specific failures underneath it.

In practice, prefer catching the most specific exception types you actually expect.

## Exception Objects

Exceptions are objects. They can carry messages and other useful information about what went wrong.

```python
try:
    int("abc")
except ValueError as exc:
    print(type(exc))
    print(exc)
```

Treating exceptions as objects is useful for logging, debugging, and custom error design.

## Raising and Handling Errors

### `try` and `except`

Use `try` and `except` when an operation may fail in a known way and you want to handle that failure without crashing the whole program.

```python
try:
    number = int("abc")
except ValueError:
    print("That was not a valid integer")
```

### Handling Multiple Exceptions

Sometimes different exceptions should be handled differently, and sometimes several exception types can share one recovery path.

```python
try:
    value = int(text)
except ValueError:
    print("Bad number")
except TypeError:
    print("Wrong input type")
```

You can also catch a tuple of exception types when the handling is the same.

### `else` and `finally`

Use `else` for code that should run only when no exception happened, and use `finally` for cleanup that must happen either way.

```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Cannot divide by zero")
else:
    print(result)
finally:
    print("Done")
```

### Raise your own error

Raise your own exception when invalid input or invalid program state should stop the current operation clearly.

```python
def divide(a, b):
    if b == 0:
        raise ValueError("b must not be zero")
    return a / b
```

### Custom exceptions

Create a custom exception when built-in exception types are too general and your code needs a clearer domain-specific failure type.

```python
class InvalidAgeError(Exception):
    pass
```

### Exception Chaining

When one error happens because of another, Python lets you chain exceptions.

```python
def parse_age(text):
    try:
        return int(text)
    except ValueError as exc:
        raise ValueError("Age must be a whole number") from exc
```

This preserves the original cause and makes debugging easier.

### Cleanup and `with`

The tutorial emphasizes cleanup behavior for a reason. Resources such as files should be released reliably even when exceptions occur.

```python
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()
```

The `with` statement uses a context manager so setup and cleanup happen in a controlled way.

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

## Designing with Exceptions

Good exception design means raising errors at clear boundaries, keeping messages informative, and catching exceptions at the level where you can actually recover or report something useful.

Avoid swallowing exceptions silently. Either handle them meaningfully, transform them into a better domain error, or let them propagate.

## Finding Errors with the Debugger

A debugger lets you pause execution, inspect variables, step through code line by line, and see where state changes in ways you did not expect.

In VS Code, this often means:

- setting breakpoints
- running the debugger
- stepping over or into code
- inspecting local variables and the call stack

This is one of the fastest ways to understand why a program behaves differently from what you expected.

## Common Debugging Techniques

Practical debugging usually combines several approaches:

- reproduce the problem consistently
- reduce the failing example to something smaller
- inspect values with a debugger or temporary logs
- read the full traceback carefully
- test assumptions one step at a time

These habits matter more than memorizing any single tool.

## Which Errors Should You Handle?

Handle errors when your code can recover, retry, translate the problem into a clearer message, or clean up resources safely.

Do not catch exceptions just to hide failures. Over-catching often makes debugging harder and can mask real bugs.

## Files

Always prefer `with` when working with files.

### Read a text file

Use this when you want to read the entire contents of a text file into one string.

```python
with open("data.txt", "r", encoding="utf-8") as file:
    content = file.read()
```

### Write a text file

Use this when you want to replace the file contents with new text. If the file already exists, opening with `"w"` overwrites it.

```python
with open("data.txt", "w", encoding="utf-8") as file:
    file.write("Hello")
```

### Read line by line

Use this when the file may be large or when your logic naturally works one line at a time.

```python
with open("data.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())
```

### Multiple ways to open and work with files

The docs show several common approaches depending on what you need:

#### 1. Text mode

Use text mode when you are working with human-readable text and want Python to give you `str` values.

```python
with open("notes.txt", "r", encoding="utf-8") as file:
    text = file.read()
```

#### 2. Binary mode

Use binary mode when the file contains raw bytes such as images, archives, audio, or serialized binary data.

```python
with open("image.png", "rb") as file:
    data = file.read()
```

#### 3. Writing new content

Use write mode when you want to create a file or fully replace its current contents.

```python
with open("output.txt", "w", encoding="utf-8") as file:
    file.write("Hello\n")
```

#### 4. Appending

Use append mode when you want to keep existing contents and add new data at the end.

```python
with open("log.txt", "a", encoding="utf-8") as file:
    file.write("new entry\n")
```

#### 5. Exclusive creation

Use exclusive creation when the file must not already exist. Python raises an error instead of silently overwriting.

```python
with open("config.json", "x", encoding="utf-8") as file:
    file.write("{}")
```

Key practical rules from the docs:

- use text mode for `str`
- use binary mode for `bytes`
- specify `encoding="utf-8"` for text files unless you have a reason not to
- prefer iterating over the file object for large files instead of calling `read()` on everything at once

File objects also support `readline()`, `readlines()`, `tell()`, and `seek()`, but beginners should master `with`, `read()`, `write()`, and line iteration first.

## JSON

JSON is the most common text-based data exchange format.

```python
import json


data = {"name": "Alice", "age": 30}

json_text = json.dumps(data)
print(json_text)

parsed = json.loads(json_text)
print(parsed)
```

Read and write JSON files:

```python
import json


with open("user.json", "w", encoding="utf-8") as file:
    json.dump({"name": "Alice"}, file, indent=2)

with open("user.json", "r", encoding="utf-8") as file:
    user = json.load(file)
```

JSON is best when you want a text-based, language-independent format.

Common approaches:

- `json.dumps()` to serialize to a string
- `json.loads()` to parse from a string
- `json.dump()` to write to a file
- `json.load()` to read from a file

```python
import json


data = {"name": "Alice", "skills": ["python", "testing"]}

text = json.dumps(data, indent=2)
parsed = json.loads(text)
```

Practical limitations:

- JSON naturally supports strings, numbers, booleans, null, lists, and objects
- custom Python objects are not automatically serializable without extra work
- JSON files should be handled as UTF-8 text

## Pickle

`pickle` can serialize Python objects, but it is Python-specific.

```python
import pickle


data = {"a": 1, "b": 2}

with open("data.pkl", "wb") as file:
    pickle.dump(data, file)

with open("data.pkl", "rb") as file:
    loaded = pickle.load(file)
```

Do not unpickle untrusted data.

Pickle solves a different problem than JSON.

- use JSON for interoperability and readable text data
- use pickle when you need Python-specific object serialization

There are several common pickle helpers:

- `pickle.dumps()` and `pickle.loads()` for bytes in memory
- `pickle.dump()` and `pickle.load()` for files

```python
import pickle


payload = {"scores": [1, 2, 3]}
blob = pickle.dumps(payload)
restored = pickle.loads(blob)
```

Pickle can handle many more Python objects than JSON, but the tradeoff is that it is Python-specific and unsafe with untrusted input.

## Comparing JSON and Pickle

JSON and pickle are both serialization tools, but they serve different purposes.

Use JSON when:

- you want a text-based format
- the data should be human-readable
- other languages or tools may need to read it

Use pickle when:

- the data is Python-specific
- you need to preserve richer Python object structures
- interoperability is not the main concern

If the data may come from untrusted input, prefer JSON or another safe format. Do not unpickle untrusted data.

---

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

## Type Hints

Type hints improve readability, tooling, and refactoring support.

```python
def greet(name: str) -> str:
    return f"Hello, {name}"
```

Examples with collections:

```python
def total(values: list[int]) -> int:
    return sum(values)


def invert(mapping: dict[str, int]) -> dict[int, str]:
    return {value: key for key, value in mapping.items()}
```

The typing docs make one key point explicit: type hints are not enforced by the Python runtime.

They are mainly for:

- readers
- IDEs
- linters
- static type checkers such as `mypy` or `pyright`

```python
def greet(name: str) -> str:
    return f"Hello, {name}"
```

This annotation does not stop you from calling `greet(123)` at runtime unless you add your own checks.

### Common modern hinting approaches

#### 1. Built-in generic types

Use built-in generic forms such as `list[int]` and `dict[str, int]` in modern Python instead of older `typing.List` and `typing.Dict` forms.

```python
values: list[int] = [1, 2, 3]
mapping: dict[str, int] = {"a": 1}
```

#### 2. Union types with `|`

Use `|` when a value may validly be one of several types, such as a string or `None`.

```python
def parse(text: str | None) -> int:
    return 0 if text is None else int(text)
```

#### 3. Type aliases

Use a type alias when a type meaning deserves a domain name, even if the underlying runtime type is simple.

```python
type UserId = int
```

#### 4. More precise mapping and sequence abstractions

Often it is better to type against behavior:

Use abstract collection types when your function only depends on behavior such as iteration or indexing, not on one concrete container implementation.

```python
from collections.abc import Sequence


def total(values: Sequence[int]) -> int:
    return sum(values)
```

That is often more flexible than requiring a concrete `list[int]`.

## Linting, Formatting, and PEP 8

Readable Python depends not only on correct code, but also on consistent style. The most widely recognized style guide is PEP 8.

In practice, modern Python projects often use:

- `ruff` for linting and many automatic fixes
- `black` or `ruff format` for code formatting
- import sorting and static analysis tools as part of the development workflow

These tools do not replace understanding style, but they do help teams keep code consistent and reduce low-value review comments.

## Useful Standard Library Modules

- `pathlib` for file paths
- `datetime` for date and time
- `json` for JSON processing
- `collections` for specialized containers
- `itertools` for iteration utilities
- `functools` for higher-order functions and decorators
- `os` and `sys` for system interaction
- `subprocess` for running external commands

Some practical examples:

- `pathlib.Path("data") / "input.txt"` for readable path work
- `collections.Counter` for counting items
- `itertools.chain()` and `itertools.zip_longest()` for iterator composition
- `functools.reduce()` and `functools.partial()` for functional patterns

As your Python knowledge grows, the standard library should become a first stop before installing third-party packages.

## HTTP Requests and APIs Basics

One of the most practical early Python skills is calling HTTP APIs. In Python, this often means sending a request to a URL, receiving JSON, and then working with the returned data.

Using the popular `requests` library:

```python
import requests


response = requests.get("https://api.github.com")
print(response.status_code)
print(response.json())
```

Important beginner ideas:

- a URL identifies the endpoint you are calling
- methods such as `GET` and `POST` describe the type of request
- many APIs send and receive JSON
- network calls can fail, so exception handling and status checks matter

## Setting Up Flask

Flask is a lightweight Python web framework often used to teach the basics of routes, requests, responses, and small web applications.

After installing it, a minimal app looks like this:

```python
from flask import Flask


app = Flask(__name__)


@app.get("/")
def home():
    return "Hello from Flask"
```

Flask is a good teaching tool because it exposes web concepts directly without too much framework ceremony.

## Creating Routes (GET, POST)

Routes connect URLs and HTTP methods to Python functions.

```python
from flask import Flask, request


app = Flask(__name__)


@app.get("/users")
def list_users():
    return {"users": []}


@app.post("/users")
def create_user():
    return {"received": request.json}, 201
```

This introduces an important API idea: different HTTP methods on related URLs express different operations.

## Adding a User Interface

Python can also serve HTML pages or power a backend that a separate frontend calls.

With Flask, a simple UI often starts with templates:

```python
from flask import render_template
```

For beginners, the main idea is simple: not every Python web app is JSON-only. Some applications return HTML directly, and others serve an API consumed by a browser frontend.

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

## Creating and Starting Threads

Threads are one way to run multiple I/O-heavy tasks so they can make progress while waiting on external operations.

```python
import threading


def work():
    print("working")


thread = threading.Thread(target=work)
thread.start()
thread.join()
```

The important beginner idea is that starting a thread begins concurrent execution, and `join()` waits for it to finish.

## Thread Synchronization

When multiple threads share mutable state, synchronization tools help prevent race conditions.

Common tools include:

- `Lock`
- `RLock`
- `Event`
- `Semaphore`
- `Condition`

```python
import threading


lock = threading.Lock()
```

You do not need all of these immediately, but you should know that threads often need coordination when they touch the same data.

## Process Pools

For CPU-bound work, process pools make it easier to spread jobs across worker processes.

```python
from concurrent.futures import ProcessPoolExecutor


def square(x):
    return x * x


with ProcessPoolExecutor() as executor:
    results = list(executor.map(square, [1, 2, 3, 4]))
```

This is often easier to manage than manually starting and coordinating many processes yourself.

## Tasks and Coroutines

In `asyncio`, an `async def` function defines a coroutine function. Calling it creates a coroutine object. Tasks are wrappers scheduled by the event loop so coroutines can run concurrently.

```python
import asyncio


async def fetch_one(delay):
    await asyncio.sleep(delay)
    return delay


async def main():
    task1 = asyncio.create_task(fetch_one(1))
    task2 = asyncio.create_task(fetch_one(2))
    print(await task1)
    print(await task2)
```

Understanding the difference between a coroutine object and a scheduled task is one of the key steps in learning `asyncio` well.

## Unicode and Byte Strings

In Python, `str` represents Unicode text, while `bytes` represents raw binary data. Confusing the two causes many beginner bugs in file handling, networking, and encoding work.

```python
text = "cafe"
data = text.encode("utf-8")
restored = data.decode("utf-8")
```

The key rule is:

- text should usually be handled as `str`
- encoded binary data should be handled as `bytes`

Conversion between them happens through encoding and decoding.

## Decorators Deep Dive

At a deeper level, decorators are closures that receive a function and return a new callable. Real decorators often need `*args`, `**kwargs`, and metadata preservation with `functools.wraps`.

```python
from functools import wraps


def announce(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print("calling", func.__name__)
        return func(*args, **kwargs)

    return wrapper
```

This matters because decorators are common in frameworks, testing tools, caching helpers, and registration systems.

## Metaclasses

Metaclasses customize how classes themselves are created. They are an advanced feature and not something most beginners need in daily code.

The practical takeaway is that Python classes are objects too, and metaclasses are part of the mechanism that builds them.

## Iterators and Generators Deep Dive

An iterator is an object that produces values one at a time with `__iter__()` and `__next__()`. Generators are a convenient way to create iterators.

This matters because Python looping, comprehensions, generators, files, and many standard-library tools all rely on the iterator protocol.

Generator functions and generator expressions are high-level tools built on top of that same protocol.

## Context Managers Deep Dive

Context managers define setup and cleanup behavior around a block of code. The `with` statement is the standard way to use them.

Files are the most familiar example, but the same idea appears in locks, database transactions, temporary resources, and many library APIs.

Under the hood, context managers are based on `__enter__()` and `__exit__()` methods, or helper tools such as `contextlib`.

## Regular Expressions

Regular expressions let you search, validate, and transform text patterns using the `re` module.

```python
import re


pattern = r"\d+"
print(re.findall(pattern, "Room 12, floor 3"))
```

They are useful, but they can become hard to read quickly. For simple string tasks, normal string methods are often easier to maintain.

## C Extensions (ctypes)

Python can call native libraries through tools such as `ctypes`. This is useful when you need to access existing C APIs or lower-level system functionality.

This is an advanced interoperability topic. The key learning point is that Python can interact with native code, but doing so introduces extra complexity around types, memory, and safety.

## Building and Distributing Packages

As projects mature, you may want to package them so they can be installed and reused more easily.

This usually involves:

- project metadata
- package layout
- build tools
- versioning
- publishing workflows

For beginners, the important idea is that packaging is how Python code moves from “my local scripts” to reusable installable software.

## Documentation

Documentation is a real part of software quality. Good Python projects usually document:

- what the project does
- how to install and run it
- the public API or major concepts
- important design choices and constraints

That documentation may live in README files, docstrings, generated docs, tutorials, or usage examples. Clear documentation reduces onboarding time and prevents misuse.

For a beginner learning path, understand ordinary functions, iteration, and exceptions first. Then learn generators. Then learn `asyncio`.

For a learning repository, concurrency should come after fundamentals, not before.

---

## Next Steps

After this README, the repository can grow in a much cleaner way by:

1. splitting each chapter into its own folder
2. adding runnable `.py` examples for every topic
3. adding exercises and solutions
4. adding a `projects/` folder with beginner-to-intermediate apps
5. adding tests for examples where useful

Suggested future layout:

```text
learn-python/
├── README.md
├── getting-started/
├── core-syntax/
├── collections/
├── functions/
├── oop/
├── files-and-json/
├── testing/
└── projects/
```

## References

- [Official Python Documentation](https://docs.python.org/3/)
- [Python Tutorial](https://docs.python.org/3/tutorial/)
- [Python Standard Library](https://docs.python.org/3/library/)
- [Built-in Types](https://docs.python.org/3/library/stdtypes.html)
- [The Python Language Reference](https://docs.python.org/3/reference/)
- [Execution Model](https://docs.python.org/3/reference/executionmodel.html)
- [The Import System](https://docs.python.org/3/reference/import.html)
- [Compound Statements](https://docs.python.org/3/reference/compound_stmts.html)
- [Built-in Exceptions](https://docs.python.org/3/library/exceptions.html)
- [Typing Documentation](https://docs.python.org/3/library/typing.html)
- [PEP 8 - Style Guide for Python Code](https://peps.python.org/pep-0008/)

---
