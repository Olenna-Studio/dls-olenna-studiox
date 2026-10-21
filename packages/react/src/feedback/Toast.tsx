import React, { createContext, useContext, useState } from 'react';
import { cn } from '../utils/cn';
import { AlertStatus } from './Alert';

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  status?: AlertStatus;
  duration?: number;
}

interface ToastContextValue {
  toast: (options: Omit<ToastItem, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    return {
      toast: () => {},
      removeToast: () => {}
    };
  }
  return ctx;
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toast = (options: Omit<ToastItem, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const newToast: ToastItem = { id, ...options };
    setToasts((prev) => [...prev, newToast]);

    const duration = options.duration ?? 4000;
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  };

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      <div
        aria-live="polite"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 'var(--olenna-zIndex-toast, 1400)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          maxWidth: '22rem',
          pointerEvents: 'none'
        }}
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={cn('olenna-toast', `olenna-toast--${t.status || 'info'}`)}
            style={{
              pointerEvents: 'auto',
              backgroundColor: 'var(--olenna-color-surface-elevated)',
              border: '1px solid var(--olenna-color-border-default)',
              boxShadow: 'var(--olenna-shadow-lg)',
              borderRadius: 'var(--olenna-border-radius-md)',
              padding: '0.875rem 1rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              animation: 'slideUp 0.25s ease-out'
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--olenna-color-text-primary)' }}>
                {t.title}
              </div>
              {t.description && (
                <div style={{ fontSize: '0.8125rem', color: 'var(--olenna-color-text-secondary)', marginTop: '0.25rem' }}>
                  {t.description}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => removeToast(t.id)}
              aria-label="Close notification"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--olenna-color-text-muted)',
                padding: 0
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
