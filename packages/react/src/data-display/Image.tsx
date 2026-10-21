import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: '1/1' | '4/3' | '16/9' | '3/4' | '2/3';
  fallbackSrc?: string;
  radius?: 'none' | 'sm' | 'md' | 'lg';
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(({
  src,
  alt = '',
  aspectRatio,
  fallbackSrc,
  radius = 'sm',
  className,
  style,
  onError,
  ...props
}, ref) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc && !hasError) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
    onError?.(e);
  };

  const radii = {
    none: '0',
    sm: 'var(--olenna-border-radius-sm)',
    md: 'var(--olenna-border-radius-md)',
    lg: 'var(--olenna-border-radius-lg)'
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: aspectRatio,
        overflow: 'hidden',
        borderRadius: radii[radius]
      }}
    >
      <img
        ref={ref}
        src={currentSrc}
        alt={alt}
        onError={handleError}
        className={cn('olenna-image', className)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          ...style
        }}
        {...props}
      />
    </div>
  );
});

Image.displayName = 'Image';
