# Color Tokens

Semantic and core brand color tokens for Olenna StudioX. Design tokens abstract raw values into functional design roles, enabling seamless multi-theme switching (Light and Dark) without hardcoded values.

---

## Brand Palette

The approved core color palette embodying the Olenna StudioX identity: editorial, premium, feminine, and high contrast.

<ColorPalettePreview palette="brand" />

---

## Typography & Text Tokens

Text tokens define contrast-certified hierarchy across page titles, subtitles, body copy, and inverse overlays.

<ColorPalettePreview palette="text" />

| Token | CSS Variable | Light Mode | Dark Mode | Role |
| :--- | :--- | :--- | :--- | :--- |
| `color-text-primary` | `--olenna-color-text-primary` | `#261C22` | `#FFFAF7` | Headings & primary body copy |
| `color-text-secondary` | `--olenna-color-text-secondary` | `#5C4C56` | `#DFC7B0` | Auxiliary copy & descriptions |
| `color-text-muted` | `--olenna-color-text-muted` | `#8E7A87` | `#A893A1` | Inactive captions & timestamps |
| `color-text-inverse` | `--olenna-color-text-inverse` | `#FFFAF7` | `#211B17` | Text over high-contrast fills |

---

## Surface & Canvas Tokens

Surface tokens govern layered backgrounds, containers, cards, and modal dialogs.

<ColorPalettePreview palette="surface" />

| Token | CSS Variable | Light Mode | Dark Mode | Role |
| :--- | :--- | :--- | :--- | :--- |
| `color-surface-page` | `--olenna-color-surface-page` | `#FFFAF7` | `#1C1419` | Global canvas backdrop |
| `color-surface-card` | `--olenna-color-surface-card` | `#FFFFFF` | `#271C23` | Default card & container fill |
| `color-surface-elevated`| `--olenna-color-surface-elevated` | `#FFFFFF` | `#34262F` | Modals, drawers, and menus |
| `color-surface-subtle` | `--olenna-color-surface-subtle` | `#FAF5F2` | `#21171E` | Table row alternate, empty states |

---

## Action & Interactive Tokens

Action tokens power primary calls to action, secondary controls, hover highlights, and accessible focus outlines.

<ColorPalettePreview palette="action" />

| Token | CSS Variable | Light Mode | Dark Mode | Role |
| :--- | :--- | :--- | :--- | :--- |
| `color-action-primary-default` | `--olenna-color-action-primary-default` | `#493541` | `#C4A181` | Primary CTA button background |
| `color-action-primary-hover` | `--olenna-color-action-primary-hover` | `#593D4E` | `#DFC7B0` | Primary CTA hover state |
| `color-action-primary-text` | `--olenna-color-action-primary-text` | `#FFFAF7` | `#211B17` | Text on primary CTA |
| `color-action-secondary-default` | `--olenna-color-action-secondary-default`| `#C4A181` | `#CFB0CA` | Secondary CTA accent |
| `color-focus-ring` | `--olenna-color-focus-ring` | `#493541` | `#C4A181` | Accessible focus ring indicator |
