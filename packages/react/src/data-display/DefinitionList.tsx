import React from 'react';
import { cn } from '../utils/cn';

export interface DefinitionListProps extends React.HTMLAttributes<HTMLDListElement> {
  horizontal?: boolean;
  children: React.ReactNode;
}

export const DefinitionList: React.FC<DefinitionListProps> = ({
  horizontal = false,
  className,
  style,
  children,
  ...props
}) => {
  return (
    <dl
      className={cn('olenna-definition-list', horizontal && 'olenna-definition-list--horizontal', className)}
      style={{
        display: 'grid',
        gridTemplateColumns: horizontal ? 'max-content 1fr' : '1fr',
        gap: horizontal ? '0.5rem 1.5rem' : '0.75rem',
        margin: 0,
        fontSize: '0.875rem',
        ...style
      }}
      {...props}
    >
      {children}
    </dl>
  );
};

export const DefinitionTerm: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, style, children, ...props }) => (
  <dt
    className={cn('olenna-dt', className)}
    style={{
      fontWeight: 500,
      color: 'var(--olenna-color-text-secondary)',
      margin: 0,
      ...style
    }}
    {...props}
  >
    {children}
  </dt>
);

export const DefinitionDescription: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, style, children, ...props }) => (
  <dd
    className={cn('olenna-dd', className)}
    style={{
      fontWeight: 400,
      color: 'var(--olenna-color-text-primary)',
      margin: 0,
      ...style
    }}
    {...props}
  >
    {children}
  </dd>
);
