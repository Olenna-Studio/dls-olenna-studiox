# Changesets

This repository uses [Changesets](https://github.com/changesets/changesets) for package versioning and automated changelog generation.

## Creating a Changeset

When you open a pull request that introduces user-facing changes to any published package, create a changeset:

```bash
pnpm changeset
```

Follow the interactive prompts:
1. Select which packages are modified (`@olenna/brand-assets`, `@olenna/tokens`, `@olenna/styles`, `@olenna/react`, `@olenna/patterns`).
2. Choose the semver bump level (`patch`, `minor`, `major`).
3. Write a concise summary of the change.
4. Commit the generated markdown file in `.changeset/*.md`.
