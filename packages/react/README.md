# @olenna/react

Production-ready, accessible, theme-aware React component library for Olenna StudioX.

## Overview

`@olenna/react` provides the core UI building blocks for Olenna's digital ecosystem:
- **Foundations**: `ThemeProvider`, `Text`, `Heading`, `VisuallyHidden`, `Stack`, `Cluster`, `Container`, `Grid`, `Divider`, `Icon`, `Link`
- **Buttons & Actions**: `Button`, `IconButton`
- **Form Controls**: `FormField`, `Label`, `HelpText`, `ValidationMessage`, `TextInput`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Radio`, `Switch`, `SearchInput`, `PasswordInput`
- **Navigation**: `Tabs`, `Breadcrumbs`, `Pagination`, `Menu`, `DropdownMenu`, `NavLink`, `Stepper`, `SegmentedControl`
- **Feedback**: `Alert`, `Badge`, `StatusIndicator`, `Spinner`, `Skeleton`, `Progress`, `EmptyState`, `Toast` (with `ToastProvider`, `useToast`)
- **Overlays & Containers**: `Card`, `Panel`, `Tooltip`, `Popover`, `Dialog`, `Drawer`, `Accordion`, `Disclosure`
- **Data Display**: `Table`, `Avatar`, `AvatarGroup`, `Image`, `DefinitionList`

## Installation

```bash
pnpm add @olenna/react @olenna/tokens @olenna/styles
# or
npm install @olenna/react @olenna/tokens @olenna/styles
```

## Quick Start

```tsx
import React from 'react';
import '@olenna/styles/css';
import { ThemeProvider, Button, Card, CardTitle, CardContent, Heading } from '@olenna/react';

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Card variant="elevated" padding="lg">
        <Heading level={2} headingStyle="editorial">
          Everyday Elegance
        </Heading>
        <CardContent>
          <p>Thoughtfully curated luxury for modern living.</p>
          <Button variant="primary" size="md">
            Explore Collection
          </Button>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
```

## Accessibility (WCAG 2.2 AA)

- All interactive widgets support standard keyboard navigation (Tab, Arrow keys, Escape, Enter, Space).
- Dialogs implement modal focus trapping and restore focus on dismissal.
- Form controls link labels, help messages, and validation errors via `aria-describedby` and `aria-invalid`.
- High contrast focus rings are visible by default.
