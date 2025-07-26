import React from 'react';
import { Users, Target, Award, Globe, BookOpen, Heart, Star, ArrowRight, Calendar } from 'lucide-react';
import apiData from '../api';
// import AboutHeroSection from '../layouts/About-HeroSection';
// import HistorySection from '../layouts/About-HeroSection/historySection';

function About_() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mission & Vision Section */}
      <AboutHeroSection />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Transformation Collective</h2>
            <p className="text-lg text-gray-600 mb-8">
              The Transformation Collective exists to empower individuals and
              communities through innovative solutions and transformative leadership,
              equipping them to create lasting change and sustainable impact in every
              sphere of society.
              {/* We equip individuals and communities to create lasting change and sustainable impact in every sphere of society through innovative solutions and transformative leadership. */}
            </p>
          </div>
        </div>
      </section>


      {/* History Section */}
      <HistorySection />
    </div>
  );
}


function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-purple via-deep-purple to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519834785169-98be25ec3f84?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Our Mission</h1>
              <p className="text-xl text-gray-300">
                Our mission is to empower individuals and communities through innovative solutions,
                transformative leadership, and collaborative initiatives, fostering growth, wholeness,
                and sustainable impact.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-deep-purple/20 rounded-xl transform rotate-3"></div>
              <img
                src="https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-45-58-2.jpg"
                alt="Leadership"
                className="relative rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-l from-gold/20 to-deep-purple/20 rounded-xl transform -rotate-3"></div>
              <img
                src="https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-46-00-2.jpg"
                alt="Vision"
                className="relative rounded-xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-gray-300">
                To be a global catalyst for transformation, equipping leaders and organizations
                to create lasting change in every sphere of society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our values guide everything we do, shaping our approach to leadership and transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Integrity",
                description: "Maintaining the highest standards of honesty and ethical behavior in all our endeavors."
              },
              {
                icon: Target,
                title: "Excellence",
                description: "Pursuing excellence in everything we do, setting high standards for quality and impact."
              },
              {
                icon: Users,
                title: "Community",
                description: "Building strong, supportive communities that foster growth and transformation."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white/10 p-8 rounded-xl hover:transform hover:scale-105 transition-transform">
                <value.icon className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Our Leadership</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Led by LaTangela Rogers, our team brings together decades of experience in leadership,
              ministry, and organizational development.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-deep-purple/20 rounded-xl transform rotate-2">
                <div className="absolute inset-0 bg-[url('https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-43-02.jpg')] bg-cover bg-[right_top_20%] bg-top opacity-20"></div>
              </div>
              <div className="relative bg-deep-purple/30 p-8 rounded-xl backdrop-blur-xs">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">LaTangela Rogers</h3>
                  <p className="text-gold">Founder & CEO</p>
                </div>
                <p className="text-gray-300 mb-4">
                  With over 16 years of civil service experience and 19 years of ministry leadership,
                  LaTangela brings a wealth of expertise in organizational leadership and transformation.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gold" />
                    <span>Master of Arts in Human Behavior</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-gold" />
                    <span>Ph.D. Candidate in Organizational Leadership</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-gold" />
                    <span>Certified Leadership Coach</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-l from-gold/20 to-deep-purple/20 rounded-xl transform -rotate-2">
                <div className="absolute inset-0 bg-[url('https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-43-01.jpg')] bg-cover bg-[right_top_20%] bg-top opacity-20"></div>
              </div>
              <div className="relative bg-deep-purple/30 p-8 rounded-xl backdrop-blur-xs">
                <h3 className="text-2xl font-bold mb-6">Areas of Expertise</h3>
                <div className="grid gap-4">
                  {[
                    "Organizational Leadership Development",
                    "Strategic Planning & Implementation",
                    "Community Outreach & Engagement",
                    "Ministry Leadership & Growth",
                    "Personal Development & Coaching",
                    "Change Management"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-deep-purple/20 p-4 rounded-lg">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white/80 text-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Globe className="w-16 h-16 text-fuchsia-800 mx-auto mb-6" />
            <h2 className="text-5xl font-bold mb-6">Our Global Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making a difference across continents through transformative leadership and community development.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Leaders Trained" },
              { number: "25+", label: "Countries Reached" },
              { number: "50+", label: "Partner Organizations" },
              { number: "100K+", label: "Lives Impacted" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-deep-purple/20 p-8 rounded-xl">
                <div className="text-4xl font-bold text-fuchsia-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-deep-purple/40 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.thetransformationcollective.org/wp-content/uploads/2025/05/PHOTO-2025-04-23-15-46-00.jpg')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-deep-purple/10"></div>
              <Calendar className="absolute right-0 bottom-0 w-64 h-64 text-gold opacity-10 transform translate-x-1/4 translate-y-1/4" />
            </div>
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of our mission to transform lives and communities around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gold text-deep-purple rounded-lg font-semibold hover:bg-white transition-colors"
                  onClick={() => window.open("https://latangela-rogers.mykajabi.com/offers/DQiq2NuL/checkout", '_blank')}>
                  Get Involved
                </button>
                <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
                  onClick={() => window.location.href = "/contact"}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;


const AboutHeroSection = () => {
  return (
    <>
      <section className="bg-white text-black AH-container">
        <div className='flex flex-col md:flex-row'>
          <div className="p-20 md:pt-40 md:pb-40 md:w-1/2">
            <h2 className="text-7xl font-semibold mb-4 text-tc-gold md:pt-20">Our Mission</h2>
            <p className="text-lg">
              Our mission is to empower individuals and communities through innovative solutions,
              transformative leadership, and collaborative initiatives, fostering growth, wholeness,
              and sustainable impact.
            </p>
          </div>
          <div className="p-20 md:pt-40 md:pb-40 md:w-1/2 md:flex hidden AH-stickerContainer">
            <div className='bg-tc-blue AH-sticker' style={{ backgroundColor: "black", background: `url(${apiData.imgUri}vecteezy_man-in-suit-giving-a-presentation-on-stage-to-a-large_49461425.jpeg) center`, backgroundSize: "cover" }}></div>
          </div>
        </div>
      </section>


      <section className="bg-tc-blue text-white">
        <div className="flex flex-col md:flex-row  md:space-x-0 space-y-2 md:space-y-0 " >
          <div className="p-20 md:pt-40 md:pb-40 md:w-1/2 md:flex hidden AH-stickerContainer">
            <div className='AH-sticker2' style={{ background: `url(${apiData.imgUri}businesswoman-is-standing-at-a-podium-speaking-into-a_49686865.jpeg) center`, backgroundSize: "cover" }}></div>
          </div>
          <div className="bg-opacity-90 p-20 md:pl-32 md:pt-40 md:pb-40 md:w-1/2" style={{ position: "relative" }}>
            <h2 className="text-7xl font-semibold mb-4 text-tc-gold md:pt-10">Our Vision</h2>
            <p className="text-lg">
              To be a global catalyst for transformation, equipping leaders and organizations
              to create lasting change in every sphere of society.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="bg-black text-white AH-container">
                <div className='md:flex-row'>
                    <div className="p-20 md:pt-40 md:pb-40 md:w-1/2">
                        <h2 className="text-7xl font-semibold mb-4 text-tc-gold md:pt-20">Our Mission</h2>
                        <p className="text-lg">
                            Our mission is to empower individuals and communities through innovative solutions,
                            transformative leadership, and collaborative initiatives, fostering growth, wholeness,
                            and sustainable impact.
                        </p>
                    </div>
                </div>
                <div className='AH-sticker'></div>
            </section> */}
    </>
  );
};

const HistorySection = () => {
  return (
    <section className="bg-tc-blue text-white" style={{ background: `url(${apiData.imgUri2}missions_history.jpg) center`, backgroundSize: "cover" }}
    >
      <div className="flex flex-col md:flex-row  md:space-x-0 space-y-2 md:space-y-0 " >
        <div className="bg-black bg-opacity-70 p-20 md:pt-40 md:pb-40 md:w-1/2">
          <h2 className="text-7xl font-semibold mb-4 text-tc-gold">Our History</h2>
          <p className="text-lg mb-6">
            The Transformation Collective was founded by LaTangela Rogers, a visionary leader
            with an unwavering commitment to empowering individuals and communities to reach
            their full potential. With over 16 years of civil service experience, 19 years of
            ministry leadership, and more than a decade of expertise in organizational leadership,
            LaTangela has built a reputation as a catalyst for transformative change in both the
            public and private sectors.
          </p>
          <p className="text-lg mb-6">
            Her academic achievements further underscore her dedication to growth and excellence.
            Holding a Bachelor of Arts in Management and a Master of Arts in Human Behavior,
            LaTangela is currently pursuing a Ph.D. in Organizational Leadership, with a focus on
            equipping leaders to navigate complex challenges and foster sustainable impact.
          </p>
          <p className="text-lg mb-6">
            The journey of the Transformation Collective began with LaTangela's realization that
            true transformation requires a holistic approach—one that integrates spiritual growth,
            leadership development, and practical strategies for organizational success. Drawing
            from her wealth of experience in civil service and ministry, she envisioned a platform
            where individuals and organizations could be empowered to create meaningful change.
          </p>
        </div>
        <div className="bg-tc-blue bg-opacity-90 p-20 md:pt-40 md:pb-40 md:w-1/2">
          {/* <h2 className="text-7xl font-semibold mb-4 text-tc-gold md:pt-20">Our Vision</h2> */}
          <p className="text-lg pt-20 mb-6">
            Founded on the principles of innovation, collaboration, and faith, the Transformation
            Collective brings together a network of professionals, community leaders, and
            changemakers dedicated to advancing personal and collective transformation. From
            leadership coaching and training to community outreach and development, the Collective
            is committed to equipping others to thrive and make a lasting difference in the world.
          </p>
          <p className="text-lg mb-6">
            Under LaTangela’s guidance, the Transformation Collective has become a beacon of hope and
            inspiration, transforming lives and communities one step at a time. Today, it stands as a testament
            to the power of vision, perseverance, and purpose-driven leadership.
          </p>
          <div class="flex items-center justify-center h-96">
            <img class=" h-96" src={`${apiData.imgUri2}LRogeers.png`} />
          </div>
        </div>
      </div>
    </section>
  );
};