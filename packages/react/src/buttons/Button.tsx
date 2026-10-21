import React from 'react';
import { cn } from '../utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'tertiary' | 'destructive' | 'link' | 'circle';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

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
    sm: { height: 'var(--olenna-component-button-height-sm, 2.25rem)', padding: 'var(--olenna-component-button-padding-sm, 0.5rem 1.125rem)', fontSize: '0.8125rem' },
    md: { height: 'var(--olenna-component-button-height-md, 2.75rem)', padding: 'var(--olenna-component-button-padding-md, 0.6875rem 1.5rem)', fontSize: '0.875rem' },
    lg: { height: 'var(--olenna-component-button-height-lg, 3.25rem)', padding: 'var(--olenna-component-button-padding-lg, 0.875rem 2rem)', fontSize: '1rem' },
    icon: { height: 'var(--olenna-component-button-height-md, 2.75rem)', padding: '0', fontSize: '1rem' }
  };

  const currentSize = sizeMetrics[size];

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: isDisabled ? 'var(--olenna-color-disabled-surface)' : 'var(--olenna-color-action-primary-default, #493541)',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-action-primary-text, #FFFFFF)',
          border: '1px solid transparent',
          boxShadow: 'var(--olenna-shadow-sm, 0 1px 2px 0 rgba(73, 53, 65, 0.05))'
        };
      case 'secondary':
        return {
          backgroundColor: isDisabled ? 'var(--olenna-color-disabled-surface)' : 'var(--olenna-color-action-secondary-default, #DCC5D8)',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-action-secondary-text, #33232D)',
          border: '1px solid transparent'
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)',
          border: '1px solid var(--olenna-color-border-strong)'
        };
      case 'ghost':
      case 'tertiary':
        return {
          backgroundColor: 'transparent',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)',
          border: '1px solid transparent'
        };
      case 'circle':
        return {
          backgroundColor: 'var(--olenna-color-surface-elevated, #FFFFFF)',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)',
          border: '1px solid var(--olenna-color-border-default)',
          boxShadow: 'var(--olenna-shadow-sm, 0 1px 2px 0 rgba(73, 53, 65, 0.05))'
        };
      case 'destructive':
        return {
          backgroundColor: isDisabled ? 'var(--olenna-color-disabled-surface)' : 'var(--olenna-color-action-destructive-default, #DC2626)',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-action-destructive-text, #FFFFFF)',
          border: '1px solid transparent'
        };
      case 'link':
        return {
          backgroundColor: 'transparent',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-link-default, #A66B83)',
          border: 'none',
          padding: 0,
          height: 'auto',
          textDecoration: 'underline'
        };
    }
  };

  const isSquareOrCircle = variant === 'circle' || size === 'icon';

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: size === 'sm' ? '0.375rem' : size === 'lg' ? '0.625rem' : '0.5rem',
    width: fullWidth ? '100%' : isSquareOrCircle ? currentSize.height : 'auto',
    minHeight: variant === 'link' ? 'auto' : currentSize.height,
    height: variant === 'link' ? 'auto' : currentSize.height,
    padding: variant === 'link' || isSquareOrCircle ? 0 : currentSize.padding,
    fontSize: currentSize.fontSize,
    fontFamily: 'var(--olenna-typography-fontFamily-sans)',
    fontWeight: 'var(--olenna-typography-fontWeight-medium)',
    letterSpacing: '0.02em',
    lineHeight: 1.25,
    borderRadius: variant === 'link' ? 0 : 'var(--olenna-component-button-radius, var(--olenna-border-radius-full, 9999px))',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'all var(--olenna-motion-duration-fast) var(--olenna-motion-easing-standard)',
    userSelect: 'none',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
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
