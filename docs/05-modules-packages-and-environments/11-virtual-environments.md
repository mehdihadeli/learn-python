## Virtual Environments

Virtual environments isolate project dependencies.

Create one:

```bash
python -m venv .venv
```

Activate on Windows PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Activate on bash in Windows:

```bash
source .venv/Scripts/activate
```

Activate on Linux or macOS:

```bash
source .venv/bin/activate
```

Why they matter:

- each project can keep its own installed packages
- you avoid polluting the global Python installation
- dependency versions become easier to reproduce

In practice, a virtual environment changes which Python interpreter and `site-packages` directory your shell uses.
