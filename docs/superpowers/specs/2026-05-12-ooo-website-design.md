# Out of Office — Website Design Spec

**Date:** 2026-05-12
**Status:** Draft for review
**Owner:** Ken

## Overview

A single-page manifesto site for Out of Office (OOO), an independent film studio covering decentralized AI. The site's job is to state who OOO is, signal the aesthetic of the work, and route visitors to YouTube and Twitter where the actual content lives.

Visual register: monospace, black-and-white, brutalist / system-readout. Urban and slightly esoteric — but never cheesy. Aesthetic fidelity matters; this site is a calling card for a video studio that takes craft seriously.

## Goals

- One scroll, no nav, no routes.
- Communicate positioning in under five seconds: *cinema for decentralized AI*.
- Route to YouTube and Twitter prominently.
- Set an aesthetic bar that previews the production values of the films.
- Work on a phone without losing composure.

## Non-Goals

- Not a media hub. No article feed, no episode list, no embeds.
- No newsletter signup yet. (Channels are YouTube + Twitter only for v1.)
- No light mode. The site is black on white *or* white on black — one of the two, picked below — and does not toggle.
- No animations beyond a single, small motion beat (see Motion).

## Tech

- **Framework:** Next.js 16 (App Router), already scaffolded.
- **Styling:** Tailwind v4 (already wired). No CSS-in-JS, no component library.
- **Font:** Geist Mono (already loaded via `next/font/google` in `app/layout.tsx`). Used for everything — wordmark, body, metadata.
- **No client JS.** The blinking caret is CSS `@keyframes`, not React state — the page is a single static server component.
- **Deploy target:** Vercel.

## Visual System

### Color

- Background: `#0A0A0A` (near-black).
- Foreground: `#EDEDED` (near-white).
- Muted (rules, secondary labels): `#666` / `text-zinc-500`.

Inverted (white on black) rather than black on white. Reason: video studio; the site should feel like a film print or theater curtain, not a printed page. Black background also makes the YouTube/Twitter callouts feel like marquee elements.

### Typography

- **Wordmark:** `OUT OF OFFICE` — uppercase, letter-spacing `0.2em`, weight `500`. Size: `clamp(2rem, 6vw, 4rem)`.
- **Tagline:** Sentence case, regular weight, ~`1.125rem`. One line on desktop, may wrap on mobile.
- **Manifesto body:** Sentence case, regular weight, ~`1rem`, line-height `1.6`, max-width `~46ch`.
- **Metadata labels:** Uppercase, regular weight, `0.875rem`, muted color, letter-spacing `0.1em`.
- **Metadata values:** Uppercase, regular weight, `0.875rem`, foreground color.
- **Channel CTAs:** Uppercase, regular weight, with `↗` glyph. Underline on hover.

No italics anywhere. No bold for emphasis — emphasis comes from caps and spacing.

### Spacing & Grid

- Page is a CSS grid: two columns on `md+` (`grid-cols-[1.4fr_1fr]`), stacked single column below `md`.
- Outer padding: `2rem` on mobile, `4rem` on desktop.
- Vertical rhythm: `1.5rem` between elements within a column.
- Maximum container width: `80rem` — generous, but not edge-to-edge on huge screens.

### Rules & Borders

- Horizontal rules: `1px solid #333` (visible but not loud).
- The two columns are separated by a single vertical rule on desktop; on mobile the divider becomes a horizontal rule.
- A top rule sits above the wordmark; a bottom rule sits beneath the footer line. The page reads as a framed broadcast.

## Layout

```
┌─────────────────────────────────────┬────────────────────────────────┐
│                                     │  STATUS         ACTIVE         │
│  OUT OF OFFICE                      │  EST.           MMXXVI         │
│                                     │  FOCUS          DECENTRALIZED  │
│  Cinema for the decentralized       │                 AI             │
│  intelligence era.                  │  FORMAT         FILM           │
│                                     │  CHANNELS       YT / X         │
│  Out of Office is a film studio     │  TRANSMISSION   01             │
│  covering the people, ideas, and    │                                │
│  protocols building AI in the open. │  ─────────────────────────────│
│                                     │  ▢ WATCH ON YOUTUBE        ↗   │
│                                     │  ▢ FOLLOW ON TWITTER       ↗   │
└─────────────────────────────────────┴────────────────────────────────┘
                          OUT OF OFFICE © MMXXVI
```

### Left column (1.4fr)

1. Wordmark — `OUT OF OFFICE`
2. Tagline — *Cinema for the decentralized intelligence era.*
3. Manifesto — *Out of Office is a film studio covering the people, ideas, and protocols building AI in the open.*

