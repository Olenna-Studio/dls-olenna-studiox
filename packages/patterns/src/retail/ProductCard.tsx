import React from 'react';
import { PriceDisplay } from './PriceDisplay';
import { DiscountBadge } from './PriceDisplay';
import { ProductAvailabilityIndicator, AvailabilityStatus } from './ProductAvailabilityIndicator';

export interface ProductCardProps {
  id: string | number;
  title: string;
  category?: string;
  imageUrl: string;
  secondaryImageUrl?: string;
  price: number;
  originalPrice?: number;
  currency?: string;
  availability?: AvailabilityStatus;
  stockCount?: number;
  discountPercent?: number;
  isNew?: boolean;
  onAddToCart?: (id: string | number) => void;
  onClick?: (id: string | number) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  category,
  imageUrl,
  secondaryImageUrl,
  price,
  originalPrice,
  currency = '€',
  availability = 'in_stock',
  stockCount,
  discountPercent,
  isNew = false,
  onAddToCart,
  onClick,
  className,
  style
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <article
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--olenna-border-radius-md, 8px)',
        backgroundColor: 'var(--olenna-color-surface-card, #FFFFFF)',
        border: '1px solid var(--olenna-color-border-default, #E8E2DF)',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
      onClick={() => onClick?.(id)}
    >
      {/* Media Container */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: 'var(--olenna-color-surface-subtle, #FAF5F2)' }}>
        <img
          src={isHovered && secondaryImageUrl ? secondaryImageUrl : imageUrl}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
        />

        {/* Badges container */}
        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
          {isNew && (
            <span style={{
              backgroundColor: 'var(--olenna-color-brand-champagne-400, #C4A181)',
              color: '#FFFFFF',
              fontSize: '0.6875rem',
              fontWeight: 600,
              padding: '0.2rem 0.5rem',
              borderRadius: 'var(--olenna-border-radius-xs, 4px)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              NEW
            </span>
          )}
          {discountPercent && <DiscountBadge percent={discountPercent} />}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.375rem', flex: 1 }}>
        {category && (
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--olenna-color-text-muted)' }}>
            {category}
          </span>
        )}
        <h4 style={{
          fontFamily: 'var(--olenna-typography-fontFamily-serif, serif)',
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--olenna-color-text-primary)',
          margin: 0,
          lineHeight: 1.3
        }}>
          {title}
        </h4>

        <div style={{ marginTop: 'auto', paddingTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <PriceDisplay price={price} originalPrice={originalPrice} currency={currency} size="sm" />
          <ProductAvailabilityIndicator status={availability} stockCount={stockCount} />
        </div>

        {onAddToCart && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(id);
            }}
            style={{
              marginTop: '0.75rem',
              width: '100%',
              padding: '0.5rem',
              borderRadius: 'var(--olenna-border-radius-sm, 6px)',
              backgroundColor: 'var(--olenna-color-action-primary-default, #493541)',
              color: 'var(--olenna-color-action-primary-text, #FFFAF7)',
              border: 'none',
              fontSize: '0.8125rem',
              fontWeight: 500,
              cursor: 'pointer',
              letterSpacing: '0.02em',
              transition: 'opacity 0.15s ease'
            }}
          >
            Add to Bag
          </button>
        )}
      </div>
    </article>
  );
};
