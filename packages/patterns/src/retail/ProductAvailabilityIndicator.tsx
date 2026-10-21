import React from 'react';

export type AvailabilityStatus = 'in_stock' | 'low_stock' | 'boutique_only' | 'out_of_stock';

export interface ProductAvailabilityIndicatorProps {
  status: AvailabilityStatus;
  stockCount?: number;
  className?: string;
}

export const ProductAvailabilityIndicator: React.FC<ProductAvailabilityIndicatorProps> = ({
  status,
  stockCount,
  className
}) => {
  const statusConfig: Record<AvailabilityStatus, { color: string; label: string }> = {
    in_stock: { color: 'var(--olenna-color-status-success-border, #22C55E)', label: 'In Stock' },
    low_stock: {
      color: 'var(--olenna-color-status-warning-border, #F59E0B)',
      label: stockCount ? `Only ${stockCount} remaining` : 'Low Stock'
    },
    boutique_only: { color: 'var(--olenna-color-brand-champagne-400, #C4A181)', label: 'Boutique Exclusive' },
    out_of_stock: { color: 'var(--olenna-color-neutral-400, #B5A59E)', label: 'Out of Stock' }
  };

  const curr = statusConfig[status];

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        fontSize: '0.75rem',
        color: 'var(--olenna-color-text-secondary)'
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: curr.color
        }}
      />
      <span>{curr.label}</span>
    </div>
  );
};
