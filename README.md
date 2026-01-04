# 01mu-dev

A calm, long-form English personal blog for 01-mu. The site is intentionally
minimal so the writing stays quiet and readable.

## Public Repository Security Policy
- Never commit secrets, API keys, tokens, or credentials.
- Never commit `.env` files or environment-specific variants.
- Configure any required environment variables only in the Cloudflare Pages GUI.
- If something might be sensitive, document it conceptually instead.

## Local Development
```bash
mise install
pnpm install
pnpm run dev
```

## Writing Workflow
- Posts live in `src/content/posts` as Markdown.
- Frontmatter fields: `title`, `date`, `tags`, `description` (optional), `draft`.
- Drafts (`draft: true`) are excluded from production builds.

## Checks
```bash
pnpm astro check
```

## Visual Snapshots (Playwright)
```bash
pnpm test:e2e:update
```
- Snapshots are saved under `e2e/snapshots/`.

## Deployment (Cloudflare Pages GUI)
- Build command: `pnpm run build`
- Output directory: `dist`
- Production branch: `main`
- Node version: match `.tool-versions` (mise).

## Domain Notes
- Domain: `01-mu.dev`
- Registrar: Cloudflare Registrar
- DNS hosting: Cloudflare
- Bind the custom domain in the Cloudflare Pages GUI.
