import React from 'react';
import HeroSection from '../layouts/HeroSection';
import HomeLayout from '../layouts/Home-Layout';
import HeroSection_v2 from '../layouts/HeroSection/index_old';

function Home() {
  return (
    <div>
      <HeroSection />
      {/* <section className="relative bg-tc-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Empowering Lives, Transforming Communities</h1>
            <p className="text-xl mb-8">
              The Transformation Collective exists to empower individuals and communities through innovative solutions and transformative leadership.
            </p>
            <a
              href="#" // TODO: Add Kajabi link
              className="bg-tc-gold text-tc-blue font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Join our Community
            </a>
          </div>
        </div>
      </section> */}

      



      <HomeLayout />


    </div>
  );
}

export default Home;