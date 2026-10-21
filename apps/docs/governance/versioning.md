# Semantic Versioning & Compatibility Matrix

All public packages within the Olenna StudioX repository adhere to strict **Semantic Versioning (MAJOR.MINOR.PATCH)**.

## SemVer Rules

### MAJOR (Breaking Changes)
- Incompatible changes to component prop names or required types.
- Removal or breaking rename of public design tokens.
- Removal or restructuring of package entry points.
- Increases in minimum peer dependency versions (e.g. dropping React 18 support).

### MINOR (Backward-Compatible Features)
- Adding new components, variants, or optional props.
- Adding new design tokens or brand assets.
- Adding new utility classes or integrations without breaking existing consumers.

### PATCH (Backward-Compatible Bug Fixes)
- Visual bug fixes that align with documented specs.
- Accessibility fixes (improving ARIA attributes).
- Documentation updates and typo corrections.

---

## Package Compatibility Matrix

| Monorepo Release | `@olenna/tokens` | `@olenna/styles` | `@olenna/react` | `@olenna/patterns` | Supported React | Supported Node.js |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **v1.0.0 (Current)** | `^1.0.0` | `^1.0.0` | `^1.0.0` | `^1.0.0` | `^18.0.0` or `^19.0.0` | `>= 20.0.0` |
| **v0.9.0 (Legacy)** | `0.9.x` | `0.9.x` | `0.9.x` | — | `^18.0.0` | `>= 18.0.0` |

---

## Deprecation Policy

Before removing any public API or token:
1. Mark the token or component as `@deprecated` in TypeScript JSDoc comments.
2. Maintain the deprecated API for at least **one minor release cycle**.
3. Document replacement paths in the [Migration Guide](/governance/migration).
4. Remove the API only upon a subsequent **MAJOR** release.
