# Clough for SC5

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://andrew-d5.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

Campaign website for Andrew Clough, candidate for South Carolina House District 5. Built as a high-fidelity conversion from a Paper design into a production-ready Next.js site.

**Live site:** [andrew-d5.vercel.app](https://andrew-d5.vercel.app)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Inter + Playfair Display via `next/font/google` |
| Images | `next/image` with remote pattern optimization |
| Deployment | Vercel |
| Design source | [Paper](https://paper.design) |

---

## Pages & Components

```
src/
├── app/
│   ├── layout.tsx        # Font loading, metadata, global CSS
│   ├── globals.css       # Tailwind v4 import + base body styles
│   └── page.tsx          # Page assembly
└── components/
    ├── Nav.tsx           # Fixed top nav, mobile hamburger menu
    ├── Hero.tsx          # Full-bleed hero, responsive photo treatment
    ├── About.tsx         # Bio, photo with district badge, stat row
    ├── Issues.tsx        # 5-issue card grid (3-up + 2-up layout)
    ├── GetInvolved.tsx   # Volunteer sign-up form (client component)
    ├── Donate.tsx        # Amount selector + donate CTA (client component)
    └── Footer.tsx        # Links, disclaimer, copyright
```

---

## Color Palette

| Name | Hex |
|---|---|
| Navy (primary) | `#0F2044` |
| Deep navy (footer) | `#0A1628` |
| Gold (accent) | `#C8902A` |
| Slate (body text) | `#94A3B8` |
| Light slate | `#CBD5E1` |

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Roadmap

- [ ] Wire up volunteer form to a backend (Airtable, Supabase, or similar)
- [ ] Integrate ActBlue for donation processing
- [ ] Connect a CMS (Sanity or Contentful) for issues, news, and events
- [ ] Add scroll-triggered animations (Framer Motion)
- [ ] Events calendar page
- [ ] News/blog page
- [ ] Accessibility audit (WCAG 2.1 AA)
