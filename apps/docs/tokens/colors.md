# Semantic Color Tokens

Semantic tokens abstract raw color values into functional design roles. This enables clean multi-theme support (Light and Dark) without hardcoding hex codes into application logic.

## Text Tokens

| Token | CSS Variable | Light Mode | Dark Mode | Role |
| :--- | :--- | :--- | :--- | :--- |
| `color-text-primary` | `--olenna-color-text-primary` | `#493541` (Plum) | `#FFFAF7` (Ivory) | Headings & primary body copy |
| `color-text-secondary` | `--olenna-color-text-secondary` | `#5C4C56` | `#DFC7B0` | Auxiliary copy & descriptions |
| `color-text-muted` | `--olenna-color-text-muted` | `#8E7A87` | `#A893A1` | Inactive captions & timestamps |
| `color-text-inverse` | `--olenna-color-text-inverse` | `#FFFAF7` | `#211B17` | Text over high-contrast fills |

---

## Surface Tokens

| Token | CSS Variable | Light Mode | Dark Mode | Role |
| :--- | :--- | :--- | :--- | :--- |
| `color-surface-page` | `--olenna-color-surface-page` | `#FFFAF7` | `#1C1419` | Global canvas |
| `color-surface-card` | `--olenna-color-surface-card` | `#FFFFFF` | `#271C23` | Default card & container fill |
| `color-surface-elevated`| `--olenna-color-surface-elevated` | `#FFFFFF` | `#34262F` | Modals, drawers, and menus |
| `color-surface-subtle` | `--olenna-color-surface-subtle` | `#FAF5F2` | `#21171E` | Table row alternate, empty states |

---

## Action Tokens

| Token | CSS Variable | Light Mode | Dark Mode |
| :--- | :--- | :--- | :--- |
| `color-action-primary-default` | `--olenna-color-action-primary-default` | `#493541` | `#C4A181` |
| `color-action-primary-hover` | `--olenna-color-action-primary-hover` | `#593D4E` | `#DFC7B0` |
| `color-action-primary-text` | `--olenna-color-action-primary-text` | `#FFFAF7` | `#211B17` |
| `color-action-secondary-default` | `--olenna-color-action-secondary-default`| `#C4A181` | `#CFB0CA` |
| `color-focus-ring` | `--olenna-color-focus-ring` | `#493541` | `#C4A181` |
