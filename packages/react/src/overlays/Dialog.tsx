import React, { useEffect } from 'react';
import { cn } from '../utils/cn';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  maxWidth = 'md',
  className
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
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

  const maxWidths = {
    sm: 'var(--olenna-component-dialog-maxWidth-sm, 28rem)',
    md: 'var(--olenna-component-dialog-maxWidth-md, 36rem)',
    lg: 'var(--olenna-component-dialog-maxWidth-lg, 48rem)'
  };

  return (
    <div
      role="presentation"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--olenna-zIndex-modal, 1300)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      {/* Backdrop */}
      <div
        role="presentation"
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(51, 35, 45, 0.45)',
          backdropFilter: 'blur(3px)',
          animation: 'fadeIn 0.2s ease-out'
        }}
      />
      {/* Dialog Window */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'olenna-dialog-title' : undefined}
        aria-describedby={description ? 'olenna-dialog-desc' : undefined}
        className={cn('olenna-dialog', className)}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: maxWidths[maxWidth],
          backgroundColor: 'var(--olenna-color-surface-elevated)',
          border: '1px solid var(--olenna-color-border-default)',
          borderRadius: 'var(--olenna-border-radius-lg)',
          boxShadow: 'var(--olenna-shadow-2xl)',
          padding: '1.5rem',
          zIndex: 1,
          animation: 'scaleIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div>
            {title && (
              <h2
                id="olenna-dialog-title"
                style={{
                  margin: 0,
                  fontFamily: 'var(--olenna-typography-fontFamily-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--olenna-color-text-primary)'
                }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                id="olenna-dialog-desc"
                style={{
                  margin: '0.25rem 0 0 0',
                  fontSize: '0.875rem',
                  color: 'var(--olenna-color-text-secondary)'
                }}
              >
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--olenna-color-text-muted)',
              fontSize: '1.25rem',
              padding: '0.25rem'
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ margin: '1rem 0' }}>{children}</div>

        {footer && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '0.75rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--olenna-color-border-subtle)'
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
