import PageTitle from "@/components/PageTitle";
import { Quote } from "lucide-react";
import React, { Component, useEffect, useState } from "react";

class Mission_Vission extends Component {

	render() {
		return (
			<div>
				<PageTitle title="Mission & Vision"/>
				<About_2 />
			</div>
		)
	}
}

export default Mission_Vission



export const About_2: React.FC = () => {
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
        <div className="absolute w-full h-full bg-white/10 rotate-12 left-1/2 -top-52 -z-10" />
        <div className="absolute w-full h-full bg-white/5 rotate-12 left-1/2 -top-24 -z-10" />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="relative z-10">
            <div className="relative h-64 md:h-96 lg:h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
              <img
                src="assets/img/mission.jpg"
                alt="Our mission"
                className={`w-full h-full object-cover transition-transform duration-[15000ms] ease-in-out ${
                  isZoomed ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
          </div>

          <div className="relative z-10 flex items-center">
            <div className="space-y-6">
              <h2 className="font-extrabold tracking-wider text-2xl md:text-3xl text-gray-900">
                MISSION & VISION
              </h2>

              <div className="w-20 h-1 bg-rose-600" />

              <div>
                <h3 className="font-bold tracking-wide text-xl text-gray-800 mb-3">
                  Our Mission:
                </h3>
                <p className="text-base md:text-lg tracking-wide leading-relaxed text-gray-700">
                  Rose of Jericho Community Development exists to facilitate the
                  improvement of the quality of life of the people in the district
                  through the provision of basic social services and the promotion
                  of socio-economic development within the context of good governance.
                </p>
              </div>

              <div>
                <h3 className="font-bold tracking-wide text-xl text-gray-800 mb-3">
                  Our Vision:
                </h3>
                <p className="text-base md:text-lg tracking-wide leading-relaxed text-gray-700">
                  To rebuild communities filled with people of culture; and by
                  creating serene environments with the best social amenities and
                  economic opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center text-center space-y-6 md:col-span-2 py-8 md:py-12 px-4 bg-white/40 rounded-lg">
            <Quote className="w-12 h-12 text-red-500" />
            <h2 className="font-extrabold tracking-wider text-2xl md:text-3xl lg:text-4xl text-gray-900">
              HEALING OUR COMMUNITIES
            </h2>

            <p className="text-lg md:text-xl tracking-wide italic text-gray-800 max-w-3xl">
              "In every community, there is work to be done. In every nation,
              there are wounds to heal. In every heart, there is the power to do it."
            </p>

            <p className="text-base md:text-lg tracking-wide font-bold text-gray-900">
              - Marianne Williamson
            </p>
          </div>

          <div className="relative z-10 md:col-span-2">
            <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-xl">
              <img
                src="assets/img/104962801_2289180471390863_4842400546207497003_n.jpg"
                alt="Community healing"
                className={`w-full h-full object-cover transition-transform duration-[15000ms] ease-in-out ${
                  isZoomed ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
          </div>

          <div className="relative z-10 md:col-span-2 flex flex-col items-center text-center space-y-6 pt-8">
            <p className="text-base md:text-lg tracking-wide leading-relaxed text-gray-700 max-w-5xl">
              The effects of poverty and mental illness are so individualized and difficult to understand,
              that we look to each community that we serve to identify the goals they want to achieve.
              Through community analysis and community town hall meetings we are able to help our
              communities move towards achieving their goals.
            </p>

            <p className="text-base md:text-lg tracking-wide leading-relaxed text-gray-700 max-w-5xl">
              We understand that excellence doesn't only derive from mastery of knowledge,
              but also from compassion, dedication, and respect.
              Understanding each communities' needs is our first step towards purpose and wholeness.
            </p>

            <p className="text-base md:text-lg tracking-wide leading-relaxed text-gray-700 max-w-5xl font-semibold">
              We have been given the blueprint to resurrect communities that have been exhausted
              of all natural resources to overcome poverty. It is time to resurrect our communities
              that have been cast aside. Let the dead things live!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
