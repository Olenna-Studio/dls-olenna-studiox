import React from 'react';
import { cn } from '../utils/cn';
import { useFormField } from './FormField';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
  id: explicitId,
  isInvalid: explicitInvalid,
  disabled: explicitDisabled,
  required: explicitRequired,
  rows = 4,
  className,
  style,
  ...props
}, ref) => {
  const field = useFormField();
  const id = explicitId || field?.id;
  const isInvalid = explicitInvalid ?? field?.isInvalid;
  const isDisabled = explicitDisabled ?? field?.isDisabled;
  const isRequired = explicitRequired ?? field?.isRequired;

  const describedBy = [
    field?.helpTextId,
    isInvalid ? field?.errorId : undefined
  ].filter(Boolean).join(' ') || undefined;

  const textareaStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem',
    fontFamily: 'var(--olenna-typography-fontFamily-sans)',
    fontSize: '0.875rem',
    color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)',
    backgroundColor: isDisabled ? 'var(--olenna-color-disabled-surface)' : 'var(--olenna-color-surface-card)',
    border: `1px solid ${isInvalid ? 'var(--olenna-color-feedback-danger-500)' : 'var(--olenna-color-border-default)'}`,
    borderRadius: 'var(--olenna-border-radius-sm)',
    outline: 'none',
    boxSizing: 'border-box',
    resize: 'vertical',
    transition: 'border-color var(--olenna-motion-duration-fast)',
    ...style
  };

  return (
    <textarea
      ref={ref}
      id={id}
      rows={rows}
      disabled={isDisabled}
      required={isRequired}
      aria-invalid={isInvalid}
      aria-describedby={describedBy}
      style={textareaStyle}
      className={cn('olenna-textarea', isInvalid && 'olenna-textarea--invalid', className)}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';
