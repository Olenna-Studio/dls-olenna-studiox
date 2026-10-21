# Components Overview

The `@olenna/react` library provides foundational, accessible, and theme-aware UI primitives.

## Package Installation

```bash
pnpm add @olenna/react @olenna/tokens @olenna/styles
```

## Public Import Rules

Always import components directly from `@olenna/react`. Never import from internal `src` or deep module paths:

```tsx
// ✅ Correct
import { Button, Card, TextInput, Dialog } from "@olenna/react";

// ❌ Incorrect
import { Button } from "@olenna/react/src/buttons/Button";
```

## Component Index

| Category | Components |
| :--- | :--- |
| **Foundations** | `ThemeProvider`, `Text`, `Heading`, `VisuallyHidden`, `Stack`, `Cluster`, `Container`, `Grid`, `Divider`, `Icon`, `Link` |
| **Buttons & Actions** | `Button`, `IconButton` |
| **Form Controls** | `FormField`, `Label`, `HelpText`, `ValidationMessage`, `TextInput`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Radio`, `Switch`, `SearchInput`, `PasswordInput` |
| **Navigation** | `Tabs`, `TabList`, `Tab`, `TabPanel`, `Breadcrumbs`, `Pagination`, `Menu`, `DropdownMenu`, `NavLink`, `Stepper`, `SegmentedControl` |
| **Feedback** | `Alert`, `Badge`, `StatusIndicator`, `Spinner`, `Skeleton`, `Progress`, `EmptyState`, `Toast`, `ToastProvider`, `useToast` |
| **Overlays & Containers**| `Card`, `Panel`, `Tooltip`, `Popover`, `Dialog`, `Drawer`, `Accordion`, `Disclosure` |
| **Data Display** | `Table`, `Avatar`, `AvatarGroup`, `Image`, `DefinitionList` |
