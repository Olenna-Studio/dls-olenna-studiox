# Button & Actions

Buttons trigger actions or navigation events across the interface.

## Import

```tsx
import { Button, IconButton } from "@olenna/react";
```

## Button Variants

`Button` supports 5 distinct semantic variants:
- `primary`: Signature Deep Plum fill for principal calls-to-action.
- `secondary`: Champagne metallic outline for secondary actions.
- `tertiary`: Ghost treatment for toolbar actions.
- `destructive`: Red danger fill for irreversible actions.
- `link`: Inline typographic button.

```tsx
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="tertiary">Ghost Action</Button>
<Button variant="destructive">Delete Item</Button>
<Button variant="link">Read Terms</Button>
```

---

## Sizes & States

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

## Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'destructive' \| 'link'` | `'primary'` | Visual style role |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button height and padding |
| `isLoading` | `boolean` | `false` | Displays spinner, sets `aria-busy="true"`, prevents click |
| `disabled` | `boolean` | `false` | Disables button interactions |
| `fullWidth` | `boolean` | `false` | Stretches button to 100% container width |
| `leftIcon` | `React.ReactNode` | — | Prepends icon element |
| `rightIcon` | `React.ReactNode` | — | Appends icon element |

---

## IconButton

`IconButton` is dedicated to icon-only triggers and requires an `aria-label` for screen reader accessibility:

```tsx
<IconButton aria-label="Add to wishlist" variant="tertiary" rounded>
  <HeartIcon />
</IconButton>
```
