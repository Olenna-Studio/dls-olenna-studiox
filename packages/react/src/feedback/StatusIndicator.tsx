import React from 'react';
import { cn } from '../utils/cn';

export type StatusType = 'online' | 'offline' | 'busy' | 'away';

export interface StatusIndicatorProps {
  status: StatusType;
  label?: string;
  pulse?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  pulse = false,
  className,
  style
}) => {
  const statusColors: Record<StatusType, string> = {
    online: 'var(--olenna-color-status-success-border, #22C55E)',
    offline: 'var(--olenna-color-neutral-400, #B5A59E)',
    busy: 'var(--olenna-color-status-danger-border, #EF4444)',
    away: 'var(--olenna-color-status-warning-border, #F59E0B)'
  };

  const color = statusColors[status];

  return (
    <span
      className={cn('olenna-status-indicator', `olenna-status-indicator--${status}`, className)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', ...style }}
    >
      <span
        aria-hidden="true"
        style={{
          width: '0.5rem',
          height: '0.5rem',
          borderRadius: '50%',
          backgroundColor: color,
          display: 'inline-block',
          boxShadow: pulse ? `0 0 0 2px ${color}40` : 'none'
        }}
      />
      {label && <span>{label}</span>}
      <span className="olenna-sr-only">Status: {status}</span>
    </span>
  );
};
