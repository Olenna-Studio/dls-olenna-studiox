import React from 'react';
import { cn } from '../utils/cn';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  as?: React.ElementType;
  gutter?: boolean;
  children: React.ReactNode;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({
  size = 'xl',
  as: Component = 'div',
  gutter = true,
  className,
  style,
  children,
  ...props
}, ref) => {
  const maxDimensions: Record<ContainerSize, string> = {
    sm: 'var(--olenna-container-sm, 640px)',
    md: 'var(--olenna-container-md, 768px)',
    lg: 'var(--olenna-container-lg, 1024px)',
    xl: 'var(--olenna-container-xl, 1280px)',
    '2xl': 'var(--olenna-container-2xl, 1440px)',
    full: '100%'
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: maxDimensions[size],
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: gutter ? 'var(--olenna-spacing-4, 1rem)' : 0,
    paddingRight: gutter ? 'var(--olenna-spacing-4, 1rem)' : 0,
    boxSizing: 'border-box',
    ...style
  };

  return (
    <Component ref={ref} style={containerStyle} className={cn('olenna-container', className)} {...props}>
      {children}
    </Component>
  );
});

Container.displayName = 'Container';
