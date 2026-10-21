import React from 'react';

export interface PromotionalBannerProps {
  headline: string;
  subhead?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  onDismiss?: () => void;
  className?: string;
}

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  headline,
  subhead,
  ctaText,
  onCtaClick,
  onDismiss,
  className
}) => {
  return (
    <aside
      className={className}
      aria-label="Promotion"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'var(--olenna-color-brand-plum-900, #493541)',
        color: 'var(--olenna-color-brand-ivory-50, #FFFAF7)',
        padding: '1.25rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap',
        boxSizing: 'border-box'
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <span
          style={{
            fontFamily: 'var(--olenna-typography-fontFamily-serif, serif)',
            fontSize: '1.125rem',
            fontWeight: 500,
            marginRight: '0.75rem'
          }}
        >
          {headline}
        </span>
        {subhead && (
          <span style={{ fontSize: '0.875rem', opacity: 0.9 }}>
            {subhead}
          </span>
        )}
      </div>

      {ctaText && (
        <button
          type="button"
          onClick={onCtaClick}
          style={{
            backgroundColor: 'var(--olenna-color-brand-champagne-400, #C4A181)',
            color: 'var(--olenna-color-brand-plum-900, #493541)',
            border: 'none',
            borderRadius: 'var(--olenna-border-radius-xs, 4px)',
            padding: '0.375rem 1rem',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}
        >
          {ctaText}
        </button>
      )}

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss promotion"
          style={{
            position: 'absolute',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: 'currentColor',
            cursor: 'pointer',
            padding: '0.25rem',
            fontSize: '1rem'
          }}
        >
          ✕
        </button>
      )}
    </aside>
  );
};
