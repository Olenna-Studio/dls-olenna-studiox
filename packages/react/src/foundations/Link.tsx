import React from 'react';
import { cn } from '../utils/cn';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'default' | 'subtle' | 'inline';
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({
  variant = 'default',
  isExternal = false,
  className,
  style,
  children,
  target,
  rel,
  ...props
}, ref) => {
  const isTargetBlank = isExternal || target === '_blank';
  const computedRel = isTargetBlank ? (rel ? `${rel} noopener noreferrer` : 'noopener noreferrer') : rel;

  const linkStyle: React.CSSProperties = {
    color: variant === 'subtle' ? 'var(--olenna-color-text-secondary)' : 'var(--olenna-color-link-default)',
    textDecoration: variant === 'inline' ? 'underline' : 'none',
    textUnderlineOffset: '3px',
    transition: 'color var(--olenna-motion-duration-fast) var(--olenna-motion-easing-standard)',
    cursor: 'pointer',
    ...style
  };

  return (
    <a
      ref={ref}
      target={isTargetBlank ? '_blank' : target}
      rel={computedRel}
      style={linkStyle}
      className={cn('olenna-link', `olenna-link--${variant}`, className)}
      {...props}
    >
      {children}
      {isExternal && (
        <span aria-hidden="true" style={{ marginLeft: '0.25rem', fontSize: '0.75em' }}>
          ↗
        </span>
      )}
    </a>
  );
});

Link.displayName = 'Link';
