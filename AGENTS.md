# Repository Agent Guide

## Purpose

This repository is a docs-first Python learning project.

- The main learning content lives under `docs/`.
- The root `README.md` is a GitHub landing page and navigation index.
- The Docusaurus site publishes the `docs/` content as the primary learning experience.

## Content Rules

- Keep explanations detailed, beginner-friendly, and technically correct.
- Prefer guidance aligned with the official Python documentation.
- When a Python concept has multiple common creation or usage patterns, mention the main valid approaches.
- Avoid turning the material into shallow summaries; this repo is meant to teach concepts, not just list syntax.

## File Ownership

- Update `docs/` when changing lesson content.
- Update `README.md` only for repository-level navigation, structure, setup notes, or license/project metadata.
- Do not duplicate large lesson bodies back into the root `README.md`.
- Keep the existing chapter and section ordering stable unless a structural change is explicitly requested.

## Docs Structure

The docs tree is chapter-based and ordered with numeric prefixes.

- `docs/00-introduction.md`
- `docs/01-getting-started/`
- `docs/02-core-syntax-and-types/`
- `docs/03-collections-and-object-creation/`
- `docs/04-flow-control-and-functions/`
- `docs/05-modules-packages-and-environments/`
- `docs/06-object-oriented-python/`
- `docs/07-errors-files-and-serialization/`
- `docs/08-practical-python/`

When adding a new section:

- place it in the correct chapter folder
- keep the numeric ordering scheme
- keep file names in kebab-case
- update `README.md` links if the public table of contents changes

## Docusaurus Notes

- Site config is in `docusaurus.config.js`.
- Sidebar generation is configured through `sidebars.js`.
- Custom styling lives in `src/css/custom.css`.
- Keep the `remove-webpackbar-plugin` workaround unless the underlying build issue is intentionally revisited and revalidated.

## Validation

Use the smallest useful validation for the change:

- Markdown/content-only changes: check markdown diagnostics.
- Docs structure or navigation changes: check markdown diagnostics and link integrity where possible.
- Docusaurus config or site behavior changes: run `npm run build`.

## Local Commands

- `npm start` to run the docs site locally
- `npm run build` to produce the static site
- `npm run serve` to preview the built site
- `npm run clear` to clear Docusaurus caches

## Editing Style

- Preserve the repo's current prose-heavy educational style.
- Prefer minimal, focused changes.
- Do not introduce unrelated refactors.
- Keep examples readable and practical.
