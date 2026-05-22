## Exception Hierarchy

Python exception types form a hierarchy. More specific exceptions inherit from more general exception classes.

This matters because catching a broad base class can also catch many more specific failures underneath it.

In practice, prefer catching the most specific exception types you actually expect.
