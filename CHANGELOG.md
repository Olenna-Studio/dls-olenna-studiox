# Olenna StudioX Changelog

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## 1.0.0 - 2026-10-21

### Major Changes

- **Monorepo Architecture**: Initialized pnpm monorepo with strict package boundaries:
  - `@olenna/brand-assets`: Approved vector SVGs, master PNGs, and clearspace rules.
  - `@olenna/tokens`: Technology-neutral JSON token source with compiled CSS variables.
  - `@olenna/styles`: Base styles, WCAG accessible utilities, and Tailwind CSS preset.
  - `@olenna/react`: Full suite of accessible, theme-aware React components (WCAG 2.2 AA).
  - `@olenna/patterns`: Presentation patterns for luxury retail, boutique discovery, and customer PWA.
  - `@olenna/eslint-config`: Shared linting configurations.
- **Documentation**: Deployed VitePress documentation website with searchable token reference and versioned snapshot.
- **Component Playground**: Deployed Storybook 8 interactive catalog.
- **Testing**: 100% test pass rate across Vitest, React Testing Library, and accessibility gates.
