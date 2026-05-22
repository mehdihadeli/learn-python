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
