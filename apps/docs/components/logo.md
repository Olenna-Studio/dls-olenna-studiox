# Logo Component

The `<Logo />` component renders authentic Olenna identity assets with pre-calculated responsive dimensions, intrinsic aspect ratios, optional editorial tagline, and accessible link behavior.

## Visual Previews

<ComponentPreview title="Approved Brand Lockups" description="Visual preview across horizontal, stacked, wordmark, and emblem marks in Light and Dark themes">
  <div style="display: flex; flex-direction: column; gap: 2rem; width: 100%; align-items: center;">
    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--olenna-color-text-muted);">Horizontal Navigation Lockup</span>
      <img src="/svg/olenna-horizontal-light.svg" alt="Olenna Horizontal Logo" style="max-height: 48px; object-fit: contain;" />
    </div>

    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
      <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--olenna-color-text-muted);">Stacked Atelier Hero Lockup</span>
      <img src="/svg/olenna-logo-full-light.svg" alt="Olenna Stacked Logo" style="max-height: 120px; object-fit: contain;" />
    </div>

    <div style="display: flex; gap: 3rem; align-items: center; flex-wrap: wrap; justify-content: center;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--olenna-color-text-muted);">Wordmark</span>
        <img src="/svg/olenna-wordmark-light.svg" alt="Olenna Wordmark" style="max-height: 36px; object-fit: contain;" />
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--olenna-color-text-muted);">Botanical Emblem</span>
        <img src="/svg/olenna-emblem-light.svg" alt="Olenna Emblem" style="max-height: 48px; object-fit: contain;" />
      </div>
    </div>
  </div>
</ComponentPreview>

---

## Import

```tsx
import { Logo } from '@olenna/react';
```

## Variants

### Horizontal (Default)
Primary layout for desktop and mobile navigation headers.

```tsx
<Logo variant="horizontal" size="md" href="/" />
```

### Stacked
Stacked emblem and serif wordmark for splash screens, welcome cards, and editorial headers.

```tsx
<Logo variant="stacked" size="md" withTagline />
```

### Wordmark
Clean typographic wordmark for compact footers and checkout receipts.

```tsx
<Logo variant="wordmark" size="sm" />
```

### Botanical Emblem
Monogram icon for circular avatars, favicons, and mobile tab bars.

```tsx
<Logo variant="emblem" size="md" />
```

---

## Sizes

| Size | Horizontal | Stacked | Wordmark | Emblem |
| :--- | :--- | :--- | :--- | :--- |
| `sm` | `140 × 31 px` | `110 × 89 px` | `120 × 36 px` | `32 × 29 px` |
| `md` | `180 × 40 px` | `150 × 121 px` | `155 × 47 px` | `44 × 39 px` |
| `lg` | `220 × 48 px` | `190 × 153 px` | `190 × 57 px` | `56 × 50 px` |

---

## Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'horizontal' \| 'stacked' \| 'wordmark' \| 'emblem'` | `'horizontal'` | Visual lockup variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Scaled size category |
| `withTagline` | `boolean` | `false` | Displays the brand tagline "Everyday elegance, thoughtfully curated." |
| `priority` | `boolean` | `false` | Disables lazy loading for above-the-fold hero rendering |
| `href` | `string` | `undefined` | Wraps logo in an accessible anchor tag pointing to the destination URL |
| `basePath` | `string` | `''` | Optional prefix for asset CDN or subpath routing |
| `src` | `string` | `undefined` | Direct image source override if self-hosting assets |
| `alt` | `string` | `'Olenna Luxury Beauty, Fashion & Lifestyle'` | Accessible image description |
| `className` | `string` | `undefined` | Custom CSS class name |
| `style` | `React.CSSProperties` | `undefined` | Custom inline styling overrides |
