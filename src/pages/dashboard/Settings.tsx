'use client';

import React, { useEffect, useState } from 'react';
import { availabilityAPI } from '../../api/booking';
import { useAuthStore } from '../../store/authStore';
import Link from '../../components/Link';

export default function HealingPavilionSettingsPage() {
  const { user, isAuthenticated } = useAuthStore()
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [blockDate, setBlockDate] = useState('');
  const [blockStartTime, setBlockStartTime] = useState('09:00');
  const [blockEndTime, setBlockEndTime] = useState('17:00');
  const [message, setMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [tab, setTab] = useState<'block' | 'info'>('block');

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
      setLoading(false);
    };

    checkAdmin();
  }, []);

  const handleBlockDate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      await availabilityAPI.setSpecificAvailability({
        specific_date: blockDate,
        start_time: blockStartTime,
        end_time: blockEndTime,
        is_available: false, // Block this period
      });

      setMessage(`Successfully blocked ${blockDate} from ${blockStartTime} to ${blockEndTime}`);
      setBlockDate('');
      setBlockStartTime('09:00');
      setBlockEndTime('17:00');

      setTimeout(() => setMessage(''), 5000);
    } catch (err: any) {
      setMessage('Error blocking period: ' + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSectionChange = (url:string) => {
    window.location.href = url
  }

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
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          Settings
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

      {/* Tab Navigation */}
      <div style={{ display: 'flex', gap: '0', marginBottom: '2rem', borderBottom: '2px solid #e5e7eb' }}>
        <button
          onClick={() => setTab('block')}
          style={{
            padding: '0.75rem 1.5rem',
            borderBottom: tab === 'block' ? '3px solid #3b82f6' : 'none',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontWeight: tab === 'block' ? '600' : '400',
            color: tab === 'block' ? '#3b82f6' : '#6b7280',
          }}
        >
          Block Periods
        </button>
        <button
          onClick={() => setTab('info')}
          style={{
            padding: '0.75rem 1.5rem',
            borderBottom: tab === 'info' ? '3px solid #3b82f6' : 'none',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontWeight: tab === 'info' ? '600' : '400',
            color: tab === 'info' ? '#3b82f6' : '#6b7280',
          }}
        >
          Info
        </button>
      </div>

      {/* Block Periods Tab */}
      {tab === 'block' && (
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            Block Specific Periods
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
            Mark specific dates and times as unavailable. This will prevent clients from booking during these periods.
          </p>

          <form onSubmit={handleBlockDate}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                Date to Block *
              </label>
              <input
                type="date"
                value={blockDate}
                onChange={(e) => setBlockDate(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                  fontSize: '1rem',
                }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Start Time *
                </label>
                <input
                  type="time"
                  value={blockStartTime}
                  onChange={(e) => setBlockStartTime(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  End Time *
                </label>
                <input
                  type="time"
                  value={blockEndTime}
                  onChange={(e) => setBlockEndTime(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.375rem',
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSaving || !blockDate}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#ef4444',
                color: '#fff',
                border: 'none',
                borderRadius: '0.375rem',
                fontWeight: '600',
                cursor: isSaving || !blockDate ? 'not-allowed' : 'pointer',
                opacity: isSaving || !blockDate ? 0.5 : 1,
              }}
            >
              {isSaving ? 'Blocking...' : 'Block This Period'}
            </button>
          </form>

          <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#fef2f2', borderRadius: '0.375rem', borderLeft: '4px solid #ef4444' }}>
            <p style={{ fontSize: '0.875rem', color: '#7f1d1d' }}>
              <strong>Note:</strong> This will prevent clients from booking during the specified date and time. You can block multiple periods on the same day.
            </p>
          </div>
        </div>
      )}

      {/* Info Tab */}
      {tab === 'info' && (
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>
            Booking System Information
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Available Booking Days</h3>
              <p style={{ color: '#6b7280' }}>Tuesday, Wednesday, Friday</p>
            </div>

            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Booking Statuses</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: '#f3f4f6', borderRadius: '0.375rem' }}>
                  <span style={{ fontWeight: '600' }}>Pending</span> - Awaiting admin confirmation
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: '#dbeafe', borderRadius: '0.375rem' }}>
                  <span style={{ fontWeight: '600' }}>Confirmed</span> - Admin has confirmed
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: '#fed7aa', borderRadius: '0.375rem' }}>
                  <span style={{ fontWeight: '600' }}>In Session</span> - Session is happening now
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: '#fef08a', borderRadius: '0.375rem' }}>
                  <span style={{ fontWeight: '600' }}>Completed (Pending)</span> - Awaiting confirmations
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: '#dcfce7', borderRadius: '0.375rem' }}>
                  <span style={{ fontWeight: '600' }}>Completed</span> - Both parties confirmed
                </div>
                <div style={{ padding: '0.75rem', backgroundColor: '#fee2e2', borderRadius: '0.375rem' }}>
                  <span style={{ fontWeight: '600' }}>Cancelled</span> - Booking cancelled
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Service Types</h3>
              <ul style={{ color: '#6b7280', paddingLeft: '1.5rem' }}>
                <li>Vaginismus Recovery</li>
                <li>Clarity Sessions</li>
                <li>VOV Recovery</li>
                <li>Couples Counseling</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Session Confirmation Flow</h3>
              <ol style={{ color: '#6b7280', paddingLeft: '1.5rem' }}>
                <li>Client books a session (status: Pending)</li>
                <li>Admin confirms the booking (status: Confirmed)</li>
                <li>Session time arrives → Auto-update to "In Session"</li>
                <li>Session ends → Auto-update to "Completed (Pending Confirmation)"</li>
                <li>Admin confirms completion</li>
                <li>Client confirms completion → Status becomes "Completed" (Green checkmark)</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
