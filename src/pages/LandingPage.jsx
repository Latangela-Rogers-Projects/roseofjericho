import React, { useState, useEffect, useRef } from 'react';
import {
    Mail,
    Users,
    Heart,
    Download,
    Calendar,
    Play,
    ChevronDown,
    CheckCircle,
    MessageCircle,
    Headphones,
    ExternalLink,
    ArrowRight,
    MonitorPlay
} from 'lucide-react';
import apiData from '../api';
import Link from '../components/Link';
import Footer from '../components/Footer';


const ReturnBG = ({ index, opacity, extraTailwind }) => {
    const url = [
        "https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-45-59-5.jpg",
        "https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-43-01-3.jpg",
        "https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-45-59-2.jpg",
        "https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-45-58.jpg",
        "https://www.thetransformationcollective.org/wp-content/uploads/2025/04/glory-hour.jpeg",
        "https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-46-00-2.jpg"
    ];

    return (
        <div
            className={`h-full w-full absolute top-0 left-0 opacity-20 ${extraTailwind}`}
            style={{
                backgroundImage: `url(${url[index]})`, // or url[1] if you want fixed
                backgroundPosition: "center",
                backgroundSize: "cover",
                opacity
            }}
        ></div>
    );
};

// Animation hook for scroll-triggered animations
const useScrollAnimation = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return { ref, isVisible };
};

