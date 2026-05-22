## Package Management

Package management is how you discover, install, pin, upgrade, and reproduce dependencies in a Python project.

### Install packages with `pip`

Use this command when you want to add a package to the currently active Python environment.

```bash
pip install requests
```

### Save dependencies

Use this when you want to record the currently installed packages and versions into a `requirements.txt` file.

```bash
pip freeze > requirements.txt
```

### Install from requirements

Use this when you want to recreate an environment from a previously saved dependency list.

```bash
pip install -r requirements.txt
```

Modern Python projects may also use:

- `pyproject.toml`
- `uv`
- `poetry`
- `pip-tools`

If this repository grows beyond a single README, moving toward `pyproject.toml` is a good next step.

There are multiple common approaches to dependency management in modern Python:

- `pip` with a virtual environment
- pinned dependencies in `requirements.txt`
- `pyproject.toml` based project metadata
- tools such as `uv`, `poetry`, and `pip-tools`

For a learning repository, start simple. Learn `venv`, `pip install`, and `requirements.txt` first. Then learn `pyproject.toml` once the project structure grows.
