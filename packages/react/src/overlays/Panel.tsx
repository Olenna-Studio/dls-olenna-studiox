import React from 'react';
import { cn } from '../utils/cn';

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(({
  className,
  style,
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('olenna-panel', className)}
      style={{
        padding: '1.25rem',
        backgroundColor: 'var(--olenna-color-surface-subtle)',
        color: 'var(--olenna-color-text-primary)',
        border: '1px solid var(--olenna-color-border-default)',
        borderRadius: 'var(--olenna-border-radius-md)',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
});

Panel.displayName = 'Panel';
