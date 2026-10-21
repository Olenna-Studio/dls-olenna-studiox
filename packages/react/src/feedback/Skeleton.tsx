import React from 'react';
import { cn } from '../utils/cn';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  circle?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '1.25rem',
  borderRadius = 'var(--olenna-border-radius-sm)',
  circle = false,
  className,
  style,
  ...props
}) => {
  return (
    <div
      aria-hidden="true"
      className={cn('olenna-skeleton', className)}
      style={{
        width: circle ? height : width,
        height,
        borderRadius: circle ? '50%' : borderRadius,
        backgroundColor: 'var(--olenna-color-neutral-200)',
        opacity: 0.6,
        animation: 'pulse 1.5s ease-in-out infinite',
        ...style
      }}
      {...props}
    />
  );
};
