import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Star, Users, Globe, Heart, Droplet, Briefcase } from 'lucide-react';
import apiData from '../../api';

function ProgramsLayout() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0  bg-gradient-to-r from-black/100 to-black/90">

          {/* Fallback Image */}
          <img
            src="https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80"
            alt="Hero"
            className="w-full h-full object-cover absolute inset-0"
          />

          {/* Background Video */}
          <video
            className="w-full h-full object-cover  absolute inset-0"
            autoPlay
            loop
            muted
            playsInline
            src={`${apiData.imgUri2}prohrams_bg.mov`}
          />


          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
            <div className="absolute bottom-0 w-full px-10 pb-10 grid md:grid-cols-3 gap-8">
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
                <div key={index} className="bg-deep-purple/40 p-8 rounded-xl hover:transform hover:scale-105 transition-transform">
                  <program.icon className="md:w-12 md:h-12 text-gold mb-4" />
                  <h3 className="text-white text-md md:text-2xl font-bold mb-1 md:mb-4">{program.title}</h3>
                  <p className="text-xs md:text-md text-gray-300">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-start justify-center md:items-center md:justify-center text-white px-0 pt-[16vh] pl-0 md:pt-0 md:pl-0">
          <div className="text-center">
            <h1 className="font-cormorant text-4xl md:text-8xl font-bold md:mb-6">Transform & Lead</h1>
            <p className="font-dmsans text-xl md:text-2xl max-w-2xl mx-auto">Empowering leaders to create lasting impact</p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      {window.innerWidth > 768 &&
        <>
          {/* Transformative Leader Program */}
          <section
            ref={ref1}
            className={` py-4 pt-24 transition-all duration-1000 ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-3 text-brand-600">
                    <Star className="w-6 h-6" />
                    <span className="text-sm font-semibold uppercase tracking-wider">6-Month Intensive</span>
                  </div>
                  <h2 className="font-cormorant text-5xl font-bold">The Transformative Leader Program</h2>
                  <p className="text-lg text-gray-600">
                    A focused six-month journey designed for emerging and mid-level leaders seeking to elevate their leadership capabilities. This program equips participants with the tools, insights, and strategies needed to lead with purpose, inspire teams, and drive organizational success.
                  </p>
                  <button
                    className="bg-deep-purple text-white px-8 py-4 rounded-lg hover:bg-brand-700 transition-colors"
                    onClick={() => window.open('https://latangela-rogers.mykajabi.com/offers/sYFJC7sq/checkout', '_blank')}
                  >
                    Learn More
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl bg-brand-100 -z-10 transform -rotate-2"></div>
                  <img
                    src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/site/2148596257/images/a584272-2c23-62d-d78c-46b473bc2281_12_month_coaching..png"
                    alt="Leadership Program"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Transformative Leader Program prayer */}
          <section
            ref={ref2}
            className={`py-14 transition-all duration-1000 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                  <p className="text-lg text-gray-600">
                    This 6-week coaching intensive is designed to elevate intercessors, with a strong focus on prophetic
                    intercession. The sessions will empower participants to strengthen their spiritual discernment,
                    deepen their understanding of intercession, and develop a prophetic anointing for prayer. Through
                    a blend of scholarly information, biblical principles, and practical training, participants will
                    be equipped to fulfill their role as prophetic intercessors in God's Kingdom.
                  </p>
                  <button
                    className="bg-deep-purple text-white px-8 py-4 rounded-lg hover:bg-brand-700 transition-colors"
                    onClick={() => window.open('https://latangela-rogers.mykajabi.com/offers/sYFJC7sq/checkout', '_blank')}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>}
      {/* Desktop */}



      {/* Mobile */}
      {window.innerWidth < 768 &&
        <>
          {/* Transformative Leader Program prayer */}
          <section
            ref={ref2}
            className={`py-14 transition-all duration-1000 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                  <p className="text-lg text-gray-600">
                    This 6-week coaching intensive is designed to elevate intercessors, with a strong focus on prophetic
                    intercession. The sessions will empower participants to strengthen their spiritual discernment,
                    deepen their understanding of intercession, and develop a prophetic anointing for prayer. Through
                    a blend of scholarly information, biblical principles, and practical training, participants will
                    be equipped to fulfill their role as prophetic intercessors in God's Kingdom.
                  </p>
                  <button
                    className="bg-deep-purple text-white px-8 py-4 rounded-lg hover:bg-brand-700 transition-colors"
                    onClick={() => window.open('https://latangela-rogers.mykajabi.com/offers/sYFJC7sq/checkout', '_blank')}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Transformative Leader Program */}
          <section
            ref={ref1}
            className={`py-4 pt-24 transition-all duration-1000 ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-3 text-brand-600">
                    <Star className="w-6 h-6" />
                    <span className="text-sm font-semibold uppercase tracking-wider">6-Month Intensive</span>
                  </div>
                  <h2 className="font-cormorant text-5xl font-bold">The Transformative Leader Program</h2>
                  <p className="text-lg text-gray-600">
                    A focused six-month journey designed for emerging and mid-level leaders seeking to elevate their leadership capabilities. This program equips participants with the tools, insights, and strategies needed to lead with purpose, inspire teams, and drive organizational success.
                  </p>
                  <button
                    className="bg-deep-purple text-white px-8 py-4 rounded-lg hover:bg-brand-700 transition-colors"
                    onClick={() => window.open('https://latangela-rogers.mykajabi.com/offers/sYFJC7sq/checkout', '_blank')}
                  >
                    Learn More
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl bg-brand-100 -z-10 transform -rotate-2"></div>
                  <img
                    src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/site/2148596257/images/a584272-2c23-62d-d78c-46b473bc2281_12_month_coaching..png"
                    alt="Leadership Program"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </>}
      {/* Mobile */}




      {/* Transformational Leadership Academy */}
      <section
        ref={ref3}
        className={`py-24 bg-gray-50 transition-all duration-1000 ${inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      // style={{opacity: inView2 ? 1 : 0, transform: inView2 ? 'translateY(0)' : 'translateY(10px)', transition: 'opacity 1s ease-in-out, transform 1s ease-in-out'}}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Users className="w-12 h-12 text-brand-600" />
            </div>
            <div className="text-center max-w-3xl mx-auto mb-16 pt-8">
              <h2 className="font-cormorant text-5xl font-bold mb-6">Transformational Leadership Academy</h2>
              <p className="text-lg text-gray-600">
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
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-cormorant text-2xl font-bold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-brand-700 transition-colors"
                onClick={() => { window.open('https://latangela-rogers.mykajabi.com/offers/9yQQv7bJ/checkout', '_blank') }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Water Initiative */}
      <section
        ref={ref6}
        className={`py-4 transition-all duration-1000 ${inView6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={`${apiData.imgUri2 + "cleanWaterInnitiative.jpg"}`}
              alt="Clean Water"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            <div className="absolute top-1/2 left-16 transform -translate-y-1/2 max-w-lg text-white">
              <Droplet className="w-12 h-12 mb-6" />
              <h2 className="font-cormorant text-5xl font-bold mb-6">Clean Water Initiative</h2>
              <p className="text-lg mb-8">
                Join our mission to provide clean, safe drinking water to communities in need. Every donation makes a difference.
              </p>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => window.open('https://www.paypal.com/paypalme/roseofjerichocd?locale.x=en_US', '_blank')}>
                Support Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Women's Transformation Center */}
      <section
        ref={ref5}
        className={`py-24 bg-brand-50 transition-all duration-1000 ${inView5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-200 rounded-xl transform rotate-3"></div>
                <img
                  src={`${apiData.imgUri2 + "WELLNESS_WOMEN.jpg"}`}
                  alt="Women's Center"
                  className="relative rounded-xl shadow-xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <Heart className="w-12 h-12 text-brand-600" />
              <h2 className="font-cormorant text-5xl font-bold">Women's Transformation Collective Center</h2>
              <p className="text-lg text-gray-600">
                Support our initiative in Ghana to empower women through education, skills training, and community building.
              </p>
              <button className="bg-deep-purple text-white px-8 py-4 rounded-lg hover:bg-brand-700 transition-colors"
                onClick={() => window.open('https://www.roseofjericho-cd.org/Womens_Wellness_Clinic', '_self')}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business and Ministry Coaching */}
      <section
        ref={ref7}
        className={`py-24 bg-gray-900 bg-gradient-to-r from-tc-blue to-yellow-700 text-white transition-all duration-1000 ${inView7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
        <div className="max-w-7xl mx-auto px-4 relative inset-0">
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
              <button className="bg-tc-gold text-white font-bold px-8 py-4 rounded-lg hover:bg-brand-700 transition-colors"
                onClick={() => window.open('https://latangela-rogers.mykajabi.com/offers/DQiq2NuL/checkout')}
              >
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

      {/* Mission Trips */}
      <section
        ref={ref4}
        className={`py-24 transition-all duration-1000 ${inView4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Globe className="w-12 h-12 text-brand-600 mx-auto mb-4" />
            <h2 className="font-cormorant text-5xl font-bold">2026 Mission Trips</h2>
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
                                <h3 className="ont-cormorant text-xl md:text-2xl font-bold">{trip.country}</h3>
                                <p className="text-xs md:text-lg text-gray-600">{trip.month}</p>
                            </div>
                        ))}
                    </div>
        </div>
      </section>
    </div>
  );
}

export default ProgramsLayout;