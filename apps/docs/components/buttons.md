# Button & Actions

Buttons trigger actions or navigation events across the interface, featuring Olenna's signature pill border-radius (`9999px`) and high-contrast color hierarchy.

## Interactive Previews

Test button styles, focus states, and sizes live. Use the theme selector on the preview container to toggle between Light and Dark mode:

<ComponentPreview title="Button Variants" description="Core visual hierarchy across all 8 variants">
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
    <button class="preview-btn preview-btn--primary">Shop Collection</button>
    <button class="preview-btn preview-btn--secondary">View Lookbook</button>
    <button class="preview-btn preview-btn--outline">Store Locator</button>
    <button class="preview-btn preview-btn--ghost">Filter Options</button>
    <button class="preview-btn preview-btn--destructive">Delete Item</button>
    <button class="preview-btn preview-btn--circle" aria-label="Next slide">→</button>
    <button class="preview-btn preview-btn--circle" aria-label="Add to wishlist">♥</button>
  </div>
</ComponentPreview>

<ComponentPreview title="Button Sizes" description="Standardized luxury heights & internal padding: Small (36px / 0.5rem 1.125rem), Medium (44px / 0.6875rem 1.5rem), Large (52px / 0.875rem 2rem)">
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
    <button class="preview-btn preview-btn--primary preview-btn--sm">Small (36px)</button>
    <button class="preview-btn preview-btn--primary preview-btn--md">Medium (44px)</button>
    <button class="preview-btn preview-btn--primary preview-btn--lg">Large (52px)</button>
  </div>
</ComponentPreview>

---

## Import

```tsx
import { Button, IconButton } from "@olenna/react";
```

## Button Variants

`Button` supports 8 distinct variants matching production design:
- `primary`: Deep Plum (`#493541`) with ivory text, transitioning to Mauve / Midnight Plum on hover.
- `secondary`: Soft Mauve / Champagne accent fill with high-contrast text.
- `outline`: Fine plum or champagne border with subtle hover fill.
- `ghost` / `tertiary`: Transparent button with plum / ivory text for minimal action triggers.
- `circle`: Circular button (`w-10 h-10 rounded-full`) with subtle border for icon-only action triggers.
- `destructive`: Red danger fill for irreversible actions.
- `link`: Inline typographic button with underline.

```tsx
<Button variant="primary">Shop Collection</Button>
<Button variant="secondary">View Lookbook</Button>
<Button variant="outline">Store Locator</Button>
<Button variant="ghost">Filter Options</Button>
<Button variant="destructive">Delete Item</Button>
<Button variant="circle" aria-label="Next">
  <span aria-hidden="true">→</span>
</Button>
```

---

## Sizes & States

All standard buttons default to the signature Olenna **pill radius** (`9999px`):

```tsx
<Button size="sm">Small (36px / 0.5rem 1.125rem)</Button>
<Button size="md">Medium (44px / 0.6875rem 1.5rem)</Button>
<Button size="lg">Large (52px / 0.875rem 2rem)</Button>

<!-- Loading State with Spinner and duplicate prevention -->
<Button isLoading>Processing...</Button>

<!-- Disabled State -->
<Button disabled>Unavailable</Button>

<!-- Full Width Container -->
<Button fullWidth>Checkout (€340.00)</Button>
```

---

## Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'tertiary' \| 'destructive' \| 'link' \| 'circle'` | `'primary'` | Visual style role |
| `size` | `'sm' \| 'md' \| 'lg' \| 'icon'` | `'md'` | Button height and padding |
| `isLoading` | `boolean` | `false` | Displays spinner, sets `aria-busy="true"`, prevents click |
| `disabled` | `boolean` | `false` | Disables button interactions |
| `fullWidth` | `boolean` | `false` | Stretches button to 100% container width |
| `leftIcon` | `React.ReactNode` | — | Prepends icon element |
| `rightIcon` | `React.ReactNode` | — | Appends icon element |
