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
