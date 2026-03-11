'use client';

import React, { useEffect, useState } from 'react';
import { bookingAPI } from '../../api/booking';
import { useAuthStore } from '../../store/authStore';
import Link from '../../components/Link';

interface Booking {
  id: number;
  client_name: string;
  client_email: string;
  client_phone: string;
  service_type: string;
  booking_date: string;
  start_time: string;
  end_time: string;
  status: string;
  admin_confirmed: boolean;
  client_confirmed: boolean;
  created_at: string;
}

const STATUS_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  pending: { bg: '#f3f4f6', text: '#374151', label: 'Pending' },
  confirmed: { bg: '#dbeafe', text: '#1e40af', label: 'Confirmed' },
  in_session: { bg: '#fed7aa', text: '#92400e', label: 'In Session' },
  completed_unconfirmed: { bg: '#fef08a', text: '#854d0e', label: 'Completed (Pending)' },
  completed: { bg: '#dcfce7', text: '#166534', label: 'Completed' },
  cancelled: { bg: '#fee2e2', text: '#991b1b', label: 'Cancelled' },
};

export default function HealingPavilionDashboard() {
  const { user, isAuthenticated } = useAuthStore()
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    cancelled: 0,
  });

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
      loadBookings();
    };

    checkAdmin();
  }, []);

  const handleSectionChange = (url:string) => {
    window.location.href = url
  }

  const loadBookings = async () => {
    try {
      const result = await bookingAPI.getBookings();
      setBookings(result.bookings || []);

      // Calculate stats
      const total = result.bookings.length;
      const pending = result.bookings.filter((b: Booking) => b.status === 'pending').length;
      const completed = result.bookings.filter((b: Booking) => b.status === 'completed').length;
      const cancelled = result.bookings.filter((b: Booking) => b.status === 'cancelled').length;

      setStats({ total, pending, completed, cancelled });
    } catch (err) {
      console.error('Error loading bookings:', err);
    } finally {
      setLoading(false);
    }
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
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Healing Pavilion Dashboard
        </h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div onClick={() => handleSectionChange("dashboard/bookings")}>
            <button style={{ padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '0.375rem', cursor: 'pointer', border: 'none' }}>
              View All Bookings
            </button>
          </div>
          <div onClick={() => handleSectionChange("dashboard/availability")}>
            <button style={{ padding: '0.5rem 1rem', backgroundColor: '#10b981', color: '#fff', borderRadius: '0.375rem', cursor: 'pointer', border: 'none' }}>
              Manage Availability
            </button>
          </div>
          <div onClick={() => handleSectionChange("dashboard/settings")}>
            <button style={{ padding: '0.5rem 1rem', backgroundColor: '#8b5cf6', color: '#fff', borderRadius: '0.375rem', cursor: 'pointer', border: 'none' }}>
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', backgroundColor: '#fff' }}>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Total Bookings</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{stats.total}</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', backgroundColor: '#fff' }}>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Pending</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#999999' }}>{stats.pending}</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', backgroundColor: '#fff' }}>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Completed</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>{stats.completed}</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', backgroundColor: '#fff' }}>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Cancelled</p>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>{stats.cancelled}</p>
        </div>
      </div>

      {/* Recent Bookings */}
      <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Recent Bookings</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Client Name</th>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Service Type</th>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Date & Time</th>
                <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: '600' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.slice(0, 5).map(booking => {
                const statusInfo = STATUS_COLORS[booking.status] || STATUS_COLORS.pending;
                return (
                  <tr key={booking.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '0.75rem' }}>{booking.client_name}</td>
                    <td style={{ padding: '0.75rem' }}>{booking.service_type}</td>
                    <td style={{ padding: '0.75rem' }}>
                      {booking.booking_date} {booking.start_time}
                    </td>
                    <td style={{ padding: '0.75rem' }}>
                      <span
                        style={{
                          padding: '0.375rem 0.75rem',
                          borderRadius: '0.25rem',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          backgroundColor: statusInfo.bg,
                          color: statusInfo.text,
                        }}
                      >
                        {statusInfo.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
