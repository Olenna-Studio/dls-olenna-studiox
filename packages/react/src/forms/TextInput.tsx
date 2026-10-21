import React from 'react';
import { cn } from '../utils/cn';
import { useFormField } from './FormField';

export type InputSize = 'sm' | 'md' | 'lg';

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  isInvalid?: boolean;
  prefixAdornment?: React.ReactNode;
  suffixAdornment?: React.ReactNode;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({
  id: explicitId,
  size = 'md',
  isInvalid: explicitInvalid,
  disabled: explicitDisabled,
  required: explicitRequired,
  prefixAdornment,
  suffixAdornment,
  className,
  style,
  ...props
}, ref) => {
  const field = useFormField();
  const id = explicitId || field?.id;
  const isInvalid = explicitInvalid ?? field?.isInvalid;
  const isDisabled = explicitDisabled ?? field?.isDisabled;
  const isRequired = explicitRequired ?? field?.isRequired;

  const heights: Record<InputSize, string> = {
    sm: 'var(--olenna-component-input-height-sm, 2rem)',
    md: 'var(--olenna-component-input-height-md, 2.5rem)',
    lg: 'var(--olenna-component-input-height-lg, 3rem)'
  };

  const fontSizes: Record<InputSize, string> = {
    sm: '0.8125rem',
    md: '0.875rem',
    lg: '1rem'
  };

  const describedBy = [
    field?.helpTextId,
    isInvalid ? field?.errorId : undefined
  ].filter(Boolean).join(' ') || undefined;

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: heights[size],
    backgroundColor: isDisabled ? 'var(--olenna-color-disabled-surface)' : 'var(--olenna-color-surface-card)',
    border: `1px solid ${isInvalid ? 'var(--olenna-color-feedback-danger-500)' : 'var(--olenna-color-border-default)'}`,
    borderRadius: 'var(--olenna-border-radius-sm)',
    padding: '0 0.75rem',
    gap: '0.5rem',
    boxSizing: 'border-box',
    transition: 'border-color var(--olenna-motion-duration-fast) var(--olenna-motion-easing-standard), box-shadow var(--olenna-motion-duration-fast)',
    ...style
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    height: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'var(--olenna-typography-fontFamily-sans)',
    fontSize: fontSizes[size],
    color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)',
    cursor: isDisabled ? 'not-allowed' : 'text',
    minWidth: 0
  };

  return (
    <div
      className={cn(
        'olenna-input-wrapper',
        `olenna-input-wrapper--${size}`,
        isInvalid && 'olenna-input-wrapper--invalid',
        isDisabled && 'olenna-input-wrapper--disabled',
        className
      )}
      style={containerStyle}
    >
      {prefixAdornment && <span className="olenna-input__prefix">{prefixAdornment}</span>}
      <input
        ref={ref}
        id={id}
        disabled={isDisabled}
        required={isRequired}
        aria-invalid={isInvalid}
        aria-describedby={describedBy}
        style={inputStyle}
        className="olenna-input"
        {...props}
      />
      {suffixAdornment && <span className="olenna-input__suffix">{suffixAdornment}</span>}
    </div>
  );
});

TextInput.displayName = 'TextInput';
