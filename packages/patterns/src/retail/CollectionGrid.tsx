import React from 'react';

export interface CollectionGridProps {
  columns?: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

export const CollectionGrid: React.FC<CollectionGridProps> = ({
  columns = 4,
  children,
  className
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(${columns === 4 ? '240px' : '300px'}, 1fr))`,
        gap: '1.5rem',
        width: '100%'
      }}
    >
      {children}
    </div>
  );
};
