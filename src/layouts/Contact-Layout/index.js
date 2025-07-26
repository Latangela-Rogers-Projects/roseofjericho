import React, { useState } from 'react';
import './contactLayout.css';
import apiData from '../../api';


const ContactLayout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    return (
        <section style={{ backgroundColor: "black", background: `url(${apiData.imgUri}event_bg.jpg) center`, backgroundSize: "cover" }}>
            <div className="py-16 bg-tc-blue bg-opacity-90 pt-40 text-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-12 md:gap-12">
                        {/* Contact Information */}
                        <div className='col-span-12 md:col-span-7 p-6 text-white'>
                            <h2 className="text-5xl font-bold mb-6 mt-2">Get in Touch</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2">Address:</h3>
                                    <p>30777 Rancho California Rd #892041</p>
                                    <p>Temecula, CA 92591</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Email:</h3>
                                    <p>latangela@thetransformationcollective.org</p>
                                </div>
                                {/* Social Media Links */}
                                <div>
                                    <h3 className="font-semibold mb-2">Follow Us:</h3>
                                    <div className="flex space-x-4">
                                        {/* Add social media icons/links here */}
                                    </div>
                                </div>
                            </div>

                            <div className='subsection'>
                                <div>
                                    <h3>Customer Support</h3>
                                    <p>
                                        Have questions or need assistance? Our dedicated
                                        team is here to help you resolve any issues
                                        or provide guidance. Reach out to us anytime.
                                    </p>
                                </div>

                                <div>
                                    <h3>Feedback and Assistance</h3>
                                    <p>
                                        We value your input! Share your thoughts, suggestions,
                                        or inquiries with us. We’re always looking to
                                        improve and assist you better.
                                    </p>
                                </div>

                                <div>
                                    <h3>Media Inquiries</h3>
                                    <p>
                                        For press-related questions, interviews, or
                                        collaborations, our team is available to connect
                                        and provide the necessary information.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className='col-span-12 md:col-span-5 p-6' style={{ backgroundColor: "white", borderRadius: 30, padding: 20 }}>
                            <h1 className="text-2xl font-bold mb-12 text-center">Contact Us</h1>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className='flex'>
                                    {/* <label htmlFor="name" className="block mb-2">Name</label> */}
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder='First Name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full mr-4 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-tc-blue shadow"
                                    />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder='Last Name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-tc-blue shadow"
                                    />
                                </div>
                                <div>
                                    {/* <label htmlFor="email" className="block mb-2">Email</label> */}
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='youremail@email.com'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-tc-blue shadow"
                                    />
                                </div>
                                <div>
                                    {/* <label htmlFor="subject" className="block mb-2">Subject</label> */}
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder='Subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-tc-blue shadow"
                                    />
                                </div>
                                <div>
                                    {/* <label htmlFor="message" className="block mb-2">Message</label> */}
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        placeholder='Message'
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-tc-blue shadow"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-tc-gold text-tc-blue px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition duration-300 w-full"
                                >
                                    Send Message
                                </button>
                                <p className="text-sm">
                                    By clicking on <strong>"Send Message"</strong>, you agree to our{" "}
                                    <a href="/terms" className="text-blue-500 underline">
                                        Terms
                                    </a>{" "}
                                    and{" "}
                                    <a href="/policies" className="text-blue-500 underline">
                                        Policies
                                    </a>{" "}
                                    regarding this service.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactLayout;