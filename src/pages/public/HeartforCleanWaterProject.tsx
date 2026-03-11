import PageTitle from '@/components/PageTitle';
import React, { Component } from 'react';
import { Droplet, Stethoscope, Heart, TrendingUp, Download } from 'lucide-react';

class HeartforCleanWaterProject extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <PageTitle title="Heart for Clean Water Project" />
        <CleanWaterProject />
      </div>
    )
  }
}

export default HeartforCleanWaterProject;




const CleanWaterProject = () => {
  const images = [
    "240478109_355510589601481_2324821915986045131_n.jpg",
    "240728051_150233840608264_3717344054449439813_n.jpg",
    "241182659_1447218092325649_729760777811111968_n.jpg",
    "241208741_593454921691632_3093531241122153202_n-1.jpg",
  ];

  return (
    <section className="bg-white">

      <div className="bg-gradient-to-b from-slate-50 to-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <video
            controls
            className="w-full rounded-2xl shadow-2xl"
          >
            <source
              src="assets/img/Ghana_Clean_Water_Project.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-12 border border-rose-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Droplet className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800">Water Contamination Crisis</h2>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The Pra River contamination runs through multiple communities in Ghana's Western Region and is used for drinking water, fishing, and bathing. The contamination has caused long-term health effects on children and families. Metallic mercury, commonly used in gold extraction by artisanal miners, is highly toxic. Other cancer-causing chemicals have also been found in the river.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            We are working to provide clean water solutions and mobile health clinics to communities directly impacted by the Pra River pollution.
          </p>

          <a
            href="https://www.paypal.me/roseofjerichocd?locale.x=en_US"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg"
          >
            <Heart className="w-5 h-5" />
            Donate Today
          </a>
        </div>
      </div>

      <div className="bg-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Community Impact</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              >
                <img
                  src={`assets/img/${img}`}
                  alt="Clean water project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-rose-500">
            <Stethoscope className="w-10 h-10 text-rose-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">Mobile Health Clinics</h3>
            <p className="text-slate-600">Bringing healthcare to affected communities</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-pink-500">
            <Droplet className="w-10 h-10 text-pink-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">Clean Water Access</h3>
            <p className="text-slate-600">Providing safe drinking water solutions</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-teal-500">
            <Heart className="w-10 h-10 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">Community Wellness</h3>
            <p className="text-slate-600">Long-term health improvement initiatives</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 text-white">
          <div className="flex items-center gap-4 mb-8">
            <TrendingUp className="w-8 h-8 text-green-200" />
            <span className="text-sm font-bold uppercase tracking-widest text-green-200">Campaign 2023-2028</span>
          </div>

          <h2 className="text-4xl font-bold mb-6">Feed 10,000 Campaign</h2>

          <p className="text-lg text-green-50 leading-relaxed mb-6 max-w-3xl">
            Millions of people face hunger on a daily basis. Hunger can happen to anyone, at any time. Hunger increases the risk of chronic diseases. Our feeding program provides nutritious meals to women and children.
          </p>

          <p className="text-xl font-semibold text-green-200 mb-8">
            Our 5-year initiative: Feed 10,000 people in Riverside County and Ghana's Western Region
          </p>

          <a
            href="https://www.paypal.me/roseofjerichocd?locale.x=en_US"
            className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            Support Our Mission
          </a>
        </div>
      </div>

    </section>
  );
};