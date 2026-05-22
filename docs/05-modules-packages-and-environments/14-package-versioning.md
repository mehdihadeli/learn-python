## Package Versioning

Package versioning matters because dependency changes can alter behavior, APIs, and compatibility.

You will commonly see version constraints such as:

- exact pins like `requests==2.32.0`
- minimum versions like `requests>=2.32.0`
- compatible ranges depending on tool syntax

Exact pins improve reproducibility. Broader ranges improve flexibility. Real projects choose based on stability needs.
