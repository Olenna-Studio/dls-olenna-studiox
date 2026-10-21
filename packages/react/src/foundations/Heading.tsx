import React from 'react';
import { cn } from '../utils/cn';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingStyle = 'editorial' | 'sans' | 'display';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: React.ElementType;
  headingStyle?: HeadingStyle;
  children: React.ReactNode;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(({
  level = 2,
  as,
  headingStyle = 'editorial',
  className,
  style,
  children,
  ...props
}, ref) => {
  const Component = (as || `h${level}`) as React.ElementType;

  const fontSizes: Record<HeadingLevel, string> = {
    1: 'var(--olenna-typography-fontSize-5xl)',
    2: 'var(--olenna-typography-fontSize-4xl)',
    3: 'var(--olenna-typography-fontSize-3xl)',
    4: 'var(--olenna-typography-fontSize-2xl)',
    5: 'var(--olenna-typography-fontSize-xl)',
    6: 'var(--olenna-typography-fontSize-lg)'
  };

  const customStyle: React.CSSProperties = {
    fontFamily: headingStyle === 'sans'
      ? 'var(--olenna-typography-fontFamily-sans)'
      : 'var(--olenna-typography-fontFamily-serif)',
    fontSize: fontSizes[level],
    fontWeight: headingStyle === 'display' ? 700 : 500,
    lineHeight: 'var(--olenna-typography-lineHeight-tight)',
    letterSpacing: headingStyle === 'editorial' ? '-0.02em' : 'normal',
    color: 'var(--olenna-color-text-primary)',
    margin: 0,
    ...style
  };

  return (
    <Component
      ref={ref}
      style={customStyle}
      className={cn('olenna-heading', `olenna-heading--h${level}`, `olenna-heading--${headingStyle}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
});

Heading.displayName = 'Heading';
