'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, User, Mail, Phone, Heart, CheckCircle2, AlertCircle, ArrowLeft, Loader } from 'lucide-react';
// import { checkLoginStatus, getUserData } from '../../api/authService';
import { availabilityAPI, bookingAPI } from '../../api/booking';
import Calendar from '../../components/Calendar';
import { useAuthStore } from '../../store/authStore';

const SERVICE_TYPES = [
    'Vaginismus Recovery',
    'Clarity Sessions',
    'VOV Recovery',
    'Couples Counseling',
];

interface TimeSlot {
    start: string;
    end: string;
}

interface BookingData {
    client_name: string;
    client_email: string;
    client_phone: string;
    service_type: string;
    booking_date: string;
    start_time: string;
    end_time: string;
}

export default function ClientBookingPage() {
    const { user, isAuthenticated } = useAuthStore()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [slots, setSlots] = useState<Record<string, TimeSlot[]>>({});
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
    const [formData, setFormData] = useState<BookingData>({
        client_name: '',
        client_email: '',
        client_phone: '',
        service_type: SERVICE_TYPES[0],
        booking_date: '',
        start_time: '',
        end_time: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [confirmBooking, setConfirmBooking] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const checkAuth = async () => {
            // if (!store.isAuthenticated) {
            //     window.location.replace("/login")
            // }
            const auth = isAuthenticated;
            setIsLoggedIn(auth);

            if (auth) {
                setCurrentUser(user);
                setFormData(prev => ({
                    ...prev,
                    client_name: user?.displayName || '',
                    client_email: user?.email || '',
                }));
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    useEffect(() => {
        const loadSlots = async () => {
            try {
                const today = new Date();
                const startDate = new Date(today);
                startDate.setDate(today.getDate() - today.getDay() + 2);
                const endDate = new Date(startDate);
                endDate.setDate(startDate.getDate() + 3);

                const startStr = startDate.toISOString().split('T')[0];
                const endStr = endDate.toISOString().split('T')[0];

                const result = await availabilityAPI.getAvailableSlots(startStr, endStr);
                setSlots(result.slots || {});
            } catch (err) {
                console.error('Error loading slots:', err);
            }
        };

        loadSlots();
    }, []);

    const handleDateSelect = (date: string) => {
        setSelectedDate(date);
        setFormData(prev => ({
            ...prev,
            booking_date: date,
        }));
        setSelectedSlot(null);
    };

    const handleSlotSelect = (slot: TimeSlot) => {
        setSelectedSlot(slot);
        setFormData(prev => ({
            ...prev,
            start_time: slot.start,
            end_time: slot.end,
        }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (!formData.client_name || !formData.client_email || !formData.client_phone) {
            setErrorMessage('Please fill in all required fields');
            return;
        }

        if (!formData.booking_date || !formData.start_time) {
            setErrorMessage('Please select a date and time');
            return;
        }

        setIsSubmitting(true);

        try {
            const result = await bookingAPI.submitBooking(formData);
            setSuccessMessage('Booking submitted successfully! Awaiting admin confirmation.');
            setConfirmBooking(true);
            setFormData({
                client_name: currentUser?.name || '',
                client_email: currentUser?.email || '',
                client_phone: '',
                service_type: SERVICE_TYPES[0],
                booking_date: '',
                start_time: '',
                end_time: '',
            });
            setSelectedDate('');
            setSelectedSlot(null);
        } catch (err: any) {
            setErrorMessage(err.message || 'Failed to submit booking');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FAF9F8'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        textAlign: 'center',
                        padding: '3rem',
                        backgroundColor: '#fff',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)'
                    }}
                >
                    <Loader size={48} color="#CEACA1" style={{ animation: 'spin 1s linear infinite' }} />
                    <p style={{ marginTop: '1rem', color: '#6b7280', fontSize: '1rem' }}>Loading...</p>
                </motion.div>
            </div>
        );
    }

    if (!isLoggedIn) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FAF9F8'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        textAlign: 'center',
                        padding: '4rem',
                        backgroundColor: '#fff',
                        borderRadius: '1rem',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                        maxWidth: '500px'
                    }}
                >
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#ECE7E8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 2rem'
                    }}>
                        <User size={40} color="#CEACA1" />
                    </div>
                    <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: '#2d2d2d' }}>
                        Please Log In
                    </h1>
                    <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.125rem' }}>
                        You need to be logged in to book a session
                    </p>
                    <a href="/login" style={{ textDecoration: 'none' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                padding: '1rem 2rem',
                                backgroundColor: '#CEACA1',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '0.75rem',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                        >
                            Go to Login
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        );
    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#FAF9F8' }} className='mt-10'>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    backgroundColor: '#fff',
                    borderBottom: '1px solid #ECE7E8',
                    padding: '2rem',
                    marginBottom: '3rem'
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <a href="/" style={{ textDecoration: 'none' }}>
                        <motion.button
                            whileHover={{ x: -4 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                backgroundColor: 'transparent',
                                border: '1px solid #ECE7E8',
                                borderRadius: '0.5rem',
                                color: '#6b7280',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                marginBottom: '1.5rem'
                            }}
                        >
                            <ArrowLeft size={16} />
                            Back to Home
                        </motion.button>
                    </a>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '700',
                        color: '#2d2d2d',
                        letterSpacing: '-0.02em'
                    }}>
                        Book Your Session
                    </h1>
                    <p style={{ color: '#6b7280', fontSize: '1.125rem', marginTop: '0.5rem' }}>
                        Choose a convenient time for your healing journey
                    </p>
                </div>
            </motion.div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 4rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2.5rem' }}>
                    {/* Calendar Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{
                            backgroundColor: '#fff',
                            borderRadius: '1rem',
                            padding: '2rem',
                            border: '1px solid #ECE7E8',
                            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '0.5rem',
                                    backgroundColor: '#ECE7E8',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <CalendarIcon size={20} color="#CEACA1" />
                                </div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d2d2d' }}>
                                    Select Date
                                </h2>
                            </div>
                            <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                                Available days: Tuesday, Wednesday, Friday
                            </p>
                            <Calendar
                                availableDates={Object.keys(slots)}
                                selectedDate={selectedDate}
                                onSelectDate={handleDateSelect}
                                // monthsToShow={3}
                            />
                        </div>
                    </motion.div>

                    {/* Time Slots Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div style={{
                            backgroundColor: '#fff',
                            borderRadius: '1rem',
                            padding: '2rem',
                            border: '1px solid #ECE7E8',
                            boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
                            position: 'sticky',
                            top: '2rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '0.5rem',
                                    backgroundColor: '#ECE7E8',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Clock size={20} color="#AAB09D" />
                                </div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d2d2d' }}>
                                    Select Time
                                </h2>
                            </div>

                            <AnimatePresence mode="wait">
                                {!selectedDate ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        style={{
                                            padding: '2rem 1.5rem',
                                            backgroundColor: '#ECE7E8',
                                            borderRadius: '0.75rem',
                                            color: '#6b7280',
                                            textAlign: 'center',
                                            border: '1px dashed #CEACA1'
                                        }}
                                    >
                                        <CalendarIcon size={32} color="#CEACA1" style={{ margin: '0 auto 1rem' }} />
                                        <p style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                                            Please select a date to view available times
                                        </p>
                                    </motion.div>
                                ) : !slots[selectedDate] || slots[selectedDate].length === 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        style={{
                                            padding: '2rem 1.5rem',
                                            backgroundColor: '#fef2f2',
                                            borderRadius: '0.75rem',
                                            color: '#991b1b',
                                            textAlign: 'center',
                                            border: '1px solid #fecaca'
                                        }}
                                    >
                                        <AlertCircle size={32} color="#991b1b" style={{ margin: '0 auto 1rem' }} />
                                        <p style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                                            No available time slots for this date
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                                    >
                                        {slots[selectedDate].map((slot, idx) => {
                                            const isSelected = selectedSlot?.start === slot.start;
                                            return (
                                                <motion.button
                                                    key={idx}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    whileHover={{ scale: 1.02, x: 4 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => handleSlotSelect(slot)}
                                                    style={{
                                                        padding: '1rem 1.25rem',
                                                        border: isSelected ? '2px solid #CEACA1' : '1px solid #ECE7E8',
                                                        borderRadius: '0.75rem',
                                                        backgroundColor: isSelected ? '#CEACA1' : '#fff',
                                                        cursor: 'pointer',
                                                        textAlign: 'left',
                                                        fontWeight: isSelected ? '600' : '500',
                                                        color: isSelected ? '#fff' : '#2d2d2d',
                                                        transition: 'all 0.2s',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '0.75rem',
                                                        fontSize: '0.9375rem'
                                                    }}
                                                >
                                                    <Clock size={18} color={isSelected ? '#fff' : '#AAB09D'} />
                                                    {slot.start} - {slot.end}
                                                </motion.button>
                                            );
                                        })}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Booking Form */}
                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    style={{ marginTop: '2.5rem' }}
                >
                    <div style={{
                        backgroundColor: '#fff',
                        borderRadius: '1rem',
                        padding: '2.5rem',
                        border: '1px solid #ECE7E8',
                        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)'
                    }}>
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: '600',
                            marginBottom: '2rem',
                            color: '#2d2d2d',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <User size={24} color="#CEACA1" />
                            Your Information
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div>
                                <label style={{
                                    display: 'block',
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    marginBottom: '0.625rem',
                                    color: '#2d2d2d'
                                }}>
                                    Full Name *
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <User size={18} color="#AAB09D" style={{
                                        position: 'absolute',
                                        left: '1rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }} />
                                    <input
                                        type="text"
                                        name="client_name"
                                        value={formData.client_name}
                                        onChange={handleInputChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem 0.875rem 3rem',
                                            border: '1px solid #ECE7E8',
                                            borderRadius: '0.75rem',
                                            fontSize: '1rem',
                                            backgroundColor: '#FAF9F8',
                                            transition: 'all 0.2s',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#CEACA1'}
                                        onBlur={(e) => e.target.style.borderColor = '#ECE7E8'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{
                                    display: 'block',
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    marginBottom: '0.625rem',
                                    color: '#2d2d2d'
                                }}>
                                    Email *
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <Mail size={18} color="#AAB09D" style={{
                                        position: 'absolute',
                                        left: '1rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }} />
                                    <input
                                        type="email"
                                        name="client_email"
                                        value={formData.client_email}
                                        onChange={handleInputChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem 0.875rem 3rem',
                                            border: '1px solid #ECE7E8',
                                            borderRadius: '0.75rem',
                                            fontSize: '1rem',
                                            backgroundColor: '#FAF9F8',
                                            transition: 'all 0.2s',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#CEACA1'}
                                        onBlur={(e) => e.target.style.borderColor = '#ECE7E8'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{
                                    display: 'block',
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    marginBottom: '0.625rem',
                                    color: '#2d2d2d'
                                }}>
                                    Phone *
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <Phone size={18} color="#AAB09D" style={{
                                        position: 'absolute',
                                        left: '1rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }} />
                                    <input
                                        type="tel"
                                        name="client_phone"
                                        value={formData.client_phone}
                                        onChange={handleInputChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem 0.875rem 3rem',
                                            border: '1px solid #ECE7E8',
                                            borderRadius: '0.75rem',
                                            fontSize: '1rem',
                                            backgroundColor: '#FAF9F8',
                                            transition: 'all 0.2s',
                                            outline: 'none'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#CEACA1'}
                                        onBlur={(e) => e.target.style.borderColor = '#ECE7E8'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{
                                    display: 'block',
                                    fontSize: '0.875rem',
                                    fontWeight: '600',
                                    marginBottom: '0.625rem',
                                    color: '#2d2d2d'
                                }}>
                                    Service Type *
                                </label>
                                <div style={{ position: 'relative' }}>
                                    <Heart size={18} color="#AAB09D" style={{
                                        position: 'absolute',
                                        left: '1rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        pointerEvents: 'none',
                                        zIndex: 1
                                    }} />
                                    <select
                                        name="service_type"
                                        value={formData.service_type}
                                        onChange={handleInputChange}
                                        style={{
                                            width: '100%',
                                            padding: '0.875rem 1rem 0.875rem 3rem',
                                            border: '1px solid #ECE7E8',
                                            borderRadius: '0.75rem',
                                            fontSize: '1rem',
                                            backgroundColor: '#FAF9F8',
                                            transition: 'all 0.2s',
                                            outline: 'none',
                                            cursor: 'pointer'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#CEACA1'}
                                        onBlur={(e) => e.target.style.borderColor = '#ECE7E8'}
                                    >
                                        {SERVICE_TYPES.map(type => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <AnimatePresence>
                            {errorMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    style={{
                                        marginTop: '1.5rem',
                                        padding: '1rem 1.25rem',
                                        backgroundColor: '#fef2f2',
                                        borderRadius: '0.75rem',
                                        color: '#991b1b',
                                        border: '1px solid #fecaca',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem'
                                    }}
                                >
                                    <AlertCircle size={20} />
                                    {errorMessage}
                                </motion.div>
                            )}

                            {successMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    style={{
                                        marginTop: '1.5rem',
                                        padding: '1rem 1.25rem',
                                        backgroundColor: '#f0fdf4',
                                        borderRadius: '0.75rem',
                                        color: '#166534',
                                        border: '1px solid #bbf7d0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem'
                                    }}
                                >
                                    <CheckCircle2 size={20} />
                                    {successMessage}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Submit Button */}
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                            <motion.button
                                type="submit"
                                disabled={isSubmitting || !selectedDate || !selectedSlot}
                                whileHover={selectedDate && selectedSlot ? { scale: 1.02 } : {}}
                                whileTap={selectedDate && selectedSlot ? { scale: 0.98 } : {}}
                                style={{
                                    padding: '1rem 2.5rem',
                                    backgroundColor: selectedDate && selectedSlot ? '#CEACA1' : '#d1d5db',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '0.75rem',
                                    cursor: selectedDate && selectedSlot ? 'pointer' : 'not-allowed',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'all 0.2s',
                                    boxShadow: selectedDate && selectedSlot ? '0 4px 12px rgba(206, 172, 161, 0.3)' : 'none'
                                }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader size={20} style={{ animation: 'spin 1s linear infinite' }} />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle2 size={20} />
                                        Confirm Booking
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </div>
                </motion.form>
            </div>

            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}
