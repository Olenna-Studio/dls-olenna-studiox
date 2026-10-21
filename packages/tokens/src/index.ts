export * from './validate';

/**
 * Helper to retrieve the CSS variable name for a token.
 * E.g., `getTokenCssVar('color-text-primary')` => `'--olenna-color-text-primary'`
 */
export function getTokenCssVar(tokenName: string, prefix = 'olenna'): string {
  const normalized = tokenName.replace(/\./g, '-');
  return `--${prefix}-${normalized}`;
}

/**
 * Helper to retrieve a CSS `var()` reference.
 * E.g., `tokenVar('color-text-primary')` => `'var(--olenna-color-text-primary)'`
 */
export function tokenVar(tokenName: string, fallback?: string, prefix = 'olenna'): string {
  const cssVar = getTokenCssVar(tokenName, prefix);
  return fallback ? `var(${cssVar}, ${fallback})` : `var(${cssVar})`;
}
