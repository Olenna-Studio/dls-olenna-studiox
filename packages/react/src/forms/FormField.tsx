import React, { createContext, useContext, useId } from 'react';
import { cn } from '../utils/cn';

interface FormFieldContextValue {
  id: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  helpTextId: string;
  errorId: string;
}

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

export function useFormField() {
  return useContext(FormFieldContext);
}

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  id: explicitId,
  isInvalid = false,
  isRequired = false,
  isDisabled = false,
  className,
  children,
  style,
  ...props
}) => {
  const generatedId = useId();
  const id = explicitId || `olenna-field-${generatedId}`;
  const helpTextId = `${id}-help`;
  const errorId = `${id}-error`;

  return (
    <FormFieldContext.Provider value={{ id, isInvalid, isRequired, isDisabled, helpTextId, errorId }}>
      <div
        className={cn('olenna-form-field', isInvalid && 'olenna-form-field--invalid', className)}
        style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', width: '100%', ...style }}
        {...props}
      >
        {children}
      </div>
    </FormFieldContext.Provider>
  );
};

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean;
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({
  htmlFor: explicitFor,
  isRequired: explicitRequired,
  className,
  style,
  children,
  ...props
}) => {
  const field = useFormField();
  const htmlFor = explicitFor || field?.id;
  const isRequired = explicitRequired ?? field?.isRequired;

  return (
    <label
      htmlFor={htmlFor}
      className={cn('olenna-label', className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        fontSize: 'var(--olenna-typography-fontSize-sm)',
        fontWeight: 'var(--olenna-typography-fontWeight-medium)',
        color: field?.isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)',
        ...style
      }}
      {...props}
    >
      {children}
      {isRequired && (
        <span aria-hidden="true" style={{ color: 'var(--olenna-color-feedback-danger-600)' }}>
          *
        </span>
      )}
    </label>
  );
};

export interface HelpTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const HelpText: React.FC<HelpTextProps> = ({
  id: explicitId,
  className,
  style,
  children,
  ...props
}) => {
  const field = useFormField();
  const id = explicitId || field?.helpTextId;

  return (
    <p
      id={id}
      className={cn('olenna-help-text', className)}
      style={{
        margin: 0,
        fontSize: 'var(--olenna-typography-fontSize-xs)',
        color: 'var(--olenna-color-text-muted)',
        ...style
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export interface ValidationMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const ValidationMessage: React.FC<ValidationMessageProps> = ({
  id: explicitId,
  className,
  style,
  children,
  ...props
}) => {
  const field = useFormField();
  const id = explicitId || field?.errorId;

  return (
    <p
      id={id}
      role="alert"
      className={cn('olenna-validation-message', className)}
      style={{
        margin: 0,
        fontSize: 'var(--olenna-typography-fontSize-xs)',
        color: 'var(--olenna-color-feedback-danger-600)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        ...style
      }}
      {...props}
    >
      {children}
    </p>
  );
};
