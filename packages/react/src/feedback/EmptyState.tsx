import React from 'react';
import { cn } from '../utils/cn';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className,
  style
}) => {
  return (
    <div
      className={cn('olenna-empty-state', className)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '3rem 1.5rem',
        borderRadius: 'var(--olenna-border-radius-md)',
        border: '1px dashed var(--olenna-color-border-default)',
        backgroundColor: 'var(--olenna-color-surface-subtle)',
        ...style
      }}
    >
      {icon && (
        <div style={{ marginBottom: '1rem', color: 'var(--olenna-color-text-muted)' }}>
          {icon}
        </div>
      )}
      <h3
        style={{
          fontFamily: 'var(--olenna-typography-fontFamily-serif)',
          fontSize: '1.25rem',
          margin: '0 0 0.5rem 0',
          color: 'var(--olenna-color-text-primary)'
        }}
      >
        {title}
      </h3>
      {description && (
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--olenna-color-text-secondary)',
            maxWidth: '24rem',
            margin: '0 0 1.25rem 0',
            lineHeight: 1.5
          }}
        >
          {description}
        </p>
      )}
      {action && <div>{action}</div>}
    </div>
  );
};
