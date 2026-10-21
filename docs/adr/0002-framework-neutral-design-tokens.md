# ADR 0002: Framework-Neutral Design Tokens

## Status
Accepted

## Context
Design tokens form the visual contract of Olenna StudioX. If tokens depend on React or CSS-in-JS runtimes, non-React consumers (e.g. static microsites, mobile PWAs, native Swift/Kotlin apps) cannot adopt them without bringing heavy runtime overhead.

## Decision
Tokens are authored in platform-neutral JSON source files following DTCG conventions (`packages/tokens/src/source/*.json`). A lightweight custom compiler generates standard CSS custom properties (`:root` and `[data-theme="dark"]`), JavaScript/TypeScript constants, and automated Markdown documentation.

## Consequences
- Zero runtime dependencies in the token package.
- Full compatibility with CSS variables, Tailwind, Sass, and native mobile platforms.
- Tokens cannot silently drift from documentation because Markdown docs are generated directly from the JSON sources.
