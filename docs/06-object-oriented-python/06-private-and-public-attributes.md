## Private & Public Attributes

Python does not enforce strict private fields the same way some other languages do, but it does use naming conventions and name mangling.

Common patterns:

- `name` for normal public attributes
- `_name` for non-public-by-convention attributes
- `__name` for name-mangled attributes meant to avoid accidental clashes

These are conventions and mechanisms for design clarity, not absolute access barriers.
