import React from 'react';
import { StoreOpeningHours, DaySchedule } from './StoreOpeningHours';

export interface StoreLocationCardProps {
  id: string | number;
  name: string;
  city: string;
  address: string;
  postalCode?: string;
  phone?: string;
  imageUrl?: string;
  schedule?: DaySchedule[];
  isOpenNow?: boolean;
  directionsUrl?: string;
  onSelect?: (id: string | number) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const StoreLocationCard: React.FC<StoreLocationCardProps> = ({
  id,
  name,
  city,
  address,
  postalCode,
  phone,
  imageUrl,
  schedule,
  isOpenNow,
  directionsUrl,
  onSelect,
  className,
  style
}) => {
  return (
    <article
      className={className}
      style={{
        borderRadius: 'var(--olenna-border-radius-md, 8px)',
        border: '1px solid var(--olenna-color-border-default, #E8E2DF)',
        backgroundColor: 'var(--olenna-color-surface-card, #FFFFFF)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--olenna-shadow-sm)',
        ...style
      }}
    >
      {imageUrl && (
        <div style={{ width: '100%', height: '12rem', overflow: 'hidden' }}>
          <img src={imageUrl} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}

      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: 1 }}>
        <div>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--olenna-color-brand-champagne-600, #9E7958)', fontWeight: 600 }}>
            {city}
          </span>
          <h4 style={{ fontFamily: 'var(--olenna-typography-fontFamily-serif, serif)', fontSize: '1.25rem', margin: '0.25rem 0 0 0', color: 'var(--olenna-color-text-primary)' }}>
            {name}
          </h4>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--olenna-color-text-secondary)', margin: 0, lineHeight: 1.4 }}>
          {address}
          {postalCode && <><br />{postalCode} {city}</>}
        </p>

        {phone && (
          <a
            href={`tel:${phone}`}
            style={{ fontSize: '0.8125rem', color: 'var(--olenna-color-link-default)', textDecoration: 'none' }}
          >
            {phone}
          </a>
        )}

        {schedule && (
          <div style={{ borderTop: '1px solid var(--olenna-color-border-subtle, #F4F0EE)', paddingTop: '0.75rem' }}>
            <StoreOpeningHours schedule={schedule} isOpenNow={isOpenNow} />
          </div>
        )}

        <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem', paddingTop: '0.75rem' }}>
          {directionsUrl && (
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '0.5rem',
                borderRadius: 'var(--olenna-border-radius-xs, 4px)',
                border: '1px solid var(--olenna-color-border-default)',
                color: 'var(--olenna-color-text-primary)',
                fontSize: '0.8125rem',
                textDecoration: 'none',
                fontWeight: 500
              }}
            >
              Get Directions ↗
            </a>
          )}
          {onSelect && (
            <button
              type="button"
              onClick={() => onSelect(id)}
              style={{
                flex: 1,
                padding: '0.5rem',
                borderRadius: 'var(--olenna-border-radius-xs, 4px)',
                backgroundColor: 'var(--olenna-color-action-primary-default, #493541)',
                color: 'var(--olenna-color-action-primary-text, #FFFAF7)',
                border: 'none',
                fontSize: '0.8125rem',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              Book Appointment
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
