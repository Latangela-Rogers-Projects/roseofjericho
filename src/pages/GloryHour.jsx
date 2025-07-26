import React, { useState, useEffect } from 'react';
import { Clock, Sun, Moon, Calendar, Bell, Share2, Heart, Users, Star, ArrowRight } from 'lucide-react';
import { addToCalender } from '../api/addToCalender';

const GloryHour = () => {
    const [nextSession, setNextSession] = useState(null);
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isReminderSet, setIsReminderSet] = useState(false);
    const eventAdd = {
        title: "Glory Hour",
        description: "GLORY HOUR WITH LATANGELA ROGERS.",
        location: "Online",
        start: [2025, 4, 20, 14, 30], // [YYYY, M, D, H, M]
        duration: { hours: 1 },
        status: "CONFIRMED",
    }

    useEffect(() => {
        // Calculate next session (Monday or Wednesday at 3 AM PST)
        const calculateNextSession = () => {
            const now = new Date();
            const pstDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
            let nextDate = new Date(pstDate);

            // Set to 3 AM
            nextDate.setHours(3, 0, 0, 0);

            // If it's past 3 AM today, move to next day
            if (pstDate.getHours() >= 3) {
                nextDate.setDate(nextDate.getDate() + 1);
            }

            // Find next Monday or Wednesday
            while (nextDate.getDay() !== 1 && nextDate.getDay() !== 3) {
                nextDate.setDate(nextDate.getDate() + 1);
            }

            setNextSession(nextDate);
        };

        calculateNextSession();
        const interval = setInterval(calculateNextSession, 1000 * 60); // Update every minute

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!nextSession) return;

        const updateCountdown = () => {
            const now = new Date();
            const diff = nextSession.getTime() - now.getTime();

            if (diff > 0) {
                setCountdown({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((diff % (1000 * 60)) / 1000)
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [nextSession]);

    const handleSetReminder = () => {
        addToCalender(eventAdd);
        // In a real implementation, this would integrate with a calendar API
        setIsReminderSet(!isReminderSet);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-deep-purple via-deep-purple to-black text-white pt-0">
            {/* Hero Section */}
            <section className="relative py-24 pt-40 sm:h-[40vh] md:h-[60vh] lg:h-[100vh] flex justify-center">
                <div className="absolute inset-0 bg-[url('https://www.thetransformationcollective.org/wp-content/uploads/2025/04/glory-hour.jpeg')] bg-cover bg-center opacity-90"></div>
                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="text-center mb-12 opacity-0">
                        <h1 className="text-6xl font-bold mb-6">Glory Hour</h1>
                        <p className="text-2xl text-gray-300">with LaTangela Rogers</p>
                    </div>


                </div>
                {/* Countdown Timer */}
                <div className="hidden md:block absolute bottom-[-15vh] bg-black/80 rounded-xl p-8 px-16 backdrop-blur-sm min-w-3xl mx-auto opacity-100" style={{ zIndex: 2 }}>
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2">Next Session Begins In</h2>
                        <div className="flex justify-center gap-8">
                            {[
                                { label: 'Days', value: countdown.days },
                                { label: 'Hours', value: countdown.hours },
                                { label: 'Minutes', value: countdown.minutes },
                                { label: 'Seconds', value: countdown.seconds }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-[80px] mx-[2vw] font-bold text-gold">{item.value}</div>
                                    <div className="text-sm relative top-[-20px] text-gray-400">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-4">
                        <button
                            onClick={handleSetReminder}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${isReminderSet
                                ? 'bg-deep-purple text-gold'
                                : 'bg-gold text-deep-purple hover:bg-white'
                                }`}
                        >
                            <Bell className="w-5 h-5" />
                            {isReminderSet ? 'Reminder Set' : 'Set Reminder'}
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                            <Share2 className="w-5 h-5" />
                            Share
                        </button>
                    </div>
                </div>
            </section>

            <div className="md:hidden bottom-[-15vh] bg-black/80 rounded-xl p-8 px-16 backdrop-blur-sm min-w-3xl mx-auto opacity-100" style={{ zIndex: 2 }}>
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Next Session Begins In</h2>
                    <div className="flex justify-center gap-8">
                        {[
                            { label: 'Days', value: countdown.days },
                            { label: 'Hours', value: countdown.hours },
                            { label: 'Minutes', value: countdown.minutes },
                            { label: 'Seconds', value: countdown.seconds }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="text-[80px] mx-[2vw] font-bold text-gold">{item.value}</div>
                                <div className="text-sm relative top-[-20px] text-gray-400">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={handleSetReminder}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${isReminderSet
                            ? 'bg-deep-purple text-gold'
                            : 'bg-gold text-deep-purple hover:bg-white'
                            }`}
                    >
                        <Bell className="w-5 h-5" />
                        {isReminderSet ? 'Reminder Set' : 'Set Reminder'}
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                        <Share2 className="w-5 h-5" />
                        Share
                    </button>
                </div>
            </div>

            <div className='relative bg-black/90'>
                <div className="absolute inset-0 bg-[url('https://www.thetransformationcollective.org/wp-content/uploads/2025/02/39191038.jpeg')] bg-cover bg-[center_bottom_0] opacity-10 blur-sm"></div>

                {/* Schedule Section */}
                <section className="py-4 pb-10 md:py-20 px-4 bg-black/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-deep-purple p-8 md:pt-20 rounded-xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <Clock className="w-8 h-8 text-gold" />
                                    <h2 className="text-2xl font-bold">Schedule</h2>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Every Monday & Wednesday</h3>
                                        <p className="text-4xl font-bold text-gold">3:00 AM PST</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">Time Zones</h4>
                                        <ul className="space-y-2 text-gray-300">
                                            <li>6:00 AM EST</li>
                                            <li>11:00 AM GMT</li>
                                            <li>12:00 PM CET</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-deep-purple p-8 md:pt-20 rounded-xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <Star className="w-8 h-8 text-gold" />
                                    <h2 className="text-2xl font-bold">What to Expect</h2>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Spiritual Guidance & Teaching",
                                        "Prayer & Meditation",
                                        "Divine Inspiration",
                                        "Community Connection",
                                        "Personal Transformation"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Section */}
                <section className="py-20 px-4 bg-white text-black">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                            <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
                            <p className="text-xl text-gray-600">Connect with fellow believers and grow together</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Prayer Requests",
                                    description: "Share your prayer needs with our community",
                                    icon: Heart
                                },
                                {
                                    title: "Testimonies",
                                    description: "Share your Glory Hour experiences",
                                    icon: Star
                                },
                                {
                                    title: "Connect Groups",
                                    description: "Join small groups for deeper connections",
                                    icon: Users
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-deep-purple/60 p-6 rounded-xl hover:transform hover:scale-105 transition-transform">
                                    <item.icon className="w-10 h-10 text-gold mb-4" />
                                    <h3 className="text-xl text-white font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-200 mb-4">{item.description}</p>
                                    <button className="text-gold flex items-center gap-2 hover:text-white transition-colors">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>



            {/* Calendar Integration */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-deep-purple/40 rounded-2xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-deep-purple/10"></div>
                            <Calendar className="absolute right-0 bottom-0 w-64 h-64 text-gold opacity-10 transform translate-x-1/4 translate-y-1/4" />
                        </div>
                        <div className="relative z-10 text-center max-w-2xl mx-auto">
                            <h2 className="text-4xl font-bold mb-6">Never Miss a Session</h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Add Glory Hour to your calendar and receive notifications before each session
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-3 bg-gold text-deep-purple rounded-lg font-semibold hover:bg-white transition-colors">
                                    Add to Google Calendar
                                </button>
                                <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors">
                                    Add to Apple Calendar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GloryHour;