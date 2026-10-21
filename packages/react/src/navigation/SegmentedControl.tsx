import React from 'react';
import { cn } from '../utils/cn';

export interface SegmentedControlOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  options: SegmentedControlOption[];
  value: string;
  onChange: (value: string) => void;
  size?: 'sm' | 'md';
  className?: string;
  style?: React.CSSProperties;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
  size = 'md',
  className,
  style
}) => {
  return (
    <div
      role="radiogroup"
      className={cn('olenna-segmented-control', `olenna-segmented-control--${size}`, className)}
      style={{
        display: 'inline-flex',
        padding: '0.25rem',
        backgroundColor: 'var(--olenna-color-neutral-100)',
        borderRadius: 'var(--olenna-border-radius-sm)',
        border: '1px solid var(--olenna-color-border-subtle)',
        gap: '0.25rem',
        ...style
      }}
    >
      {options.map((opt) => {
        const isSelected = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={opt.disabled}
            onClick={() => onChange(opt.value)}
            style={{
              padding: size === 'sm' ? '0.25rem 0.625rem' : '0.375rem 0.875rem',
              fontSize: size === 'sm' ? '0.75rem' : '0.8125rem',
              fontFamily: 'var(--olenna-typography-fontFamily-sans)',
              fontWeight: isSelected ? 600 : 400,
              backgroundColor: isSelected ? 'var(--olenna-color-surface-card)' : 'transparent',
              color: isSelected ? 'var(--olenna-color-text-primary)' : 'var(--olenna-color-text-secondary)',
              boxShadow: isSelected ? 'var(--olenna-shadow-sm)' : 'none',
              border: 'none',
              borderRadius: 'var(--olenna-border-radius-xs)',
              cursor: opt.disabled ? 'not-allowed' : 'pointer',
              transition: 'all var(--olenna-motion-duration-fast)'
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
