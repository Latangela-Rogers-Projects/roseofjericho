import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
import React, { Component } from 'react';
import { Target, Heart, Zap, ChevronRight } from 'lucide-react';

class ComunityImpact extends Component {

  render() {
    return (
      <div>
        <PageTitle title="Community Impact" />
        <CommunityAction />
      </div>
    )
  }
}

export default ComunityImpact


const CommunityAction = () => {
  const projects = [
    {
      title: "Rose of Jericho Women's Wellness Clinic",
      description: "The Rose of Jericho Wellness Center will be a safe place for women to receive first-class care and treatment, providing wellness checks, womb care, mental health assessments, and health education.",
      image: "assets/img/WELLNESS_WOMEN.jpg",
      link: "/womens-wellness-clinic",
      icon: Heart
    },
    {
      title: "Heart for Clean Water Project",
      description: "Addressing water contamination in Ghana's Western Region with mobile health clinics and clean water solutions for communities impacted by river pollution.",
      image: "assets/img/241208741_593454921691632_3093531241122153202_n-1.jpg",
      link: "/mission",
      icon: Zap
    }
  ];

  return (
    <section className="bg-white">

      <div className="relative overflow-hidden">
        <img
          src="assets/img/CommunityFeeding.jpg"
          alt="Community Action"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/80 to-stone-900/60" />

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-rose-400" />
            <span className="text-sm font-bold uppercase tracking-widest text-rose-400">2023 Impact Report</span>
          </div>

          <h1 className="text-5xl font-bold mb-8 leading-tight">
            Community <span className="text-rose-400">Action</span>
          </h1>

          <div className="space-y-6 text-lg leading-relaxed text-stone-100 max-w-3xl">
            <p>
              Multiple women's seminars were conducted to help women move beyond their traumas. Over 400 women in the
              local communities of Riverside County were served this year. Next year we project to double this number.
            </p>

            <p>
              Hunger and health are deeply connected. People who are food insecure are disproportionately affected by
              diet-sensitive chronic diseases. Our feeding program provides nutritious meals to women and children.
              Our 5-year initiative is to feed 10,000 people in Riverside County and internationally in Ghana's Western Region.
            </p>

            <div className="pt-4 border-t border-rose-400/30">
              <p className="font-bold text-rose-400">2020-2023 Impact: 1,500+ women and children served</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Community Projects & Capital Campaigns</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl h-[500px] shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="relative h-full flex flex-col justify-end p-10 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    {/* <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center border border-rose-400">
                      <Icon className="w-6 h-6 text-rose-400" />
                    </div> */}
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-stone-200 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-semibold transition-colors w-fit"
                  >
                    Learn More
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};