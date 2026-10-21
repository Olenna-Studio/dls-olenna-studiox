import React from 'react';
import { cn } from '../utils/cn';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'var(--olenna-color-action-primary-default)',
  label = 'Loading...',
  className,
  style
}) => {
  const pixelSizes = {
    sm: 16,
    md: 24,
    lg: 36
  };
  const px = pixelSizes[size];

  return (
    <div
      role="status"
      className={cn('olenna-spinner', `olenna-spinner--${size}`, className)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...style }}
    >
      <svg
        width={px}
        height={px}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{
          animation: 'spin 0.7s linear infinite'
        }}
      >
        <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
        <path d="M12 2a10 10 0 0 1 10 10" />
      </svg>
      <span className="olenna-sr-only">{label}</span>
    </div>
  );
};
