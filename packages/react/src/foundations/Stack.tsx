import React from 'react';
import { cn } from '../utils/cn';

export type SpacingScale = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16' | '20' | '24';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: SpacingScale;
  align?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  as?: React.ElementType;
  children: React.ReactNode;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(({
  gap = '4',
  align = 'stretch',
  justify = 'flex-start',
  as: Component = 'div',
  className,
  style,
  children,
  ...props
}, ref) => {
  const stackStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: `var(--olenna-spacing-${gap}, 1rem)`,
    alignItems: align,
    justifyContent: justify,
    ...style
  };

  return (
    <Component ref={ref} style={stackStyle} className={cn('olenna-stack', className)} {...props}>
      {children}
    </Component>
  );
});

Stack.displayName = 'Stack';
