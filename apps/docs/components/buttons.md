# Button & Actions

Buttons trigger actions or navigation events across the interface, featuring Olenna's signature pill border-radius (`9999px`) and high-contrast color hierarchy.

## Import

```tsx
import { Button, IconButton } from "@olenna/react";
```

## Button Variants

`Button` supports 8 distinct variants matching production design:
- `primary`: Deep Plum (`#493541`) with white text, transitioning to Midnight Plum (`#33232D`) on hover.
- `secondary`: Soft Mauve (`#DCC5D8`) fill with Midnight Plum (`#33232D`) text, transitioning to Mauve 400 (`#C5A5BF`).
- `outline`: Fine plum-tinted border (`border-brand-plum-900/30`) with subtle hover fill.
- `ghost` / `tertiary`: Transparent button with plum text for minimal action triggers.
- `circle`: Circular button (`w-10 h-10 rounded-full`) with subtle border for icon-only action triggers.
- `destructive`: Red danger fill for irreversible actions.
- `link`: Inline typographic button with underline.

```tsx
<Button variant="primary">Shop Collection</Button>
<Button variant="secondary">View Lookbook</Button>
<Button variant="outline">Store Locator</Button>
<Button variant="ghost">Filter Options</Button>
<Button variant="destructive">Delete Item</Button>
<Button variant="link">Read Terms</Button>
```

---

## Sizes & Shapes

All standard buttons default to the signature Olenna **pill radius** (`9999px`):

```tsx
<Button size="sm">Small (32px)</Button>
<Button size="md">Medium (40px)</Button>
<Button size="lg">Large (48px)</Button>

<!-- Loading State with Spinner and duplicate prevention -->
<Button isLoading>Processing...</Button>

<!-- Disabled State -->
<Button disabled>Unavailable</Button>

<!-- Full Width Container -->
<Button fullWidth>Checkout (€340.00)</Button>
```

---

## Circular Action Buttons (`circle` / `IconButton`)

For carousel navigation, wishlist toggles, and modal dismissals:

```tsx
<Button variant="circle" aria-label="Next slide">
  <span aria-hidden="true">→</span>
</Button>

<IconButton aria-label="Close dialog" rounded>
  <span aria-hidden="true">✕</span>
</IconButton>
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
