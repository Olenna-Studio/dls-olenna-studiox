import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

export interface DropdownMenuProps {
  trigger: React.ReactElement<any>;
  children: React.ReactNode;
  align?: 'left' | 'right';
  className?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  children,
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
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
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
    'aria-haspopup': 'menu',
    'aria-expanded': isOpen
  });

  return (
    <div ref={containerRef} className={cn('olenna-dropdown-wrapper', className)} style={{ position: 'relative', display: 'inline-block' }}>
      {clonedTrigger}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.375rem)',
            left: align === 'left' ? 0 : 'auto',
            right: align === 'right' ? 0 : 'auto',
            zIndex: 'var(--olenna-zIndex-dropdown, 1000)'
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
