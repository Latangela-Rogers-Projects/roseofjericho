import React, { useState } from 'react';

interface CalendarProps {
  availableDates: string[];
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
}

export default function Calendar({
  availableDates,
  selectedDate,
  onSelectDate,
}: CalendarProps) {
  const [monthOffset, setMonthOffset] = useState(0);

  const AVAILABLE_DAYS = [2, 3, 5]; // Tue, Wed, Fri

  const isDateAvailable = (date: Date): boolean => {
    const dateString = date.toISOString().split('T')[0];
    return availableDates.includes(dateString);
  };

  const isDateDisabled = (date: Date): boolean => {
    return !AVAILABLE_DAYS.includes(date.getDay());
  };

  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const renderMonth = () => {
    const today = new Date();
    const month = new Date(
      today.getFullYear(),
      today.getMonth() + monthOffset,
      1
    );

    const daysInMonth = getDaysInMonth(month);
    const firstDay = getFirstDayOfMonth(month);
    const days: (Date | null)[] = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        new Date(month.getFullYear(), month.getMonth(), i)
      );
    }

    const monthName = month.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });

    return (
      <div>
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          {monthName}
        </h3>

        {/* Day headers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
            (day) => (
              <div
                key={day}
                style={{
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  color: '#6b7280',
                  padding: '0.5rem',
                }}
              >
                {day}
              </div>
            )
          )}
        </div>

        {/* Calendar grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '0.5rem',
          }}
        >
          {days.map((day, idx) => {
            if (!day) {
              return (
                <div
                  key={`empty-${idx}`}
                  style={{
                    aspectRatio: '1',
                    backgroundColor: '#f9fafb',
                  }}
                />
              );
            }

            const dateString = day.toISOString().split('T')[0];
            const isPast =
              day <
              new Date(new Date().setHours(0, 0, 0, 0));
            const isDisabled = isDateDisabled(day);
            const isAvailable = isDateAvailable(day);
            const isSelected = selectedDate === dateString;

            let backgroundColor = '#fff';
            let borderColor = '#e5e7eb';
            let textColor = '#000';
            let cursor: 'pointer' | 'not-allowed' = 'not-allowed';

            if (isPast || isDisabled) {
              backgroundColor = '#f3f4f6';
              textColor = '#d1d5db';
            } else if (isSelected) {
              backgroundColor = '#3b82f6';
              borderColor = '#2563eb';
              textColor = '#fff';
              cursor = 'pointer';
            } else if (isAvailable) {
              backgroundColor = '#f0fdf4';
              borderColor = '#86efac';
              cursor = 'pointer';
            }

            return (
              <button
                key={dateString}
                onClick={() =>
                  !isPast &&
                  !isDisabled &&
                  isAvailable &&
                  onSelectDate(dateString)
                }
                disabled={
                  isPast || isDisabled || !isAvailable
                }
                style={{
                  aspectRatio: '1',
                  padding: '0.5rem',
                  border: `2px solid ${borderColor}`,
                  borderRadius: '0.375rem',
                  backgroundColor,
                  color: textColor,
                  cursor,
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  opacity:
                    isPast || isDisabled ? 0.5 : 1,
                }}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        backgroundColor: '#fff',
      }}
    >
      {/* Navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <button
          onClick={() =>
            setMonthOffset((prev) =>
              prev > 0 ? prev - 1 : 0
            )
          }
          disabled={monthOffset === 0}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '0.375rem',
            background: '#fff',
            cursor:
              monthOffset === 0
                ? 'not-allowed'
                : 'pointer',
            opacity:
              monthOffset === 0 ? 0.5 : 1,
          }}
        >
          ← Prev
        </button>

        <button
          onClick={() =>
            setMonthOffset((prev) => prev + 1)
          }
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid #e5e7eb',
            borderRadius: '0.375rem',
            background: '#fff',
            cursor: 'pointer',
          }}
        >
          Next →
        </button>
      </div>

      {renderMonth()}
    </div>
  );
}