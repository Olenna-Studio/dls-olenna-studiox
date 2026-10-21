import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

export interface PopoverProps {
  trigger: React.ReactElement<any>;
  content: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  align = 'left',
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const clonedTrigger = React.cloneElement(trigger, {
    onClick: (e: React.MouseEvent) => {
      (trigger.props as any).onClick?.(e);
      setIsOpen((prev) => !prev);
    },
    'aria-expanded': isOpen
  });

  return (
    <div ref={containerRef} className={cn('olenna-popover-wrapper', className)} style={{ position: 'relative', display: 'inline-block' }}>
      {clonedTrigger}
      {isOpen && (
        <div
          role="dialog"
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            left: align === 'left' ? 0 : 'auto',
            right: align === 'right' ? 0 : 'auto',
            backgroundColor: 'var(--olenna-color-surface-elevated)',
            color: 'var(--olenna-color-text-primary)',
            border: '1px solid var(--olenna-color-border-default)',
            borderRadius: 'var(--olenna-border-radius-md)',
            boxShadow: 'var(--olenna-shadow-lg)',
            padding: '1rem',
            zIndex: 'var(--olenna-zIndex-popover, 1100)',
            minWidth: '16rem'
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};
