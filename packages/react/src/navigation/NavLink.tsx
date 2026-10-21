import React from 'react';
import { cn } from '../utils/cn';

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  children: React.ReactNode;
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(({
  isActive = false,
  className,
  style,
  children,
  ...props
}, ref) => {
  return (
    <a
      ref={ref}
      aria-current={isActive ? 'page' : undefined}
      className={cn('olenna-nav-link', isActive && 'olenna-nav-link--active', className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.5rem 0.75rem',
        fontFamily: 'var(--olenna-typography-fontFamily-sans)',
        fontSize: '0.875rem',
        fontWeight: isActive ? 600 : 400,
        color: isActive ? 'var(--olenna-color-action-primary-default)' : 'var(--olenna-color-text-secondary)',
        textDecoration: 'none',
        borderRadius: 'var(--olenna-border-radius-sm)',
        transition: 'color var(--olenna-motion-duration-fast)',
        ...style
      }}
      {...props}
    >
      {children}
    </a>
  );
});

NavLink.displayName = 'NavLink';
