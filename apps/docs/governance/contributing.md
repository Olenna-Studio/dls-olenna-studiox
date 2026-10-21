# Contributing & PR Workflow

Thank you for contributing to the Olenna StudioX Design Language System.

## Development Setup

1. **Clone and Install**:
   ```bash
   git clone https://github.com/olenna/olenna-studiox.git
   cd olenna-studiox
   pnpm install
   ```

2. **Build All Packages**:
   ```bash
   pnpm build
   ```

3. **Run Unit Tests**:
   ```bash
   pnpm test
   ```

4. **Launch Documentation Locally**:
   ```bash
   pnpm dev:docs
   ```

5. **Launch Storybook**:
   ```bash
   pnpm storybook
   ```

---

## Changeset Process

Every pull request that modifies public packages must include a changeset:

```bash
pnpm changeset
```

Select the affected packages, choose the bump type (`patch`, `minor`, `major`), and provide a clear, user-facing summary of the change.
