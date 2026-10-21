# Olenna StudioX Design Language System (DLS)

> **Everyday elegance, thoughtfully curated.**  
> The single source of truth for Olenna's visual identity, design tokens, accessible React components, and luxury retail patterns.

[![CI Status](https://github.com/olenna/olenna-studiox/actions/workflows/ci.yml/badge.svg)](https://github.com/olenna/olenna-studiox/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version: v1.0.0](https://img.shields.io/badge/version-1.0.0-493541.svg)](https://github.com/olenna/olenna-studiox)

---

## 🏛 Package Ecosystem

| Package | Version | Description | Target Consumers |
| :--- | :--- | :--- | :--- |
| [`@olenna/brand-assets`](./packages/brand-assets) | `1.0.0` | Approved SVG vector artwork, master PNGs, clearspace guidelines | All Applications |
| [`@olenna/tokens`](./packages/tokens) | `1.0.0` | Framework-neutral JSON design tokens & CSS custom properties | All Applications |
| [`@olenna/styles`](./packages/styles) | `1.0.0` | CSS stylesheets, non-destructive resets, and Tailwind CSS preset | Web Consumers |
| [`@olenna/react`](./packages/react) | `1.0.0` | Accessible (WCAG 2.2 AA), theme-aware React component primitives | React / Next.js Apps |
| [`@olenna/patterns`](./packages/patterns) | `1.0.0` | Retail & commerce patterns (ProductCard, StoreDirectory, PWA) | Storefront & PWA |
| [`@olenna/eslint-config`](./packages/eslint-config) | `1.0.0` | Shared linting rules for TypeScript and React | Engineering Teams |

---

## 🚀 Quick Start

### Installation

In your consumer application:

```bash
pnpm add @olenna/react @olenna/tokens @olenna/styles
# Optional retail patterns:
pnpm add @olenna/patterns
```

### Global Stylesheet Setup

Import Olenna's CSS variables and base styles at the root of your application (e.g. `main.tsx` or `app/layout.tsx`):

```tsx
import "@olenna/styles/css";
```

### Basic Component Usage

```tsx
import React from 'react';
import '@olenna/styles/css';
import { ThemeProvider, Container, Heading, Button, Card, CardContent } from '@olenna/react';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Container size="lg" style={{ paddingTop: '3rem' }}>
        <Card variant="elevated" padding="lg">
          <Heading level={1} headingStyle="editorial">
            Thoughtfully Curated Luxury
          </Heading>
          <CardContent>
            <p>Everyday elegance for modern life.</p>
            <Button variant="primary" size="md">
              Explore Atelier →
            </Button>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
```

---

## 🛠 Developer Running Instructions

The repository includes multiple development targets. Use the commands below from the root directory:

| Target | Command | Local URL | Purpose |
| :--- | :--- | :--- | :--- |
| **Documentation Website** | `pnpm dev:docs` | [http://localhost:5173](http://localhost:5173) | VitePress docs, guidelines & token tables |
| **Component Playground** | `pnpm storybook` | [http://localhost:6006](http://localhost:6006) | Storybook 8 interactive component catalog |
| **Vite + React Consumer** | `pnpm dev:example-vite` | [http://localhost:5174](http://localhost:5174) | Live client-side consumer testbed |
| **Next.js 15 Consumer** | `pnpm dev:example-next` | [http://localhost:3000](http://localhost:3000) | Live App Router & SSR consumer testbed |

### Common Development Tasks

```bash
# 1. Install workspace dependencies
pnpm install

# 2. Build all packages (@olenna/*)
pnpm build

# 3. Run unit and accessibility tests
pnpm test

# 4. Build documentation website for production
pnpm build:docs

# 5. Build static Storybook catalog for production
pnpm build:storybook

# 6. Build both consumer examples
pnpm build:examples

# 7. Format codebase
pnpm format
```

---

## 📚 Documentation & Resources

- **Main Documentation Website**: Run `pnpm dev:docs` or visit [apps/docs](./apps/docs).
- **Interactive Component Playground**: Run `pnpm storybook` to launch Storybook on `http://localhost:6006`.
- **Architecture Decision Records (ADRs)**: See [docs/adr/](./docs/adr/).
- **Release Runbook**: See [docs/release/RELEASE_RUNBOOK.md](./docs/release/RELEASE_RUNBOOK.md).
- **Compatibility Matrix**: See [docs/architecture/COMPATIBILITY_MATRIX.md](./docs/architecture/COMPATIBILITY_MATRIX.md).

---

## 📄 License

MIT © 2026 Olenna Luxury Brands. All rights reserved.
