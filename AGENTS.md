# AGENTS.md

## Stack and Structure
- Next.js 16, TypeScript single-app (not a monorepo). Entrypoint: `src/app/page.tsx` (app directory routing).
- TypeScript path alias: `@/*` → `src/*` (see `tsconfig.json`).
- UI components live under `src/components/`.
- Static/public assets in `public/`. Additional case study markdown/image/text content in `public/images/case-studies` and `src/app/case-study/*`.

## Commands
- **Dev:**   `npm run dev`   (Next.js dev server)
- **Build:** `npm run build` (Next.js build)
- **Start:** `npm run start` (Next.js prod)
- **Lint:**  `npm run lint`  (ESLint)

## Linting/Type
- `.next`, `out`, `build`, and `next-env.d.ts` are ignored by ESLint (overrides default in `eslint-config-next`).
- No test framework, codegen, format, or typecheck scripts configured outside of what Next.js/TS enforce by default.

## Testing/CI
- No tests or test config present. No CI, pre-commit, or deployment workflow in repo.

## Environment/Secrets
- No `.env` required or loaded; no backend calls or secret management in code or config.

## Special Conventions/Quirks
- No custom scripts, codegen, or architectural conventions beyond standard Next.js/TS app routing and layout patterns.
- For static/marketing/case study assets, edit markdown/text files or replace images under the documented public/app directories.

## References
- For full stack/command reference, config, or further workflow, see `package.json`, `tsconfig.json`, `eslint.config.mjs`, and the `src/app/` and `src/components/` code for patterns.

---

**If in doubt, use standard Next.js and TypeScript dev/test/build flows.**
