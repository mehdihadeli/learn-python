## Iterators and Generators Deep Dive

An iterator is an object that produces values one at a time with `__iter__()` and `__next__()`. Generators are a convenient way to create iterators.

This matters because Python looping, comprehensions, generators, files, and many standard-library tools all rely on the iterator protocol.

Generator functions and generator expressions are high-level tools built on top of that same protocol.
