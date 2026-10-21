import React from 'react';
import { cn } from '../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline' | 'subtle';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({
  variant = 'default',
  padding = 'md',
  className,
  style,
  children,
  ...props
}, ref) => {
  const paddings: Record<string, string> = {
    none: '0',
    sm: 'var(--olenna-component-card-padding-sm, 1rem)',
    md: 'var(--olenna-component-card-padding-md, 1.5rem)',
    lg: 'var(--olenna-component-card-padding-lg, 2rem)'
  };

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'default':
        return {
          backgroundColor: 'var(--olenna-color-surface-card)',
          border: '1px solid var(--olenna-color-border-default)',
          boxShadow: 'var(--olenna-shadow-sm)'
        };
      case 'elevated':
        return {
          backgroundColor: 'var(--olenna-color-surface-elevated)',
          border: '1px solid var(--olenna-color-border-subtle)',
          boxShadow: 'var(--olenna-shadow-md)'
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          border: '1px solid var(--olenna-color-border-strong)'
        };
      case 'subtle':
        return {
          backgroundColor: 'var(--olenna-color-surface-subtle)',
          border: '1px solid transparent'
        };
    }
  };

  return (
    <div
      ref={ref}
      className={cn('olenna-card', `olenna-card--${variant}`, className)}
      style={{
        borderRadius: 'var(--olenna-border-radius-md)',
        padding: paddings[padding],
        color: 'var(--olenna-color-text-primary)',
        boxSizing: 'border-box',
        transition: 'transform var(--olenna-motion-duration-fast), box-shadow var(--olenna-motion-duration-fast)',
        ...getVariantStyles(),
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, style, children, ...props }) => (
  <div className={cn('olenna-card-header', className)} style={{ marginBottom: '1rem', ...style }} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, style, children, ...props }) => (
  <h3
    className={cn('olenna-card-title', className)}
    style={{
      fontFamily: 'var(--olenna-typography-fontFamily-serif)',
      fontSize: '1.25rem',
      fontWeight: 600,
      color: 'var(--olenna-color-text-primary)',
      margin: 0,
      ...style
    }}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, style, children, ...props }) => (
  <p
    className={cn('olenna-card-description', className)}
    style={{
      fontSize: '0.875rem',
      color: 'var(--olenna-color-text-secondary)',
      margin: '0.25rem 0 0 0',
      ...style
    }}
    {...props}
  >
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, style, children, ...props }) => (
  <div className={cn('olenna-card-content', className)} style={style} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, style, children, ...props }) => (
  <div
    className={cn('olenna-card-footer', className)}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: '0.75rem',
      marginTop: '1.25rem',
      paddingTop: '1rem',
      borderTop: '1px solid var(--olenna-color-border-subtle)',
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);
