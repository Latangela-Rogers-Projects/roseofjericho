import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import React, { Component } from 'react';
import { Heart, Home, Stethoscope, Users, Target, ArrowRight, CheckCircle } from 'lucide-react';

class WomensWellnessClinic extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <PageTitle title="Women's Wellness Clinic" subTitle="Rose of Jericho Women's Wellness Clinic" />
        <Women_wellnes />
      </div>
    )
  }
}

export default WomensWellnessClinic;




interface Women_wellnesProps {
  parent?: string;
}

const Women_wellnes = ({ parent }: Women_wellnesProps) => {
  if (parent === "home") {
    return (
      <section className="bg-white">
        <div className="relative overflow-hidden rounded-3xl mx-6 my-12 h-[500px] shadow-2xl">
          <img
            src="assets/img/WELLNESS_WOMEN.jpg"
            alt="Women's Wellness Center"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

          <div className="relative h-full flex flex-col justify-center items-center text-center px-8 text-white">
            <div className="mb-8">
              <div className="w-16 h-16 bg-pink-500/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-pink-400 backdrop-blur-sm">
                <Heart className="w-8 h-8 text-pink-300" />
              </div>
              <h1 className="text-4xl font-bold mb-3">Women's Center Building Project</h1>
            </div>

            <div className="max-w-2xl bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-md rounded-2xl p-10 border border-pink-300/30">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                We are looking forward to our state-of-the-art, spa-like women's wellness center. The Rose of Jericho
                Wellness Center will be a safe place for women to receive first-class care and treatment.
              </p>

              <a
                href="/Womens_Wellness_Clinic"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const services = [
    { icon: Heart, label: 'Wellness Checks' },
    { icon: Stethoscope, label: 'Womb Care' },
    { icon: Home, label: 'Mental Health Assessments' },
    { icon: Users, label: 'Counseling Services' },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-pink-50">

      <div className="relative overflow-hidden h-[600px] shadow-2xl mb-0">
        <img
          src="assets/img/WELLNESS_WOMEN.jpg"
          alt="Women's Wellness Center"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900/80" />

        <div className="relative h-full flex flex-col justify-center items-center text-center px-8 text-white">
          <div className="w-20 h-20 bg-pink-500/30 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-pink-400 backdrop-blur-sm">
            <Heart className="w-10 h-10 text-pink-300" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Rose of Jericho Women's Wellness Center</h1>
          <p className="text-xl text-pink-200 max-w-2xl">The Women's Center Building Project</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Vision</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
            We are creating a state-of-the-art, spa-like wellness center that serves as a safe sanctuary for women.
            The Rose of Jericho Wellness Center will provide first-class care and treatment in a nurturing environment
            designed specifically for women's health and well-being.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            The center will be based in Ghana, outside of Accra, serving as a beacon of hope and healing for women in the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-10 border border-pink-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Services Offered</h3>
            <div className="space-y-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-pink-600" />
                    </div>
                    <span className="text-lg text-slate-700 font-semibold">{service.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-10 border border-purple-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Additional Support</h3>
            <div className="space-y-4">
              {[
                'Health & Wellness Education',
                'Preventative Care Programs',
                'Community Outreach',
                'Women\'s Support Groups',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl p-12 text-center text-white shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Fundraising Goal</h2>
          </div>
          <p className="text-6xl font-bold mb-4">$300,000 USD</p>
          <p className="text-xl text-pink-100 mb-8">
            Help us complete this transformational wellness center for women
          </p>
          <a
            href="https://www.paypal.me/roseofjerichocd?locale.x=en_US"
            className="inline-flex items-center gap-2 bg-white text-pink-600 px-10 py-4 rounded-full font-bold hover:bg-pink-50 transition-colors shadow-lg"
          >
            Contribute Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

    </section>
  );
};