import React, { useState } from 'react';

export interface GalleryImage {
  src: string;
  alt: string;
  thumbnailSrc?: string;
}

export interface ProductImageGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  className
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const current = images[activeIndex];

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        gap: '1rem',
        width: '100%'
      }}
    >
      {/* Thumbnails */}
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              style={{
                width: '4.5rem',
                height: '4.5rem',
                flexShrink: 0,
                borderRadius: 'var(--olenna-border-radius-xs, 4px)',
                overflow: 'hidden',
                border: idx === activeIndex ? '2px solid var(--olenna-color-action-primary-default, #493541)' : '1px solid var(--olenna-color-border-default, #E8E2DF)',
                padding: 0,
                cursor: 'pointer',
                background: 'transparent'
              }}
              aria-label={`View image ${idx + 1}`}
            >
              <img
                src={img.thumbnailSrc || img.src}
                alt={img.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Primary Display */}
      <div
        style={{
          width: '100%',
          aspectRatio: '3/4',
          borderRadius: 'var(--olenna-border-radius-md, 8px)',
          overflow: 'hidden',
          backgroundColor: 'var(--olenna-color-surface-subtle, #FAF5F2)',
          boxShadow: 'var(--olenna-shadow-sm)'
        }}
      >
        <img
          src={current.src}
          alt={current.alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.2s ease' }}
        />
      </div>
    </div>
  );
};
