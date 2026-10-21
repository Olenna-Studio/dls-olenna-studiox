# ADR 0003: Documentation Website (VitePress) and Component Playground (Storybook)

## Status
Accepted

## Context
Design systems require both narrative documentation (brand guidelines, getting started, migration guides) and interactive isolated component testing (state manipulation, accessibility audits, control knobs). Hugo was evaluated as a static site generator, but lacks seamless deep integration with React component preview tooling.

## Decision
- **VitePress** was selected for the primary developer documentation website (`apps/docs`). It provides blazing fast builds, clean Markdown authoring, versioned routes, and searchable documentation.
- **Storybook 8** was selected for the interactive component catalogue (`packages/storybook`).
- The VitePress site links directly to Storybook, avoiding duplicated component API maintenance.

## Consequences
- Clean separation between narrative documentation and interactive component sandboxing.
- VitePress and Storybook build independently without circular dependencies.
