# Design Tokens Overview

Design tokens represent the atomic visual decisions of Olenna StudioX: colors, font families, font sizes, line heights, spacing increments, radii, elevations, motion, and z-index layers.

## Source & Generation Pipeline

```mermaid
flowchart LR
    Sources["Source JSON Tokens<br/>(primitives.json, semantic.json, components.json)"] --> Validator["validate.ts<br/>(Verifies schema, references, no cycles)"]
    Validator --> Compiler["build.ts<br/>(Compiler Engine)"]
    Compiler --> CSS["dist/index.css<br/>(:root & [data-theme='dark'])"]
    Compiler --> JS["dist/index.js & .cjs<br/>(Flat Token Maps)"]
    Compiler --> DTS["dist/index.d.ts<br/>(TypeScript Declarations)"]
    Compiler --> MD["dist/token-reference.md<br/>(Docs Reference Table)"]
```

## Token Taxonomy

Tokens follow a predictable, hierarchical naming convention:

```text
--olenna-[category]-[element]-[variant]-[state]
```

Examples:
- `--olenna-color-brand-plum-900`
- `--olenna-color-text-primary`
- `--olenna-color-surface-card`
- `--olenna-color-action-primary-default`
- `--olenna-color-action-primary-hover`
- `--olenna-spacing-4`
- `--olenna-border-radius-md`
- `--olenna-shadow-lg`
- `--olenna-zIndex-modal`
