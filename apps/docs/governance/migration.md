# Migration Guide (v0.9 → v1.0)

This guide assists engineering teams in upgrading from the pre-release `v0.9.x` architecture to the production `v1.0.0` release.

## Major Changes Overview

1. **Token Namespacing**: All CSS custom properties now use the formal `--olenna-*` prefix to prevent collisions with third-party CSS.
2. **Dedicated Packages**: Brand assets and retail patterns are separated into `@olenna/brand-assets` and `@olenna/patterns`.
3. **Accessibility**: Form controls now require explicit labels or use the automatic `FormField` wrapper.

---

## Token Mapping Reference

| Pre-Release Token (v0.9) | Production Token (v1.0) | Notes |
| :--- | :--- | :--- |
| `--color-plum` | `--olenna-color-brand-plum-900` | Renamed to standard numeric scale |
| `--color-ivory` | `--olenna-color-brand-ivory-50` | Renamed to standard numeric scale |
| `--color-gold` | `--olenna-color-brand-champagne-400` | Realigned with approved champagne palette |
| `--text-color` | `--olenna-color-text-primary` | Standardized semantic mapping |
| `--bg-color` | `--olenna-color-surface-page` | Standardized semantic mapping |

---

## Component Migration

### Button Props

- Old: `<Button kind="primary">`
- New: `<Button variant="primary">`

### Form Controls

- Old: `<Input label="Email" />`
- New:
  ```tsx
  <FormField>
    <Label>Email</Label>
    <TextInput />
  </FormField>
  ```
