import React from 'react';
import { cn } from '../utils/cn';
import { SpacingScale } from './Stack';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: SpacingScale;
  as?: React.ElementType;
  children: React.ReactNode;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(({
  columns = 12,
  gap = '4',
  as: Component = 'div',
  className,
  style,
  children,
  ...props
}, ref) => {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: `var(--olenna-spacing-${gap}, 1rem)`,
    ...style
  };

  return (
    <Component ref={ref} style={gridStyle} className={cn('olenna-grid', className)} {...props}>
      {children}
    </Component>
  );
});

Grid.displayName = 'Grid';

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: React.ReactNode;
}

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(({
  span = 12,
  className,
  style,
  children,
  ...props
}, ref) => {
  const itemStyle: React.CSSProperties = {
    gridColumn: `span ${span} / span ${span}`,
    ...style
  };

  return (
    <div ref={ref} style={itemStyle} className={cn('olenna-grid-item', className)} {...props}>
      {children}
    </div>
  );
});

GridItem.displayName = 'GridItem';
