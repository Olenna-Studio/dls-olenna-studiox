# Spacing, Radius, Shadows & Elevation

Tokens defining layout spacing, component geometry, shadows, elevation, and motion.

---

## Spacing Scale

Components must not use arbitrary pixel values. All margins, paddings, and flex/grid gaps must reference the documented spacing scale:

<TokenScalePreview type="spacing" />

| Token | CSS Variable | Rem / Px Value |
| :--- | :--- | :--- |
| `spacing-0` | `--olenna-spacing-0` | `0px` |
| `spacing-1` | `--olenna-spacing-1` | `0.25rem` (4px) |
| `spacing-2` | `--olenna-spacing-2` | `0.5rem` (8px) |
| `spacing-3` | `--olenna-spacing-3` | `0.75rem` (12px) |
| `spacing-4` | `--olenna-spacing-4` | `1.0rem` (16px) |
| `spacing-6` | `--olenna-spacing-6` | `1.5rem` (24px) |
| `spacing-8` | `--olenna-spacing-8` | `2.0rem` (32px) |
| `spacing-12` | `--olenna-spacing-12` | `3.0rem` (48px) |
| `spacing-16` | `--olenna-spacing-16` | `4.0rem` (64px) |
| `spacing-24` | `--olenna-spacing-24` | `6.0rem` (96px) |

---

## Border Radii

Standardized rounded corners for maintaining consistent geometry from small checkboxes to modal overlays:

<TokenScalePreview type="radius" />

| Token | CSS Variable | Value | Use Case |
| :--- | :--- | :--- | :--- |
| `border-radius-xs` | `--olenna-border-radius-xs` | `0.125rem` (2px) | Checkboxes |
| `border-radius-sm` | `--olenna-border-radius-sm` | `0.25rem` (4px) | Buttons, Text Inputs |
| `border-radius-md` | `--olenna-border-radius-md` | `0.375rem` (6px) | Cards, Menus, Selects |
| `border-radius-lg` | `--olenna-border-radius-lg` | `0.5rem` (8px) | Dialogs & Drawers |
| `border-radius-full` | `--olenna-border-radius-full` | `9999px` | Badges, Status Pills, Avatars |

---

## Z-Index Elevation Layers

| Token | CSS Variable | Value | Layer Role |
| :--- | :--- | :--- | :--- |
| `zIndex-base` | `--olenna-zIndex-base` | `0` | Standard page flow |
| `zIndex-sticky` | `--olenna-zIndex-sticky` | `100` | Header navigation |
| `zIndex-dropdown` | `--olenna-zIndex-dropdown` | `1000` | Dropdown menus |
| `zIndex-popover` | `--olenna-zIndex-popover` | `1100` | Interactive popovers |
| `zIndex-drawer` | `--olenna-zIndex-drawer` | `1200` | Slide-out drawers |
| `zIndex-modal` | `--olenna-zIndex-modal` | `1300` | Modal dialogs |
| `zIndex-toast` | `--olenna-zIndex-toast` | `1400` | Notifications |
| `zIndex-tooltip` | `--olenna-zIndex-tooltip` | `1500` | Tooltip overlays |
