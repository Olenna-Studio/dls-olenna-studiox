# @olenna/styles

Comprehensive CSS stylesheets, base styles, accessible utilities, and Tailwind CSS integration preset for Olenna StudioX.

## Overview

`@olenna/styles` bundles:
- Full `@olenna/tokens` CSS custom properties.
- Accessible, non-destructive base styles (font smoothing, box sizing, reduced motion).
- Screen-reader (`olenna-sr-only`), focus ring, and surface utility classes.
- Plug-and-play Tailwind CSS preset.

## Installation

```bash
pnpm add @olenna/styles @olenna/tokens
# or
npm install @olenna/styles @olenna/tokens
```

## Setup in Web Applications

In your application's entry CSS or top-level layout:

```typescript
import "@olenna/styles/css";
```

## Tailwind CSS Integration

Add the preset to your `tailwind.config.js`:

```javascript
import { olennaTailwindPreset } from "@olenna/styles/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [olennaTailwindPreset],
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/@olenna/react/**/*.{js,mjs}"
  ]
};
```

This gives you utility classes such as:
- `text-olenna-primary` / `text-olenna-secondary` / `text-olenna-muted`
- `bg-olenna-surface-card` / `bg-olenna-surface-subtle`
- `border-olenna-border-default`
- `font-serif` (Playfair Display) / `font-sans` (Plus Jakarta Sans)
- `shadow-olennaMd` / `rounded-olennaMd`
