# Search & Customer PWA Patterns

Search and filter toolbars and smart PWA call-to-action banners.

## SearchFilterToolbar

Combines search input, category select, price sorting, and removable filter chips:

```tsx
import { SearchFilterToolbar } from '@olenna/patterns';

<SearchFilterToolbar
  searchQuery={query}
  onSearchChange={setQuery}
  categories={['Haute Parfumerie', 'Silk & Twill', 'Fine Leather', 'Artisan Jewelry']}
  selectedCategory={category}
  onCategoryChange={setCategory}
  sortOptions={[
    { label: 'Featured Curations', value: 'featured' },
    { label: 'Price: Low to High', value: 'price_asc' },
    { label: 'Price: High to Low', value: 'price_desc' }
  ]}
  selectedSort={sort}
  onSortChange={setSort}
  activeChips={[
    { id: 'cat-silk', label: 'Silk & Twill' },
    { id: 'filter-instock', label: 'In Stock Only' }
  ]}
  onRemoveChip={(chipId) => console.log('Remove chip', chipId)}
  onClearAllChips={() => console.log('Clear chips')}
/>
```

---

## CustomerPwaBanner

Mobile and desktop install banner for Olenna's progressive web application:

```tsx
import { CustomerPwaBanner } from '@olenna/patterns';

<CustomerPwaBanner
  title="Experience Olenna StudioX Mobile"
  description="Add our Customer PWA to your home screen for rapid boutique check-in and private client privileges."
  buttonText="Install PWA"
  onInstall={() => {
    // Trigger browser PWA deferred prompt
    console.log('Triggering beforeinstallprompt');
  }}
  onDismiss={() => {
    console.log('Dismissed PWA banner');
  }}
/>
```
