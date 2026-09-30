# Flaviour Chipamba — Personal Portfolio

Personal brand and portfolio site for Flaviour Chipamba, ICT professional and software developer in Lusaka, Zambia.

Built with React 19, TypeScript, Vite and Tailwind CSS v4. Icons from Lucide. No backend, no tracking, no API keys.

## Updating content

All content lives in **`src/data/portfolio.ts`** — profile, contact links, bio, experience, education, skills, projects, learning and interests. The components only render that data, so most updates never touch a component.

| To… | Do this in `src/data/portfolio.ts` |
| --- | --- |
| Change a photo | Put the image in `public/images/` and update `profile.photo`, `aboutPhoto`, `educationPhoto` or an experience entry's `photo` (`src`, `alt`, `width`, `height`) |
| Show LinkedIn | Set `contact.linkedin` to your profile URL (hidden while `undefined`) |
| State availability | Set `profile.availability`, e.g. `'Open to software development roles'` (nothing is shown while `undefined`) |
| Add a project | Append to `projects`; `status` controls the badge, `demoUrl`/`sourceUrl` add links only when set |
| Add a screenshot | Put it in `public/images/` and set `image: { src, alt }` on the project |
| Hide a project without deleting it | Set `published: false` |
| Show the values statement | Set `faithStatement.enabled: true` |
| Link a credential | Set `credentialUrl` on a `learning` item |

The field types are documented in `src/data/types.ts`; TypeScript will flag a mistyped field. Header navigation order is in `src/data/navigation.ts`.

## Theme

The site opens in light mode. The moon/sun button in the header switches to dark mode, and the choice is remembered in that browser.

## Running locally

Requires Node.js 20.19+ (22 or 24 recommended).

```bash
npm install
npm run dev
```

## Checks

```bash
npm run typecheck   # TypeScript
npm run lint        # oxlint
npm run build       # typecheck + production build into dist/
npm run preview     # serve the production build locally
```

## Deploying

The output in `dist/` is a static site and can go on any static host. Copy `.env.example` to `.env.production` (or set the variables in your host) first:

- `VITE_SITE_URL` — the public URL, e.g. `https://flaviourchipamba.com`. Enables the canonical link, `og:url`, `og:image` and `sitemap.xml`. `robots.txt` is always generated.
- `VITE_BASE` — `/` for a custom domain or a `username.github.io` site; `/repo-name/` for a GitHub Pages project site.

**Vercel / Netlify / Cloudflare Pages:** build command `npm run build`, output directory `dist`, and set `VITE_SITE_URL` in the project's environment variables.

**GitHub Pages (this repository):** pushing to `main` runs `.github/workflows/deploy.yml`, which lints, builds with `VITE_BASE=/flaviour-portfolio/` and deploys to https://chipambaflaviour.github.io/flaviour-portfolio/. One-time setup: in the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.

## Project structure

```
src/
  data/          portfolio.ts (content), types.ts (content model), navigation.ts
  components/    Section, Chip, StatusBadge, ExternalLink, BrandIcons
  sections/      Header, Hero, About, Experience, Skills, Projects, Learning, Contact, Footer
  hooks/         useActiveSection (header active state)
public/          favicon.svg, og-image.png
```
