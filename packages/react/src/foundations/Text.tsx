import React from 'react';
import { cn } from '../utils/cn';

export type TextVariant = 'body' | 'lead' | 'caption' | 'muted' | 'code';
export type TextSize = '2xs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl';
export type TextWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: TextVariant;
  size?: TextSize;
  weight?: TextWeight;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(({
  as: Component = 'p',
  variant = 'body',
  size = 'base',
  weight,
  align,
  className,
  style,
  children,
  ...props
}, ref) => {
  const sizeStyles: Record<TextSize, string> = {
    '2xs': '0.6875rem',
    'xs': 'var(--olenna-typography-fontSize-xs)',
    'sm': 'var(--olenna-typography-fontSize-sm)',
    'base': 'var(--olenna-typography-fontSize-base)',
    'lg': 'var(--olenna-typography-fontSize-lg)',
    'xl': 'var(--olenna-typography-fontSize-xl)'
  };

  const variantColors: Record<TextVariant, string> = {
    body: 'var(--olenna-color-text-primary)',
    lead: 'var(--olenna-color-text-primary)',
    caption: 'var(--olenna-color-text-secondary)',
    muted: 'var(--olenna-color-text-muted)',
    code: 'var(--olenna-color-text-primary)'
  };

  const customStyle: React.CSSProperties = {
    fontSize: sizeStyles[size],
    color: variantColors[variant],
    fontFamily: variant === 'code' ? 'var(--olenna-typography-fontFamily-mono)' : 'var(--olenna-typography-fontFamily-sans)',
    textAlign: align,
    margin: 0,
    fontWeight: weight ? `var(--olenna-typography-fontWeight-${weight})` : undefined,
    ...style
  };

  return (
    <Component
      ref={ref}
      style={customStyle}
      className={cn('olenna-text', `olenna-text--${variant}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
});

Text.displayName = 'Text';
