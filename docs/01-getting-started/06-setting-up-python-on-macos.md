## Setting Up Python on macOS

On macOS, Python may already exist on the system, but that does not always mean it is the version you want for learning or project work.

Practical guidance:

- install a current Python 3 release from the official Python website or a trusted package manager
- verify which interpreter runs with `python3 --version`
- prefer using virtual environments for project work instead of relying on the system interpreter

Many macOS users run Python with `python3` instead of `python`:

```bash
python3 --version
python3 -m venv .venv
```
