import React, { useState } from 'react';
import { cn } from '../utils/cn';

export interface DisclosureProps {
  summary: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Disclosure: React.FC<DisclosureProps> = ({
  summary,
  children,
  defaultOpen = false,
  className,
  style
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <details
      open={isOpen}
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
      className={cn('olenna-disclosure', className)}
      style={{
        border: '1px solid var(--olenna-color-border-default)',
        borderRadius: 'var(--olenna-border-radius-sm)',
        padding: '0.75rem 1rem',
        backgroundColor: 'var(--olenna-color-surface-card)',
        ...style
      }}
    >
      <summary
        style={{
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '0.875rem',
          color: 'var(--olenna-color-text-primary)',
          userSelect: 'none'
        }}
      >
        {summary}
      </summary>
      <div style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--olenna-color-text-secondary)', lineHeight: 1.5 }}>
        {children}
      </div>
    </details>
  );
};
