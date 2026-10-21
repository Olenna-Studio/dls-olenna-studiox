import React from 'react';
import { cn } from '../utils/cn';

export interface ProgressProps {
  value?: number; // 0 to 100
  max?: number;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  label = 'Progress',
  className,
  style
}) => {
  const isIndeterminate = value === undefined;
  const percentage = isIndeterminate ? 0 : Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={isIndeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn('olenna-progress', className)}
      style={{
        position: 'relative',
        width: '100%',
        height: '0.5rem',
        backgroundColor: 'var(--olenna-color-surface-subtle)',
        border: '1px solid var(--olenna-color-border-subtle)',
        borderRadius: 'var(--olenna-border-radius-full)',
        overflow: 'hidden',
        ...style
      }}
    >
      <div
        style={{
          width: isIndeterminate ? '30%' : `${percentage}%`,
          height: '100%',
          backgroundColor: 'var(--olenna-color-action-primary-default)',
          borderRadius: 'var(--olenna-border-radius-full)',
          transition: isIndeterminate ? 'none' : 'width var(--olenna-motion-duration-normal) ease',
          animation: isIndeterminate ? 'indeterminate 1.5s infinite linear' : 'none'
        }}
      />
    </div>
  );
};
