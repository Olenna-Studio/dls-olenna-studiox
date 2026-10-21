import React from 'react';

export interface BrandStorySectionProps {
  badge?: string;
  title: string;
  narrative: string;
  secondaryText?: string;
  imageUrl?: string;
  imageAlt?: string;
  stats?: Array<{ label: string; value: string }>;
  ctaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

export const BrandStorySection: React.FC<BrandStorySectionProps> = ({
  badge = 'OUR HERITAGE',
  title,
  narrative,
  secondaryText,
  imageUrl,
  imageAlt = 'Olenna Atelier',
  stats,
  ctaText,
  onCtaClick,
  className
}) => {
  return (
    <section
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: imageUrl ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
        gap: '3rem',
        alignItems: 'center',
        padding: '3rem 0',
        width: '100%'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {badge && (
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              color: 'var(--olenna-color-brand-champagne-600, #9E7958)',
              textTransform: 'uppercase'
            }}
          >
            {badge}
          </span>
        )}
        <h2
          style={{
            fontFamily: 'var(--olenna-typography-fontFamily-serif, serif)',
            fontSize: '2.25rem',
            lineHeight: 1.2,
            margin: 0,
            color: 'var(--olenna-color-text-primary)'
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--olenna-color-text-secondary)',
            margin: 0
          }}
        >
          {narrative}
        </p>
        {secondaryText && (
          <p
            style={{
              fontSize: '0.9375rem',
              lineHeight: 1.6,
              color: 'var(--olenna-color-text-muted)',
              margin: 0
            }}
          >
            {secondaryText}
          </p>
        )}

        {stats && stats.length > 0 && (
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
            {stats.map((s, idx) => (
              <div key={idx}>
                <div
                  style={{
                    fontFamily: 'var(--olenna-typography-fontFamily-serif, serif)',
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    color: 'var(--olenna-color-brand-plum-900)'
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--olenna-color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {ctaText && (
          <div>
            <button
              type="button"
              onClick={onCtaClick}
              style={{
                backgroundColor: 'var(--olenna-color-action-primary-default, #493541)',
                color: 'var(--olenna-color-action-primary-text, #FFFAF7)',
                padding: '0.625rem 1.5rem',
                border: 'none',
                borderRadius: 'var(--olenna-border-radius-xs, 4px)',
                fontFamily: 'var(--olenna-typography-fontFamily-sans)',
                fontSize: '0.875rem',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              {ctaText}
            </button>
          </div>
        )}
      </div>

      {imageUrl && (
        <div
          style={{
            borderRadius: 'var(--olenna-border-radius-lg, 12px)',
            overflow: 'hidden',
            aspectRatio: '4/3',
            boxShadow: 'var(--olenna-shadow-lg)'
          }}
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      )}
    </section>
  );
};
