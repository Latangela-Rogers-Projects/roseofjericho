import PageTitle from '@/components/PageTitle';
import React, { Component } from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Star, Sparkles, Users, ArrowRight, Play } from 'lucide-react';

class OutOfTheBox extends Component {

  render() {
    return (
      <div>
        <PageTitle title="Out Of The Box" subIcon="assets/img/outthebox-logo2.png" />
        <OTB_summit />
      </div>
    )
  }
}

export default OutOfTheBox



const OTB_summit = () => {
  const topics = [
    "How to detect mental illness",
    "How to Balance Ministry and Business",
    "Mindful Wellness",
    "I Am More Than Enough",
    "I Am Not My Hair",
    "Branding and Marketing",
    "Financial Education",
    "Persevering Through Casualties",
    "Marriage 101",
    "Single and Armed",
  ];

  const images = [
    "209021540_235427368255393_3295422259815091089_n-1.jpg",
    "209327642_456370815599029_431621112293892472_n.jpg",
    "210619894_213031987409271_3318832050275209284_n.jpg",
    "210741611_971169696757441_642495374676660181_n.jpg",
    "213737862_353705886133796_2897441820942226357_n.jpg",
    "214449541_947906109105581_8991599701029096878_n.jpg",
    "214759729_541348733877663_4834973791956458224_n.jpg",
    "215147563_1374210369618390_7337603880088253504_n_copy.jpg",
    "217016561_3953981781397193_4901163308482854272_n.jpg",
    "219493113_590725108978367_5173541289558807140_n.jpg",
  ];

  return (
    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-3xl overflow-hidden h-[600px] shadow-2xl group">
            <img
              src="assets/img/210741611_971169696757441_642495374676660181_n.jpg"
              alt="Out of the Box Summit"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-rose-500" fill="currentColor" />
              <span className="text-sm font-bold uppercase tracking-widest text-rose-600">Women's Program</span>
            </div>

            <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Out of the <span className="text-rose-500">Box</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Out the Box for Women is a mobile program that provides a safe place for women to walk out their transformation and restoration journey. Each segment is designed to inspire, empower, motivate, encourage, and move women forward in their divine healing and designed purpose.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Through participation, women attend extraordinary summit sessions with first-class community speakers and teachers, receiving practical tools and resources to not just live, but to soar beyond their current situations.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://outheboxcoaching.com"
                className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg"
              >
                Register Our Next Summit
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-600 via-stone-600 to-stone-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-lg text-white/90 mb-4">Empowering women through transformation</p>
          <h2 className="text-5xl font-bold mb-4">I AM Enough</h2>
          <p className="text-2xl font-light">Our Summit Theme 2024</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-2xl mb-20">
          <img
            src="assets/img/215147563_1374210369618390_7337603880088253504_n.jpg"
            alt="Summit experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center justify-center p-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <Sparkles className="w-8 h-8 text-rose-400" />
                <h3 className="text-2xl font-bold text-white">What to Expect</h3>
              </div>
              <p className="text-white text-lg leading-relaxed">
                This summit is designed to inspire, empower, and move women forward in their divine healing and designed purpose. Experience breakout session speakers sharing their stories, receive practical tools and resources, participate in spontaneous worship, and experience prophetic impartation. Continental breakfast and lunch included!
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Seminar Topics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl p-6 text-white font-semibold text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-16">Summit Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {images.slice(0, 9).map((img, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <img
                  src={`assets/img/${img}`}
                  alt="Summit moment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-900 to-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Conference Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl p-10 bg-gradient-to-br from-rose-500/20 to-rose-500/20 border border-rose-500/30 backdrop-blur-sm">
              <Users className="w-10 h-10 text-rose-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">VIP Experience</h3>
              <p className="text-slate-200 leading-relaxed">
                Get ready for the main event with networking opportunities with our keynote speakers and breakout facilitators. Enjoy giveaways, music, and personal prophetic impartation in an exclusive lounge experience.
              </p>
            </div>

            <div className="relative rounded-2xl p-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
              <Sparkles className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Networking Event</h3>
              <p className="text-slate-200 leading-relaxed">
                Friday 6:00 PM to 8:00 PM in the hotel lounge. A cocktail-style networking event featuring light hors d'oeuvres, giving women the opportunity to connect and build relationships with fellow attendees.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};