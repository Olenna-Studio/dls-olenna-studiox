import React from 'react';

export interface DaySchedule {
  day: string;
  hours: string; // e.g. "10:00 - 19:00" or "Closed"
  isToday?: boolean;
}

export interface StoreOpeningHoursProps {
  schedule: DaySchedule[];
  isOpenNow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const StoreOpeningHours: React.FC<StoreOpeningHoursProps> = ({
  schedule,
  isOpenNow,
  className,
  style
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        width: '100%',
        ...style
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h5 style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: 'var(--olenna-color-text-primary)' }}>
          Opening Hours
        </h5>
        {isOpenNow !== undefined && (
          <span
            style={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              padding: '0.15rem 0.5rem',
              borderRadius: 'var(--olenna-border-radius-full, 9999px)',
              backgroundColor: isOpenNow ? 'var(--olenna-color-status-success-surface, #F0FDF4)' : 'var(--olenna-color-neutral-100, #F4F0EE)',
              color: isOpenNow ? 'var(--olenna-color-status-success-text, #15803D)' : 'var(--olenna-color-text-muted, #8E7A87)'
            }}
          >
            {isOpenNow ? '• Open Now' : 'Closed'}
          </span>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', fontSize: '0.8125rem' }}>
        {schedule.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.2rem 0',
              fontWeight: item.isToday ? 600 : 400,
              color: item.isToday ? 'var(--olenna-color-text-primary)' : 'var(--olenna-color-text-secondary)'
            }}
          >
            <span>{item.day}</span>
            <span>{item.hours}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
