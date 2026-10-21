import React from 'react';
import { cn } from '../utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  className,
  style,
  onClick,
  ...props
}, ref) => {
  const isDisabled = disabled || isLoading;

  const sizeMetrics: Record<ButtonSize, { height: string; padding: string; fontSize: string }> = {
    sm: { height: 'var(--olenna-component-button-height-sm, 2rem)', padding: '0 0.75rem', fontSize: '0.8125rem' },
    md: { height: 'var(--olenna-component-button-height-md, 2.5rem)', padding: '0 1.25rem', fontSize: '0.875rem' },
    lg: { height: 'var(--olenna-component-button-height-lg, 3rem)', padding: '0 1.75rem', fontSize: '1rem' }
  };

  const currentSize = sizeMetrics[size];

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: isDisabled ? 'var(--olenna-color-disabled-surface)' : 'var(--olenna-color-action-primary-default)',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-action-primary-text)',
          border: '1px solid transparent'
        };
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-action-secondary-text)',
          border: `1px solid ${isDisabled ? 'var(--olenna-color-disabled-border)' : 'var(--olenna-color-brand-champagne-400)'}`
        };
      case 'tertiary':
        return {
          backgroundColor: 'transparent',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)',
          border: '1px solid transparent'
        };
      case 'destructive':
        return {
          backgroundColor: isDisabled ? 'var(--olenna-color-disabled-surface)' : 'var(--olenna-color-action-destructive-default)',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-action-destructive-text)',
          border: '1px solid transparent'
        };
      case 'link':
        return {
          backgroundColor: 'transparent',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-link-default)',
          border: 'none',
          padding: 0,
          height: 'auto',
          textDecoration: 'underline'
        };
    }
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    width: fullWidth ? '100%' : 'auto',
    height: variant === 'link' ? 'auto' : currentSize.height,
    padding: variant === 'link' ? 0 : currentSize.padding,
    fontSize: currentSize.fontSize,
    fontFamily: 'var(--olenna-typography-fontFamily-sans)',
    fontWeight: 'var(--olenna-typography-fontWeight-medium)',
    letterSpacing: '0.02em',
    borderRadius: variant === 'link' ? 0 : 'var(--olenna-border-radius-sm)',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'all var(--olenna-motion-duration-fast) var(--olenna-motion-easing-standard)',
    userSelect: 'none',
    boxSizing: 'border-box',
    ...getVariantStyles(),
    ...style
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      ref={ref}
      type="button"
      disabled={isDisabled}
      aria-busy={isLoading}
      onClick={handleClick}
      style={buttonStyle}
      className={cn(
        'olenna-button',
        `olenna-button--${variant}`,
        `olenna-button--${size}`,
        fullWidth && 'olenna-button--full-width',
        isLoading && 'olenna-button--loading',
        className
      )}
      {...props}
    >
      {isLoading && (
        <span
          className="olenna-button__spinner"
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: '1em',
            height: '1em',
            border: '2px solid currentColor',
            borderRightColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 0.6s linear infinite'
          }}
        />
      )}
      {!isLoading && leftIcon && <span className="olenna-button__left-icon">{leftIcon}</span>}
      <span className="olenna-button__content">{children}</span>
      {!isLoading && rightIcon && <span className="olenna-button__right-icon">{rightIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';
