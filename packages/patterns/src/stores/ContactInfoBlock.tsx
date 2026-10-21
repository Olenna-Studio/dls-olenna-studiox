import React from 'react';

export interface ContactInfoBlockProps {
  title?: string;
  conciergeEmail?: string;
  conciergePhone?: string;
  hoursText?: string;
  appointmentText?: string;
  onBookAppointment?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const ContactInfoBlock: React.FC<ContactInfoBlockProps> = ({
  title = 'Private Client Concierge',
  conciergeEmail = 'concierge@olenna.com',
  conciergePhone = '+33 1 42 68 00 00',
  hoursText = 'Monday — Saturday, 9:00 — 19:00 CET',
  appointmentText = 'Schedule a personal consultation with our master stylists at your convenience.',
  onBookAppointment,
  className,
  style
}) => {
  return (
    <div
      className={className}
      style={{
        borderRadius: 'var(--olenna-border-radius-md, 8px)',
        border: '1px solid var(--olenna-color-brand-champagne-200, #DFC7B0)',
        backgroundColor: 'var(--olenna-color-surface-subtle, #FAF5F2)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        ...style
      }}
    >
      <div>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--olenna-color-brand-champagne-600, #9E7958)', fontWeight: 600 }}>
          DEDICATED SERVICE
        </span>
        <h4 style={{ fontFamily: 'var(--olenna-typography-fontFamily-serif, serif)', fontSize: '1.25rem', margin: '0.25rem 0 0 0', color: 'var(--olenna-color-text-primary)' }}>
          {title}
        </h4>
      </div>

      <p style={{ fontSize: '0.875rem', color: 'var(--olenna-color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
        {appointmentText}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', fontSize: '0.8125rem' }}>
        <div>
          <strong>Email: </strong>
          <a href={`mailto:${conciergeEmail}`} style={{ color: 'var(--olenna-color-link-default)' }}>
            {conciergeEmail}
          </a>
        </div>
        <div>
          <strong>Phone: </strong>
          <a href={`tel:${conciergePhone}`} style={{ color: 'var(--olenna-color-link-default)' }}>
            {conciergePhone}
          </a>
        </div>
        <div>
          <strong>Hours: </strong>
          <span style={{ color: 'var(--olenna-color-text-muted)' }}>{hoursText}</span>
        </div>
      </div>

      {onBookAppointment && (
        <button
          type="button"
          onClick={onBookAppointment}
          style={{
            marginTop: '0.5rem',
            padding: '0.625rem 1.25rem',
            borderRadius: 'var(--olenna-border-radius-xs, 4px)',
            backgroundColor: 'var(--olenna-color-action-primary-default, #493541)',
            color: 'var(--olenna-color-action-primary-text, #FFFAF7)',
            border: 'none',
            fontSize: '0.8125rem',
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Request Private Consultation
        </button>
      )}
    </div>
  );
};
