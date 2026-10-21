import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef
} from 'react';

export interface ToastOptions {
  title?: string;
  message: string;
  duration?: number;
  icon?: React.ReactNode;
}

export interface ToastContextValue {
  showToast: (options: ToastOptions | string) => void;
  showComingSoon: (customMessage?: string) => void;
  hideToast: () => void;
  toast: (options: { title: string; description?: string; message?: string; duration?: number }) => void;
  removeToast: (id?: string) => void;
}

export interface ToastProviderProps {
  children: React.ReactNode;
  /**
   * Automatically intercept clicks on 'Shop Online' / Customer PWA links
   * and present the brand 'Online Store Coming Soon' notification.
   * Defaults to true.
   */
  interceptShopLinks?: boolean;
}

const ToastContext = createContext<ToastContextValue | null>(null);

function ShoppingBagIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  interceptShopLinks = true
}) => {
  const [toast, setToast] = useState<ToastOptions | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const hideToast = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setToast(null);
  }, []);

  const showToast = useCallback((options: ToastOptions | string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    const toastData: ToastOptions =
      typeof options === 'string' ? { message: options } : options;

    setToast(toastData);

    const duration = toastData.duration ?? 4500;
    if (duration > 0) {
      timerRef.current = setTimeout(() => {
        setToast(null);
        timerRef.current = null;
      }, duration);
    }
  }, []);

  const showComingSoon = useCallback(
    (customMessage?: string) => {
      showToast({
        title: 'Online Store Coming Soon',
        message:
          customMessage ||
          'Our online shop will be available soon! We are putting the finishing touches on our digital shopping experience.',
        duration: 4500
      });
    },
    [showToast]
  );

  // Backward compatibility alias for generic toast({ title, description, message })
  const legacyToast = useCallback(
    (opts: { title: string; description?: string; message?: string; duration?: number }) => {
      showToast({
        title: opts.title,
        message: opts.message || opts.description || '',
        duration: opts.duration
      });
    },
    [showToast]
  );

  // Global click interceptor for all "Shop Online" triggers across the site
  useEffect(() => {
    if (!interceptShopLinks) return;

    const handleClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest('a, button');
      if (!el) return;

      const href = el.getAttribute('href') || '';
      const ariaLabel = (el.getAttribute('aria-label') || '').toLowerCase();
      const text = (el.textContent || '').trim().toLowerCase();

      const isCustomerPwaUrl =
        href.includes('shop.olenna.in') ||
        href.includes('customer-pwa') ||
        href.startsWith('https://shop.') ||
        href.startsWith('http://shop.');

      const isShopOnlineLabel =
        ariaLabel === 'shop online' ||
        text.includes('shop online') ||
        text.includes('shop on customer app') ||
        text.includes('explore on customer app');

      if (isCustomerPwaUrl || isShopOnlineLabel) {
        e.preventDefault();
        e.stopPropagation();
        showComingSoon();
      }
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, [interceptShopLinks, showComingSoon]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <ToastContext.Provider
      value={{
        showToast,
        showComingSoon,
        hideToast,
        toast: legacyToast,
        removeToast: hideToast
      }}
    >
      {children}
      {toast && (
        <div
          role="alert"
          aria-live="polite"
          className="olenna-toast olenna-toast--luxury"
          style={{
            position: 'fixed',
            zIndex: 'var(--olenna-zIndex-toast, 1400)' as unknown as number,
            bottom: '1.5rem',
            right: '1.5rem',
            maxWidth: '24rem',
            width: 'calc(100% - 3rem)',
            backgroundColor: 'var(--olenna-color-brand-plum-950, #261C22)',
            color: 'var(--olenna-color-brand-ivory-50, #FFFAF7)',
            borderRadius: '1rem',
            boxShadow: '0 25px 50px -12px rgba(38, 28, 34, 0.45)',
            padding: '1rem',
            border: '1px solid rgba(220, 197, 216, 0.2)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.875rem',
            boxSizing: 'border-box',
            animation: 'olennaToastSlideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgba(245, 227, 234, 0.15)',
              border: '1px solid rgba(245, 227, 234, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: 'var(--olenna-color-brand-blush-100, #F5E3EA)'
            }}
          >
            {toast.icon || <ShoppingBagIcon />}
          </div>

          <div style={{ flex: 1, minWidth: 0, paddingRight: '0.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
              <h4
                style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  fontFamily: 'var(--olenna-typography-fontFamily-serif, "Playfair Display", Georgia, serif)',
                  fontWeight: 500,
                  color: 'var(--olenna-color-brand-ivory-50, #FFFAF7)',
                  letterSpacing: '0.02em'
                }}
              >
                {toast.title || 'Coming Soon'}
              </h4>
              <span style={{ color: 'var(--olenna-color-brand-champagne-400, #C4A181)', display: 'inline-flex' }}>
                <SparklesIcon />
              </span>
            </div>

            <p
              style={{
                margin: '0.25rem 0 0 0',
                fontSize: '0.75rem',
                color: 'rgba(255, 250, 247, 0.8)',
                lineHeight: 1.5,
                fontWeight: 300,
                fontFamily: 'var(--olenna-typography-fontFamily-sans, -apple-system, sans-serif)'
              }}
            >
              {toast.message}
            </p>
          </div>

          <button
            type="button"
            onClick={hideToast}
            aria-label="Close notification"
            style={{
              padding: '0.25rem',
              borderRadius: '0.5rem',
              color: 'rgba(255, 250, 247, 0.6)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 250, 247, 0.6)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
