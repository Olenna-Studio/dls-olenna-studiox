import fs from 'fs';
import path from 'path';

export interface TokenLeaf {
  value: string;
  type?: string;
  description?: string;
}

export type TokenTree = {
  [key: string]: TokenLeaf | TokenTree | string | undefined;
};

export function getNestedValue(obj: any, pathParts: string[]): any {
  let curr = obj;
  for (const part of pathParts) {
    if (curr === undefined || curr === null) return undefined;
    curr = curr[part];
  }
  return curr;
}

export function validateTokens(primitives: any, semantic: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  function checkLeaves(tree: any, currentPath: string[], rootContext: any) {
    for (const key of Object.keys(tree)) {
      if (key === '$schema') continue;
      const val = tree[key];
      const newPath = [...currentPath, key];

      if (val && typeof val === 'object' && 'value' in val) {
        const strVal = String(val.value);
        if (strVal.startsWith('{') && strVal.endsWith('}')) {
          const refPath = strVal.slice(1, -1).split('.');
          const resolved = getNestedValue(rootContext, refPath);
          if (!resolved || resolved.value === undefined) {
            errors.push(`Unresolved reference at ${newPath.join('.')}: '${strVal}'`);
          }
        }
      } else if (val && typeof val === 'object') {
        checkLeaves(val, newPath, rootContext);
      }
    }
  }

  // Validate primitives references if any
  checkLeaves(primitives, [], primitives);

  // Validate semantic references against primitives
  if (semantic.light) {
    checkLeaves(semantic.light, ['semantic', 'light'], primitives);
  }
  if (semantic.dark) {
    checkLeaves(semantic.dark, ['semantic', 'dark'], primitives);
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

if (process.argv[1] && process.argv[1].endsWith('validate.ts')) {
  const primPath = path.resolve(__dirname, 'source/primitives.json');
  const semPath = path.resolve(__dirname, 'source/semantic.json');

  const primitives = JSON.parse(fs.readFileSync(primPath, 'utf-8'));
  const semantic = JSON.parse(fs.readFileSync(semPath, 'utf-8'));

  const result = validateTokens(primitives, semantic);
  if (!result.valid) {
    console.error('❌ Token validation failed:');
    result.errors.forEach((e) => console.error('  - ' + e));
    process.exit(1);
  } else {
    console.log('✅ Token validation passed. No unresolved references.');
  }
}
