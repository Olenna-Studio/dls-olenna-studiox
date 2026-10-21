import React from 'react';

export interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  originalPrice,
  currency = '€',
  size = 'md',
  className,
  style
}) => {
  const isDiscounted = originalPrice !== undefined && originalPrice > price;

  const fontSizes = {
    sm: { main: '1rem', strike: '0.8125rem' },
    md: { main: '1.25rem', strike: '0.875rem' },
    lg: { main: '1.5rem', strike: '1rem' }
  };

  const formattedPrice = `${currency}${price.toFixed(2)}`;
  const formattedOriginal = originalPrice ? `${currency}${originalPrice.toFixed(2)}` : null;

  return (
    <div
      className={className}
      style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.5rem', ...style }}
    >
      <span
        style={{
          fontFamily: 'var(--olenna-typography-fontFamily-sans)',
          fontWeight: 600,
          fontSize: fontSizes[size].main,
          color: isDiscounted ? 'var(--olenna-color-brand-plum-900)' : 'var(--olenna-color-text-primary)'
        }}
      >
        {formattedPrice}
      </span>
      {isDiscounted && formattedOriginal && (
        <span
          style={{
            fontSize: fontSizes[size].strike,
            color: 'var(--olenna-color-text-muted)',
            textDecoration: 'line-through'
          }}
        >
          {formattedOriginal}
        </span>
      )}
    </div>
  );
};

export interface DiscountBadgeProps {
  percent?: number;
  label?: string;
  className?: string;
}

export const DiscountBadge: React.FC<DiscountBadgeProps> = ({
  percent,
  label,
  className
}) => {
  const text = label || (percent ? `-${percent}%` : 'SALE');

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        backgroundColor: 'var(--olenna-color-brand-plum-900, #493541)',
        color: 'var(--olenna-color-brand-ivory-50, #FFFAF7)',
        fontSize: '0.6875rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        padding: '0.2rem 0.5rem',
        borderRadius: 'var(--olenna-border-radius-xs, 4px)',
        lineHeight: 1.2
      }}
    >
      {text}
    </span>
  );
};
