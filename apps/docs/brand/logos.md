# Logo Usage & Identity Assets

The Olenna logomark balances classical Roman serif typography with an intricate botanical monogram, sourced directly from the master creative identity.

## Approved Master Logo Assets

The authentic vector and WebP raster masters are located in `@olenna/brand-assets` and public static directories.

### 1. Full Stacked Logo (`stacked` / `full`)
Used for splash screens, editorial brand stories, packaging, and high-impact hero displays.

<div style="display: flex; gap: 2rem; margin: 1.5rem 0; flex-wrap: wrap;">
  <div style="padding: 2rem; background: #FFFAF7; border: 1px solid rgba(73, 53, 65, 0.12); border-radius: 12px; text-align: center; flex: 1; min-width: 240px;">
    <img src="/images/logo/olenna-logo-full.webp" alt="Olenna Full Stacked (Master WebP)" style="max-height: 140px; margin: 0 auto; object-fit: contain;" />
    <p style="margin-top: 1rem; font-size: 0.8125rem; color: #5C4C56; font-weight: 500;">Authentic Master Stacked Lockup</p>
    <code style="font-size: 0.75rem;">/images/logo/olenna-logo-full.webp</code>
  </div>
  <div style="padding: 2rem; background: #493541; border: 1px solid #6D4C5E; border-radius: 12px; text-align: center; flex: 1; min-width: 240px;">
    <img src="/svg/olenna-logo-full-dark.svg" alt="Olenna Full Stacked (Dark Overlay)" style="max-height: 140px; margin: 0 auto; object-fit: contain;" />
    <p style="margin-top: 1rem; font-size: 0.8125rem; color: #FFFAF7; font-weight: 500;">Dark Background Vector Overlay</p>
    <code style="font-size: 0.75rem; color: #DCC5D8;">/svg/olenna-logo-full-dark.svg</code>
  </div>
</div>

### 2. Horizontal Logo (`horizontal`)
The principal lockup for responsive navigation headers, sticky toolbars, and email footers.

<div style="padding: 2rem; background: #FFFAF7; border: 1px solid rgba(73, 53, 65, 0.12); border-radius: 12px; margin: 1rem 0;">
  <img src="/images/logo/olenna-horizontal.webp" alt="Olenna Horizontal" style="max-height: 48px; object-fit: contain;" />
  <p style="margin-top: 1rem; font-size: 0.8125rem; color: #5C4C56;">Principal Navigation Header Lockup (180x40 @ md)</p>
  <code style="font-size: 0.75rem;">/images/logo/olenna-horizontal.webp</code>
</div>

### 3. Botanical Emblem (`emblem`)
Compact circular monogram for mobile app icons, favicons, avatar watermarks, and social profiles.

<div style="display: flex; gap: 2rem; align-items: center; margin: 1.5rem 0; flex-wrap: wrap;">
  <div style="padding: 1.5rem; background: #FFFAF7; border: 1px solid rgba(73, 53, 65, 0.12); border-radius: 12px; text-align: center;">
    <img src="/images/logo/olenna-emblem.webp" alt="Olenna Emblem" style="width: 56px; height: 50px; margin: 0 auto; object-fit: contain;" />
    <p style="margin-top: 0.5rem; font-size: 0.75rem; color: #5C4C56;">Botanical Emblem (WebP)</p>
  </div>
  <div style="padding: 1.5rem; background: #493541; border: 1px solid #6D4C5E; border-radius: 12px; text-align: center;">
    <img src="/svg/olenna-emblem-dark.svg" alt="Olenna Emblem Dark" style="width: 56px; height: 50px; margin: 0 auto; object-fit: contain;" />
    <p style="margin-top: 0.5rem; font-size: 0.75rem; color: #FFFAF7;">Monogram Inverted</p>
  </div>
</div>

### 4. Standalone Wordmark (`wordmark`)
Serif typographic wordmark for clean, compact layouts, order confirmations, and receipts.

<div style="padding: 1.5rem 2rem; background: #FFFAF7; border: 1px solid rgba(73, 53, 65, 0.12); border-radius: 12px; margin: 1rem 0;">
  <img src="/images/logo/olenna-wordmark.webp" alt="Olenna Wordmark" style="max-height: 44px; object-fit: contain;" />
  <p style="margin-top: 0.75rem; font-size: 0.8125rem; color: #5C4C56;">Editorial Wordmark Lockup</p>
  <code style="font-size: 0.75rem;">/images/logo/olenna-wordmark.webp</code>
</div>

---

## Dimension Standards & Breakpoints

Derived directly from production specifications:

| Variant | Size `sm` | Size `md` (Default) | Size `lg` | Recommended Use |
| :--- | :--- | :--- | :--- | :--- |
| **Horizontal** | `140 × 31 px` | `180 × 40 px` | `220 × 48 px` | Header Navigation Bars & App Banners |
| **Stacked** | `110 × 89 px` | `150 × 121 px` | `190 × 153 px` | Welcome Screens & Editorial Hero Banners |
| **Wordmark** | `120 × 36 px` | `155 × 47 px` | `190 × 57 px` | Compact Footers & Modal Headers |
| **Emblem** | `32 × 29 px` | `44 × 39 px` | `56 × 50 px` | Mobile Nav Icons, Favicons & Badges |

---

## Component Usage

The `@olenna/react` package exports a high-performance `<Logo />` component matching the exact dimensions:

```tsx
import { Logo } from '@olenna/react';

// Standard Navigation Header Logo
<Logo variant="horizontal" size="md" href="/" />

// Stacked Hero Logo with Brand Tagline
<Logo variant="stacked" size="lg" withTagline priority />

// Mobile Navigation Emblem
<Logo variant="emblem" size="sm" href="/" />
```

---

## Clear Space Formula

Maintain a clearance boundary of at least **0.5X** (where X equals the width of the emblem) on all four sides of any logo lockup. No competing typography or graphic elements may encroach within this zone.

## Usage Rules: Do's & Don'ts

> [!IMPORTANT]
> - **DO** use the approved light logo over Warm Ivory (`#FFFAF7`) or Blush Pink (`#F5E3EA`).
> - **DO** use the dark inverted logo over Deep Plum (`#493541`) or dark photographic scrims.
> - **DON'T** stretch, skew, or rotate the logo artwork.
> - **DON'T** apply drop shadows, 3D bevels, or bright neon glows to the logo.
> - **DON'T** change the logo typeface or recolor individual letters.
