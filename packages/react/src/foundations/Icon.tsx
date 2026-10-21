import React from 'react';
import { cn } from '../utils/cn';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: IconSize;
  color?: string;
  children: React.ReactNode;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(({
  size = 'md',
  color = 'currentColor',
  className,
  style,
  children,
  ...props
}, ref) => {
  const pixelSizes: Record<IconSize, number> = {
    xs: 14,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  };

  const px = pixelSizes[size];

  return (
    <svg
      ref={ref}
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
      className={cn('olenna-icon', `olenna-icon--${size}`, className)}
      {...props}
    >
      {children}
    </svg>
  );
});

Icon.displayName = 'Icon';
