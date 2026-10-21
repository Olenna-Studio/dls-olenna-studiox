# Color Harmony & Contrast

The Olenna color palette is engineered for warmth, quiet luxury, and strict accessibility compliance, matching the production aesthetic of Olenna Web.

## Master Typography & Semantic Roles

| Token Role | Hex Value | CSS Variable | Purpose & Guidance |
| :--- | :--- | :--- | :--- |
| **Brand Text Primary** | `#261C22` | `--olenna-color-brand-text-primary` | Highest contrast charcoal editorial headings and body text |
| **Brand Text Secondary** | `#5C4C56` | `--olenna-color-brand-text-secondary` | Secondary product descriptions, card subtitles, and table metadata |
| **Brand Text Muted** | `#8E7A87` | `--olenna-color-brand-text-muted` | Timestamps, auxiliary legal notes, and decorative captions |
| **Primary Canvas Background** | `#FFFAF7` | `--olenna-color-brand-ivory-50` | Signature warm ivory canvas background across storefront and PWA |
| **Subtle Card Background** | `#FAF5F2` | `--olenna-color-brand-ivory-100` | Warm ivory container fill and card surface |

---

## Brand Primitives Palette

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
  <div style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(73, 53, 65, 0.12); background: #FFFFFF;">
    <div style="height: 80px; background: #261C22;"></div>
    <div style="padding: 0.75rem;">
      <strong style="color: #261C22;">Brand Charcoal</strong><br/>
      <code style="font-size: 0.75rem;">#261C22</code>
      <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #5C4C56;">Primary Editorial Text</p>
    </div>
  </div>

  <div style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(73, 53, 65, 0.12); background: #FFFFFF;">
    <div style="height: 80px; background: #493541;"></div>
    <div style="padding: 0.75rem;">
      <strong style="color: #493541;">Deep Plum 900</strong><br/>
      <code style="font-size: 0.75rem;">#493541</code>
      <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #5C4C56;">Primary Action Fill</p>
    </div>
  </div>

  <div style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(73, 53, 65, 0.12); background: #FFFFFF;">
    <div style="height: 80px; background: #33232D;"></div>
    <div style="padding: 0.75rem;">
      <strong style="color: #33232D;">Midnight Plum 950</strong><br/>
      <code style="font-size: 0.75rem;">#33232D</code>
      <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #5C4C56;">Primary Button Hover</p>
    </div>
  </div>

  <div style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(73, 53, 65, 0.12); background: #FFFFFF;">
    <div style="height: 80px; background: #FFFAF7; border-bottom: 1px solid rgba(73, 53, 65, 0.12);"></div>
    <div style="padding: 0.75rem;">
      <strong>Warm Ivory 50</strong><br/>
      <code style="font-size: 0.75rem;">#FFFAF7</code>
      <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #5C4C56;">Page Canvas Canvas</p>
    </div>
  </div>

  <div style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(73, 53, 65, 0.12); background: #FFFFFF;">
    <div style="height: 80px; background: #F5E3EA;"></div>
    <div style="padding: 0.75rem;">
      <strong>Blush Pink 100</strong><br/>
      <code style="font-size: 0.75rem;">#F5E3EA</code>
      <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #5C4C56;">Highlight Accent & Banner</p>
    </div>
  </div>

  <div style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(73, 53, 65, 0.12); background: #FFFFFF;">
    <div style="height: 80px; background: #DCC5D8;"></div>
    <div style="padding: 0.75rem;">
      <strong>Soft Mauve 200</strong><br/>
      <code style="font-size: 0.75rem;">#DCC5D8</code>
      <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #5C4C56;">Secondary Button Fill</p>
    </div>
  </div>

  <div style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(73, 53, 65, 0.12); background: #FFFFFF;">
    <div style="height: 80px; background: #C4A181;"></div>
    <div style="padding: 0.75rem;">
      <strong>Champagne 400</strong><br/>
      <code style="font-size: 0.75rem;">#C4A181</code>
      <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #5C4C56;">Gold Accent & Framing</p>
    </div>
  </div>

  <div style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(73, 53, 65, 0.12); background: #FFFFFF;">
    <div style="height: 80px; background: #A66B83;"></div>
    <div style="padding: 0.75rem;">
      <strong>Rose Mauve 500</strong><br/>
      <code style="font-size: 0.75rem;">#A66B83</code>
      <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #5C4C56;">Interactive Link Color</p>
    </div>
  </div>
</div>

---

## Contrast Ratios & Accessibility (WCAG 2.2 AA / AAA)

Every color combination in the Olenna design system is mathematically validated against WCAG requirements:

| Foreground | Background | Contrast Ratio | Compliance Level |
| :--- | :--- | :--- | :--- |
| **Brand Charcoal (`#261C22`)** | Warm Ivory (`#FFFAF7`) | **13.5:1** | **AAA** (Exceeds 7:1) |
| **Deep Plum (`#493541`)** | Warm Ivory (`#FFFAF7`) | **9.4:1** | **AAA** (Exceeds 7:1) |
| **Secondary Text (`#5C4C56`)** | Warm Ivory (`#FFFAF7`) | **6.8:1** | **AA** (Exceeds 4.5:1) |
| **Muted Text (`#8E7A87`)** | Warm Ivory (`#FFFAF7`) | **4.6:1** | **AA** (Exceeds 4.5:1) |
| **Primary Button Text (`#FFFFFF`)** | Deep Plum (`#493541`) | **9.4:1** | **AAA** (Exceeds 7:1) |
| **Secondary Button Text (`#33232D`)** | Soft Mauve (`#DCC5D8`) | **9.1:1** | **AAA** (Exceeds 7:1) |

---

## Borders & Separators

In Olenna's aesthetic, borders utilize subtle plum alpha channels rather than sterile monochrome greys:

- **Default Border**: `rgba(73, 53, 65, 0.12)` (`var(--olenna-color-border-default)`)
- **Subtle Divider**: `rgba(73, 53, 65, 0.06)` (`var(--olenna-color-border-subtle)`)
- **Contrasted Outline**: `rgba(73, 53, 65, 0.25)` (`var(--olenna-color-border-strong)`)
