# Typography identity + de-card pass

Replace the current Archivo / IBM Plex system with an institutional serif + grotesk identity, lock a strict type scale, and break up the card-heavy sections into editorial structures.

## Typography

New families, loaded via the root route head (no CSS URL imports):

- Display / headlines: **Newsreader** — a sharp, warm editorial serif with real optical character. Used for h1–h3 and pull quotes.
- Body / UI: **Geist Sans** — a precise neutral grotesk that is not Inter. Used for paragraphs, nav, buttons, labels.
- Numerals / eyebrows: **Geist Mono** — stats, tickers, credentials, section labels.

Token changes in `src/styles.css`: `--font-display`, `--font-sans`, `--font-mono` repointed; heading rules get serif-appropriate tracking (`-0.02em`, weight 500 not 600) instead of the current tight grotesk tracking.

Strict six-step scale, applied everywhere as utility classes so no page invents its own sizes:

```text
display   clamp(2.75rem, 6vw, 5rem)    / 1.02 / serif 500
h1        clamp(2.25rem, 4.5vw, 3.5rem)/ 1.06 / serif 500
h2        clamp(1.5rem, 2.6vw, 2rem)   / 1.15 / serif 500
lead      1.125rem                      / 1.6  / sans 400
body      1rem                          / 1.7  / sans 400
label     0.6875rem                     / mono / 0.18em tracking, uppercase
```

Every route (`index`, `philosophy`, `learn`, `workshops`, `about`, `contact`) is swept so headings, body copy and labels use only these steps — no one-off `text-[..]`, no stray weights.

## De-card pass

Sections currently rendered as three equal rounded boxes get structure appropriate to their content:

- **Three principles** (the attached section): becomes a bordered editorial row — hairline vertical dividers between columns, no card fill, no rounding, principle number-free mono label above each serif heading, generous column gutters. Stacks to divided rows on mobile.
- **What moves your portfolio**: divider-separated list with large serif terms and mono index rail instead of boxes.
- **Market notes / learn categories**: keeps cards (they are genuinely clickable objects) but with a single small radius and a hover rule line rather than lift + glow.
- **Stats and credentials**: mono figures on a hairline grid, no panels.
- **Radius discipline**: `--radius` stays small for interactive surfaces; images get square corners; pills reserved for the two CTA buttons only. No component shares a radius by accident.

Card fill, blur and glow are removed where the element is not interactive — borders, whitespace and typography carry the hierarchy instead.

## Out of scope

Copy, routes, data, backend and functionality are untouched. Hero restructuring, animation reduction and the accessibility audit are not part of this pass.
