# Wilson Arthur — Digital Headquarters

A dark-luxury, editorial personal brand experience for a 20+ year market veteran and financial educator. Restrained motion, cinematic scroll, executive typography. Built as a multi-route site (not a stacked one-pager) so each chapter is shareable and indexable.

## The experience

**Chapter 00 — Arrival (`/`)**
Full-bleed dark canvas: deep navy to charcoal with an animated fine grid and a slow ambient light that follows the cursor. Headline sets in staggered line-mask reveal: "Markets reward understanding, not tips." Below it, a single restrained line of identity (Senior Branch Head · 20+ Years · Investor Awareness Advocate) and one quiet CTA. A minimal animated line-chart drawn in SVG breathes in the background — no candlesticks, no neon.

**Chapter 01 — Two Decades** — animated counters (20+ years, cycles witnessed, sessions taught, learners reached) in an asymmetric bento, each tile with a soft glass panel and a whisper of gold on hover.

**Chapter 02 — The Journey** — horizontal-scroll timeline on desktop (pinned section, scroll-driven), converting to a vertical thumb-swipe rail on mobile. Each card is a market era, not a job title: 2008, 2013, 2020, 2024 — what the market taught.

**Chapter 03 — Philosophy (`/philosophy`)** — long-form editorial. Oversized serif pull-quotes, generous whitespace, six core principles revealed on scroll. This is the trust engine.

**Chapter 04 — Frameworks** — the teaching method: risk before return, position sizing, market psychology, decision journals. Cards that elevate 4px with a soft emerald glow.

**Chapter 05 — Learn (`/learn`)** — knowledge library: insights, featured video grid, reading list. Filterable, calm, magazine-grid.

**Chapter 06 — Workshops & Speaking (`/workshops`)** — formats, who it's for, past stages, media mentions. Two enquiry paths: workshop booking and speaking invitation.

**Chapter 07 — Contact (`/contact`)** — enquiry form (workshop / speaking / general), newsletter subscribe, Instagram bridge module designed for social traffic landing cold.

**Footer** — legal positioning stated plainly and confidently: Educational purposes only · Not investment advice · Not SEBI registered. Plus an FAQ accordion answering the "do you give tips?" question head-on.

## Design system

- Palette: deep navy `#0A1220` base, charcoal `#12161C` surfaces, emerald `#1F7A5C` accent, muted gold `#C9A961` highlight, soft white `#F2F0EB` text. All as oklch semantic tokens in `src/styles.css` — no hardcoded colors in components.
- Type: a high-contrast display serif for headlines (editorial authority), a clean grotesque for body. Large sizes, tight tracking on display, wide leading on body.
- Texture: 1px grid overlay, film-grain noise layer, radial ambient glows, glass panels with backdrop blur.
- Radius small (6–8px), shadows soft and long. Nothing rounded-pill, nothing bouncy.

## Motion strategy

Lenis for smooth scroll, Framer Motion for component-level reveals, GSAP + ScrollTrigger for the pinned horizontal timeline and scroll-driven chart draw. Rules: one motion idea per section, 400–700ms, custom cubic-bezier ease-out, everything respects `prefers-reduced-motion`. Magnetic CTA buttons, cursor spotlight on desktop only, text reveals by line-mask. No entrance animation on every element.

Mobile gets its own choreography: no cursor effects, no pinning, gesture-driven timeline, reduced particle/grain cost.

## Technical notes

- Stack is TanStack Start (React 19 + Vite + Tailwind v4) — the project's fixed router; Next.js isn't available here, but everything requested (SSR, file routes, per-route SEO, server functions) is covered.
- Routes: `index`, `philosophy`, `learn`, `workshops`, `contact`, each with its own `head()` — unique title, description, og tags, canonical. JSON-LD `Person` + `Organization` on root, `FAQPage` on the FAQ.
- Components split into `src/components/` by chapter plus shared primitives (`GlassPanel`, `RevealText`, `MagneticButton`, `Counter`, `GridBackdrop`, `NoiseOverlay`, `SectionLabel`).
- Add `lenis`, `gsap`, `framer-motion`; Lucide and ShadCN already available.
- Performance: lazy-load below-fold heavy sections, no Three.js in v1 (WebGL cost isn't worth the Lighthouse hit — the grid/mesh/glow effects are CSS + SVG). Revisit if you want a 3D moment in the hero later.
- Content will be written by me as production-grade placeholder copy in Wilson's voice, structured so real bio/stats/dates/links drop in cleanly.

## Backend

Contact enquiries and newsletter signups need storage. I'll enable Lovable Cloud and create two tables (`enquiries`, `subscribers`) with insert-only public policies, submitting through server functions. If you'd rather ship pure frontend first and wire forms later, say so and I'll stub them.

## Open items I'll assume unless you say otherwise

- Real photography isn't available, so I'll generate one editorial portrait-style image and abstract market visuals; swap in real photos anytime.
- Stats (learners reached, sessions taught) will be placeholders clearly marked for you to replace.
- Instagram handle and email placeholder until you provide them.
