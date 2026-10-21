import React from 'react';
import { TextInput, TextInputProps } from './TextInput';

export interface SearchInputProps extends Omit<TextInputProps, 'type'> {
  onClear?: () => void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(({
  onClear,
  value,
  onChange,
  ...props
}, ref) => {
  const [internalVal, setInternalVal] = React.useState('');
  const currentValue = value !== undefined ? String(value) : internalVal;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) setInternalVal(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    if (value === undefined) setInternalVal('');
    onClear?.();
  };

  const searchIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--olenna-color-text-muted)" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );

  const clearButton = Boolean(currentValue) && (
    <button
      type="button"
      onClick={handleClear}
      aria-label="Clear search query"
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        color: 'var(--olenna-color-text-muted)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );

  return (
    <TextInput
      ref={ref}
      type="search"
      value={value}
      onChange={handleChange}
      prefixAdornment={searchIcon}
      suffixAdornment={clearButton}
      {...props}
    />
  );
});

SearchInput.displayName = 'SearchInput';
