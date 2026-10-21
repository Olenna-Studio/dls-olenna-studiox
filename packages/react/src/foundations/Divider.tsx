import React from 'react';
import { cn } from '../utils/cn';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'accent' | 'subtle';
  label?: string;
}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(({
  orientation = 'horizontal',
  variant = 'default',
  label,
  className,
  style,
  ...props
}, ref) => {
  const borderColors: Record<string, string> = {
    default: 'var(--olenna-color-border-default)',
    accent: 'var(--olenna-color-brand-champagne-200)',
    subtle: 'var(--olenna-color-border-subtle)'
  };

  if (label && orientation === 'horizontal') {
    return (
      <div
        className={cn('olenna-divider-wrapper', className)}
        style={{ display: 'flex', alignItems: 'center', width: '100%', margin: '1.5rem 0', ...style }}
      >
        <div style={{ flex: 1, borderBottom: `1px solid ${borderColors[variant]}` }} />
        <span style={{
          padding: '0 1rem',
          fontSize: 'var(--olenna-typography-fontSize-xs)',
          color: 'var(--olenna-color-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {label}
        </span>
        <div style={{ flex: 1, borderBottom: `1px solid ${borderColors[variant]}` }} />
      </div>
    );
  }

  const dividerStyle: React.CSSProperties = orientation === 'horizontal' ? {
    width: '100%',
    border: 'none',
    borderBottom: `1px solid ${borderColors[variant]}`,
    margin: '1.5rem 0',
    ...style
  } : {
    height: '100%',
    minHeight: '1.25rem',
    border: 'none',
    borderLeft: `1px solid ${borderColors[variant]}`,
    margin: '0 0.75rem',
    display: 'inline-block',
    verticalAlign: 'middle',
    ...style
  };

  return (
    <hr
      ref={ref}
      aria-orientation={orientation}
      style={dividerStyle}
      className={cn('olenna-divider', `olenna-divider--${orientation}`, `olenna-divider--${variant}`, className)}
      {...props}
    />
  );
});

Divider.displayName = 'Divider';
