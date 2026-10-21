import fs from 'fs';
import path from 'path';
import { validateTokens, getNestedValue } from './validate';

interface FlatToken {
  name: string;
  cssVar: string;
  value: string;
  rawValue: string;
  type?: string;
  description?: string;
  category: string;
}

function resolveValue(rawValue: string, context: any): string {
  if (rawValue.startsWith('{') && rawValue.endsWith('}')) {
    const refPath = rawValue.slice(1, -1).split('.');
    const target = getNestedValue(context, refPath);
    if (target && target.value !== undefined) {
      return resolveValue(String(target.value), context);
    }
  }
  return rawValue;
}

function flattenTokens(tree: any, prefix = 'olenna', context: any, category = ''): FlatToken[] {
  const result: FlatToken[] = [];

  function walk(node: any, pathArr: string[], cat: string) {
    for (const key of Object.keys(node)) {
      if (key === '$schema') continue;
      const currentCat = cat || key;
      const val = node[key];
      const newPath = [...pathArr, key];

      if (val && typeof val === 'object' && 'value' in val) {
        const rawValue = String(val.value);
        const resolved = resolveValue(rawValue, context);
        // Turn path like ["spacing", "0.5"] into "spacing-0_5"
        const tokenName = newPath.join('-').replace(/\./g, '_');
        const cssVar = `--${prefix}-${tokenName}`;

        result.push({
          name: tokenName,
          cssVar,
          value: resolved,
          rawValue,
          type: val.type,
          description: val.description,
          category: currentCat
        });
      } else if (val && typeof val === 'object') {
        walk(val, newPath, currentCat);
      }
    }
  }

  walk(tree, [], category);
  return result;
}

