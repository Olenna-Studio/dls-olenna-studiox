import React from 'react';
import { cn } from '../utils/cn';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  name,
  size = 'md',
  className,
  style,
  ...props
}) => {
  const pixelSizes: Record<AvatarSize, number> = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64
  };

  const px = pixelSizes[size];

  const getInitials = (n: string) => {
    return n
      .split(' ')
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <div
      className={cn('olenna-avatar', `olenna-avatar--${size}`, className)}
      style={{
        position: 'relative',
        width: px,
        height: px,
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--olenna-color-surface-accent, #F5E3EA)',
        color: 'var(--olenna-color-text-primary, #493541)',
        fontWeight: 600,
        fontSize: px * 0.4,
        border: '1px solid var(--olenna-color-border-accent, #DFC7B0)',
        userSelect: 'none',
        flexShrink: 0,
        ...style
      }}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : name ? (
        getInitials(name)
      ) : (
        <svg width="60%" height="60%" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )}
    </div>
  );
};

export interface AvatarGroupProps {
  max?: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  max = 4,
  children,
  className,
  style
}) => {
  const childrenArray = React.Children.toArray(children);
  const visible = childrenArray.slice(0, max);
  const excess = childrenArray.length - max;

  return (
    <div
      className={cn('olenna-avatar-group', className)}
      style={{ display: 'inline-flex', alignItems: 'center', ...style }}
    >
      {visible.map((child, idx) => (
        <div key={idx} style={{ marginLeft: idx === 0 ? 0 : '-0.5rem', zIndex: max - idx }}>
          {child}
        </div>
      ))}
      {excess > 0 && (
        <div
          style={{
            marginLeft: '-0.5rem',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            backgroundColor: 'var(--olenna-color-surface-subtle)',
            color: 'var(--olenna-color-text-secondary)',
            fontSize: '0.75rem',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid var(--olenna-color-surface-card)'
          }}
        >
          +{excess}
        </div>
      )}
    </div>
  );
};
