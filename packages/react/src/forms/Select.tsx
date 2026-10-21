import React from 'react';
import { cn } from '../utils/cn';
import { useFormField } from './FormField';
import { InputSize } from './TextInput';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: InputSize;
  isInvalid?: boolean;
  options?: SelectOption[];
  children?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({
  id: explicitId,
  size = 'md',
  isInvalid: explicitInvalid,
  disabled: explicitDisabled,
  required: explicitRequired,
  options,
  children,
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

  const describedBy = [
    field?.helpTextId,
    isInvalid ? field?.errorId : undefined
  ].filter(Boolean).join(' ') || undefined;

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    height: heights[size],
    boxSizing: 'border-box'
  };

  const selectStyle: React.CSSProperties = {
    appearance: 'none',
    WebkitAppearance: 'none',
    width: '100%',
    height: '100%',
    backgroundColor: isDisabled ? 'var(--olenna-color-disabled-surface)' : 'var(--olenna-color-surface-card)',
    color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)',
    border: `1px solid ${isInvalid ? 'var(--olenna-color-feedback-danger-500)' : 'var(--olenna-color-border-default)'}`,
    borderRadius: 'var(--olenna-border-radius-sm)',
    padding: '0 2rem 0 0.75rem',
    fontFamily: 'var(--olenna-typography-fontFamily-sans)',
    fontSize: size === 'sm' ? '0.8125rem' : '0.875rem',
    outline: 'none',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    ...style
  };

  return (
    <div className={cn('olenna-select-wrapper', className)} style={containerStyle}>
      <select
        ref={ref}
        id={id}
        disabled={isDisabled}
        required={isRequired}
        aria-invalid={isInvalid}
        aria-describedby={describedBy}
        style={selectStyle}
        className="olenna-select"
        {...props}
      >
        {options
          ? options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))
          : children}
      </select>
      {/* Down Chevron Indicator */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '0.75rem',
          pointerEvents: 'none',
          color: 'var(--olenna-color-text-muted)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </div>
  );
});

Select.displayName = 'Select';
