'use client';

import React, { useEffect, useState } from 'react';
import { bookingAPI } from '../../api/booking';
import { useAuthStore } from '../../store/authStore';
import Link from '../../components/Link';
import { confirm } from '../../components/Toast';

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

export default function HealingPavilionBookingsPage() {
  const { user, isAuthenticated } = useAuthStore()
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [actionLoading, setActionLoading] = useState<Record<number, boolean>>({});
  const [message, setMessage] = useState('');

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

  const loadBookings = async () => {
    try {
      const result = await bookingAPI.getBookings();
      setBookings(result.bookings || []);
    } catch (err) {
      console.error('Error loading bookings:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (bookingId: number, newStatus: string) => {
    setActionLoading(prev => ({ ...prev, [bookingId]: true }));

    try {
      await bookingAPI.updateBookingStatus(bookingId, newStatus);
      setMessage('Booking status updated');
      await loadBookings();

      setTimeout(() => setMessage(''), 3000);
    } catch (err: any) {
      setMessage('Error updating booking: ' + err.message);
    } finally {
      setActionLoading(prev => ({ ...prev, [bookingId]: false }));
    }
  };

  const handleConfirm = async (bookingId: number) => {
    setActionLoading(prev => ({ ...prev, [bookingId]: true }));

    try {
      await bookingAPI.confirmBooking(bookingId, 'admin');
      setMessage('Booking confirmed');
      await loadBookings();

      setTimeout(() => setMessage(''), 3000);
    } catch (err: any) {
      setMessage('Error confirming booking: ' + err.message);
    } finally {
      setActionLoading(prev => ({ ...prev, [bookingId]: false }));
    }
  };

  const handleCancel = async (bookingId: number) => {
    const confirmed = await confirm('Are you sure you want to cancel this booking?');
    if (!confirmed) return;

    setActionLoading(prev => ({ ...prev, [bookingId]: true }));

    try {
      await bookingAPI.cancelBooking(bookingId);
      setMessage('Booking cancelled');
      await loadBookings();

      setTimeout(() => setMessage(''), 3000);
    } catch (err: any) {
      setMessage('Error cancelling booking: ' + err.message);
    } finally {
      setActionLoading(prev => ({ ...prev, [bookingId]: false }));
    }
  };

  const handleSectionChange = (url:string) => {
    window.location.href = url
  }

  const filteredBookings = selectedStatus === 'all'
    ? bookings
    : bookings.filter(b => b.status === selectedStatus);

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
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          Bookings Management
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

      {/* Filter */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginRight: '1rem', fontWeight: '600' }}>Filter by Status:</label>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          style={{
            padding: '0.5rem',
            border: '1px solid #d1d5db',
            borderRadius: '0.375rem',
          }}
        >
          <option value="all">All Bookings ({bookings.length})</option>
          <option value="pending">Pending ({bookings.filter(b => b.status === 'pending').length})</option>
          <option value="confirmed">Confirmed ({bookings.filter(b => b.status === 'confirmed').length})</option>
          <option value="in_session">In Session ({bookings.filter(b => b.status === 'in_session').length})</option>
          <option value="completed_unconfirmed">Completed (Pending) ({bookings.filter(b => b.status === 'completed_unconfirmed').length})</option>
          <option value="completed">Completed ({bookings.filter(b => b.status === 'completed').length})</option>
          <option value="cancelled">Cancelled ({bookings.filter(b => b.status === 'cancelled').length})</option>
        </select>
      </div>

      {/* Bookings Table */}
      <div style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f3f4f6', borderBottom: '2px solid #e5e7eb' }}>
              <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Client Info</th>
              <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Service</th>
              <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Date & Time</th>
              <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Status</th>
              <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Confirmations</th>
              <th style={{ textAlign: 'left', padding: '1rem', fontWeight: '600' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map(booking => {
              const statusInfo = STATUS_COLORS[booking.status] || STATUS_COLORS.pending;
              const isLoading = actionLoading[booking.id];

              return (
                <tr key={booking.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ fontWeight: '600' }}>{booking.client_name}</div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{booking.client_email}</div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{booking.client_phone}</div>
                  </td>
                  <td style={{ padding: '1rem' }}>{booking.service_type}</td>
                  <td style={{ padding: '1rem' }}>
                    <div>{booking.booking_date}</div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      {booking.start_time} - {booking.end_time}
                    </div>
                  </td>
                  <td style={{ padding: '1rem' }}>
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
                  <td style={{ padding: '1rem', fontSize: '0.875rem' }}>
                    <div>Admin: {booking.admin_confirmed ? '✓' : '○'}</div>
                    <div>Client: {booking.client_confirmed ? '✓' : '○'}</div>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {booking.status === 'pending' && (
                        <button
                          onClick={() => handleStatusChange(booking.id, 'confirmed')}
                          disabled={isLoading}
                          style={{
                            padding: '0.375rem 0.75rem',
                            backgroundColor: '#3b82f6',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '0.25rem',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            fontSize: '0.875rem',
                            opacity: isLoading ? 0.5 : 1,
                          }}
                        >
                          Confirm
                        </button>
                      )}
                      {booking.status === 'completed_unconfirmed' && (
                        <button
                          onClick={() => handleConfirm(booking.id)}
                          disabled={isLoading}
                          style={{
                            padding: '0.375rem 0.75rem',
                            backgroundColor: '#10b981',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '0.25rem',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            fontSize: '0.875rem',
                            opacity: isLoading ? 0.5 : 1,
                          }}
                        >
                          Confirm Completion
                        </button>
                      )}
                      {booking.status !== 'cancelled' && booking.status !== 'completed' && (
                        <button
                          onClick={() => handleCancel(booking.id)}
                          disabled={isLoading}
                          style={{
                            padding: '0.375rem 0.75rem',
                            backgroundColor: '#ef4444',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '0.25rem',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            fontSize: '0.875rem',
                            opacity: isLoading ? 0.5 : 1,
                          }}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filteredBookings.length === 0 && (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
          No bookings found for the selected filter.
        </div>
      )}
    </div>
  );
}
