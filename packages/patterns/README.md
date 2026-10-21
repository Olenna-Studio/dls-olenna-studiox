# @olenna/patterns

Presentation-only retail patterns, boutique discovery interfaces, and luxury editorial layouts for Olenna StudioX.

## Overview

`@olenna/patterns` encapsulates Olenna's signature presentation patterns without tying consumer applications to specific backend APIs, payment processors, or database schemas:
- **Retail & Commerce**: `ProductCard`, `ProductImageGallery`, `CategoryCard`, `CollectionGrid`, `PromotionalBanner`, `BrandStorySection`, `PriceDisplay`, `DiscountBadge`, `ProductAvailabilityIndicator`
- **Boutique Discovery**: `StoreLocationCard`, `StoreOpeningHours`, `StoreDirectoryList`, `ContactInfoBlock`
- **Search & PWA**: `SearchFilterToolbar`, `CustomerPwaBanner`

## Installation

```bash
pnpm add @olenna/patterns @olenna/react @olenna/tokens @olenna/styles
# or
npm install @olenna/patterns @olenna/react @olenna/tokens @olenna/styles
```

## Usage Example

```tsx
import React from 'react';
import '@olenna/styles/css';
import { ProductCard, CollectionGrid } from '@olenna/patterns';

export function Catalog() {
  return (
    <CollectionGrid columns={3}>
      <ProductCard
        id="silk-scarf-01"
        title="Botanical Silk Twill Scarf"
        category="Accessories"
        imageUrl="/images/scarf.jpg"
        price={280}
        originalPrice={320}
        availability="in_stock"
        discountPercent={15}
        onAddToCart={(id) => console.log('Add to cart', id)}
      />
    </CollectionGrid>
  );
}
```
