import React from 'react';
import { cn } from '../utils/cn';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  dense?: boolean;
  children: React.ReactNode;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(({
  striped = false,
  dense = false,
  className,
  style,
  children,
  ...props
}, ref) => {
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <table
        ref={ref}
        className={cn('olenna-table', striped && 'olenna-table--striped', dense && 'olenna-table--dense', className)}
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'left',
          fontSize: dense ? '0.8125rem' : '0.875rem',
          fontFamily: 'var(--olenna-typography-fontFamily-sans)',
          ...style
        }}
        {...props}
      >
        {children}
      </table>
    </div>
  );
});

Table.displayName = 'Table';

export const TableHead: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ className, style, children, ...props }) => (
  <thead
    className={cn('olenna-table-head', className)}
    style={{
      backgroundColor: 'var(--olenna-color-surface-subtle)',
      borderBottom: '1px solid var(--olenna-color-border-default)',
      ...style
    }}
    {...props}
  >
    {children}
  </thead>
);

export const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ className, style, children, ...props }) => (
  <tbody className={cn('olenna-table-body', className)} style={style} {...props}>
    {children}
  </tbody>
);

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ className, style, children, ...props }) => (
  <tr
    className={cn('olenna-table-row', className)}
    style={{
      borderBottom: '1px solid var(--olenna-color-border-subtle)',
      transition: 'background-color var(--olenna-motion-duration-fast)',
      ...style
    }}
    {...props}
  >
    {children}
  </tr>
);

export const TableHeader: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = ({ className, style, children, ...props }) => (
  <th
    className={cn('olenna-table-header', className)}
    style={{
      padding: '0.75rem 1rem',
      fontWeight: 600,
      color: 'var(--olenna-color-text-primary)',
      letterSpacing: '0.02em',
      ...style
    }}
    {...props}
  >
    {children}
  </th>
);

export const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({ className, style, children, ...props }) => (
  <td
    className={cn('olenna-table-cell', className)}
    style={{
      padding: '0.75rem 1rem',
      color: 'var(--olenna-color-text-secondary)',
      ...style
    }}
    {...props}
  >
    {children}
  </td>
);
