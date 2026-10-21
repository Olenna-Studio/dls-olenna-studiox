import React, { useId, useState } from 'react';
import { cn } from '../utils/cn';

export interface TooltipProps {
  content: React.ReactNode;
  position?: 'top' | 'bottom';
  children: React.ReactElement<any>;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  children,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const id = useId();

  const child = React.cloneElement(children, {
    'aria-describedby': isVisible ? id : undefined,
    onMouseEnter: (e: React.MouseEvent) => {
      (children.props as any).onMouseEnter?.(e);
      setIsVisible(true);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      (children.props as any).onMouseLeave?.(e);
      setIsVisible(false);
    },
    onFocus: (e: React.FocusEvent) => {
      (children.props as any).onFocus?.(e);
      setIsVisible(true);
    },
    onBlur: (e: React.FocusEvent) => {
      (children.props as any).onBlur?.(e);
      setIsVisible(false);
    }
  });

  return (
    <div className={cn('olenna-tooltip-wrapper', className)} style={{ position: 'relative', display: 'inline-flex' }}>
      {child}
      {isVisible && (
        <div
          id={id}
          role="tooltip"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            [position === 'top' ? 'bottom' : 'top']: 'calc(100% + 6px)',
            backgroundColor: 'var(--olenna-color-brand-plum-950, #211B17)',
            color: 'var(--olenna-color-brand-ivory-50, #FFFAF7)',
            padding: '0.25rem 0.5rem',
            borderRadius: 'var(--olenna-border-radius-xs, 4px)',
            fontSize: '0.75rem',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 'var(--olenna-zIndex-tooltip, 1500)',
            boxShadow: 'var(--olenna-shadow-md)'
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};
