# Integration Guides

Olenna StudioX is tested and compatible with modern web frameworks. Below are step-by-step instructions for integrating into **Vite React**, **Next.js (App Router)**, **Tailwind CSS**, and **Token-Only** projects.

---

## 1. Vite React Integration

In a standard Vite application:

```bash
pnpm add @olenna/react @olenna/tokens @olenna/styles
```

In `src/main.tsx`:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@olenna/styles/css';
import { ThemeProvider } from '@olenna/react';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

---

## 2. Next.js 14 / 15 App Router Integration

Next.js Server Components require client-side interactive widgets to use the `"use client"` directive. All `@olenna/react` interactive components are marked appropriately for SSR compatibility.

### Setup Root Layout (`app/layout.tsx`)

```tsx
import type { Metadata } from 'next';
import '@olenna/styles/css';
import { ThemeProvider } from '@olenna/react';

export const metadata: Metadata = {
  title: 'Olenna StudioX',
  description: 'Luxury Beauty, Fashion & Lifestyle'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## 3. Tailwind CSS Integration

To integrate Olenna tokens into your Tailwind workflow, use our preset:

```bash
pnpm add -D @olenna/styles
```

In your `tailwind.config.js` or `tailwind.config.ts`:

```javascript
import { olennaTailwindPreset } from '@olenna/styles/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [olennaTailwindPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@olenna/react/**/*.{js,mjs}',
    './node_modules/@olenna/patterns/**/*.{js,mjs}'
  ],
  theme: {
    extend: {}
  }
};
```

You can now use classes such as:
- `bg-olenna-surface-card`
- `text-olenna-plum-900`
- `border-olenna-champagne-400`
- `font-serif` (Playfair Display)
- `rounded-olennaMd`

---

## 4. Token-Only Consumer (Vue / Svelte / Plain HTML)

Applications that do not use React can consume `@olenna/tokens` directly:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="node_modules/@olenna/tokens/dist/index.css">
  <style>
    body {
      background-color: var(--olenna-color-surface-page);
      color: var(--olenna-color-text-primary);
      font-family: var(--olenna-typography-fontFamily-sans);
    }
  </style>
</head>
<body>
  <h1>Everyday Elegance</h1>
</body>
</html>
```
