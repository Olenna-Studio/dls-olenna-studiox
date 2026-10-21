import React from 'react';

export interface CategoryCardProps {
  title: string;
  itemCount?: number;
  imageUrl: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  itemCount,
  imageUrl,
  href,
  onClick,
  className
}) => {
  const content = (
    <div
      className={className}
      onClick={onClick}
      style={{
        position: 'relative',
        borderRadius: 'var(--olenna-border-radius-md, 8px)',
        overflow: 'hidden',
        aspectRatio: '4/5',
        cursor: 'pointer',
        boxShadow: 'var(--olenna-shadow-sm)'
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.4s ease'
        }}
      />
      {/* Luxury Gradient Scrim */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(51, 35, 45, 0.85) 0%, rgba(51, 35, 45, 0.2) 50%, transparent 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '1.5rem',
          color: 'var(--olenna-color-brand-ivory-50, #FFFAF7)'
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--olenna-typography-fontFamily-serif, serif)',
            fontSize: '1.25rem',
            fontWeight: 500,
            margin: 0
          }}
        >
          {title}
        </h3>
        {itemCount !== undefined && (
          <span style={{ fontSize: '0.75rem', opacity: 0.85, marginTop: '0.25rem' }}>
            {itemCount} Curations
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none', display: 'block' }}>
        {content}
      </a>
    );
  }

  return content;
};
