import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'react-dom', '@olenna/react', '@olenna/tokens'],
  banner: {
    js: '"use client";'
  },
  clean: true
});
