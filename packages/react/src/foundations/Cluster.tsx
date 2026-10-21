import React from 'react';
import { cn } from '../utils/cn';
import { SpacingScale } from './Stack';

export interface ClusterProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: SpacingScale;
  align?: 'flex-start' | 'center' | 'flex-end' | 'baseline';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  wrap?: boolean;
  as?: React.ElementType;
  children: React.ReactNode;
}

export const Cluster = React.forwardRef<HTMLDivElement, ClusterProps>(({
  gap = '3',
  align = 'center',
  justify = 'flex-start',
  wrap = true,
  as: Component = 'div',
  className,
  style,
  children,
  ...props
}, ref) => {
  const clusterStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    gap: `var(--olenna-spacing-${gap}, 0.75rem)`,
    alignItems: align,
    justifyContent: justify,
    ...style
  };

  return (
    <Component ref={ref} style={clusterStyle} className={cn('olenna-cluster', className)} {...props}>
      {children}
    </Component>
  );
});

Cluster.displayName = 'Cluster';
