import React from 'react';
import { cn } from '../utils/cn';

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
  children: React.ReactNode;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  separator = '/',
  className,
  style,
  children,
  ...props
}) => {
  const items = React.Children.toArray(children);

  return (
    <nav aria-label="Breadcrumb" className={cn('olenna-breadcrumbs', className)} style={style} {...props}>
      <ol style={{ display: 'flex', alignItems: 'center', listStyle: 'none', padding: 0, margin: 0, gap: '0.5rem' }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            {item}
            {idx < items.length - 1 && (
              <span aria-hidden="true" style={{ color: 'var(--olenna-color-text-muted)', fontSize: '0.75rem' }}>
                {separator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export interface BreadcrumbItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isCurrent?: boolean;
  children: React.ReactNode;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  isCurrent = false,
  className,
  style,
  children,
  href,
  ...props
}) => {
  if (isCurrent) {
    return (
      <span
        aria-current="page"
        className={cn('olenna-breadcrumb-item', 'olenna-breadcrumb-item--current', className)}
        style={{
          fontSize: '0.875rem',
          fontWeight: 'var(--olenna-typography-fontWeight-medium)',
          color: 'var(--olenna-color-text-primary)',
          ...style
        }}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={cn('olenna-breadcrumb-item', className)}
      style={{
        fontSize: '0.875rem',
        color: 'var(--olenna-color-text-secondary)',
        textDecoration: 'none',
        transition: 'color var(--olenna-motion-duration-fast)',
        ...style
      }}
      {...props}
    >
      {children}
    </a>
  );
};
