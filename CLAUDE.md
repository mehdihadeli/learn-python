# Claude Repository Notes

## Project Summary

This repository is a structured Python learning guide with VitePress-based documentation publishing.

The repository currently uses this split:

- `docs/` contains the actual learning material
- `README.md` is the root navigation page for GitHub readers
- `.github/workflows/deploy-docs.yml` deploys the docs site to GitHub Pages

## Important Working Assumptions

- Treat `docs/` as the source of truth for lesson content.
- Treat the root `README.md` as a lightweight index, not a second copy of the book.
- Preserve the chapter-based folder structure and numbered filenames.
- Keep explanations detailed and educational rather than overly compressed.

## Content Expectations

- Align explanations with Python's official documentation when practical.
- Cover multiple valid approaches when teaching object creation or common workflows.
- Prefer clarity over cleverness.
- Keep examples simple enough for learners to run and modify.

## Structure Expectations

When editing docs:

- maintain the existing chapter order
- keep file names stable unless there is a strong reason to rename them
- update root navigation if docs paths change
- avoid moving lesson content back into `README.md`

## Tooling Expectations

- Node `>=20` is required by `package.json`.
- VitePress serves the numbered `docs/` tree through generated rewrites so public URLs stay clean.
- Site configuration lives in `docs/.vitepress/config.mjs`, and `docs/.vitepress/theme/index.js` currently re-exports the default VitePress theme without custom styling.

## Validation Checklist

- For markdown-only edits, verify markdown diagnostics are clean.
- For navigation or structural edits, verify the affected links and docs paths.
- For config, theme, or publishing changes, run `npm run build`.

## Recommended Change Pattern

1. Edit the specific docs file that owns the concept.
2. Update `README.md` only if the visible navigation changed.
3. Run the narrowest validation that can fail for that change.
4. Keep the final repository state easy for learners to navigate.
