## Designing with Exceptions

Good exception design means raising errors at clear boundaries, keeping messages informative, and catching exceptions at the level where you can actually recover or report something useful.

Avoid swallowing exceptions silently. Either handle them meaningfully, transform them into a better domain error, or let them propagate.
