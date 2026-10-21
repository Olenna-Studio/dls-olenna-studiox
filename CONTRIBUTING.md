# Contributing to Olenna StudioX

Thank you for your interest in contributing to the Olenna StudioX Design Language System.

## Architectural Principles

Before writing code, review our core principles:
1. **Simplicity before abstraction**: Keep APIs predictable and minimal.
2. **Framework independence**: Design tokens must remain strictly neutral.
3. **WCAG 2.2 AA accessibility**: Every interactive component must support full keyboard navigation, screen reader labels, and high contrast focus states.
4. **Decoupled patterns**: Retail patterns in `@olenna/patterns` must never hardcode backend API endpoints.

---

## Local Development Workflow

1. **Fork and Clone**:
   ```bash
   git clone https://github.com/olenna/olenna-studiox.git
   cd olenna-studiox
   ```

2. **Install Workspace Dependencies**:
   ```bash
   pnpm install
   ```

3. **Build All Packages**:
   ```bash
   pnpm build
   ```

4. **Verify Tests**:
   ```bash
   pnpm test
   ```

5. **Start Documentation or Storybook**:
   ```bash
   pnpm dev:docs    # VitePress at http://localhost:5173
   pnpm storybook   # Storybook at http://localhost:6006
   ```

---

## Adding a New Component

1. Implement the component in `packages/react/src/<category>/ComponentName.tsx`.
2. Add full TypeScript prop interfaces with descriptive JSDoc comments.
3. Export the component in `packages/react/src/index.ts`.
4. Write unit and accessibility tests in `packages/react/src/__tests__/`.
5. Create a Storybook story in `packages/storybook/src/stories/`.
6. Add usage documentation in `apps/docs/components/`.
7. Generate a changeset: `pnpm changeset`.

---

## Pull Request Guidelines

- Branch names should follow: `feature/short-desc`, `fix/short-desc`, or `docs/short-desc`.
- All tests, typechecks, and builds must pass before opening a PR.
- Every user-facing change must include a changeset.
