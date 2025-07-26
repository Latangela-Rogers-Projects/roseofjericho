import React from "react";
import { useInView } from 'react-intersection-observer';
import {
    Star, Users, Globe, Heart, Briefcase, BookOpen, Calendar, Award, Lightbulb, ArrowRight, Podcast, Play, Music, MonitorPlay,
    Clock, Sun, Youtube
} from 'lucide-react';
import apiData from '../../api';
import Link from "../../components/Link";
import { addToCalender } from "../../api/addToCalender";
import HeroSection_v2 from "../HeroSection/index_old";

const HomeLayout = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true, threshold: 0.1 });
    const eventAdd = {
        title: "Glory Hour",
        description: "GLORY HOUR WITH LATANGELA ROGERS.",
        location: "Online",
        start: [2025, 4, 20, 14, 30], // [YYYY, M, D, H, M]
        duration: { hours: 1 },
        status: "CONFIRMED",
    }

    return (
        <div className="bg-gradient-to-b from-deep-purple to-black text-white">

            {/* Mission Section */}
            <section className=" py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl font-bold mb-6 text-tc-blue">
                                Take the first step toward your <span className="text-gold">transformed self</span>
                            </h2>
                            <p className="text-lg mb-8 text-tc-blue">
                                The Transformation Collective exists to empower individuals and communities
                                through innovative solutions and transformative leadership, equipping them to create
                                lasting change and sustainable impact in every sphere of society.
                            </p>
                            <button onClick={() => { window.location.href = "https://latangela-rogers.mykajabi.com/offers/DQiq2NuL/checkout" }} className="bg-gold text-deep-purple px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors">
                                Join our Community
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-2xl overflow-hidden">
                                <img
                                    src="https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-45-59-2.jpg"
                                    alt="Community"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                                <img
                                    src="https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-45-59-5.jpg"
                                    alt="Leadership"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Glory Hour Feature Section */}
            <section className="py-0 px-0 bg-gradient-to-r from-gray-600 via-black to-black relative overflow-hidden">
                <img
                    className="w-full max-h-[60vh] object-cover"
                    src="https://www.thetransformationcollective.org/wp-content/uploads/2025/04/glory-hour.jpeg"
                />
            </section>
            <section className="relative py-20 px-4 bg-gradient-to-r from-black via-black to-black relative">
                <div className="absolute inset-0 bg-[url('https://www.thetransformationcollective.org/wp-content/uploads/2025/04/glory-hour.jpeg')] bg-cover bg-center opacity-30 blur-md"></div>
                <div className="max-w-7xl mx-auto relative">
                    {/* <div className="text-center mb-16 lg:opacity-10">
                    <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h2 className="text-5xl font-bold mb-4 fonseca">Glory Hour</h2>
                    <p className="text-xl text-gray-300">Join us for a transformative spiritual experience</p>
                </div> */}
                    <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-deep-purple/20 rounded-xl transform -rotate-2"></div>
                            <div className="relative bg-black/80 p-8 rounded-xl backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <Sun className="w-8 h-8 text-gold" />
                                    <h3 className="text-2xl font-bold">Every Monday & Wednesday</h3>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-4xl font-bold text-gold">3:00 AM PST</p>
                                    <p className="text-lg text-gray-300">
                                        Start your day with spiritual enlightenment and divine guidance
                                    </p>
                                    <div className="flex items-center gap-2 text-gold">
                                        <Clock className="w-5 h-5" />
                                        <span>60 minutes of transformation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-l from-gold/20 to-deep-purple/20 rounded-xl transform rotate-2"></div>
                            <div className="relative bg-black/80 p-8 rounded-xl backdrop-blur-sm">
                                <h3 className="text-2xl font-bold mb-6">With LaTangela Rogers</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <Star className="w-5 h-5 text-gold" />
                                        <span>Spiritual Guidance</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Heart className="w-5 h-5 text-gold" />
                                        <span>Prayer & Meditation</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Lightbulb className="w-5 h-5 text-gold" />
                                        <span>Divine Inspiration</span>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => addToCalender(eventAdd)}
                                    className="mt-8 w-full bg-gold text-deep-purple py-3 rounded-lg font-semibold hover:bg-white transition-colors">
                                    Set Reminder
                                </button>
                                <button
                                    onClick={() => window.location.href = "/glory-hour"}
                                    className="mt-2 w-full bg-gray-300 text-deep-purple py-3 rounded-lg font-semibold hover:bg-white transition-colors">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Mission Section */}
            <section className="hidden py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl font-bold mb-6">
                                Take the first step toward your <span className="text-gold">transformed self</span>
                            </h2>
                            <p className="text-lg mb-8 text-gray-300">
                                The Transformation Collective exists to empower individuals and communities
                                through innovative solutions and transformative leadership, equipping them to create
                                lasting change and sustainable impact in every sphere of society.
                            </p>
                            <button onClick={() => { window.location.href = "https://latangela-rogers.mykajabi.com/offers/DQiq2NuL/checkout" }} className="bg-gold text-deep-purple px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors">
                                Join our Community
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                                    alt="Community"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                                    alt="Leadership"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transformational Leadership Academy */}
            <section
                ref={ref2}
                className={`py-24 bg-gray-50`}
            // style={{opacity: inView2 ? 1 : 0, transform: inView2 ? 'translateY(0)' : 'translateY(10px)', transition: 'opacity 1s ease-in-out, transform 1s ease-in-out'}}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Users className="md:w-12 md:h-12 text-brand-600 text-deep-purple" />
                        </div>
                        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 pt-8">
                            <h2 className="font-cormorant text-4xl md:text-5xl font-bold mb-2 md:mb-6 text-deep-purple">Transformational Leadership Academy</h2>
                            <p className="text-md md:text-lg text-gray-600">
                                A comprehensive 12-month program tailored for seasoned leaders who aim to drive innovation, foster collaboration, and leave a lasting legacy.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Leadership Mastery Modules",
                                    image: "https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-45-58-5.jpg"
                                },
                                {
                                    title: "Networking Opportunities",
                                    image: "https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-45-58-2.jpg"
                                },
                                {
                                    title: "Visionary Leadership",
                                    image: "https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-46-00-3.jpg"
                                }
                            ].map((item, index) => (
                                <div key={index} className="group relative overflow-hidden rounded-xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-40 md:h-80 object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="font-cormorant text-2xl font-bold">{item.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Link to={"programs"} className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-brand-700 transition-colors">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <HeroSection_v2 />


            {/* Glory Hour Testimonials */}
            <section className="py-16 md:py-20 px-4 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-4xl font-bold mb-4">Transformed Lives</h2>
                        <p className="text-xl text-gray-600">Hear from our Glory Hour community</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                quote: `I met Latangela Rogers several years ago preparing for my first mission trip to Africa. We were members of the same church at the time. I knew then she was a spiritual power house in the Lord when I heard her pray on our prayer call. I had never met anyone that could pray with such power and compassion. Her love for ministry and the true word of God was beautiful. I watched how God grew her in ministry and service to him. Her obedience in hearing his direction has been inspiring and convicting at the same time. She hears the Lord and executes his word, even when it's difficult. She is changing lives for the kingdom,  and anyone who is blessed to meet her will be changed.`,
                                name: "Lynnette Simmons",
                                location: "Los Angeles",
                                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                            },
                            {
                                quote: `I want to say LaTangela Rogers is an excellent mentor/coach. She has helped me grow tremendously in my spiritual walk! LaTangela has hosted a women's Bible study, prayer lines, and held women's conferences which has help many women along with myself to heal from brokenness, unforgiveness, deliverance, and spiritual bondage! LaTangela has also hosted a segment on radio station along with taking several trips to Ghana to help assist those less fortunate! I highly  recommend LaTangela Rogers as a mentor/coach!`,
                                name: "LaKeysa Brown",
                                location: "Los Angeles",
                                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                            },
                            // {
                            //     quote: "A powerful hour that sets the tone for my entire day.",
                            //     name: "Rachel L.",
                            //     location: "New York",
                            //     image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
                            // }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-deep-purple/20 p-6 rounded-xl">
                                <div className="flex items-center gap-4 mb-4">
                                    {/* <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div> */}
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        {/* <p className="text-sm text-gray-600">{testimonial.location}</p> */}
                                    </div>
                                </div>
                                <p className="text-gray-800 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* NEW: Featured Media Section */}
            <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-deep-purple via-black to-deep-purple">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <MonitorPlay className="md:w-12 md:h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-2 md:mb-4">Featured Content</h2>
                        <p className="text-md md:text-xl text-gray-300">Transform your perspective through our media channels</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                        {/* YouTube Channel */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-deep-purple/20 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
                            <div className="relative bg-black/40 p-8 rounded-xl backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <MonitorPlay className="w-8 h-8 text-gold" />
                                    <h3 className="text-lg md:text-2xl font-bold">Our YouTube Channel</h3>
                                </div>
                                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/videoseries?list=PLTAxVPSIsZYhQWKfeWGQsTAwhF9-yrDcU"
                                        title="YouTube Channel"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-xs md:text-md text-gray-300">Latest transformative content</p>
                                    <a
                                        href="https://youtube.com/@thetransformationcollective-la?si=sUXUbYwJrcjeeeN7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex text-xs md:text-md items-center gap-2 text-gold hover:text-white transition-colors"
                                    >
                                        Visit Channel <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Podcast Section */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-l from-gold/20 to-deep-purple/20 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform"></div>
                            <div className="relative bg-black/40 p-8 rounded-xl backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <Podcast className="w-8 h-8 text-gold" />
                                    <h3 className="text-lg md:text-2xl font-bold">Transformation Collective Podcast</h3>
                                </div>
                                <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-deep-purple/50">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gold/20 rounded-full animate-ping"></div>
                                            <Play className="w-16 h-16 text-gold relative z-10" />
                                        </div>
                                    </div>
                                    <img
                                        // src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80"
                                        src={`${apiData.imgUri}sample-bg4.png`}
                                        alt="Podcast Cover"
                                        className="w-full h-full object-cover opacity-50"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-xs md:text-md text-gray-300">Weekly episodes</p>
                                    <a
                                        href="https://music.youtube.com/playlist?list=PLTAxVPSIsZYhQWKfeWGQsTAwhF9-yrDcU&si=4daLdL1mPGKUS9uW"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex text-xs md:text-md items-center gap-2 text-gold hover:text-white transition-colors"
                                    >
                                        Listen Now <Music className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-14 md:py-20 px-4 bg-black/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-2 md:mb-4">Our Programs</h2>
                        <p className="text-md md:text-xl text-gray-300">Transformative experiences that change lives</p>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
                        {[
                            {
                                title: "Leadership Academy",
                                icon: Users,
                                description: "Comprehensive training for aspiring leaders"
                            },
                            {
                                title: "Global Impact",
                                icon: Globe,
                                description: "Making a difference across continents"
                            },
                            {
                                title: "Business Coaching",
                                icon: Briefcase,
                                description: "Expert guidance for professional growth"
                            }
                        ].map((program, index) => (
                            <div key={index} className="bg-deep-purple p-6 md:p-8 rounded-xl hover:transform hover:scale-105 transition-transform">
                                <program.icon className="md:w-12 md:h-12 text-gold mb-4" />
                                <h3 className="text-md md:text-2xl font-bold mb-4">{program.title}</h3>
                                <p className="text-xs md:text-md text-gray-300">{program.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rose of Jericho Connection */}
            <section className="relative bg-gray-900 text-white py-16">
                <div className="absolute inset-0">
                    <img
                        src={`${apiData.imgUri2}rose.jpg`}
                        alt="Community Leadership"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>

                <div className="relative container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        A Proud Subsidiary of
                        <span className="text-red-400"> Rose of Jericho</span>
                    </h2>
                    <p className="mt-4 text-md md:text-xl max-w-4xl text-center">
                        The <strong>Transformation Collective Leadership Training</strong> is an initiative under
                        the <strong>Rose of Jericho Community Development Center</strong>, an organization dedicated to
                        restoring and transforming communities through leadership training, mental health awareness,
                        career development, and holistic well-being programs.
                    </p>
                    <a
                        href="https://www.roseofjericho-cd.org"
                        target="_blank"
                        className="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </section>

            {/* Mission Trips Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-5xl font-bold mb-4">2026 Mission Trips</h2>
                        <p className="text-xl text-gray-300">Join us in making a global impact</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            {
                                country: "Ghana",
                                month: "May 2026",
                                image: `${apiData.imgUri2}Trip_Ghana.jpg`
                            },
                            {
                                country: "Malawi",
                                month: "June 2026",
                                image: `${apiData.imgUri2}Trip_Malawi.jpeg`
                            },
                            {
                                country: "Botswana",
                                month: "August 2026",
                                image: `${apiData.imgUri2}Trip_Botswana.jpeg`
                            },
                            {
                                country: "Tanzania",
                                month: "September 2026",
                                image: `${apiData.imgUri2}Trip_Tanzania.jpeg`
                            }
                        ].map((trip, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl mb-4">
                                    <img
                                        src={trip.image}
                                        alt={trip.country}
                                        className="w-full h-40 md:h-64 object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gold">{trip.country}</h3>
                                <p className="text-xs md:text-lg text-gray-300">{trip.month}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transformative Leader Program prayer */}
            <section
                ref={ref1}
                className={`py-24 transition-all duration-1000 ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-xl bg-brand-100 -z-10 transform -rotate-2"></div>
                            <img
                                src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/site/2148596257/images/c2a61e-41ae-01af-61c-5c54bd4ce32_6-week_Prophetic_Intercession_Intensive.png"
                                alt="Leadership Program"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 text-brand-600">
                                <Star className="w-6 h-6" />
                                <span className="text-sm font-semibold uppercase tracking-wider"> This 6-week coaching intensive</span>
                            </div>
                            <h2 className="font-cormorant text-5xl font-bold">Intensive Prayer Coaching Program</h2>
                            <p className="text-lg text-gray-300">
                                This 6-week coaching intensive is designed to elevate intercessors, with a strong focus on prophetic
                                intercession. The sessions will empower participants to strengthen their spiritual discernment,
                                deepen their understanding of intercession, and develop a prophetic anointing for prayer. Through
                                a blend of scholarly information, biblical principles, and practical training, participants will
                                be equipped to fulfill their role as prophetic intercessors in God's Kingdom.
                            </p>
                            <button className="bg-amber-500 text-white px-8 py-4 rounded-lg hover:bg-brand-700 transition-colors"
                                onClick={() => window.open('https://latangela-rogers.mykajabi.com/offers/sYFJC7sq/checkout', '_blank')}>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business and Ministry Coaching */}
            <section
                ref={ref6}
                className={`py-24 bg-gray-900  text-white transition-all duration-1000 ${inView6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
            >

                <video
                    className="w-full h-full object-cover opacity-20 absolute inset-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={`${apiData.imgUri2}businesVid.mp4`}
                />
                <div className="relative max-w-7xl mx-auto px-4 relative inset-0">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <Briefcase className="w-12 h-12 text-brand-400" />
                            <h2 className="font-cormorant text-5xl font-bold">Business and Ministry Coaching</h2>
                            <p className="text-lg text-gray-300">
                                Unlock your potential with our tailored coaching programs. Whether you're scaling a business or building a ministry, we'll help you thrive in your calling.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="w-12 h-1 bg-brand-400"></div>
                                    <h3 className="font-cormorant text-xl font-bold">Expert Guidance</h3>
                                    <p className="text-gray-400">Personalized mentorship from industry leaders</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-1 bg-brand-400"></div>
                                    <h3 className="font-cormorant text-xl font-bold">Faith-Based</h3>
                                    <p className="text-gray-400">Principles rooted in spiritual wisdom</p>
                                </div>
                            </div>
                            <button onClick={() => { window.open('https://latangela-rogers.mykajabi.com/offers/DQiq2NuL/checkout') }} className="bg-tc-gold text-white font-bold px-8 py-4 rounded-lg hover:bg-brand-700 transition-colors">
                                Start Your Journey
                            </button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-400/20 rounded-xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
                                alt="Business Coaching"
                                className="relative rounded-xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Resources & Publications Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-deep-purple to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <BookOpen className="w-12 h-12 text-tc-gold mx-auto mb-4" />
                        <h2 className="text-5xl font-bold mb-4">Resources & Publications</h2>
                        <p className="text-xl text-gray-300">Expand your knowledge and transform your perspective</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "The Futurist – Visionaries of Tomorrow",
                                type: "Strategic Leadership",
                                url: "https://latangela-rogers.mykajabi.com/offers/NbpqMcYt/checkout",
                                image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/site/2148596257/images/fbce461-b357-86c-7522-770b6eac128_The_Futurist.png"
                            },
                            {
                                title: "You Shall Recover It All",
                                type: "Team Leadership",
                                url: "https://latangela-rogers.mykajabi.com/offers/cSCFzHG7/checkout",
                                image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/site/2148596257/products/42c6abb-38bb-7818-d177-a323362c2131_The_Transformation_Collective_2.png"
                            },
                            {
                                title: "Leadership Transformation & Development",
                                type: "Personal Development",
                                url: "https://latangela-rogers.mykajabi.com/offers/9yQQv7bJ/checkout",
                                image: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/site/2148596257/images/a584272-2c23-62d-d78c-46b473bc2281_12_month_coaching..png'
                            }
                        ].map((resource, index) => (
                            <div key={index} className="bg-black/30 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-transform">
                                <div className="h-48 overflow-hidden">
                                    <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
                                    <p className="text-gray-400 mb-4">{resource.type}</p>
                                    <button className="text-tc-gold flex items-center group-hover:text-white transition-colors"
                                        onClick={() => window.open(resource.url, '_blank')}>
                                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Podcasts */}
            <section>
                <div className="mx-auto px-4">
                    <div className="container mx-auto p-4">
                        <div className="mx-auto grid grid-cols-12 gap-0">
                            <div className='col-span-12 md:col-span-4 lg:col-span-5 p-6 flex flex-col justify-center'>
                                <h1 className="font-cormorant text-4xl font-bold fonseca">Tune into podcasts</h1>
                                <p className="text-gray-600">
                                    Don't miss out on our exciting episodes and transformative sessions.
                                    Each podcast is designed to inspire, educate, and empower you with insights
                                    and stories from leaders and change-makers.
                                </p>
                            </div>

                            <div className='col-span-12 md:col-span-8 lg:col-span-7'>
                                <div style={{ height: "100%", display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    {[
                                        { cover: apiData.imgUri2 + "podcast1.jpg", url: "", title: "More about you" },
                                        { cover: apiData.imgUri2 + "podcast2.jpg", url: "", title: "The tramnsformation collective" },
                                        { cover: apiData.imgUri2 + "podcast3.jpg", url: "", title: "Time to grow" },
                                        { cover: apiData.imgUri2 + "podcast1.jpg", url: "", title: "The Green podcast" },

                                    ].map((val, index) => {
                                        return (
                                            <div
                                                key={val}
                                                className="mx-5 md:m-2 lg:m-5 bg-tc-blue rounded-full w-40 h-40 overflow-hidden relative"
                                            >
                                                {/* Background Image with Opacity */}
                                                <div
                                                    className="absolute inset-0 bg-center bg-cover opacity-60"
                                                    style={{ backgroundImage: `url(${val.cover})` }}
                                                />

                                                {/* Text on top (keeps full opacity) */}
                                                <div className="relative flex items-center justify-center w-full h-full">
                                                    <p className="text-xs text-white text-center px-2 font-bold mt-10 fonseca-bold">{val.title}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Upcoming Events Section */}
            {/* <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-5xl font-bold mb-4">Upcoming Events</h2>
                        <p className="text-xl text-gray-300">Join us for transformative experiences</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Leadership Summit 2026",
                                date: "March 15-17, 2026",
                                location: "New York City",
                                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
                            },
                            {
                                title: "Global Transform Conference",
                                date: "June 5-7, 2026",
                                location: "London",
                                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
                            },
                            {
                                title: "Youth Leadership Workshop",
                                date: "July 20-22, 2026",
                                location: "Singapore",
                                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
                            }
                        ].map((event, index) => (
                            <div key={index} className="bg-deep-purple/30 rounded-xl overflow-hidden group">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-purple to-transparent opacity-60"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                    <p className="text-gold mb-2">{event.date}</p>
                                    <p className="text-gray-300">{event.location}</p>
                                    <button className="mt-4 px-6 py-2 bg-gold text-deep-purple rounded-lg font-semibold hover:bg-white transition-colors">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* NEW: Newsletter Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-deep-purple to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-deep-purple/40 rounded-2xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold to-deep-purple opacity-20"></div>
                            <Lightbulb className="absolute right-0 bottom-0 w-64 h-64 text-tc-gold opacity-10 transform translate-x-1/4 translate-y-1/4" />
                        </div>
                        <div className="relative z-10 text-center max-w-2xl mx-auto">
                            <h2 className="text-4xl font-bold mb-6">Stay Inspired & Informed</h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Subscribe to our newsletter for leadership insights, event updates, and transformation stories.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold"
                                />
                                <button className="px-8 py-3 bg-tc-gold text-deep-purple rounded-lg font-semibold hover:bg-white transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Success Stories Section */}
            <section className="py-20 pt-10 px-4 bg-white text-deep-purple">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <Award className="w-12 h-12 text-tc-gold mx-auto mb-4" />
                        <h2 className="text-5xl font-bold mb-4">Success Stories</h2>
                        <p className="text-xl text-gray-700">Inspiring transformations from our community</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                name: "Anissa Vincent",
                                role: "",
                                quote: `One thing that stick out when talking about Latangela aka Tangie she has a heart for others.  One of her motto’s in life is “sharing is caring.” And she truly lives up to that. What Latangela has…you have…without even asking. She pours life into people and places.  When she walks in a room she comes in softly but makes a lasting impression  and impact with her big open heart, her smile, her laugh, and especially her love for people. I have the privilege and honor to call her friend and sister as she has taken me under her wing to pour into my life personally.  She had prayed for me, she has blessed me, she has spoken wise words over me and for that I am ever grateful.  She’s THAT CHICK!!!! Love me some her ❤️`,
                                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                            },
                            {
                                name: "Kristen Grable, M.D",
                                role: "",
                                quote: `LaTangela is passionate for the Lord and for people.  She is tireless in her quest to help others.  She is mighty in prayer and helped me very much in a time of great trouble.`,
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                            }
                        ].map((story, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-deep-purple/80 p-8 rounded-xl">
                                {/* <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                                </div> */}
                                <div>
                                    <p className="text-xl mb-4 italic text-white">"{story.quote}"</p>
                                    <h3 className="text-tc-gold font-bold text-lg">{story.name}</h3>
                                    <p className="text-gray-400">{story.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const HomeLayout__2 = () => {
    return (
        <div className="bg-gradient-to-b from-deep-purple to-black text-white">
            {/* Mission Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl font-bold mb-6">
                                Take the first step toward your <span className="text-gold">transformed self</span>
                            </h2>
                            <p className="text-lg mb-8 text-gray-300">
                                The Transformation Collective exists to empower individuals and communities
                                through innovative solutions and transformative leadership, equipping them to create
                                lasting change and sustainable impact in every sphere of society.
                            </p>
                            <button className="bg-gold text-deep-purple px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors">
                                Join our Community
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                                    alt="Community"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                                    alt="Leadership"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Glory Hour Feature Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-deep-purple via-black to-deep-purple relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-5xl font-bold mb-4">Glory Hour</h2>
                        <p className="text-xl text-gray-300">Join us for a transformative spiritual experience</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-deep-purple/20 rounded-xl transform -rotate-2"></div>
                            <div className="relative bg-black/40 p-8 rounded-xl backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <Sun className="w-8 h-8 text-gold" />
                                    <h3 className="text-2xl font-bold">Every Monday & Wednesday</h3>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-4xl font-bold text-gold">3:00 AM PST</p>
                                    <p className="text-lg text-gray-300">
                                        Start your day with spiritual enlightenment and divine guidance
                                    </p>
                                    <div className="flex items-center gap-2 text-gold">
                                        <Clock className="w-5 h-5" />
                                        <span>60 minutes of transformation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-l from-gold/20 to-deep-purple/20 rounded-xl transform rotate-2"></div>
                            <div className="relative bg-black/40 p-8 rounded-xl backdrop-blur-sm">
                                <h3 className="text-2xl font-bold mb-6">With LaTangela Rogers</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <Star className="w-5 h-5 text-gold" />
                                        <span>Spiritual Guidance</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Heart className="w-5 h-5 text-gold" />
                                        <span>Prayer & Meditation</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Lightbulb className="w-5 h-5 text-gold" />
                                        <span>Divine Inspiration</span>
                                    </li>
                                </ul>
                                <button className="mt-8 w-full bg-gold text-deep-purple py-3 rounded-lg font-semibold hover:bg-white transition-colors">
                                    Set Reminder
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Glory Hour Testimonials */}
            <section className="py-20 px-4 bg-black/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Transformed Lives</h2>
                        <p className="text-xl text-gray-300">Hear from our Glory Hour community</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Glory Hour has become an essential part of my spiritual journey.",
                                name: "Sarah M.",
                                location: "California",
                                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                            },
                            {
                                quote: "Starting my day with Glory Hour has transformed my perspective on life.",
                                name: "Michael R.",
                                location: "Texas",
                                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
                            },
                            {
                                quote: "A powerful hour that sets the tone for my entire day.",
                                name: "Rachel L.",
                                location: "New York",
                                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-deep-purple/20 p-6 rounded-xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-400">{testimonial.location}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Media Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-deep-purple via-black to-deep-purple">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Youtube className="w-12 h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-5xl font-bold mb-4">Featured Content</h2>
                        <p className="text-xl text-gray-300">Transform your perspective through our media channels</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* YouTube Channel */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-deep-purple/20 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
                            <div className="relative bg-black/40 p-8 rounded-xl backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <Youtube className="w-8 h-8 text-gold" />
                                    <h3 className="text-2xl font-bold">Our YouTube Channel</h3>
                                </div>
                                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/videoseries?list=PLTAxVPSIsZYhQWKfeWGQsTAwhF9-yrDcU"
                                        title="YouTube Channel"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-300">Latest transformative content</p>
                                    <a
                                        href="https://youtube.com/@thetransformationcollective-la?si=sUXUbYwJrcjeeeN7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gold hover:text-white transition-colors"
                                    >
                                        Visit Channel <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Podcast Section */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-l from-gold/20 to-deep-purple/20 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform"></div>
                            <div className="relative bg-black/40 p-8 rounded-xl backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <Podcast className="w-8 h-8 text-gold" />
                                    <h3 className="text-2xl font-bold">Transform Podcast</h3>
                                </div>
                                <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-deep-purple/50">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gold/20 rounded-full animate-ping"></div>
                                            <Play className="w-16 h-16 text-gold relative z-10" />
                                        </div>
                                    </div>
                                    <img
                                        src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80"
                                        alt="Podcast Cover"
                                        className="w-full h-full object-cover opacity-50"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-300">Weekly episodes</p>
                                    <a
                                        href="https://music.youtube.com/playlist?list=PLTAxVPSIsZYhQWKfeWGQsTAwhF9-yrDcU&si=4daLdL1mPGKUS9uW"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gold hover:text-white transition-colors"
                                    >
                                        Listen Now <Music className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-20 px-4 bg-black/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">Our Programs</h2>
                        <p className="text-xl text-gray-300">Transformative experiences that change lives</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Leadership Academy",
                                icon: Users,
                                description: "Comprehensive training for aspiring leaders"
                            },
                            {
                                title: "Global Impact",
                                icon: Globe,
                                description: "Making a difference across continents"
                            },
                            {
                                title: "Business Coaching",
                                icon: Briefcase,
                                description: "Expert guidance for professional growth"
                            }
                        ].map((program, index) => (
                            <div key={index} className="bg-deep-purple p-8 rounded-xl hover:transform hover:scale-105 transition-transform">
                                <program.icon className="w-12 h-12 text-gold mb-4" />
                                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                                <p className="text-gray-300">{program.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Trips Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">2026 Mission Trips</h2>
                        <p className="text-xl text-gray-300">Join us in making a global impact</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                country: "Ghana",
                                month: "May 2026",
                                image: "https://images.unsplash.com/photo-1504589105703-8da8c94c5f2e?auto=format&fit=crop&q=80"
                            },
                            {
                                country: "Malawi",
                                month: "June 2026",
                                image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80"
                            },
                            {
                                country: "Botswana",
                                month: "August 2026",
                                image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80"
                            },
                            {
                                country: "Tanzania",
                                month: "September 2026",
                                image: "https://images.unsplash.com/photo-1518709268982-4425f0667bea?auto=format&fit=crop&q=80"
                            }
                        ].map((trip, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl mb-4">
                                    <img
                                        src={trip.image}
                                        alt={trip.country}
                                        className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gold">{trip.country}</h3>
                                <p className="text-gray-300">{trip.month}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources & Publications Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-deep-purple to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <BookOpen className="w-12 h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-5xl font-bold mb-4">Resources & Publications</h2>
                        <p className="text-xl text-gray-300">Expand your knowledge and transform your perspective</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Leadership Journal",
                                type: "Monthly Publication",
                                image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80"
                            },
                            {
                                title: "Transform Podcast",
                                type: "Weekly Episodes",
                                image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80"
                            },
                            {
                                title: "Digital Library",
                                type: "Online Resources",
                                image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80"
                            }
                        ].map((resource, index) => (
                            <div key={index} className="bg-black/30 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-transform">
                                <div className="h-48 overflow-hidden">
                                    <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
                                    <p className="text-gray-400 mb-4">{resource.type}</p>
                                    <button className="text-gold flex items-center group-hover:text-white transition-colors">
                                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-5xl font-bold mb-4">Upcoming Events</h2>
                        <p className="text-xl text-gray-300">Join us for transformative experiences</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Leadership Summit 2026",
                                date: "March 15-17, 2026",
                                location: "New York City",
                                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
                            },
                            {
                                title: "Global Transform Conference",
                                date: "June 5-7, 2026",
                                location: "London",
                                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
                            },
                            {
                                title: "Youth Leadership Workshop",
                                date: "July 20-22, 2026",
                                location: "Singapore",
                                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
                            }
                        ].map((event, index) => (
                            <div key={index} className="bg-deep-purple/30 rounded-xl overflow-hidden group">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-purple to-transparent opacity-60"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                    <p className="text-gold mb-2">{event.date}</p>
                                    <p className="text-gray-300">{event.location}</p>
                                    <button className="mt-4 px-6 py-2 bg-gold text-deep-purple rounded-lg font-semibold hover:bg-white transition-colors">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-20 px-4 bg-black/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-5xl font-bold mb-4">Success Stories</h2>
                        <p className="text-xl text-gray-300">Inspiring transformations from our community</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Non-Profit Leader",
                                quote: "The leadership program transformed my approach to community development.",
                                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                            },
                            {
                                name: "Michael Chen",
                                role: "Social Entrepreneur",
                                quote: "Through the collective, I found the tools to scale my impact globally.",
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                            }
                        ].map((story, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-deep-purple/20 p-8 rounded-xl">
                                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-xl mb-4 italic">"{story.quote}"</p>
                                    <h3 className="text-gold font-bold text-lg">{story.name}</h3>
                                    <p className="text-gray-400">{story.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-deep-purple to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-deep-purple/40 rounded-2xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold to-deep-purple opacity-20"></div>
                            <Lightbulb className="absolute right-0 bottom-0 w-64 h-64 text-gold opacity-10 transform translate-x-1/4 translate-y-1/4" />
                        </div>
                        <div className="relative z-10 text-center max-w-2xl mx-auto">
                            <h2 className="text-4xl font-bold mb-6">Stay Inspired & Informed</h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Subscribe to our newsletter for leadership insights, event updates, and transformation stories.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold"
                                />
                                <button className="px-8 py-3 bg-gold text-deep-purple rounded-lg font-semibold hover:bg-white transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};




const HomeLayout__ = () => {
    return (
        <div className="bg-gradient-to-b from-deep-purple to-black text-white">
            {/* Mission Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl font-bold mb-6">
                                Take the first step toward your <span className="text-gold">transformed self</span>
                            </h2>
                            <p className="text-lg mb-8 text-gray-300">
                                The Transformation Collective exists to empower individuals and communities
                                through innovative solutions and transformative leadership, equipping them to create
                                lasting change and sustainable impact in every sphere of society.
                            </p>
                            <button className="bg-gold text-deep-purple px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors">
                                Join our Community
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                                    alt="Community"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                                    alt="Leadership"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Featured Media Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-deep-purple via-black to-deep-purple">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <MonitorPlay className="w-12 h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-5xl font-bold mb-4">Featured Content</h2>
                        <p className="text-xl text-gray-300">Transform your perspective through our media channels</p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* YouTube Channel */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-deep-purple/20 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform"></div>
                            <div className="relative bg-black/40 p-8 rounded-xl backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <MonitorPlay className="w-8 h-8 text-gold" />
                                    <h3 className="text-2xl font-bold">Our YouTube Channel</h3>
                                </div>
                                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/videoseries?list=PLTAxVPSIsZYhQWKfeWGQsTAwhF9-yrDcU"
                                        title="YouTube Channel"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-300">Latest transformative content</p>
                                    <a
                                        href="https://youtube.com/@thetransformationcollective-la?si=sUXUbYwJrcjeeeN7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gold hover:text-white transition-colors"
                                    >
                                        Visit Channel <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Podcast Section */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-l from-gold/20 to-deep-purple/20 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform"></div>
                            <div className="relative bg-black/40 p-8 rounded-xl backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <Podcast className="w-8 h-8 text-gold" />
                                    <h3 className="text-2xl font-bold">Transform Podcast</h3>
                                </div>
                                <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-deep-purple/50">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gold/20 rounded-full animate-ping"></div>
                                            <Play className="w-16 h-16 text-gold relative z-10" />
                                        </div>
                                    </div>
                                    <img
                                        src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80"
                                        alt="Podcast Cover"
                                        className="w-full h-full object-cover opacity-50"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-300">Weekly episodes</p>
                                    <a
                                        href="https://music.youtube.com/playlist?list=PLTAxVPSIsZYhQWKfeWGQsTAwhF9-yrDcU&si=4daLdL1mPGKUS9uW"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gold hover:text-white transition-colors"
                                    >
                                        Listen Now <Music className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-20 px-4 bg-black/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">Our Programs</h2>
                        <p className="text-xl text-gray-300">Transformative experiences that change lives</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Leadership Academy",
                                icon: Users,
                                description: "Comprehensive training for aspiring leaders"
                            },
                            {
                                title: "Global Impact",
                                icon: Globe,
                                description: "Making a difference across continents"
                            },
                            {
                                title: "Business Coaching",
                                icon: Briefcase,
                                description: "Expert guidance for professional growth"
                            }
                        ].map((program, index) => (
                            <div key={index} className="bg-deep-purple p-8 rounded-xl hover:transform hover:scale-105 transition-transform">
                                <program.icon className="w-12 h-12 text-gold mb-4" />
                                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                                <p className="text-gray-300">{program.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Trips Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">2026 Mission Trips</h2>
                        <p className="text-xl text-gray-300">Join us in making a global impact</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                country: "Ghana",
                                month: "May 2026",
                                image: "https://images.unsplash.com/photo-1504589105703-8da8c94c5f2e?auto=format&fit=crop&q=80"
                            },
                            {
                                country: "Malawi",
                                month: "June 2026",
                                image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80"
                            },
                            {
                                country: "Botswana",
                                month: "August 2026",
                                image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80"
                            },
                            {
                                country: "Tanzania",
                                month: "September 2026",
                                image: "https://images.unsplash.com/photo-1518709268982-4425f0667bea?auto=format&fit=crop&q=80"
                            }
                        ].map((trip, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl mb-4">
                                    <img
                                        src={trip.image}
                                        alt={trip.country}
                                        className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gold">{trip.country}</h3>
                                <p className="text-gray-300">{trip.month}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources & Publications Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-deep-purple to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <BookOpen className="w-12 h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-5xl font-bold mb-4">Resources & Publications</h2>
                        <p className="text-xl text-gray-300">Expand your knowledge and transform your perspective</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Leadership Journal",
                                type: "Monthly Publication",
                                image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80"
                            },
                            {
                                title: "Transform Podcast",
                                type: "Weekly Episodes",
                                image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80"
                            },
                            {
                                title: "Digital Library",
                                type: "Online Resources",
                                image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80"
                            }
                        ].map((resource, index) => (
                            <div key={index} className="bg-black/30 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-transform">
                                <div className="h-48 overflow-hidden">
                                    <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
                                    <p className="text-gray-400 mb-4">{resource.type}</p>
                                    <button className="text-gold flex items-center group-hover:text-white transition-colors">
                                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-5xl font-bold mb-4">Upcoming Events</h2>
                        <p className="text-xl text-gray-300">Join us for transformative experiences</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Leadership Summit 2026",
                                date: "March 15-17, 2026",
                                location: "New York City",
                                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
                            },
                            {
                                title: "Global Transform Conference",
                                date: "June 5-7, 2026",
                                location: "London",
                                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
                            },
                            {
                                title: "Youth Leadership Workshop",
                                date: "July 20-22, 2026",
                                location: "Singapore",
                                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
                            }
                        ].map((event, index) => (
                            <div key={index} className="bg-deep-purple/30 rounded-xl overflow-hidden group">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-deep-purple to-transparent opacity-60"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                    <p className="text-gold mb-2">{event.date}</p>
                                    <p className="text-gray-300">{event.location}</p>
                                    <button className="mt-4 px-6 py-2 bg-gold text-deep-purple rounded-lg font-semibold hover:bg-white transition-colors">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-20 px-4 bg-black/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                        <h2 className="text-5xl font-bold mb-4">Success Stories</h2>
                        <p className="text-xl text-gray-300">Inspiring transformations from our community</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Non-Profit Leader",
                                quote: "The leadership program transformed my approach to community development.",
                                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                            },
                            {
                                name: "Michael Chen",
                                role: "Social Entrepreneur",
                                quote: "Through the collective, I found the tools to scale my impact globally.",
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
                            }
                        ].map((story, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-deep-purple/20 p-8 rounded-xl">
                                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-xl mb-4 italic">"{story.quote}"</p>
                                    <h3 className="text-gold font-bold text-lg">{story.name}</h3>
                                    <p className="text-gray-400">{story.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-deep-purple to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-deep-purple/40 rounded-2xl p-12 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold to-deep-purple opacity-20"></div>
                            <Lightbulb className="absolute right-0 bottom-0 w-64 h-64 text-gold opacity-10 transform translate-x-1/4 translate-y-1/4" />
                        </div>
                        <div className="relative z-10 text-center max-w-2xl mx-auto">
                            <h2 className="text-4xl font-bold mb-6">Stay Inspired & Informed</h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Subscribe to our newsletter for leadership insights, event updates, and transformation stories.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold"
                                />
                                <button className="px-8 py-3 bg-gold text-deep-purple rounded-lg font-semibold hover:bg-white transition-colors">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeLayout;