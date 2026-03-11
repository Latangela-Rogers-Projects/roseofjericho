'use client';

import React, { useEffect, useState } from 'react';
import { availabilityAPI } from '../../api/booking';
import { useAuthStore } from '../../store/authStore';
import Link from '../../components/Link';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const AVAILABLE_DAYS = [2, 3, 5]; // Tuesday, Wednesday, Friday

interface AvailabilityRule {
  id: number;
  day_of_week: number;
  start_time: string;
  end_time: string;
  is_available: boolean;
  applies_to: string;
  specific_date?: string;
}

export default function HealingPavilionAvailabilityManagementPage() {
  const { user, isAuthenticated } = useAuthStore()
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rules, setRules] = useState<AvailabilityRule[]>([]);
  const [message, setMessage] = useState('');
  const [selectedDay, setSelectedDay] = useState(2); // Tuesday
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');
  const [appliesTo, setAppliesTo] = useState('general');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const auth = isAuthenticated;
      if (!auth) {
        window.location.href = '/login';
        return;
      }

      const isAdminUser = user?.roles?.includes('administrator');

      if (!isAdminUser) {
        window.location.href = '/';
        return;
      }

      setIsAdmin(true);
      loadRules();
    };

    checkAdmin();
  }, []);

  const loadRules = async () => {
    try {
      const result = await availabilityAPI.getAvailability();
      setRules(result.availability || []);
    } catch (err) {
      console.error('Error loading availability:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      await availabilityAPI.setAvailability({
        day_of_week: selectedDay,
        start_time: startTime,
        end_time: endTime,
        is_available: true,
        applies_to: appliesTo as 'general' | 'week' | 'specific_date',
      });

      setMessage('Availability updated successfully');
      await loadRules();

      setTimeout(() => setMessage(''), 3000);
    } catch (err: any) {
      setMessage('Error saving availability: ' + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSectionChange = (url:string) => {
    window.location.href = url
  }

  const getDayRules = (dayOfWeek: number) => {
    return rules.filter(r => r.day_of_week === dayOfWeek && r.applies_to === 'general');
  };

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          Manage Availability
        </h1>
        <div onClick={() => handleSectionChange("/dashboard")}>
          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#6b7280', color: '#fff', borderRadius: '0.375rem', cursor: 'pointer', border: 'none' }}>
            Back to Dashboard
          </button>
        </div>
      </div>

      {message && (
        <div style={{
          marginBottom: '1rem',
          padding: '1rem',
          backgroundColor: '#dcfce7',
          color: '#166534',
          borderRadius: '0.375rem',
        }}>
          {message}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Set Availability Form */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            Set Weekly Availability
          </h2>

          <form onSubmit={handleSaveAvailability}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                Day
              </label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                }}
              >
                {AVAILABLE_DAYS.map(day => (
                  <option key={day} value={day}>
                    {DAYS[day]}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Start Time
                </label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  End Time
                </label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                Applies To
              </label>
              <select
                value={appliesTo}
                onChange={(e) => setAppliesTo(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                }}
              >
                <option value="general">Every Week (General Default)</option>
                <option value="week">This Week Only</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSaving}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#10b981',
                color: '#fff',
                border: 'none',
                borderRadius: '0.375rem',
                fontWeight: '600',
                cursor: isSaving ? 'not-allowed' : 'pointer',
                opacity: isSaving ? 0.5 : 1,
              }}
            >
              {isSaving ? 'Saving...' : 'Save Availability'}
            </button>
          </form>
        </div>

        {/* Current Schedule */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            Current Schedule
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {AVAILABLE_DAYS.map(day => {
              const dayRules = getDayRules(day);
              const hasRule = dayRules.length > 0;

              return (
                <div
                  key={day}
                  style={{
                    padding: '1rem',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.375rem',
                    backgroundColor: hasRule ? '#f0fdf4' : '#f9fafb',
                  }}
                >
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                    {DAYS[day]}
                  </div>
                  {hasRule ? (
                    dayRules.map(rule => (
                      <div key={rule.id} style={{ color: '#059669', fontSize: '0.875rem' }}>
                        {rule.start_time} - {rule.end_time}
                      </div>
                    ))
                  ) : (
                    <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                      Not configured
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Link to Settings */}
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.5rem' }}>
        <p style={{ marginBottom: '0.5rem' }}>
          Need to block specific dates or times?
        </p>
        <div onClick={() => handleSectionChange("/dashboard/settings")}>
          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#8b5cf6', color: '#fff', borderRadius: '0.375rem', cursor: 'pointer', border: 'none' }}>
            Go to Settings
          </button>
        </div>
      </div>
    </div>
  );
}
