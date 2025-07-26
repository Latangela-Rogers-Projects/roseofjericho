import React from 'react';
import apiData from '../../api';

const events = [
    {
        title: "21-Day Spiritual Detox Challenge",
        date: "Beginning April 01, 2025",
        link: "#",
        buttonText: "Register Now",
    },
    {
        title: "Live Q&A About Our Services",
        date: "March 08, 2025 @ 6 AM",
        details: "Live on Kajabi and YouTube",
        link: "#",
        buttonText: "Set Reminder",
    },
    //   {
    //     title: "Event 3",
    //     date: "May 15, 2025",
    //     link: "#",
    //     buttonText: "Join Now",
    //   },
    //   {
    //     title: "Event 4",
    //     date: "June 20, 2025",
    //     link: "#",
    //     buttonText: "Learn More",
    //   },
    //   {
    //     title: "Event 5",
    //     date: "July 10, 2025",
    //     link: "#",
    //     buttonText: "Join Now",
    //   },
    //   {
    //     title: "Event 6",
    //     date: "August 01, 2025",
    //     link: "#",
    //     buttonText: "Sign Up",
    //   },
    //   {
    //     title: "Event 7",
    //     date: "September 12, 2025",
    //     link: "#",
    //     buttonText: "RSVP",
    //   },
    //   {
    //     title: "Event 8",
    //     date: "October 22, 2025",
    //     link: "#",
    //     buttonText: "Register",
    //   },
    //   {
    //     title: "Event 9",
    //     date: "November 05, 2025",
    //     link: "#",
    //     buttonText: "Register Now",
    //   },
    //   {
    //     title: "Event 10",
    //     date: "December 10, 2025",
    //     link: "#",
    //     buttonText: "Register",
    //   },
];

const UpcomingEvents = () => {
    return (
        <section style={{ background: `url(${apiData.imgUri}excited-business-woman-medium-shot.jpg) center`, backgroundSize: "cover" }}>
            <div className="py-16 bg-black bg-opacity-70 pt-64 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-6xl font-bold mb-12 text-left">Upcoming Events</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <div key={index} className="bg-tc-blue/30 backdrop-blur-lg p-6 md:p-12 rounded-xl flex flex-col h-full justify-between hover:scale-110 transition-transform duration-700 cursor-pointer">
                                <div>
                                    <h2 className="text-lg md:text-2xl font-bold mb-2">{event.title}</h2>
                                    <p className="text-md md:text-lg">{event.date}</p>
                                    {event.details && <p className="text-xs text-left mt-2">{event.details}</p>}
                                </div>
                                <a
                                    href={event.link}
                                    className="mt-4 bg-tc-gold text-tc-blue px-6 py-2 rounded-2xl md:rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
                                >
                                    {event.buttonText}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
