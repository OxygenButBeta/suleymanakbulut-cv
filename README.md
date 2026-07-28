# suleymanakbulut.cv

Personal portfolio site. Astro, static output, no client-side framework.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Where the content lives

All content is data, not markup. Editing these files is the only thing needed to update the site:

| File | Contents |
| --- | --- |
| `src/data/site.ts` | Name, role, tagline, links, technical focus areas |
| `src/data/work.ts` | The four case studies rendered at `/work/<slug>` |
| `src/data/projects.ts` | Tools & libraries grid |
| `src/data/games.ts` | Games grid (`featured: true` gives a double-width card) |
| `src/data/experience.ts` | Experience timeline (`period` is optional) |

Adding a case study: append an entry to `src/data/work.ts`. The route, the next-project link and the sitemap all follow automatically.

Design tokens (colours, spacing, type) are at the top of `src/styles/global.css`.

## Deploy — Cloudflare Pages

Connect this repository in the Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20 or newer |

Then add the custom domain under the project's **Custom domains** tab:

- `suleymanakbulut.cv`
- `www.suleymanakbulut.cv`

Cloudflare writes the DNS records itself if the domain is already on the account. The Google Sites records for the domain have to be removed first, otherwise the old site keeps resolving.

Every push to `main` triggers a deploy; pull requests get preview URLs.
