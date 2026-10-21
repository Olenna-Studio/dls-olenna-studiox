import React from 'react';
import { cn } from '../utils/cn';

export interface SwitchProps {
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Switch: React.FC<SwitchProps> = ({
  id: explicitId,
  checked: controlledChecked,
  defaultChecked = false,
  disabled = false,
  label,
  onChange,
  className,
  style
}) => {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;
  const generatedId = React.useId();
  const id = explicitId || `olenna-switch-${generatedId}`;

  const toggle = () => {
    if (disabled) return;
    const next = !isChecked;
    if (controlledChecked === undefined) {
      setInternalChecked(next);
    }
    onChange?.(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <label
      htmlFor={id}
      className={cn('olenna-switch-label', disabled && 'olenna-switch-label--disabled', className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.625rem',
        cursor: disabled ? 'not-allowed' : 'pointer',
        userSelect: 'none',
        fontSize: '0.875rem',
        ...style
      }}
    >
      <button
        id={id}
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        style={{
          position: 'relative',
          width: '2.5rem',
          height: '1.375rem',
          padding: 0,
          backgroundColor: isChecked ? 'var(--olenna-color-action-primary-default)' : 'var(--olenna-color-border-strong, #8E7A87)',
          borderRadius: 'var(--olenna-border-radius-full)',
          border: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background-color var(--olenna-motion-duration-fast)',
          outline: 'none'
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '2px',
            left: isChecked ? 'calc(100% - 1.125rem - 2px)' : '2px',
            width: '1.125rem',
            height: '1.125rem',
            backgroundColor: isChecked ? 'var(--olenna-color-action-primary-text, #FFFFFF)' : 'var(--olenna-color-surface-elevated, #FFFFFF)',
            borderRadius: '50%',
            boxShadow: 'var(--olenna-shadow-sm)',
            transition: 'left var(--olenna-motion-duration-fast) var(--olenna-motion-easing-standard)'
          }}
        />
      </button>
      {label && <span style={{ color: disabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)' }}>{label}</span>}
    </label>
  );
};
