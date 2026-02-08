# 🦞 Oding Blog - Agent Protocol

> This file defines the operating rules for AI Agents working on this project.

## 🛡️ Prime Directives

1.  **MD Only Policy**
    - **Posts (`src/content/posts/*.md`) must be pure Markdown.**
    - 🚫 **No MDX (.mdx)** for blog content.
    - **Reason:** To ensure raw data purity for future Vector DB embedding and RAG (Retrieval-Augmented Generation).
    - **Exception:** Page layouts (`src/pages`, `src/layouts`) use `.astro` (which is JSX-like), but content must be `.md`.

2.  **Test Driven Development (TDD)**
    - **Rule:** Before (or while) implementing a feature, write a corresponding test.
    - **Tool:** `vitest` + `@testing-library/react`.
    - **CI Enforcement:** PRs cannot merge if `npm run test` fails.

3.  **Atomic Commits**
    - Break down work into small, logical units.
    - Follow [Conventional Commits](https://www.conventionalcommits.org/):
        - `feat:` New features
        - `fix:` Bug fixes
        - `docs:` Documentation
        - `chore:` Maintenance
        - `refactor:` Code restructuring

## 🏗️ Project Context

- **Framework:** Astro 5.0
- **Styling:** Tailwind CSS v4
- **Deploy:** GitHub Pages (Static)
- **Repo:** `oding-ai/oding-blog`

## 🧠 Memory Hooks

- **Images:** Must be in `src/assets/` and referenced via relative paths (e.g., `../../assets/image.jpg`).
- **Routing:** Post URLs are `/posts/[slug]/`. Legacy `/blog/` is deprecated.
