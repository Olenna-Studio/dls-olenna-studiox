import React from 'react';
import { cn } from '../utils/cn';

export type AlertStatus = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: AlertStatus;
  title?: string;
  onDismiss?: () => void;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  status = 'info',
  title,
  onDismiss,
  className,
  style,
  children,
  ...props
}) => {
  const statusStyles: Record<AlertStatus, { bg: string; border: string; text: string; icon: string }> = {
    info: {
      bg: 'var(--olenna-color-status-info-surface, #F0F9FF)',
      border: 'var(--olenna-color-status-info-border, #0EA5E9)',
      text: 'var(--olenna-color-status-info-text, #0369A1)',
      icon: 'ℹ'
    },
    success: {
      bg: 'var(--olenna-color-status-success-surface, #F0FDF4)',
      border: 'var(--olenna-color-status-success-border, #22C55E)',
      text: 'var(--olenna-color-status-success-text, #15803D)',
      icon: '✓'
    },
    warning: {
      bg: 'var(--olenna-color-status-warning-surface, #FFFBEB)',
      border: 'var(--olenna-color-status-warning-border, #F59E0B)',
      text: 'var(--olenna-color-status-warning-text, #B45309)',
      icon: '⚠'
    },
    danger: {
      bg: 'var(--olenna-color-status-danger-surface, #FEF2F2)',
      border: 'var(--olenna-color-status-danger-border, #EF4444)',
      text: 'var(--olenna-color-status-danger-text, #B91C1C)',
      icon: '✕'
    }
  };

  const curr = statusStyles[status];

  return (
    <div
      role="alert"
      className={cn('olenna-alert', `olenna-alert--${status}`, className)}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '1rem',
        backgroundColor: curr.bg,
        border: `1px solid ${curr.border}`,
        borderRadius: 'var(--olenna-border-radius-sm)',
        color: curr.text,
        fontSize: '0.875rem',
        ...style
      }}
      {...props}
    >
      <span aria-hidden="true" style={{ fontWeight: 'bold', fontSize: '1rem', lineHeight: 1 }}>
        {curr.icon}
      </span>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
        {title && <strong style={{ fontWeight: 600 }}>{title}</strong>}
        <div>{children}</div>
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss alert"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'currentColor',
            padding: '0.25rem',
            lineHeight: 1
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};
