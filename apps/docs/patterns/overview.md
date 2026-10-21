# Patterns Overview

The `@olenna/patterns` package contains composite UI layouts specifically tailored for Olenna's high-fashion, beauty, and multi-category retail platforms.

## Decoupled Architecture

All patterns in this package are **pure presentation components**. They:
- Never call backend APIs or hardcode fetch logic.
- Never assume a specific database schema or payment vendor.
- Accept plain TypeScript props and callback functions.
- Fully inherit tokens and themes from `@olenna/tokens` and `@olenna/styles`.

## Installation

```bash
pnpm add @olenna/patterns @olenna/react @olenna/tokens @olenna/styles
```

## Pattern Groups

- **Commerce & Products**: `ProductCard`, `ProductImageGallery`, `CategoryCard`, `CollectionGrid`, `PromotionalBanner`, `BrandStorySection`, `PriceDisplay`, `DiscountBadge`, `ProductAvailabilityIndicator`.
- **Boutique Discovery**: `StoreLocationCard`, `StoreOpeningHours`, `StoreDirectoryList`, `ContactInfoBlock`.
- **Customer Experience & PWA**: `SearchFilterToolbar`, `CustomerPwaBanner`.
