# Olenna StudioX Release Runbook

This runbook outlines the exact sequence for preparing, validating, and publishing releases of the Olenna StudioX Design Language System.

## Release Prerequisites

1. Working branch is clean and up to date with `main`.
2. Verified Node.js version (`>= 20.0.0`) and pnpm (`pnpm@12.x`).
3. `NPM_TOKEN` configured with publish permissions for the `@olenna` scope.

---

## Automated Deployment Workflow

When code is added to `main` (either committed directly or merged), the `deploy.yml` GitHub Actions workflow triggers automatically:

1. **Quality Gates**: Runs token validation, unit & accessibility tests, and compiles all `@olenna/*` monorepo packages.
2. **Builds Documentation & Playground**: Compiles the VitePress documentation website and Storybook 8 interactive catalog.
3. **Deploys to GitHub Pages**: Automatically deploys the documentation and nested Storybook catalog to GitHub Pages with zero manual PR overhead.
4. **Automated Package Publishing**: If `NPM_TOKEN` is configured in repository secrets, packages are published directly to npm.

---

## Manual Release Flow (Fallback)

If CI publishing is temporarily unavailable or emergency hotfixes are required:

### Step 1: Pre-Release Quality Gates
Run all automated checks locally:
```bash
# 1. Clean previous build artifacts
pnpm clean

# 2. Re-install using lockfile
pnpm install --frozen-lockfile

# 3. Validate and compile design tokens
pnpm build:tokens

# 4. Build all packages
pnpm build

# 5. Run full test suite
pnpm test

# 6. Build docs and Storybook
pnpm build:docs
pnpm build:storybook
```

### Step 2: Version Packages
Consume active changesets and increment package versions:
```bash
pnpm version-packages
```
Review generated `CHANGELOG.md` files across each package.

### Step 3: Publish Packages
Publish to npm registry using OTP or npm token:
```bash
pnpm changeset publish
```

### Step 4: Git Tagging & Push
Commit updated package versions and push git tags:
```bash
git commit -am "chore(release): version packages"
git push origin main --follow-tags
```

---

## Rollback & Recovery Guidance

- **Unpublished or Broken Release**: Never delete a published version from npm (forbidden by npm unpublish policy after 72 hours).
- **Remediation**: Create an immediate hotfix PR with `patch` changeset reverting the offending commit, and publish a new patch release.
- **Deprecating a Compromised Release**:
  ```bash
  npm deprecate @olenna/react@1.0.1 "Critical regression in button loading state. Please upgrade to 1.0.2."
  ```
