---
name: 9WhatsApp Landing Page
description: WhatsApp API infrastructure — kirim pesan tanpa nomor sendiri
colors:
  primary: "#25D366"
  primary-deep: "#1ebe5c"
  primary-glow: "rgba(37, 211, 102, 0.1)"
  bg-deep: "#030712"
  bg-surface: "rgba(255, 255, 255, 0.02)"
  bg-elevated: "rgba(255, 255, 255, 0.015)"
  border-subtle: "rgba(255, 255, 255, 0.04)"
  border-visible: "rgba(255, 255, 255, 0.08)"
  ink-primary: "#ffffff"
  ink-secondary: "#9CA3AF"
  ink-muted: "#6B7280"
  ink-dim: "#4B5563"
  separator: "#374151"
  code-key: "rgba(37, 211, 102, 0.7)"
  code-bracket: "#6B7280"
  code-string: "#9CA3AF"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(0.9375rem, 1.5vw, 1rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  mono:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-deep}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
    typography: label
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.bg-deep}"
  button-secondary:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
    border: "{colors.border-visible}"
  nav-badge:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
    border: "{colors.border-subtle}"
---
# Design System: 9WhatsApp

## 1. Overview

**Creative North Star: "The Routing Layer"**

9WhatsApp is a WhatsApp API infrastructure — dark, quiet, precise. The design exists not to shout, but to route trust. Every pixel communicates reliability for two distinct audiences: developers evaluating technical fit, and business owners looking for a serious tool.

The system is neutral-first with a green-tinted infrastructure soul. WhatsApp green is reserved exclusively for signalling (CTAs, status dots, routing nodes, code keys), never for decoration. The dark background is pure deep neutral, carrying only the faintest green hue below the threshold of conscious perception — enough to bind the palette to the brand, not enough to call it "green."

**Key Characteristics:**
- Dark premium with infrastructure-grade restraint
- WhatsApp green as accent (<10% of any screen), never identity
- Network and routing visual language (grids, nodes, subtle connections)
- Clean, precise, functional — no decorative flourishes
- Developer-respecting: shows code, shows data, shows it works
- Business-accessible: clear hierarchy, natural Indonesian, no jargon

**Explicitly rejects:** WA blast murahan vibes, norak hijau, AI-generated SaaS templates, terlalu ramai dan emoji, klaim berlebihan, glassmorphism, gradient text, side-stripe borders, ghost-card pattern with oversized shadows.

## 2. Colors

Neutral-first palette with whisper-green tint on background surfaces. Green accent is strategic and rare, never dominant.

### Primary
- **WhatsApp Green** (`#25D366` / `oklch(0.76 0.19 150)`): Primary CTA, status indicators, routing dots, key names in code snippets, hover states on brand elements.
- **Deep Green** (`#1EBE5C` / `oklch(0.69 0.19 150)`): Hover state for primary CTA.

### Neutral
- **Deep Ink** (`#030712` / `oklch(0.13 0.003 145)`): Page background. Pure near-black with imperceptible green chroma for brand cohesion.
- **White Ink** (`#FFFFFF`): Primary text — headlines and high-emphasis content.
- **Secondary Ink** (`#9CA3AF` / `gray-400`): Trust strip labels, secondary body emphasis, code string values. Passes WCAG AA at ≥7:1 on deep ink.
- **Muted Ink** (`#6B7280` / `gray-500`): Body text, metadata, secondary nav. Passes WCAG AA at ≥4.5:1 on deep ink.
- **Dim Ink** (`#4B5563` / `gray-600`): Lowest emphasis text, footer timestamps. ~3.5:1 contrast — do **not** use for body or readable content.
- **Border Subtle** (`rgba(255,255,255,0.04)`): Section dividers, container outlines, nav bottom border.
- **Border Visible** (`rgba(255,255,255,0.08)`): Secondary button stroke, hover border states.
- **Separator** (`#374151` / `gray-700`): Vertical dividers in trust strip, pill separators.

### Surface
- **Surface** (`rgba(255,255,255,0.02)`): Card/container backgrounds, nav bar, badge pills.
- **Elevated** (`rgba(255,255,255,0.015)`): Code snippet background, subtle depth layers.
- **Green Glow** (`rgba(37,211,102,0.1)`): CTA hover shadow, icon container tint.

### Named Rules
**The Accent Rarity Rule.** WhatsApp green occupies ≤10% of any viewport. Its scarcity is the point — green is a signal for action, status, and infrastructure, not atmosphere.

## 3. Typography

**Display & Body Font:** Inter (with system-ui, -apple-system, sans-serif fallback)
**Mono Font:** JetBrains Mono (with monospace fallback)

**Character:** Clean, precise, functional. Inter carries the infrastructure voice — neutral, legible, modern without trendiness. JetBrains Mono adds developer credibility where code appears. No serif, no display novelty. The typography is a utility, not a performance.

### Hierarchy
- **Display** (Semibold 600, `clamp(2.25rem, 5vw, 3.5rem)`, 1.1, `-0.02em` letter-spacing): Hero headline only. Text-wrap: balanced. Max length ~20 words.
- **Headline** (Semibold 600, 1rem / 14px, 1.3): Section titles in TrustPoints cards.
- **Body** (Regular 400, `clamp(0.9375rem, 1.5vw, 1rem)`, 1.6): Subheadline, prose content. Max width 35rem (65–75ch).
- **Label** (Medium 500, 0.75rem / 12px, 1.5): Badges, pills, trust strip items, metadata.
- **Mono** (Regular 400, 0.8125rem / 13px, 1.7): Code snippets, API endpoint labels, HTTP status badges.

