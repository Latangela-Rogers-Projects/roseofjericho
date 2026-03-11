import PageTitle from '@/components/PageTitle';
import { Facebook } from 'lucide-react';
import React, { Component, useCallback, useEffect, useState } from 'react';
import YouTube from 'react-youtube';

class AboutUs extends Component {
	render() {
		return (
			<div>
				<PageTitle title="About Us"/>
				<About_1 />
			</div>
		)
	}
}


export const About_1: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsZoomed((prev) => !prev);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 md:px-8 py-12 md:py-16">
      <div className="relative max-w-7xl mx-auto overflow-hidden p-6 md:p-12 bg-gradient-to-br from-stone-100/80 to-stone-200/80 backdrop-blur-sm shadow-2xl rounded-lg">
        <div className="absolute w-full h-full bg-white/10 rotate-12 left-1/2 -top-48 -z-10" />
        <div className="absolute w-full h-full bg-white/5 rotate-12 left-1/2 -top-24 -z-10" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="relative z-10 order-2 md:order-1">
            <div className="relative h-64 md:h-96 lg:h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
              <img
                src="assets/img/160663448_3543881515836172_4125828369181678619_n.jpg"
                alt="Community outreach"
                className={`w-full h-full object-cover transition-transform duration-[15000ms] ease-in-out ${
                  isZoomed ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
          </div>

          <div className="relative z-10 flex items-center order-1 md:order-2">
            <div>
              <h2 className="font-extrabold tracking-wider text-2xl md:text-3xl lg:text-4xl text-gray-900">
                ABOUT US
              </h2>

              <div className="w-20 h-1 bg-rose-600 my-6" />

              <p className="text-base md:text-lg tracking-wide leading-relaxed text-gray-700">
                Rose of Jericho Community Development (ROJCD) has been providing
                grassroots community outreach programs to communities in
                McKinney, TX and Carrollton, TX. The organization was birthed
                from the desire to resurrect communities once considered
                nonproductive. It has now expanded nationally and internationally.
              </p>

              <a
                href="https://www.facebook.com/Roseofjerichocd"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center mt-8 w-14 h-14 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative z-10 flex items-center order-3">
            <div>
              <p className="text-base md:text-lg tracking-wide leading-relaxed text-gray-700">
                Since 2017, ROJCD has expanded programs including women's mental
                health seminars, medical missions, community health fairs,
                empowerment summits, and development initiatives focused on the 8
                dimensions of wellness.
              </p>
              <p className="mt-6 text-lg md:text-xl font-bold text-rose-800 italic">
                "Your Place For Transformation and Restoration"
              </p>
            </div>
          </div>

          <div className="relative z-10 order-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl bg-gray-900">
              <iframe
                src="https://www.youtube.com/embed/W_bFPonIkVg"
                title="Rose of Jericho Community Development"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs