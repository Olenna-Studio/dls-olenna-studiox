import React, { createContext, useContext, useId, useState } from 'react';
import { cn } from '../utils/cn';

interface TabsContextValue {
  selectedTab: string;
  selectTab: (id: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export interface TabsProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Tabs: React.FC<TabsProps> = ({
  value: controlledValue,
  defaultValue = '',
  onChange,
  children,
  className,
  style
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const selectedTab = controlledValue !== undefined ? controlledValue : internalValue;
  const baseId = useId();

  const selectTab = (id: string) => {
    if (controlledValue === undefined) {
      setInternalValue(id);
    }
    onChange?.(id);
  };

  return (
    <TabsContext.Provider value={{ selectedTab, selectTab, baseId }}>
      <div className={cn('olenna-tabs', className)} style={{ display: 'flex', flexDirection: 'column', width: '100%', ...style }}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export interface TabListProps {
  'aria-label'?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TabList: React.FC<TabListProps> = ({
  'aria-label': ariaLabel = 'Navigation tabs',
  children,
  className,
  style
}) => {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn('olenna-tab-list', className)}
      style={{
        display: 'flex',
        borderBottom: '1px solid var(--olenna-color-border-default)',
        gap: '1.5rem',
        ...style
      }}
    >
      {children}
    </div>
  );
};

export interface TabProps {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  value,
  disabled = false,
  children,
  className
}) => {
  const ctx = useContext(TabsContext);
  if (!ctx) return null;

  const isSelected = ctx.selectedTab === value;
  const tabId = `${ctx.baseId}-tab-${value}`;
  const panelId = `${ctx.baseId}-panel-${value}`;

  return (
    <button
      role="tab"
      id={tabId}
      aria-selected={isSelected}
      aria-controls={panelId}
      tabIndex={isSelected ? 0 : -1}
      disabled={disabled}
      onClick={() => ctx.selectTab(value)}
      className={cn(
        'olenna-tab',
        isSelected && 'olenna-tab--selected',
        disabled && 'olenna-tab--disabled',
        className
      )}
      style={{
        background: 'none',
        border: 'none',
        borderBottom: `2px solid ${isSelected ? 'var(--olenna-color-action-primary-default)' : 'transparent'}`,
        padding: '0.75rem 0.25rem',
        fontFamily: 'var(--olenna-typography-fontFamily-sans)',
        fontSize: '0.875rem',
        fontWeight: isSelected ? 'var(--olenna-typography-fontWeight-semibold)' : 'var(--olenna-typography-fontWeight-regular)',
        color: isSelected ? 'var(--olenna-color-text-primary)' : 'var(--olenna-color-text-secondary)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all var(--olenna-motion-duration-fast)',
        marginBottom: '-1px'
      }}
    >
      {children}
    </button>
  );
};

export interface TabPanelProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  value,
  children,
  className,
  style
}) => {
  const ctx = useContext(TabsContext);
  if (!ctx || ctx.selectedTab !== value) return null;

  const tabId = `${ctx.baseId}-tab-${value}`;
  const panelId = `${ctx.baseId}-panel-${value}`;

  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      tabIndex={0}
      className={cn('olenna-tab-panel', className)}
      style={{ paddingTop: '1.25rem', outline: 'none', ...style }}
    >
      {children}
    </div>
  );
};
