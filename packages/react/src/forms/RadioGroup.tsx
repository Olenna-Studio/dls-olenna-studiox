import React, { createContext, useContext, useId } from 'react';
import { cn } from '../utils/cn';

interface RadioGroupContextValue {
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  orientation?: 'vertical' | 'horizontal';
  children: React.ReactNode;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name: explicitName,
  value,
  defaultValue,
  onChange,
  disabled = false,
  orientation = 'vertical',
  className,
  style,
  children,
  ...props
}) => {
  const generatedId = useId();
  const name = explicitName || `olenna-radio-group-${generatedId}`;

  return (
    <RadioGroupContext.Provider value={{ name, value, onChange, disabled }}>
      <div
        role="radiogroup"
        className={cn('olenna-radio-group', `olenna-radio-group--${orientation}`, className)}
        style={{
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'column' : 'row',
          gap: orientation === 'vertical' ? '0.5rem' : '1.25rem',
          ...style
        }}
        {...props}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
};

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value: string;
  label?: React.ReactNode;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({
  id: explicitId,
  value,
  label,
  disabled: explicitDisabled,
  className,
  style,
  ...props
}, ref) => {
  const group = useContext(RadioGroupContext);
  const generatedId = useId();
  const id = explicitId || `olenna-radio-${generatedId}`;
  const isDisabled = explicitDisabled || group?.disabled;
  const isChecked = group?.value !== undefined ? group.value === value : undefined;

  return (
    <label
      htmlFor={id}
      className={cn('olenna-radio-label', isDisabled && 'olenna-radio-label--disabled', className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.625rem',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        fontSize: '0.875rem',
        color: isDisabled ? 'var(--olenna-color-disabled-text)' : 'var(--olenna-color-text-primary)',
        ...style
      }}
    >
      <input
        ref={ref}
        type="radio"
        id={id}
        name={group?.name}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={group?.onChange}
        style={{
          width: '1.125rem',
          height: '1.125rem',
          margin: 0,
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          accentColor: 'var(--olenna-color-action-primary-default)'
        }}
        {...props}
      />
      {label && <span>{label}</span>}
    </label>
  );
});

Radio.displayName = 'Radio';
