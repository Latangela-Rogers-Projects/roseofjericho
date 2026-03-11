// API Configuration
import { API_BASE_URL, APP_BASE_URL } from "../config/api"

// Get token from localStorage
export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
};

// Check if user is authenticated
export const isAuthenticated = async (): Promise<boolean> => {
  const token = getToken();
  if (!token) return false;

  try {
    const response = await fetch(`${APP_BASE_URL}/wp-json/wp/v2/users/me`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    return response.ok;
  } catch {
    return false;
  }
};

// Get current user data
export const getCurrentUser = async () => {
  const token = getToken();
  if (!token) return null;

  try {
    const response = await fetch(`${APP_BASE_URL}/wp-json/wp/v2/users/me?context=edit`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
};

// API call helper
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  } as Record<string, string>;

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${APP_BASE_URL}/wp-json${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `API error: ${response.status}`);
  }

  return await response.json();
};

// Booking API calls
export const bookingAPI = {
  submitBooking: async (data: {
    client_name: string;
    client_email: string;
    client_phone: string;
    service_type: string;
    booking_date: string;
    start_time: string;
    end_time: string;
  }) => {
    return apiCall('/custom/v1/submit-booking', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  getBookings: async () => {
    return apiCall('/custom/v1/get-bookings');
  },

  getUserBookings: async () => {
    return apiCall('/custom/v1/get-user-bookings');
  },

  updateBookingStatus: async (bookingId: number, status: string) => {
    return apiCall('/custom/v1/update-booking-status', {
      method: 'POST',
      body: JSON.stringify({ booking_id: bookingId, status }),
    });
  },

  confirmBooking: async (bookingId: number, who: 'admin' | 'client') => {
    return apiCall('/custom/v1/confirm-booking', {
      method: 'POST',
      body: JSON.stringify({ booking_id: bookingId, who }),
    });
  },

  cancelBooking: async (bookingId: number) => {
    return apiCall('/custom/v1/cancel-booking', {
      method: 'POST',
      body: JSON.stringify({ booking_id: bookingId }),
    });
  },

  autoUpdateStatuses: async () => {
    return apiCall('/custom/v1/update-booking-statuses');
  },
};

// Availability API calls
export const availabilityAPI = {
  getAvailability: async () => {
    return apiCall('/custom/v1/get-availability');
  },

  getAvailableSlots: async (startDate: string, endDate: string) => {
    const params = new URLSearchParams({ start_date: startDate, end_date: endDate });
    return apiCall(`/custom/v1/get-available-slots?${params}`);
  },

  setAvailability: async (data: {
    day_of_week: number;
    start_time: string;
    end_time: string;
    is_available: boolean;
    applies_to: 'general' | 'week' | 'specific_date';
    specific_date?: string;
    recurring_until?: string;
  }) => {
    return apiCall('/custom/v1/set-availability', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  setSpecificAvailability: async (data: {
    specific_date: string;
    start_time: string;
    end_time: string;
    is_available: boolean;
  }) => {
    return apiCall('/custom/v1/set-specific-availability', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

// Status API calls
export const statusAPI = {
  getBookingStatus: async (bookingId: number) => {
    const params = new URLSearchParams({ booking_id: bookingId.toString() });
    return apiCall(`/custom/v1/get-booking-status?${params}`);
  },

  getStatusInfo: async (status: string) => {
    const params = new URLSearchParams({ status });
    return apiCall(`/custom/v1/get-status-info?${params}`);
  },
};
