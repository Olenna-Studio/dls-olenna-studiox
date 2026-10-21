import React, { useState } from 'react';
import type { Meta } from '@storybook/react';
import {
  ProductCard,
  CollectionGrid,
  BrandStorySection,
  StoreLocationCard,
  CustomerPwaBanner,
  SearchFilterToolbar
} from '@olenna/patterns';

export default {
  title: 'Retail & Commerce Patterns/Patterns Suite',
  tags: ['autodocs']
} as Meta;

export const LuxuryCommerceGrid = () => {
  return (
    <CollectionGrid columns={3}>
      <ProductCard
        id="frag-01"
        title="Velvet Amber Eau de Parfum"
        category="Haute Parfumerie"
        imageUrl="https://images.unsplash.com/photo-1547887537-6158d64c35b3"
        price={240}
        originalPrice={280}
        discountPercent={15}
        isNew={true}
        availability="in_stock"
        onAddToCart={(id) => alert(`Added ${id} to bag`)}
      />
      <ProductCard
        id="silk-02"
        title="Botanical Monogram Silk Scarf"
        category="Accessories"
        imageUrl="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
        price={320}
        availability="low_stock"
        stockCount={2}
        onAddToCart={(id) => alert(`Added ${id} to bag`)}
      />
      <ProductCard
        id="leather-03"
        title="Petite Champagne Leather Pochette"
        category="Fine Leather"
        imageUrl="https://images.unsplash.com/photo-1548036328-c9fa89d128fa"
        price={680}
        availability="boutique_only"
        onAddToCart={(id) => alert(`Added ${id} to bag`)}
      />
    </CollectionGrid>
  );
};

export const BoutiqueCardExample = () => (
  <div style={{ maxWidth: '380px' }}>
    <StoreLocationCard
      id="paris-boutique"
      name="Olenna Saint-Honoré Flagship"
      city="Paris"
      address="28 Rue du Faubourg Saint-Honoré"
      postalCode="75008"
      phone="+33 1 42 68 00 00"
      imageUrl="https://images.unsplash.com/photo-1555529771-7888783a18d3"
      isOpenNow={true}
      schedule={[
        { day: 'Monday — Friday', hours: '10:00 — 19:30', isToday: true },
        { day: 'Saturday', hours: '10:00 — 20:00' },
        { day: 'Sunday', hours: 'Private Appointments Only' }
      ]}
      directionsUrl="https://maps.google.com"
      onSelect={(id) => alert(`Booking at ${id}`)}
    />
  </div>
);

export const PwaAndSearch = () => {
  const [query, setQuery] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <CustomerPwaBanner onInstall={() => alert('Launching PWA installation prompt')} />
      <SearchFilterToolbar
        searchQuery={query}
        onSearchChange={setQuery}
        categories={['Haute Parfumerie', 'Silk & Twill', 'Fine Leather']}
        activeChips={[{ id: 'instock', label: 'In Stock In Paris' }]}
      />
    </div>
  );
};
