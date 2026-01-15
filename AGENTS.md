# Repository Guidelines

This repository is intended for a personal portfolio site. If the structure or tooling changes, update this guide to match the actual setup so contributors have a single source of truth.

## Project Structure & Module Organization

- `app/`: Next.js App Router pages, layouts, and API routes.
- `components/`: shared UI sections and icons (example: `components/hero-section.tsx`).
- `content/`: JSON copy used to populate sections (example: `content/services.json`).
- `locales/`: translation dictionaries (`locales/en.json`, `locales/kn.json`).
- `public/`: static files such as images, icons, and fonts.
- `archive/`: legacy static assets and templates kept for reference.
- `tests/`: automated tests (unit, integration, or e2e).

If you introduce a different layout, document the new locations here with examples like `components/` or `content/projects.json`.

## Build, Test, and Development Commands

Next.js tooling is configured. Keep scripts in `package.json` consistent with these conventions:

- `npm install`: install dependencies.
- `npm run dev`: start the local development server.
- `npm run build`: produce a production build.
- `npm run test`: run the test suite.
- `npm run lint`: run formatting or lint checks.

If you choose a different stack (e.g., static HTML), replace these with the correct commands.

## Coding Style & Naming Conventions

- Indentation: 2 spaces for JS/TS/JSON/CSS; no tabs.
- Line endings: LF only.
- File naming: `kebab-case` for files and folders (example: `src/components/hero-section.tsx`).
- Component naming: `PascalCase` for React components.
- Prefer Prettier and ESLint for JS/TS projects; document any other formatter here.

## Testing Guidelines

- Place tests in `tests/` or `src/**/__tests__/` and name them `*.test.ts` or `*.spec.ts`.
- Add tests for new features and bug fixes, prioritizing user-facing behavior.
- Keep test commands wired to `npm run test`.

## Commit & Pull Request Guidelines

- No established commit history yet. Use Conventional Commits (e.g., `feat: add hero section`, `fix: correct nav spacing`).
- PRs should include a clear description, testing notes, and screenshots for UI changes.
- Link related issues or tasks when available.

## Security & Configuration Tips

- Do not commit secrets. Use `.env` for local values and add a `.env.example` template when introducing new variables.
- Optimize assets before committing (e.g., compressed images in `public/`).
