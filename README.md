# sayed.portfolio

Personal portfolio of Sayed Esmail, Senior Frontend Engineer (Vue/Nuxt, React/Next.js, TypeScript), Cairo.

Live: **https://sayed5atab-gilt.vercel.app/**

- `/` featured case studies, `/projects` and `/projects/[slug]` company and freelance work (data in `src/data/`), `/about`, `/articles`.
- `/portfolio` is a print layout of the same work data; it is exported to `public/Sayed_Esmail_Portfolio.pdf` and linked from the site.
- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. No CMS, no runtime data fetching: everything is static content in `src/data/work.ts`, `src/data/projects.ts` and `src/data/articles.ts`.

## Run locally

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm lint
pnpm build
```

## Regenerate the portfolio PDF

The PDF is rendered from the running site with a headless Chrome driven by `agent-browser` (fetched via `npx`), so run the dev server (or `pnpm build && pnpm start`) first:

```bash
pnpm dev
# in a second terminal
pnpm portfolio:pdf
```

Options: `PORTFOLIO_ORIGIN` (default `http://localhost:3000`) if the site runs elsewhere, and `CHROME_PATH` to point at a specific Chrome/Chromium binary. The script waits for fonts and lazy images before printing, then writes `public/Sayed_Esmail_Portfolio.pdf`. Re-run it whenever the work data changes and commit the new PDF.

## Deploy

Pushes to `main` deploy to Vercel. Project work screenshots live under `public/projects/`.

© 2026 Sayed Esmail. Content and images are personal work; not licensed for reuse.
