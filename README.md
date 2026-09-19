# City Parking — redesign concept

A complete, bilingual (EN / AR, RTL) redesign of [cityparking-eg.com](https://cityparking-eg.com/) — built as a
static site (no framework, no runtime dependencies) and hosted on GitHub Pages.

**Live preview:** https://mohamed-sr-designer.github.io/city-parking-redesign/

## The idea

City Parking has strong technology and landmark projects, but its marketing speaks in features. This redesign turns
that into **business stories for decision-makers**:

| Old site | Redesign |
| --- | --- |
| "Experience the Future of Parking" | "The first thing your guests meet. The last thing they remember." |
| Feature lists per system | Outcome first (what it does for the business), technology second |
| References = project descriptions | 13 case studies in a fixed *stake → what we did → what it delivered* format, with an "entry ticket" of facts |
| One nav for everyone | **Decision-maker lens** (revenue, guest experience, operations, future-ready, city-scale) and **industry pages** written around the role that owns the outcome |
| Solutions, services and operations feel separate | **Advise · Integrate · Operate** — one accountable partner |

Visual language: *wayfinding editorial* — P badges, LED dot-matrix counters, road-line dividers and entry tickets,
on landmark photography. Brand palette is taken from the logo (blue, cyan, lime).

## Structure (56 pages)

`/` · `solutions/` (+7) · `services/` (+8) · `industries/` (+9) · `case-studies/` (+13) · `insights/` (+5) ·
`about/` · `contact/` · `careers/` · `faq/` · `privacy/` · `terms/` · `sitemap/` · `404.html`

## Build

```bash
node tools/images.mjs   # _raw/* -> assets/img (webp, logos, map masks)   [needs sharp]
node build.mjs          # src/data + src/lib + src/pages -> **/index.html
node tools/check-links.mjs
node serve.js 4820      # local preview
```

Content lives in `src/data/*.mjs` (every string has an `en` and an `ar` value). Facts, dates, volumes and quotes come
from the current site; the headlines, framing and structure are new.

## Notes

- Forms are front-end only (validation + success state); nothing is sent.
- Several photos are taken from the current site, including third-party / stock images — replace with commissioned
  project photography for production.
- The "guidance sign" in the hero is an illustration, not live data.
