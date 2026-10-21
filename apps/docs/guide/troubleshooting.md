# Troubleshooting

Common issues and solutions when integrating Olenna StudioX packages.

## 1. Missing CSS / Unstyled Components

**Symptom**: Components render with raw unstyled HTML elements and no theme colors.

**Solution**: Ensure you have imported `@olenna/styles/css` or `@olenna/tokens/css` at the very top of your application entry point before any component imports:

```tsx
// main.tsx or layout.tsx
import "@olenna/styles/css";
```

---

## 2. Next.js Hydration Mismatch with `ThemeProvider`

**Symptom**: Console warnings about server-rendered attributes differing from client attributes during hydration.

**Solution**: Set `suppressHydrationWarning` on the `<html>` element in Next.js:

```tsx
// app/layout.tsx
<html lang="en" suppressHydrationWarning>
  <body>
    <ThemeProvider defaultTheme="light">
      {children}
    </ThemeProvider>
  </body>
</html>
```

---

## 3. Duplicate React Instances in Monorepos

**Symptom**: React hooks error: `Invalid hook call. Hooks can only be called inside the body of a function component`.

**Solution**: Ensure React and React DOM are listed as peer dependencies in consumer applications. Check that your package manager does not install duplicate versions of React:

```bash
pnpm why react
```

Add a resolution alias in `vite.config.ts` if running in an npm workspace with linked symlinks:

```typescript
// vite.config.ts
import path from 'path';

export default {
  resolve: {
    dedupe: ['react', 'react-dom']
  }
};
```
