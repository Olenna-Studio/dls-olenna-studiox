import React from 'react';
import { cn } from '../utils/cn';
import { ButtonSize, ButtonVariant } from './Button';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(({
  'aria-label': ariaLabel,
  variant = 'tertiary',
  size = 'md',
  rounded = false,
  isLoading = false,
  disabled = false,
  children,
  className,
  style,
  ...props
}, ref) => {
  const isDisabled = disabled || isLoading;

  const sizePixels: Record<ButtonSize, string> = {
    sm: 'var(--olenna-component-button-height-sm, 2rem)',
    md: 'var(--olenna-component-button-height-md, 2.5rem)',
    lg: 'var(--olenna-component-button-height-lg, 3rem)',
    icon: 'var(--olenna-component-button-height-md, 2.5rem)'
  };

  const dim = sizePixels[size];

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: isDisabled ? 'var(--olenna-color-disabled-surface)' : 'var(--olenna-color-action-primary-default, #493541)',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-action-primary-text, #FFFFFF)',
          border: '1px solid transparent'
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
      default:
        return {
          backgroundColor: 'transparent',
          color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-link-default, #A66B83)',
          border: 'none'
        };
    }
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dim,
    height: dim,
    padding: 0,
    borderRadius: rounded ? 'var(--olenna-border-radius-full)' : 'var(--olenna-border-radius-sm)',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'all var(--olenna-motion-duration-fast) var(--olenna-motion-easing-standard)',
    boxSizing: 'border-box',
    ...getVariantStyles(),
    ...style
  };

  return (
    <button
      ref={ref}
      type="button"
      aria-label={ariaLabel}
      aria-busy={isLoading}
      disabled={isDisabled}
      style={buttonStyle}
      className={cn('olenna-icon-button', `olenna-icon-button--${size}`, className)}
      {...props}
    >
      {isLoading ? (
        <span
          className="olenna-icon-button__spinner"
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
      ) : (
        children
      )}
    </button>
  );
});

IconButton.displayName = 'IconButton';
