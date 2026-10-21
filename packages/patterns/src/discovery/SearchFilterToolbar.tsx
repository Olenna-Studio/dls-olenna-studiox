import React from 'react';

export interface FilterChip {
  id: string;
  label: string;
}

export interface SearchFilterToolbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories?: string[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  sortOptions?: Array<{ label: string; value: string }>;
  selectedSort?: string;
  onSortChange?: (sort: string) => void;
  activeChips?: FilterChip[];
  onRemoveChip?: (chipId: string) => void;
  onClearAllChips?: () => void;
  className?: string;
}

export const SearchFilterToolbar: React.FC<SearchFilterToolbarProps> = ({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  sortOptions,
  selectedSort,
  onSortChange,
  activeChips = [],
  onRemoveChip,
  onClearAllChips,
  className
}) => {
  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', width: '100%' }}>
      {/* Search and Dropdowns Row */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          type="search"
          placeholder="Search collections, fragrances, couture..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            flex: 2,
            minWidth: '220px',
            padding: '0.625rem 0.875rem',
            borderRadius: 'var(--olenna-border-radius-sm, 6px)',
            border: '1px solid var(--olenna-color-border-default, #E8E2DF)',
            backgroundColor: 'var(--olenna-color-surface-card, #FFFFFF)',
            fontSize: '0.875rem',
            outline: 'none'
          }}
        />

        {categories && (
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange?.(e.target.value)}
            style={{
              flex: 1,
              minWidth: '160px',
              padding: '0.625rem 0.875rem',
              borderRadius: 'var(--olenna-border-radius-sm, 6px)',
              border: '1px solid var(--olenna-color-border-default, #E8E2DF)',
              backgroundColor: 'var(--olenna-color-surface-card, #FFFFFF)',
              fontSize: '0.875rem',
              outline: 'none'
            }}
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        )}

        {sortOptions && (
          <select
            value={selectedSort}
            onChange={(e) => onSortChange?.(e.target.value)}
            style={{
              flex: 1,
              minWidth: '160px',
              padding: '0.625rem 0.875rem',
              borderRadius: 'var(--olenna-border-radius-sm, 6px)',
              border: '1px solid var(--olenna-color-border-default, #E8E2DF)',
              backgroundColor: 'var(--olenna-color-surface-card, #FFFFFF)',
              fontSize: '0.875rem',
              outline: 'none'
            }}
          >
            {sortOptions.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Active Filter Chips */}
      {activeChips.length > 0 && (
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--olenna-color-text-muted)' }}>
            Active filters:
          </span>
          {activeChips.map((chip) => (
            <span
              key={chip.id}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.2rem 0.625rem',
                borderRadius: 'var(--olenna-border-radius-full, 9999px)',
                backgroundColor: 'var(--olenna-color-brand-blush-100, #F5E3EA)',
                color: 'var(--olenna-color-brand-plum-900, #493541)',
                fontSize: '0.75rem',
                fontWeight: 500
              }}
            >
              {chip.label}
              <button
                type="button"
                onClick={() => onRemoveChip?.(chip.id)}
                aria-label={`Remove filter ${chip.label}`}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'currentColor',
                  padding: 0,
                  fontSize: '0.875rem',
                  lineHeight: 1
                }}
              >
                ✕
              </button>
            </span>
          ))}

          {onClearAllChips && (
            <button
              type="button"
              onClick={onClearAllChips}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--olenna-color-link-default)',
                fontSize: '0.75rem',
                textDecoration: 'underline'
              }}
            >
              Clear all
            </button>
          )}
        </div>
      )}
    </div>
  );
};