### Right column (1fr)

1. Metadata block (label / value pairs, table-aligned):
   - `STATUS` — `ACTIVE`
   - `EST.` — `MMXXVI`
   - `FOCUS` — `DECENTRALIZED AI`
   - `FORMAT` — `FILM`
   - `CHANNELS` — `YT / X`
   - `TRANSMISSION` — `01`
2. Horizontal rule.
3. Channel CTAs (stacked):
   - `▢ WATCH ON YOUTUBE ↗`
   - `▢ FOLLOW ON TWITTER ↗`

### Footer (full-width, beneath both columns)

- Single muted line, centered: `OUT OF OFFICE © MMXXVI`
- Above this line: full-width rule.

### Responsive behavior

- **`md+`:** Two columns, side by side, vertical divider between them.
- **Below `md`:** Single column. Order: wordmark → tagline → manifesto → horizontal rule → metadata block → horizontal rule → channel CTAs → footer.
- Wordmark size scales with viewport via `clamp()`.
- No carousel, no hamburger menu — there's nothing to hide.

## Behavior

### Hover states

- Channel CTAs: foreground color stays; background flips to `#EDEDED` and text to `#0A0A0A` (full inversion). No transition delay; `transition: 120ms` on background/color.
- The `↗` glyph translates `2px` up-right on hover via `transform`.
- Nothing else has hover affordance.

### Motion

- One beat: a single blinking square caret `▮` at the bottom-right of the page, near the copyright. CSS-only animation, `1s` cycle. This is the entire motion budget.
- No scroll-triggered animations. No fades-in on load. Page is there when you arrive.

### Accessibility

- Real semantic HTML: `<header>` (wordmark), `<main>` (manifesto + metadata), `<footer>`.
- Channel links: `<a>` with `rel="noopener"` and accurate `aria-label`s ("Watch Out of Office on YouTube (opens in new tab)").
- Hover states have non-color affordances (the `↗` glyph movement, underline appears).
- Contrast: `#EDEDED` on `#0A0A0A` passes AAA.
- Wordmark is an `<h1>`, the tagline is a `<p>` not an `<h2>` (semantically a subtitle, not a section header).

### SEO / metadata

- `<title>`: `Out of Office — Cinema for the decentralized intelligence era.`
- `<meta name="description">`: the manifesto line.
- OG image: a generated B&W card with the wordmark + tagline. Can be a Next.js OG image route (`app/opengraph-image.tsx`) so it renders dynamically.
- `theme-color`: `#0A0A0A`.
- Favicon: monogram `OOO` in white on black, 32×32.

## File Structure

```
app/
  layout.tsx           # update — strip boilerplate, set fonts + metadata, default to dark
  page.tsx             # rewrite — the manifesto page (single server component)
  globals.css          # update — set bg/fg vars to dark, define @keyframes for caret blink
  opengraph-image.tsx  # new — generated OG card
```

Three files touched, one created. No new components, no client JS.

## Content (final, paste-in-able)

| Slot | Content |
|---|---|
| Wordmark | `OUT OF OFFICE` |
| Tagline | `Cinema for the decentralized intelligence era.` |
| Manifesto | `Out of Office is a film studio covering the people, ideas, and protocols building AI in the open.` |
| Metadata | `STATUS: ACTIVE` / `EST.: MMXXVI` / `FOCUS: DECENTRALIZED AI` / `FORMAT: FILM` / `CHANNELS: YT / X` / `TRANSMISSION: 01` |
| CTAs | `▢ WATCH ON YOUTUBE ↗` → YouTube URL (TBD) <br> `▢ FOLLOW ON TWITTER ↗` → Twitter URL (TBD) |
| Footer | `OUT OF OFFICE © MMXXVI` |

## Open Questions (resolve before implementation)

1. **YouTube handle/URL?** Placeholder `https://youtube.com/@outofoffice` until provided.
2. **Twitter handle/URL?** Placeholder `https://x.com/outofoffice` until provided.
3. **Domain** — what's this deploying to? (Affects metadata's `metadataBase`.)
4. **Favicon source** — generate from wordmark, or do you have a logomark file?
5. **OG image style** — auto-generate from a Next.js route (recommended) or supply a static PNG?

## Out of Scope (explicitly punted)

- Email signup / newsletter
- Multiple pages (about / work / contact)
- Episode list / video embeds
- Light/dark toggle
- Animation beyond the blinking caret
- i18n / multi-language

These can be revisited once season one ships.
