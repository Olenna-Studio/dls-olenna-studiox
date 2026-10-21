# @olenna/tokens

Platform-neutral design token source, generated CSS variables, and TypeScript definitions for Olenna StudioX.

## Overview

The `@olenna/tokens` package provides the design foundation for all Olenna applications. It is strictly **framework-independent** and can be consumed by:
- React / Next.js
- Vue / Svelte / Angular
- Plain HTML / CSS / Web Components
- Mobile & Cross-platform apps (via JSON token source)

## Installation

```bash
pnpm add @olenna/tokens
# or
npm install @olenna/tokens
```

## Setup CSS Variables

Import the generated CSS stylesheet into your application root:

```typescript
// In your application root (e.g. main.tsx, _app.tsx, layout.tsx, or index.css)
import "@olenna/tokens/css";
```

This injects all primitive and semantic design tokens as standard CSS variables under the `--olenna-*` namespace:

```css
.my-card {
  background-color: var(--olenna-color-surface-card);
  color: var(--olenna-color-text-primary);
  border: 1px solid var(--olenna-color-border-default);
  border-radius: var(--olenna-border-radius-md);
  padding: var(--olenna-spacing-6);
}
```

## Dark Mode & Theme Overrides

Dark theme tokens are activated automatically when adding `data-theme="dark"` or the `.olenna-theme-dark` class:

```html
<html data-theme="dark">
  ...
</html>
```

Consumers can override any semantic token without editing package files:

```css
:root {
  --olenna-color-action-primary: #593D4E;
  --olenna-border-radius-md: 0.5rem;
}
```

## JavaScript / TypeScript Programmatic Access

```typescript
import { tokens, cssVars } from "@olenna/tokens";

console.log(tokens["color-brand-plum-900"]); // "#493541"
console.log(cssVars["color-text-primary"]); // "--olenna-color-text-primary"
```

## Raw JSON Token Source

For native mobile, Figma tokens, or third-party pipelines, the raw combined token dictionary is available:

```typescript
import tokensJson from "@olenna/tokens/tokens.json";
```