### Named Rules
**The Zero-Contrast Rule.** Never pair two similar sans-serifs (Inter + another geometric sans). One family + mono is the ceiling.

## 4. Elevation

The system is fundamentally flat. Depth is communicated through **tonal layering**, not shadows. Surfaces exist on a three-layer optical stack:

1. **Background** (`oklch(0.13 0.003 145)`): Ground plane. Pure deep neutral.
2. **Surface** (`rgba(255,255,255,0.02)`): One step up. Navbar, trust points grid, badge pills.
3. **Elevated** (`rgba(255,255,255,0.015)`): Tertiary layer. Code snippet sits here, visually recessed within a surface container.

Borders (`rgba(255,255,255,0.04)` to `0.08`) separate layers where the tonal shift alone is insufficient.

### Shadows
Used only on interactive feedback: primary CTA hover carries `drop-shadow(0 4px 24px rgba(37,211,102,0.1))`. This is a glow, not an elevation shadow — it signals interactivity for the single brand action.

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, focus).

## 5. Components

### Buttons
- **Shape:** Rounded corners (`rounded-lg` = 12px). Full-pill reserved for tags/badges only.
- **Primary:** WhatsApp green fill on deep ink background. White text. Hover shifts to deep green + green glow. Focus adds `ring-2 ring-whatsapp/50`.
- **Secondary:** Subtle surface fill + visible border + muted ink text. Hover brightens border and text. Focus adds `ring-2 ring-white/20`.
- **States:** Default → Hover → Focus-visible → Active (no custom active needed — browser default suffices).

### Badges / Pills
- **Shape:** Full-pill (`rounded-full`). Very compact (6px vertical, 12px horizontal).
- **Style:** Surface background + subtle border + muted ink label + colored dot indicator.
- **Coming Soon badge:** Includes pulsing green dot (`animate-ping`). Dot opacity and ping opacity tuned to 60% for subdued presence.

### Trust Points Grid
- **Layout:** 4-column grid at lg, 2 at sm, 1 at xs. Gap-px with border-subtle wrapper for optical separation.
- **Card style:** Flat (no shadow). Background pulls from page bg (deep ink). Icon sits in `rounded-lg` green-glow container.
- **Typography:** 14px semibold white heading + 13px muted body.

### Code Snippet
- **Container:** Elevated background (`rgba(255,255,255,0.015)`) + border-subtle wrapper. 12px radius.
- **Header:** Separator line. Left: mono endpoint label in muted ink. Right: status badge in green-glow bg + green accent text.
- **Body:** Mono font, subdued syntax highlighting: brackets in muted, keys in green/70, string values in secondary ink.

### Navbar
- **Style:** Fixed top, full-width. Flat with border-subtle bottom and blur backdrop (`backdrop-blur-md`).
- **Logo:** Green-glow square container + WhatsApp green icon + white brand name.
- **Status pill:** Full-pill floating right. Green dot + "Coming Soon" label.
- **Z-index:** 50. All site content sits below.

### Footer
- **Style:** Full-width. Single border-subtle top. Flat.
- **Content:** Brand name + tagline left, icon links right, copyright.
- **Icons:** Dim ink at rest, green hover on WhatsApp icon, light ink hover on email icon.

## 6. Dos and Donts

### Do:
- **Do** use WhatsApp green only for CTAs, status dots, routing accents, and code keys — never for backgrounds or large areas.
- **Do** keep code snippets subdued — mono font, muted syntax, minimal highlighting. Let the realism of the JSON carry the weight.
- **Do** prefer flat surfaces with tonal separation over shadows. Use `rgba(255,255,255,0.02)` to lift a surface one step.
- **Do** respect the dual audience — copy must be clear enough for business owners, specific enough for developers.
- **Do** use staggered entrance animation (fade-in + translateY) for hero elements. Keep it subtle: 0.8s ease-out, 100ms delay per sibling.
- **Do** respect `prefers-reduced-motion` — suppress all entrance animations and ping dots.
- **Do** maintain WCAG AA: body text ≥4.5:1, large text ≥3:1 on deep ink.

### Dont:
- **Don't** use "Early Access", "Beta", "Launching Soon", or "Trusted by" badges — generic startup pills that read as AI-slop.
- **Don't** make WhatsApp green dominant. It is ≤10% of any viewport. Hijau norak is explicitly rejected.
- **Don't** use gradient text, glassmorphism, side-stripe borders, or ghost-card patterns (1px border + wide shadow).
- **Don't** put tiny uppercase tracked eyebrows above every section ("ABOUT", "PROCESS", "PRICING").
- **Don't** use numbered section markers (01, 02, 03) as default scaffolding.
- **Don't** show dashboard mockups or fake stats — 9WhatsApp is coming soon, not pretending to be live.
- **Don't** use hand-drawn or sketchy SVG illustrations.
- **Don't** make promises the product doesn't have (unlimited, anti banned, 100% aman).
- **Don't** use Inter below 400 weight — it becomes illegible at small sizes on dark backgrounds.
- **Don't** render trust indicators in dim ink (`gray-600` or below) — use secondary ink (`gray-400` or above).
- **Don't** use `border-radius` above 12px on cards or containers. Reserve full-pill for badges/tags only.
