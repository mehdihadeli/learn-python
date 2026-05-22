# Notebook Companions

This folder contains runnable Jupyter notebook companions for the main learning material in [docs](../docs).

The goal is not to replace the prose-heavy chapters. The goal is to provide hands-on notebooks with short explanations and executable code snippets that learners can run cell by cell.

## Structure

The notebook tree should mirror the chapter structure in `docs/` as closely as practical.

Examples:

- `notebooks/01-getting-started/`
- `notebooks/02-core-syntax-and-types/`
- `notebooks/03-collections-and-object-creation/`
- `notebooks/04-flow-control-and-functions/`

## Suggested Pattern

Use notebooks for:

- runnable examples
- small experiments and exercises
- comparing multiple approaches side by side
- showing outputs directly in the document

Keep the main conceptual explanations in `docs/` and use notebooks as interactive companions.

## Running Notebooks

Typical setup:

1. create and activate a Python virtual environment
2. install Jupyter
3. open the repository in VS Code or JupyterLab
4. run notebook cells interactively

Example:

```bash
python -m venv .venv
. .venv/Scripts/activate
pip install jupyter
jupyter lab
```
