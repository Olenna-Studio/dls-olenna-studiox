import React from 'react';
import { cn } from '../utils/cn';

export interface StepItem {
  id: string | number;
  label: string;
  description?: string;
}

export interface StepperProps {
  steps: StepItem[];
  activeStep: number; // 0-indexed
  className?: string;
  style?: React.CSSProperties;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  className,
  style
}) => {
  return (
    <nav aria-label="Progress Stepper" className={cn('olenna-stepper', className)} style={style}>
      <ol style={{ display: 'flex', alignItems: 'center', width: '100%', listStyle: 'none', padding: 0, margin: 0 }}>
        {steps.map((step, idx) => {
          const isCompleted = idx < activeStep;
          const isCurrent = idx === activeStep;

          return (
            <li
              key={step.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                flex: idx < steps.length - 1 ? 1 : 'none',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    width: '1.75rem',
                    height: '1.75rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    backgroundColor: isCompleted || isCurrent ? 'var(--olenna-color-action-primary-default)' : 'var(--olenna-color-neutral-200)',
                    color: isCompleted || isCurrent ? 'var(--olenna-color-action-primary-text)' : 'var(--olenna-color-text-secondary)',
                    transition: 'all var(--olenna-motion-duration-fast)'
                  }}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  {isCompleted ? '✓' : idx + 1}
                </span>
                <span style={{
                  fontSize: '0.8125rem',
                  fontWeight: isCurrent ? 600 : 400,
                  color: isCurrent ? 'var(--olenna-color-text-primary)' : 'var(--olenna-color-text-muted)'
                }}>
                  {step.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div
                  style={{
                    flex: 1,
                    height: '2px',
                    margin: '0 0.75rem',
                    backgroundColor: idx < activeStep ? 'var(--olenna-color-action-primary-default)' : 'var(--olenna-color-neutral-200)',
                    transition: 'background-color var(--olenna-motion-duration-fast)'
                  }}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
