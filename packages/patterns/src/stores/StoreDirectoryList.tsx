import React, { useState } from 'react';
import { StoreLocationCard, StoreLocationCardProps } from './StoreLocationCard';

export interface StoreDirectoryListProps {
  stores: StoreLocationCardProps[];
  cities?: string[];
  className?: string;
}

export const StoreDirectoryList: React.FC<StoreDirectoryListProps> = ({
  stores,
  cities,
  className
}) => {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const cityOptions = ['All', ...(cities || Array.from(new Set(stores.map((s) => s.city))))];

  const filteredStores = stores.filter((s) => {
    const matchesCity = selectedCity === 'All' || s.city === selectedCity;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
      {/* Search and City Filter Bar */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <input
          type="search"
          placeholder="Search boutiques by city or address..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            flex: 1,
            minWidth: '240px',
            padding: '0.625rem 0.875rem',
            borderRadius: 'var(--olenna-border-radius-sm, 6px)',
            border: '1px solid var(--olenna-color-border-default, #E8E2DF)',
            backgroundColor: 'var(--olenna-color-surface-card, #FFFFFF)',
            fontSize: '0.875rem',
            outline: 'none'
          }}
        />

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {cityOptions.map((city) => (
            <button
              key={city}
              type="button"
              onClick={() => setSelectedCity(city)}
              style={{
                padding: '0.375rem 0.75rem',
                borderRadius: 'var(--olenna-border-radius-full, 9999px)',
                border: city === selectedCity ? '1px solid var(--olenna-color-action-primary-default, #493541)' : '1px solid var(--olenna-color-border-default, #E8E2DF)',
                backgroundColor: city === selectedCity ? 'var(--olenna-color-action-primary-default, #493541)' : 'transparent',
                color: city === selectedCity ? 'var(--olenna-color-action-primary-text, #FFFAF7)' : 'var(--olenna-color-text-secondary)',
                fontSize: '0.8125rem',
                cursor: 'pointer'
              }}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Store Cards */}
      {filteredStores.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--olenna-color-text-muted)' }}>
          No boutiques match your criteria.
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredStores.map((store) => (
            <StoreLocationCard key={store.id} {...store} />
          ))}
        </div>
      )}
    </div>
  );
};
