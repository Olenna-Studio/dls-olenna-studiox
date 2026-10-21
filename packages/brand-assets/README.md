# @olenna/brand-assets

Approved brand identity assets, logos, emblems, color guidelines, and usage rules for Olenna StudioX.

## Overview

The `@olenna/brand-assets` package serves as the definitive source of truth for all brand imagery and identity graphics across Olenna's ecosystem:
- Public Website
- Customer PWA
- Admin & Boutique Operations Portal

## Included Assets

- **Full Stacked Logo (`full`)**: Master luxury lockup combining botanical monogram, serif wordmark, and StudioX subtext. Available in SVG and authentic high-resolution master PNG/WebP.
- **Horizontal Logo (`horizontal`)**: Primary layout for navigation bars and sticky headers.
- **Wordmark (`wordmark`)**: Typographic wordmark using approved brand serif styling.
- **Botanical Emblem (`emblem`)**: Circular botanical icon for app icons, favicons, and watermark stamps.

## Installation

```bash
pnpm add @olenna/brand-assets
# or
npm install @olenna/brand-assets
```

## Programmatic Usage

```typescript
import { getBrandAsset, BRAND_USAGE_GUIDELINES, OLENNA_BRAND_PALETTE } from '@olenna/brand-assets';

// Retrieve metadata for horizontal SVG logo in light theme
const asset = getBrandAsset('horizontal', 'light', 'svg');
console.log(asset?.filePath); // 'svg/olenna-horizontal-light.svg'

// Inspect brand color specifications
console.log(OLENNA_BRAND_PALETTE.deepPlum.hex); // '#493541'
```

## Direct Asset Imports

Consumers can directly reference SVG and raster assets:

```typescript
import fullLogoSvg from '@olenna/brand-assets/svg/olenna-logo-full-light.svg';
```

## Clearance & Minimum Sizing Rules

- **Clearance**: Minimum clear space equals at least **50% of the emblem's width** on all sides.
- **Minimum Dimensions**:
  - Horizontal: `140px × 31px`
  - Stacked: `110px × 89px`
  - Wordmark: `120px × 36px`
  - Emblem: `32px × 29px`
- **Contrast**: Maintain WCAG 2.2 AA compliant contrast (minimum 4.5:1 for normal text/graphics).
