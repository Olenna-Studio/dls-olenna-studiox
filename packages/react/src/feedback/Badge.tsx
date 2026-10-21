import React from 'react';
import { cn } from '../utils/cn';

export type BadgeVariant = 'default' | 'blush' | 'champagne' | 'plum' | 'outline' | 'success' | 'warning' | 'danger';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  className,
  style,
  children,
  ...props
}) => {
  const variantStyles: Record<BadgeVariant, { bg: string; color: string; border: string }> = {
    default: {
      bg: 'var(--olenna-color-neutral-100)',
      color: 'var(--olenna-color-text-primary)',
      border: 'transparent'
    },
    blush: {
      bg: 'var(--olenna-color-brand-blush-100)',
      color: 'var(--olenna-color-brand-plum-900)',
      border: 'transparent'
    },
    champagne: {
      bg: 'var(--olenna-color-brand-champagne-100)',
      color: 'var(--olenna-color-brand-champagne-600)',
      border: '1px solid var(--olenna-color-brand-champagne-200)'
    },
    plum: {
      bg: 'var(--olenna-color-brand-plum-900)',
      color: 'var(--olenna-color-brand-ivory-50)',
      border: 'transparent'
    },
    outline: {
      bg: 'transparent',
      color: 'var(--olenna-color-text-secondary)',
      border: '1px solid var(--olenna-color-border-default)'
    },
    success: {
      bg: 'var(--olenna-color-status-success-surface)',
      color: 'var(--olenna-color-status-success-text)',
      border: 'transparent'
    },
    warning: {
      bg: 'var(--olenna-color-status-warning-surface)',
      color: 'var(--olenna-color-status-warning-text)',
      border: 'transparent'
    },
    danger: {
      bg: 'var(--olenna-color-status-danger-surface)',
      color: 'var(--olenna-color-status-danger-text)',
      border: 'transparent'
    }
  };

  const curr = variantStyles[variant];

  return (
    <span
      className={cn('olenna-badge', `olenna-badge--${variant}`, `olenna-badge--${size}`, className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: size === 'sm' ? '0.125rem 0.5rem' : '0.25rem 0.75rem',
        fontSize: size === 'sm' ? '0.6875rem' : '0.75rem',
        fontFamily: 'var(--olenna-typography-fontFamily-sans)',
        fontWeight: 600,
        letterSpacing: '0.03em',
        textTransform: 'uppercase',
        borderRadius: 'var(--olenna-border-radius-full)',
        backgroundColor: curr.bg,
        color: curr.color,
        border: curr.border !== 'transparent' ? curr.border : undefined,
        lineHeight: 1.2,
        ...style
      }}
      {...props}
    >
      {children}
    </span>
  );
};
