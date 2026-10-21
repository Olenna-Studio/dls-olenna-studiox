import React from 'react';
import { cn } from '../utils/cn';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  style
}) => {
  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('ellipsis');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('ellipsis');
      pages.push(totalPages);
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav aria-label="Pagination" className={cn('olenna-pagination', className)} style={style}>
      <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', padding: 0, margin: 0, gap: '0.375rem' }}>
        <li>
          <button
            type="button"
            aria-label="Previous page"
            disabled={currentPage <= 1}
            onClick={() => onPageChange(currentPage - 1)}
            style={{
              padding: '0.375rem 0.625rem',
              border: '1px solid var(--olenna-color-border-default)',
              borderRadius: 'var(--olenna-border-radius-sm)',
              background: 'transparent',
              color: currentPage <= 1 ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)',
              cursor: currentPage <= 1 ? 'not-allowed' : 'pointer'
            }}
          >
            ‹
          </button>
        </li>
        {pages.map((p, idx) => {
          if (p === 'ellipsis') {
            return (
              <li key={`ellipsis-${idx}`} style={{ padding: '0 0.25rem', color: 'var(--olenna-color-text-muted)' }}>
                …
              </li>
            );
          }
          const isCurrent = p === currentPage;
          return (
            <li key={p}>
              <button
                type="button"
                aria-current={isCurrent ? 'page' : undefined}
                onClick={() => onPageChange(p)}
                style={{
                  minWidth: '2rem',
                  height: '2rem',
                  padding: '0 0.5rem',
                  border: isCurrent ? '1px solid var(--olenna-color-action-primary-default)' : '1px solid var(--olenna-color-border-default)',
                  borderRadius: 'var(--olenna-border-radius-sm)',
                  backgroundColor: isCurrent ? 'var(--olenna-color-action-primary-default)' : 'transparent',
                  color: isCurrent ? 'var(--olenna-color-action-primary-text)' : 'var(--olenna-color-text-primary)',
                  fontWeight: isCurrent ? 600 : 400,
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                {p}
              </button>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            aria-label="Next page"
            disabled={currentPage >= totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            style={{
              padding: '0.375rem 0.625rem',
              border: '1px solid var(--olenna-color-border-default)',
              borderRadius: 'var(--olenna-border-radius-sm)',
              background: 'transparent',
              color: currentPage >= totalPages ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)',
              cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer'
            }}
          >
            ›
          </button>
        </li>
      </ul>
    </nav>
  );
};
