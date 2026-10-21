import React from 'react';
import { cn } from '../utils/cn';

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({
  className,
  style,
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      role="menu"
      className={cn('olenna-menu', className)}
      style={{
        backgroundColor: 'var(--olenna-color-surface-elevated)',
        border: '1px solid var(--olenna-color-border-default)',
        borderRadius: 'var(--olenna-border-radius-md)',
        boxShadow: 'var(--olenna-shadow-lg)',
        padding: '0.375rem',
        minWidth: '12rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.125rem',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
});

Menu.displayName = 'Menu';

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  destructive?: boolean;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(({
  destructive = false,
  leftIcon,
  className,
  style,
  children,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      role="menuitem"
      className={cn('olenna-menu-item', destructive && 'olenna-menu-item--destructive', className)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.625rem',
        width: '100%',
        padding: '0.5rem 0.75rem',
        borderRadius: 'var(--olenna-border-radius-sm)',
        border: 'none',
        background: 'transparent',
        fontFamily: 'var(--olenna-typography-fontFamily-sans)',
        fontSize: '0.875rem',
        textAlign: 'left',
        color: destructive ? 'var(--olenna-color-feedback-danger-600)' : 'var(--olenna-color-text-primary)',
        cursor: 'pointer',
        transition: 'background-color var(--olenna-motion-duration-fast)',
        ...style
      }}
      {...props}
    >
      {leftIcon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{leftIcon}</span>}
      <span style={{ flex: 1 }}>{children}</span>
    </button>
  );
});

MenuItem.displayName = 'MenuItem';

export const MenuDivider: React.FC = () => {
  return (
    <div
      role="separator"
      style={{
        height: '1px',
        backgroundColor: 'var(--olenna-color-border-subtle)',
        margin: '0.25rem 0'
      }}
    />
  );
};
