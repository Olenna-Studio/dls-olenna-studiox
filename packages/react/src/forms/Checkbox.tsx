import React from 'react';
import { cn } from '../utils/cn';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  isInvalid?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({
  id: explicitId,
  label,
  isInvalid = false,
  disabled = false,
  className,
  style,
  checked,
  defaultChecked,
  ...props
}, ref) => {
  const generatedId = React.useId();
  const id = explicitId || `olenna-checkbox-${generatedId}`;

  return (
    <label
      htmlFor={id}
      className={cn(
        'olenna-checkbox-label',
        disabled && 'olenna-checkbox-label--disabled',
        className
      )}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.625rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        fontSize: '0.875rem',
        color: disabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)',
        ...style
      }}
    >
      <input
        ref={ref}
        type="checkbox"
        id={id}
        disabled={disabled}
        aria-invalid={isInvalid}
        checked={checked}
        defaultChecked={defaultChecked}
        style={{
          width: '1.125rem',
          height: '1.125rem',
          margin: 0,
          cursor: disabled ? 'not-allowed' : 'pointer',
          accentColor: 'var(--olenna-color-action-primary-default)',
          borderRadius: 'var(--olenna-border-radius-xs)'
        }}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
