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
npm install
npm run dev
```

## Writing Workflow
- Posts live in `src/content/posts` as Markdown.
- Frontmatter fields: `title`, `date`, `tags`, `description` (optional), `draft`.
- Drafts (`draft: true`) are excluded from production builds.

## Deployment (Cloudflare Pages GUI)
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`
- Node version: use the default Cloudflare Pages Node LTS unless a project
  constraint is added later.

## Domain Notes
- Domain: `01-mu.dev`
- Registrar: Cloudflare Registrar
- DNS hosting: Cloudflare
- Bind the custom domain in the Cloudflare Pages GUI.
