# ADR 0004: Versioning Strategy and Changesets

## Status
Accepted

## Context
A monorepo with multiple packages can either adopt synchronized fixed versioning or independent versioning. Because `@olenna/tokens` and `@olenna/brand-assets` may remain stable while `@olenna/react` or `@olenna/patterns` evolve rapidly, forcing synchronized version bumps across all packages creates false breaking changes for token-only consumers.

## Decision
We adopted **Changesets** with linked package groups. Every pull request introducing user-facing changes must include a changeset file. Releases calculate SemVer bumps independently and generate package-specific changelogs.

## Consequences
- Consumers only upgrade the specific packages they use.
- Automated release notes generation directly in GitHub Actions.
- Explicit compatibility matrix maintained in documentation.
