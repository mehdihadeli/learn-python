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
