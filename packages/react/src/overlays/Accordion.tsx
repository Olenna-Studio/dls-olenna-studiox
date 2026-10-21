import React, { createContext, useContext, useState } from 'react';
import { cn } from '../utils/cn';

interface AccordionContextValue {
  expandedItems: string[];
  toggleItem: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

export interface AccordionProps {
  allowMultiple?: boolean;
  defaultExpanded?: string[];
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Accordion: React.FC<AccordionProps> = ({
  allowMultiple = false,
  defaultExpanded = [],
  children,
  className,
  style
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(defaultExpanded);

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <AccordionContext.Provider value={{ expandedItems, toggleItem }}>
      <div
        className={cn('olenna-accordion', className)}
        style={{
          borderTop: '1px solid var(--olenna-color-border-default)',
          width: '100%',
          ...style
        }}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export interface AccordionItemProps {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  children,
  className
}) => {
  const ctx = useContext(AccordionContext);
  if (!ctx) return null;

  const isExpanded = ctx.expandedItems.includes(id);

  return (
    <div
      className={cn('olenna-accordion-item', isExpanded && 'olenna-accordion-item--expanded', className)}
      style={{ borderBottom: '1px solid var(--olenna-color-border-default)' }}
    >
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={() => ctx.toggleItem(id)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '1rem 0',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          fontFamily: 'var(--olenna-typography-fontFamily-serif)',
          fontSize: '1.125rem',
          fontWeight: 500,
          color: 'var(--olenna-color-text-primary)',
          cursor: 'pointer'
        }}
      >
        <span>{title}</span>
        <span
          aria-hidden="true"
          style={{
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform var(--olenna-motion-duration-fast)',
            color: 'var(--olenna-color-text-muted)'
          }}
        >
          ⌄
        </span>
      </button>
      {isExpanded && (
        <div
          role="region"
          style={{
            paddingBottom: '1.25rem',
            fontSize: '0.875rem',
            color: 'var(--olenna-color-text-secondary)',
            lineHeight: 1.6
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