// Animated Section wrapper component
// const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
const AnimatedSection = ({
    children,
    className = "",
    delay = 0
}) => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// Email Signup Modal Component
// const EmailSignupModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
const EmailSignupModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send data to your backend
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
            setFormData({ name: '', email: '' });
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full transform transition-all duration-300 scale-100">
                {!isSubmitted ? (
                    <>
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Join the Prayer Movement</h3>
                            <p className="text-gray-600">Connect with our spiritual community and receive updates</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name (Optional)"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                            >
                                Join the Movement
                            </button>
                        </form>

                        <button
                            onClick={onClose}
                            className="mt-4 w-full text-gray-500 hover:text-gray-700 transition-colors duration-200"
                        >
                            Close
                        </button>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">You're in!</h3>
                        <p className="text-gray-600">Check your inbox for access and welcome information.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// Prayer Request Modal Component
// const PrayerRequestModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
const PrayerRequestModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', prayerNeed: '', schedule: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
            setFormData({ name: '', email: '', prayerNeed: '', schedule: '' });
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
                {!isSubmitted ? (
                    <>
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Prayer Request</h3>
                            <p className="text-gray-600">Let us pray with you and for you</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Prayer Need *"
                                    value={formData.prayerNeed}
                                    onChange={(e) => setFormData({ ...formData, prayerNeed: e.target.value })}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                                />
                            </div>
                            <div>
                                <select
                                    value={formData.schedule}
                                    onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                                >
                                    <option value="">Preferred Prayer Session (Optional)</option>
                                    <option value="morning">Morning Prayer (8AM EST)</option>
                                    <option value="evening">Evening Prayer (7PM EST)</option>
                                    <option value="weekend">Weekend Sessions</option>
                                    <option value="private">Private Prayer Request</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                            >
                                Submit Prayer Request
                            </button>
                        </form>

                        <button
                            onClick={onClose}
                            className="mt-4 w-full text-gray-500 hover:text-gray-700 transition-colors duration-200"
                        >
                            Close
                        </button>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <Heart className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Prayer Received</h3>
                        <p className="text-gray-600">Your prayer request has been received. We will be praying for you.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

// Streaming Platform Component
// const StreamingPlatform: React.FC<{ name: string; icon: React.ReactNode; url: string; color: string }> = ({ 
const StreamingPlatform = ({
    name,
    icon,
    url,
    color
}) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-${color}-200`}
        >
            <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                {name}
            </span>
            <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute top-2 right-2" />
        </a>
    );
};

function LandingPage() {
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const [prayerModalOpen, setPrayerModalOpen] = useState(false);

    // Scroll to section function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-deep-purple to-black text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-deep-purple/65 bg-opacity-95 backdrop-blur-sm z-40 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Link to="/" className={`text-1xl flex items-center justify-between text-white`}>
                            <div style={{
                                background: `url(${apiData.imgUri}sample-bg4.png) center`, backgroundSize: "contain",
                                height: 60, width: 60
                            }}></div>
                            <div>
                                <p className={`px-2 leading-none pt-1 font-phosphate`}>
                                    Transformation
                                    <br />
                                    collective
                                </p>
                                <p className={`px-2 leading-none pt-0 font-allura`}>Leadership Academy</p>
                            </div>
                        </Link>
                        <div className="hidden md:flex items-center space-x-6">
                            <button
                                onClick={() => scrollToSection('podcast')}
                                className="text-gray-100 hover:text-purple-300 transition-colors duration-200"
                            >
                                Podcast
                            </button>
                            <button
                                onClick={() => scrollToSection('media')}
                                className="text-gray-100 hover:text-purple-300 transition-colors duration-200"
                            >
                                Listen
                            </button>
                            <button
                                onClick={() => setPrayerModalOpen(true)}
                                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                            >
                                Need Prayer?
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative">
                <ReturnBG index={0} opacity={0.1} />
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <AnimatedSection>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Join the{' '}
                                <span className="bg-gradient-to-r from-purple-100 to-amber-100 bg-clip-text text-transparent">
                                    Prayer Movement
                                </span>
                            </h1>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Connect with a community of believers, access powerful teachings, and experience
                                the transformative power of prayer together.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={400}>
                            <button
                                onClick={() => setEmailModalOpen(true)}
                                className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
                            >
                                <Mail className="w-5 h-5 inline mr-2" />
                                Join the Prayer Movement
                            </button>
                        </AnimatedSection>

                        <AnimatedSection delay={600}>
                            <button
                                onClick={() => scrollToSection('resources')}
                                className="flex items-center justify-center mx-auto text-purple-100 hover:text-purple-400 transition-colors duration-200 mt-8"
                            >
                                <span className="mr-2">Discover More</span>
                                <ChevronDown className="w-5 h-5 animate-bounce" />
                            </button>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Free Resources Section */}
            <section id="resources" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Free Resources & Live Prayer
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Access exclusive content and join our weekly prayer sessions
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatedSection delay={200}>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl relative">
                                <ReturnBG index={2} opacity={0.1} extraTailwind={"rounded-2xl"} />
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center mb-6">
                                    <Download className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Prayer Guide & Resources</h3>
                                <p className="text-gray-600 mb-6">
                                    Download our comprehensive prayer guide, meditation exercises, and spiritual growth resources.
                                </p>
                                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200">
                                    Download Free Guide
                                </button>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={400}>
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl relative">
                                <ReturnBG index={3} opacity={0.1} extraTailwind={"rounded-2xl"} />
                                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full flex items-center justify-center mb-6">
                                    <Calendar className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Weekly Prayer Sessions</h3>
                                <p className="text-gray-600 mb-6">
                                    Join our live prayer sessions every Wednesday at 7PM EST. Experience community prayer and spiritual fellowship.
                                </p>
                                <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transform hover:scale-105 transition-all duration-200">
                                    Get Zoom Access
                                </button>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Prayer Request Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 relative">
                <ReturnBG index={2} opacity={0.1} />
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedSection>
                        <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Heart className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                            Need Prayer?
                        </h2>
                        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                            You're not alone. Share your prayer needs with our community and experience the power of collective prayer.
                        </p>
                        <button
                            onClick={() => setPrayerModalOpen(true)}
                            className="bg-gradient-to-r from-amber-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5 inline mr-2" />
                            Submit Prayer Request
                        </button>
                    </AnimatedSection>
                </div>
            </section>

            {/* Podcast Section */}
            <section id="podcast" className="py-16 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Spiritual Teaching Podcast
                            </h2>
                            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                                Listen to our latest teachings, encouragement, and guided prayer sessions.
                                Available on all major platforms.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-2 gap-5 items-center">
                        <AnimatedSection delay={200}>
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-purple-100 to-amber-100 p-8 rounded-2xl">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-amber-600 rounded-full flex items-center justify-center mr-4">
                                            <Play className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">Latest Episode</h3>
                                            <p className="text-gray-600">The Power of Community Prayer</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Discover how praying together amplifies our spiritual connection and brings miraculous results.
                                    </p>
                                    <button onClick={() => { window.open("https://youtube.com/@thetransformationcollective-la?si=sUXUbYwJrcjeeeN7", '_blank') }}
                                        className="bg-gradient-to-r from-purple-600 to-amber-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                                        Listen Now
                                    </button>
                                </div>
                                <div className="bg-gradient-to-br from-purple-100 to-amber-100 p-8 rounded-2xl">
                                    <p className="text-gray-700 mb-4">
                                        Stay tuned for breathtaking episodes designed to help you grow mentally, socially, and spiritually.
                                        Whether you’re an aspiring leader or a minister of the Gospel, this is your go-to resource for inspiring insights and spiritual guidance.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={400}>
                            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-2xl">
                                <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-amber-400 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                                    {/* <Headphones className="w-16 h-16 text-white" /> */}
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/videoseries?list=PLTAxVPSIsZYhQWKfeWGQsTAwhF9-yrDcU"
                                        title="YouTube Channel"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Weekly Episodes</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Biblical teachings and insights</li>
                                    <li>• Guided prayer sessions</li>
                                    <li>• Community testimonies</li>
                                    <li>• Spiritual growth discussions</li>
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Media/Streaming Platforms Section */}
            <section id="media" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/10 relative">
                <ReturnBG index={2} opacity={0.05} />
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Available On All Platforms
                            </h2>
                            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                                Listen to our podcast wherever you prefer. Choose your favorite platform below.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        <AnimatedSection delay={100}>
                            <StreamingPlatform
                                name="Spotify"
                                // icon={<div className="w-8 h-8 bg-green-500 rounded-full"></div>}
                                icon={<img src="https://img.icons8.com/?size=100&id=11116&format=png&color=ffffff" alt="Spotify" className="w-8 h-8" />}
                                url="https://open.spotify.com/show/6wPjCkXvfbgf6qHKZD8c7G?si=ec2b3493797e412a"
                                color="bg-green-500"
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <StreamingPlatform
                                name="Apple Podcasts"
                                // icon={<div className="w-8 h-8 bg-purple-500 rounded-full"></div>}
                                icon={<img src="https://img.icons8.com/?size=100&id=Vbgjo40fF2XE&format=png&color=ffffff" alt="Apple Podcasts" className="w-8 h-8" />}
                                url="https://podcasts.apple.com/us/podcast/transformation-collective-leadership-academy/id1821478583"
                                color="bg-purple-500"
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={300}>
                            <StreamingPlatform
                                name="YouTube Music"
                                // icon={<div className="w-8 h-8 bg-red-500 rounded-full"></div>}
                                icon={<img src="https://img.icons8.com/?size=100&id=Mw6P3tmWMfOB&format=png&color=ffffff" alt="YouTube Music" className="w-8 h-8" />}
                                url="https://music.youtube.com/playlist?list=PLTAxVPSIsZYhQWKfeWGQsTAwhF9-yrDcU&si=wOtYx7hKS9qmhcc8"
                                color="bg-red-500"
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={400}>
                            <StreamingPlatform
                                name="Amazon Music"
                                // icon={<div className="w-8 h-8 bg-blue-500 rounded-full"></div>}
                                icon={<img src="https://img.icons8.com/?size=100&id=xdR2e86qm3ed&format=png&color=ffffff" alt="Amazon Music" className="w-8 h-8" />}
                                url="https://music.amazon.com/podcasts/10ac467c-9296-4249-9666-eae8db534c13/transformation-collective-leadership-academy"
                                color="bg-blue-500"
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={500}>
                            <StreamingPlatform
                                name="iHeartRadio"
                                // icon={<div className="w-8 h-8 bg-pink-500 rounded-full"></div>}
                                icon={<img src="https://img.icons8.com/?size=100&id=M8z6toiqnjJG&format=png&color=ffffff" alt="iHeartRadio" className="w-8 h-8" />}
                                url="https://www.iheart.com/podcast/269-transformation-collective-281789584/"
                                color="bg-pink-500"
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={600}>
                            <StreamingPlatform
                                name="Deezer"
                                // icon={<div className="w-8 h-8 bg-orange-500 rounded-full"></div>}
                                icon={<img src="https://img.icons8.com/?size=100&id=32469&format=png&color=ffffff" alt="Deezer" className="w-8 h-8" />}
                                url="https://deezer.com/show/1001974281"
                                color="bg-orange-500"
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-amber-500 rounded-full flex items-center justify-center">
                                <Heart className="w-7 h-7 text-white" />
                            </div>
                            <span className="text-2xl font-bold">Prayer Community</span>
                        </div>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Building a worldwide community of prayer, faith, and spiritual growth.
                            Together, we seek God's presence and share His love.
                        </p>
                        <div className="flex justify-center space-x-6 mb-8">
                            <button className="text-gray-400 hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors duration-200">
                                Terms of Service
                            </button>
                            <button className="text-gray-400 hover:text-white transition-colors duration-200">
                                Contact Us
                            </button>
                        </div>
                        <p className="text-gray-500">
                            © 2025 Prayer Community. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer> */}
            <Footer />

            {/* Modals */}
            <EmailSignupModal isOpen={emailModalOpen} onClose={() => setEmailModalOpen(false)} />
            <PrayerRequestModal isOpen={prayerModalOpen} onClose={() => setPrayerModalOpen(false)} />
        </div>
    );
}

export default LandingPage;