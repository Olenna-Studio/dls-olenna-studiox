# Retail & Commerce Patterns

Composite patterns for luxury shopping experiences.

## ProductCard

Features image zoom/hover swaps, luxury price formatting, availability status, and add-to-bag callback:

```tsx
import { ProductCard, CollectionGrid } from '@olenna/patterns';

<CollectionGrid columns={3}>
  <ProductCard
    id="fragrance-01"
    title="Velvet Amber Eau de Parfum"
    category="Haute Parfumerie"
    imageUrl="https://images.unsplash.com/photo-1547887537-6158d64c35b3"
    secondaryImageUrl="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539"
    price={240}
    originalPrice={280}
    discountPercent={15}
    isNew={true}
    availability="in_stock"
    onAddToCart={(id) => console.log('Added to bag', id)}
  />
</CollectionGrid>
```

---

## ProductImageGallery

Thumbnails and primary luxury aspect-ratio viewport:

```tsx
import { ProductImageGallery } from '@olenna/patterns';

<ProductImageGallery
  images={[
    { src: '/images/perfume-main.jpg', alt: 'Perfume bottle front view' },
    { src: '/images/perfume-angle.jpg', alt: 'Perfume packaging and cap' },
    { src: '/images/perfume-lifestyle.jpg', alt: 'Lifestyle vanity setting' }
  ]}
/>
```

---

## BrandStorySection

Editorial split layout pairing narrative brand copy with heritage atelier imagery:

```tsx
import { BrandStorySection } from '@olenna/patterns';

<BrandStorySection
  badge="OUR ATELIER"
  title="Crafted with Classical Rigor & Modern Grace"
  narrative="Founded with an uncompromising belief that everyday objects should evoke delight, Olenna collaborates with master artisans across France and Italy."
  secondaryText="Every formulation is tested for ethical botanical integrity."
  imageUrl="https://images.unsplash.com/photo-1513519245088-0e12902e5a38"
  stats={[
    { label: 'Artisan Ateliers', value: '14' },
    { label: 'Botanical Ingredients', value: '100%' },
    { label: 'Numbered Editions', value: '500' }
  ]}
  ctaText="Explore The Atelier Story"
  onCtaClick={() => console.log('Story clicked')}
/>
```
