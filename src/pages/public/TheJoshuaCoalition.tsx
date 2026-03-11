
// import Calendar from 'react-calendar';
import PageTitle from '@/components/PageTitle';
import { Facebook } from 'lucide-react';
import React, { Component } from 'react';
import { Users, Target, BookOpen, Zap, Globe, Mail, Phone, Calendar, ChevronRight } from 'lucide-react';


class TheJoshuaCoalition extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <PageTitle title="The Joshua Project Coalition" />
        <JoshuaCoalition />
      </div>
    )
  }
}

export default TheJoshuaCoalition



const JoshuaCoalition = () => {
  return (
    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl group">
            <img
              src="assets/img/241510120_235649281843979_5935109471248854482_n.jpg"
              alt="Joshua Coalition"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-red-600" />
              <span className="text-sm font-bold uppercase tracking-widest text-red-600">Coalition Network</span>
            </div>

            <h1 className="text-5xl font-bold text-slate-800 mb-6">
              The Joshua <span className="text-red-600">Coalition</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Our coalition programs and services address racial inequalities, health and well-being, quality education,
              economic growth, innovation and infrastructure. We invite community partners working within these core fields
              to join our network and help initiate meaningful change in the communities we serve.
            </p>

            <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg">
              Schedule Appointment
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Purpose</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full" />
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
            <p className="text-white text-lg leading-relaxed mb-6">
              The purpose of this project is to end racism, prejudice, social injustice, and poverty by building awareness,
              solutions, and leadership for racial justice. We generate transformative ideas, information, and experiences
              through strategic service models that invite community partners to the coalition.
            </p>

            <p className="text-white text-lg leading-relaxed mb-8">
              We provide tools, resources, policy change initiatives, education, training and development to address racial
              equity, social solutions, and infrastructure development. Currently, we have partnered with community organizations
              across multiple continents: California, Texas, New York, Georgia, Ghana, Soweto, Zimbabwe, and Nigeria.
            </p>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-xl p-6">
              <p className="text-white text-lg font-semibold">
                We are actively seeking to expand the coalition and its work to fight against social injustices worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            When you join our coalition, you gain access to comprehensive support and resources
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: BookOpen, label: 'Grant Writing Training' },
            { icon: Users, label: 'Network & Partner Access' },
            { icon: Zap, label: 'Non-Profit Start-Up Training' },
            { icon: Target, label: '1023 EZ Assistance' },
            { icon: Globe, label: 'Coaching & Mentorship' },
            { icon: ChevronRight, label: 'Website Integration' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <Icon className="w-10 h-10 text-red-600 mb-4" />
                <p className="font-semibold text-slate-800">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden">
        <img
          src="assets/img/pexels-christina-morillo-1181304-scaled.jpg"
          alt="Partnership"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60" />

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Schedule Your Appointment</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Get Connected</h3>
                <p className="text-slate-200 leading-relaxed mb-6">
                  Join our growing coalition and become part of a movement dedicated to social justice and community transformation.
                  Let's work together to create lasting change.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-200">
                  <Mail className="w-5 h-5 text-red-400" />
                  <span>Send us an email with your interests</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Phone className="w-5 h-5 text-red-400" />
                  <span>Call to discuss partnership opportunities</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Calendar className="w-5 h-5 text-red-400" />
                  <span>Schedule your initial consultation</span>
                </div>
              </div>

              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-colors w-full">
                Contact Us
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20">
              <form className="space-y-4">
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Organization</label>
                  <input
                    type="text"
                    placeholder="Your organization"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-semibold mb-2">Interests</label>
                  <textarea
                    placeholder="Tell us about your interests..."
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    rows={3}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
