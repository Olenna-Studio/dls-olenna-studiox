import React from 'react';

export interface CustomerPwaBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onInstall?: () => void;
  onDismiss?: () => void;
  iconUrl?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const CustomerPwaBanner: React.FC<CustomerPwaBannerProps> = ({
  title = 'Experience Olenna StudioX',
  description = 'Install our Customer PWA for seamless boutique discovery, offline access, and bespoke concierge appointments.',
  buttonText = 'Install App',
  onInstall,
  onDismiss,
  iconUrl,
  className,
  style
}) => {
  return (
    <div
      className={className}
      role="banner"
      style={{
        borderRadius: 'var(--olenna-border-radius-md, 8px)',
        backgroundColor: 'var(--olenna-color-brand-blush-100, #F5E3EA)',
        border: '1px solid var(--olenna-color-brand-mauve-200, #DCC5D8)',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        ...style
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: '240px' }}>
        {iconUrl ? (
          <img src={iconUrl} alt="App icon" style={{ width: '40px', height: '40px', borderRadius: '8px' }} />
        ) : (
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: 'var(--olenna-color-brand-plum-900, #493541)',
              color: 'var(--olenna-color-brand-ivory-50, #FFFAF7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--olenna-typography-fontFamily-serif, serif)',
              fontWeight: 600,
              fontSize: '1.25rem'
            }}
          >
            O
          </div>
        )}
        <div>
          <h4 style={{ margin: 0, fontFamily: 'var(--olenna-typography-fontFamily-serif, serif)', fontSize: '1.125rem', color: 'var(--olenna-color-brand-plum-900, #493541)' }}>
            {title}
          </h4>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8125rem', color: 'var(--olenna-color-brand-plum-800, #593D4E)', lineHeight: 1.4 }}>
            {description}
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {onInstall && (
          <button
            type="button"
            onClick={onInstall}
            style={{
              backgroundColor: 'var(--olenna-color-brand-plum-900, #493541)',
              color: 'var(--olenna-color-brand-ivory-50, #FFFAF7)',
              padding: '0.5rem 1.25rem',
              borderRadius: 'var(--olenna-border-radius-xs, 4px)',
              border: 'none',
              fontSize: '0.8125rem',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.03em'
            }}
          >
            {buttonText}
          </button>
        )}
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss banner"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--olenna-color-brand-plum-700, #6D4C5E)',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};
