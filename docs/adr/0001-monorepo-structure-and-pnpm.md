# ADR 0001: Monorepo Structure and pnpm Workspaces

## Status
Accepted

## Context
Olenna StudioX requires multiple interdependent packages serving diverse consumers: public website, customer PWA, boutique admin portals, and future mobile/non-React applications. We needed a workspace management solution that guarantees fast builds, strict isolation, and zero phantom dependencies.

## Decision
We chose **pnpm workspaces** combined with standard npm package scripts and tsup for component bundling.

## Consequences
- Fast disk usage via content-addressable storage.
- Strict isolation prevents accidental leaks between packages.
- Seamless local cross-package linking via `workspace:*`.
