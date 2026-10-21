import React from 'react';
import { cn } from '../utils/cn';

export interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'wordmark' | 'emblem';
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
  priority?: boolean;
  href?: string;
  basePath?: string;
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  variant = 'horizontal',
  size = 'md',
  withTagline = false,
  priority = false,
  href,
  basePath = '',
  src: customSrc,
  alt = 'Olenna Luxury Beauty, Fashion & Lifestyle',
  style
}) => {
  const dimensions = {
    horizontal: {
      sm: { width: 140, height: 31, className: 'h-7 w-auto' },
      md: { width: 180, height: 40, className: 'h-9 sm:h-10 w-auto' },
      lg: { width: 220, height: 48, className: 'h-11 sm:h-12 w-auto' }
    },
    stacked: {
      sm: { width: 110, height: 89, className: 'w-24 h-auto' },
      md: { width: 150, height: 121, className: 'w-32 sm:w-36 h-auto' },
      lg: { width: 190, height: 153, className: 'w-40 sm:w-48 h-auto' }
    },
    wordmark: {
      sm: { width: 120, height: 36, className: 'h-7 w-auto' },
      md: { width: 155, height: 47, className: 'h-8 sm:h-9 w-auto' },
      lg: { width: 190, height: 57, className: 'h-10 sm:h-11 w-auto' }
    },
    emblem: {
      sm: { width: 32, height: 29, className: 'h-7 w-auto' },
      md: { width: 44, height: 39, className: 'h-9 w-auto' },
      lg: { width: 56, height: 50, className: 'h-12 w-auto' }
    }
  };

  const assetSources = {
    horizontal: '/images/logo/olenna-horizontal.webp',
    stacked: '/images/logo/olenna-logo-full.webp',
    wordmark: '/images/logo/olenna-wordmark.webp',
    emblem: '/images/logo/olenna-emblem.webp'
  };

  const currentDim = dimensions[variant][size];
  const resolvedSrc = customSrc || `${basePath}${assetSources[variant]}`;

  const imageElement = (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: 'fit-content'
      }}
    >
      <img
        src={resolvedSrc}
        alt={alt}
        width={currentDim.width}
        height={currentDim.height}
        loading={priority ? 'eager' : 'lazy'}
        style={{
          objectFit: 'contain',
          maxWidth: '100%',
          height: 'auto',
          aspectRatio: `${currentDim.width} / ${currentDim.height}`,
          display: 'block'
        }}
        className={cn(currentDim.className)}
      />
    </div>
  );

  const content = (
    <>
      {imageElement}
      {withTagline && (
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--olenna-color-text-muted, #8E7A87)',
            letterSpacing: '0.05em',
            marginTop: '0.375rem',
            fontWeight: 300,
            display: 'block'
          }}
        >
          Everyday elegance, thoughtfully curated.
        </span>
      )}
    </>
  );

  const containerStyle: React.CSSProperties = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textDecoration: 'none',
    outline: 'none',
    ...style
  };

  if (href) {
    return (
      <a
        href={href}
        className={cn('olenna-logo-link group transition-opacity hover:opacity-95', className)}
        style={containerStyle}
        aria-label="Olenna — Everyday Elegance, Thoughtfully Curated"
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cn('olenna-logo-container', className)} style={containerStyle}>
      {content}
    </div>
  );
};
