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
