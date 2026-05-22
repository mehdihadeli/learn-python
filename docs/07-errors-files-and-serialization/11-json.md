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
