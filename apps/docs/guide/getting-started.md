# Getting Started

Welcome to the **Olenna StudioX Design Language System (DLS)**. This guide outlines how to install, configure, and integrate Olenna's design tokens and component libraries into a modern frontend application.

## Prerequisites

- **Node.js**: `v20.0.0` or higher (verified on Node.js `v24.x`).
- **Package Manager**: `pnpm`, `npm`, or `yarn`.
- **React**: Version `^18.0.0` or `^19.0.0` (for `@olenna/react` and `@olenna/patterns`).

---

## 1. Installation

Install the required packages based on your adoption level.

### Complete React Application

For standard web applications consuming React components and retail patterns:

```bash
pnpm add @olenna/react @olenna/tokens @olenna/styles
# Optional retail patterns:
pnpm add @olenna/patterns
```

### Token-Only Application (Non-React / Lightweight)

If you are building an application with plain HTML, Vue, Svelte, or vanilla CSS, install only tokens and styles:

```bash
pnpm add @olenna/tokens @olenna/styles
```

---

## 2. Global Stylesheet Setup

Import the compiled design tokens stylesheet at your application's root entry point (e.g. `main.tsx`, `index.tsx`, or `app/layout.tsx`):

```tsx
// Entry file: main.tsx or layout.tsx
import "@olenna/styles/css";
```

This single import provides:
- All design token CSS variables (`--olenna-*`).
- Non-destructive accessible resets and font-smoothing rules.
- Accessible utility classes (`.olenna-sr-only`, `.olenna-editorial-heading`).

---

## 3. First Component Usage

Wrap your application tree in `ThemeProvider` and start using Olenna components:

```tsx
import React from 'react';
import '@olenna/styles/css';
import {
  ThemeProvider,
  Container,
  Heading,
  Text,
  Button,
  Card,
  CardContent
} from '@olenna/react';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Container size="lg" style={{ paddingTop: '3rem' }}>
        <Card variant="elevated" padding="lg">
          <Heading level={1} headingStyle="editorial">
            Thoughtfully Curated Luxury
          </Heading>
          <Text variant="body" size="lg" style={{ margin: '1rem 0' }}>
            Experience Olenna StudioX — elevating every touchpoint across our boutiques and digital ateliers.
          </Text>
          <CardContent>
            <Button variant="primary" size="md">
              Discover Collection →
            </Button>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
```

---

## 4. Theme Switching

Toggle between Light and Dark mode using the `useTheme` hook:

```tsx
import { useTheme, Button } from '@olenna/react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="secondary" size="sm" onClick={toggleTheme}>
      Current Mode: {theme.toUpperCase()}
    </Button>
  );
}
```

Or switch declaratively in HTML:

```html
<!-- Activate dark mode anywhere in the DOM -->
<html data-theme="dark">
  ...
</html>
```

---

## 5. Running the Monorepo Locally

If you are developing inside the `olenna-studiox` repository, launch any target directly:

```bash
# Documentation website (VitePress) -> http://localhost:5173
pnpm dev:docs

# Interactive component playground (Storybook) -> http://localhost:6006
pnpm storybook

# Live Vite + React consumer testbed -> http://localhost:5174
pnpm dev:example-vite

# Live Next.js 15 App Router consumer testbed -> http://localhost:3000
pnpm dev:example-next
```
