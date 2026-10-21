import React, { useEffect } from 'react';
import { cn } from '../utils/cn';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  placement?: 'left' | 'right';
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  placement = 'right',
  className
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="presentation"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--olenna-zIndex-drawer, 1200)',
        display: 'flex',
        justifyContent: placement === 'right' ? 'flex-end' : 'flex-start'
      }}
    >
      <div
        role="presentation"
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(51, 35, 45, 0.45)',
          backdropFilter: 'blur(2px)'
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn('olenna-drawer', className)}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '24rem',
          height: '100%',
          backgroundColor: 'var(--olenna-color-surface-elevated)',
          boxShadow: 'var(--olenna-shadow-2xl)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
          animation: placement === 'right' ? 'slideInRight 0.25s ease-out' : 'slideInLeft 0.25s ease-out'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--olenna-color-border-subtle)' }}>
          {title && (
            <h3 style={{ margin: 0, fontFamily: 'var(--olenna-typography-fontFamily-serif)', fontSize: '1.25rem' }}>
              {title}
            </h3>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close drawer"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--olenna-color-text-muted)', fontSize: '1.25rem' }}
          >
            ✕
          </button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>{children}</div>
      </div>
    </div>
  );
};