export function buildTokens() {
  const srcDir = path.resolve(__dirname, 'source');
  const distDir = path.resolve(__dirname, '../dist');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const primitives = JSON.parse(fs.readFileSync(path.join(srcDir, 'primitives.json'), 'utf-8'));
  const semantic = JSON.parse(fs.readFileSync(path.join(srcDir, 'semantic.json'), 'utf-8'));
  const components = JSON.parse(fs.readFileSync(path.join(srcDir, 'components.json'), 'utf-8'));

  // 1. Validation check
  const validation = validateTokens(primitives, semantic);
  if (!validation.valid) {
    console.error('❌ Token validation failed during build:');
    validation.errors.forEach((e) => console.error('  - ' + e));
    throw new Error('Token validation errors occurred');
  }

  // 2. Flatten primitives
  const flatPrimitives = flattenTokens(primitives, 'olenna', primitives);

  // 3. Flatten light & dark semantics
  const flatSemanticLight = flattenTokens(semantic.light, 'olenna', primitives);
  const flatSemanticDark = flattenTokens(semantic.dark, 'olenna', primitives);

  // 4. Flatten components
  const flatComponents = flattenTokens(components, 'olenna', primitives);

  // 5. Generate CSS
  let css = `/**
 * Olenna StudioX Design System — Generated Tokens
 * DO NOT EDIT DIRECTLY. Source: @olenna/tokens/src/source/*.json
 */

:root,
.olenna-theme-light {
  /* Primitives */
`;

  flatPrimitives.forEach((t) => {
    css += `  ${t.cssVar}: ${t.value};${t.description ? ` /* ${t.description} */` : ''}\n`;
  });

  css += `\n  /* Semantic Tokens (Light) */\n`;
  flatSemanticLight.forEach((t) => {
    css += `  ${t.cssVar}: ${t.value};${t.description ? ` /* ${t.description} */` : ''}\n`;
  });

  css += `\n  /* Component Tokens */\n`;
  flatComponents.forEach((t) => {
    css += `  ${t.cssVar}: ${t.value};\n`;
  });

  css += `}\n\n[data-theme="dark"],\n.olenna-theme-dark {\n  /* Semantic Overrides (Dark) */\n`;
  flatSemanticDark.forEach((t) => {
    css += `  ${t.cssVar}: ${t.value};${t.description ? ` /* ${t.description} */` : ''}\n`;
  });
  css += `}\n`;

  fs.writeFileSync(path.join(distDir, 'index.css'), css, 'utf-8');

  // 6. Generate combined JSON dictionary
  const combinedJson = {
    primitives,
    semantic,
    components,
    flat: {
      primitives: flatPrimitives,
      semanticLight: flatSemanticLight,
      semanticDark: flatSemanticDark,
      components: flatComponents
    }
  };
  fs.writeFileSync(path.join(distDir, 'tokens.json'), JSON.stringify(combinedJson, null, 2), 'utf-8');

  // 7. Generate JavaScript and TypeScript definitions
  const tokenMapObj: Record<string, string> = {};
  const cssVarMapObj: Record<string, string> = {};

  [...flatPrimitives, ...flatSemanticLight, ...flatComponents].forEach((t) => {
    tokenMapObj[t.name] = t.value;
    cssVarMapObj[t.name] = t.cssVar;
  });

  // ESM
  let jsContent = `/**
 * Olenna StudioX Design System Tokens (ESM)
 */
export const tokens = ${JSON.stringify(tokenMapObj, null, 2)};
export const cssVars = ${JSON.stringify(cssVarMapObj, null, 2)};
export default tokens;
`;
  fs.writeFileSync(path.join(distDir, 'index.js'), jsContent, 'utf-8');

  // CJS
  let cjsContent = `/**
 * Olenna StudioX Design System Tokens (CommonJS)
 */
const tokens = ${JSON.stringify(tokenMapObj, null, 2)};
const cssVars = ${JSON.stringify(cssVarMapObj, null, 2)};
module.exports = tokens;
module.exports.tokens = tokens;
module.exports.cssVars = cssVars;
`;
  fs.writeFileSync(path.join(distDir, 'index.cjs'), cjsContent, 'utf-8');

  // DTS
  let dtsContent = `/**
 * Olenna StudioX Design System Tokens (Type Definitions)
 */
export declare const tokens: Record<string, string>;
export declare const cssVars: Record<string, string>;
export default tokens;
`;
  fs.writeFileSync(path.join(distDir, 'index.d.ts'), dtsContent, 'utf-8');

  // 8. Generate Markdown Token Reference
  let md = `# Design Tokens Reference

This document is automatically generated from \`@olenna/tokens/src/source/\`.

## Semantic Tokens (Theme Colors)

| Semantic Token | CSS Variable | Light Value | Description |
| :--- | :--- | :--- | :--- |
`;
  flatSemanticLight.forEach((t) => {
    md += `| \`${t.name}\` | \`${t.cssVar}\` | \`${t.value}\` | ${t.description || '—'} |\n`;
  });

  md += `\n## Brand Color Palette Primitives\n\n| Token | CSS Variable | Value | Description |\n| :--- | :--- | :--- | :--- |\n`;
  flatPrimitives
    .filter((t) => t.name.startsWith('color-brand'))
    .forEach((t) => {
      md += `| \`${t.name}\` | \`${t.cssVar}\` | \`${t.value}\` | ${t.description || '—'} |\n`;
    });

  md += `\n## Spacing Scale Primitives\n\n| Spacing Token | CSS Variable | Value |\n| :--- | :--- | :--- |\n`;
  flatPrimitives
    .filter((t) => t.name.startsWith('spacing-'))
    .forEach((t) => {
      md += `| \`${t.name}\` | \`${t.cssVar}\` | \`${t.value}\` |\n`;
    });

  md += `\n## Typography Primitives\n\n| Token | CSS Variable | Value |\n| :--- | :--- | :--- |\n`;
  flatPrimitives
    .filter((t) => t.name.startsWith('typography-'))
    .forEach((t) => {
      md += `| \`${t.name}\` | \`${t.cssVar}\` | \`${t.value}\` |\n`;
    });

  fs.writeFileSync(path.join(distDir, 'token-reference.md'), md, 'utf-8');

  console.log('✅ @olenna/tokens built successfully:');
  console.log(`   - dist/index.css (${(fs.statSync(path.join(distDir, 'index.css')).size / 1024).toFixed(1)} KB)`);
  console.log(`   - dist/tokens.json`);
  console.log(`   - dist/index.js & dist/index.d.ts`);
  console.log(`   - dist/token-reference.md`);
}

if (process.argv[1] && process.argv[1].endsWith('build.ts')) {
  buildTokens();
}
