import PageTitle from '@/components/PageTitle';
import React, { Component } from 'react';
import { Phone, Heart, Stethoscope, Brain, Users, Dumbbell, Palette, Apple, Sparkles, GraduationCap, Briefcase, DollarSign, MessageCircle, Home } from 'lucide-react';

class OurPrograms_Services extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Our Programs & Services" />
        <OurProgServices_1 />
        <OurProgServices_2 />
      </div>
    )
  }
}

export default OurPrograms_Services

export const OurProgServices_1 = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="lg:w-2/3 bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-800">Community Feedings</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Millions of people face hunger on a daily basis. Hunger can happen to anyone,
              at any time. Hunger increases the risk of chronic diseases. Our feeding program
              provides nutritious meals to women and children. Our 2020 initiative is to
              provide <span className="font-bold text-rose-600">5,000 meals each month</span>.
            </p>
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-rose-600">5K+</div>
                  <div className="text-sm text-slate-500 mt-1">Monthly Meals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600">365</div>
                  <div className="text-sm text-slate-500 mt-1">Days a Year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-rose-600">100%</div>
                  <div className="text-sm text-slate-500 mt-1">Nutritious</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 bg-gradient-to-br from-rose-500 to-red-600 rounded-3xl p-10 shadow-lg text-white flex flex-col justify-center">
            <Users className="w-12 h-12 mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-3">Get Involved</h3>
            <p className="text-rose-50 mb-6">
              Join our mission to end hunger in our community. Every contribution makes a difference.
            </p>
            <button className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-rose-50 transition-colors flex items-center justify-center gap-3 shadow-lg">
              <Phone className="w-5 h-5" />
              Contact Us Today
            </button>
          </div>
        </div>
      </div>

      <div className="bg-stone-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
              <img
                src="assets/img/gallery_page_9_popup.jpg"
                alt="Health Screening"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope className="w-10 h-10 text-rose-400" />
                  <h2 className="text-3xl font-bold text-white">Health Screenings</h2>
                </div>
                <p className="text-slate-200 text-lg">
                  Promoting wellness through accessible community healthcare services
                </p>
              </div>
            </div>

            <div className="text-white space-y-6">
              <p className="text-xl text-slate-300 leading-relaxed">
                Our community health screenings provide knowledge and promote health.
                We partner with local healthcare agencies, medical professionals,
                and government officials to offer services that make a lasting impact.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Heart, text: 'Body Mass Index' },
                  { icon: Stethoscope, text: 'Diabetes Test' },
                  { icon: Heart, text: 'Cholesterol Test' },
                  { icon: Stethoscope, text: 'Blood Pressure' },
                  { icon: Brain, text: 'Mental Health Screening' },
                  { icon: Users, text: 'Peer Health Specialist' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-slate-700/50 rounded-xl p-4 backdrop-blur-sm border border-slate-600">
                    <item.icon className="w-5 h-5 text-rose-400 flex-shrink-0" />
                    <span className="text-slate-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 rounded-3xl p-12 lg:p-16 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-slate-800">Mental Health Services</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Mental health illnesses affect a large proportion of the urban population.
              <span className="font-bold text-rose-700"> 1 in 4 people</span> will have a mental health disorder in their lifetime,
              and this can occur at any age. ROJCD offers treatment services from a holistic approach.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">Mind</h3>
                <p className="text-slate-600">Psychological wellness and cognitive health</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">Body</h3>
                <p className="text-slate-600">Physical health and holistic treatment</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">Soul</h3>
                <p className="text-slate-600">Spiritual wellness and inner peace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const OurProgServices_2 = () => {
  const services = [
    {
      icon: Users,
      title: 'Self-Help Groups',
      description: 'Our self help groups are designed to allow others to share their information from their own lives while continuing to grow beyond their individual traumas. Our groups are psycho-educational in nature, providing important information about dealing with an illness or challenge.',
      color: 'from-rose-500 to-rose-600'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Therapy',
      description: 'Physical activity and exercise helps to alleviate some of the symptoms associated with some mood disorders as well as improve self-image and cognitive functioning.',
      highlight: 'Join our FAB & FIT workout group every Saturday Morning at 8:00 AM in Temecula, CA',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Palette,
      title: 'Art Therapy',
      description: 'Some individuals have issues with verbal communication. We utilize art therapy as a means of nonverbal communication to assist clients with being able to convey emotions and feelings they may not feel comfortable talking about.',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: Apple,
      title: 'Nutrition Therapy',
      description: 'We understand that a healthful lifestyle can promote mental health. Those that are battling substance abuse and mental health issues, nutrition plays the same key role in maintaining recovery while also improving the resulting health conditions and deficiencies.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Sparkles,
      title: 'Spiritual Counseling',
      description: 'We understand that the human spirit is intricately involved in the healing of the total person - mind, body, and soul. Our counselors have a spectrum of areas in which they operate: Reiki-based treatment, yoga instruction, energy healing, and more.',
      color: 'from-red-500 to-rose-600'
    }
  ];

  const lifeSkills = [
    {
      icon: Home,
      title: 'Independent Living',
      description: 'Personal Living Skills (Socialization, Personal Hygiene, Health Care, Nutrition, Medication Management), Home Living Skills (Clothing Care, Meal Plan and Preparation, Home Care, Home Maintenance and Safety), and Community Living Skills (Social Interaction, Mobility & Travel Training, Transportation Time Management, Community Safety and Participation).',
      color: 'bg-rose-500'
    },
    {
      icon: MessageCircle,
      title: 'Communication',
      description: 'Manners, Dating and Relationships, Interpersonal Communications, Workplace Communication, Problem Solving, Decision Making and Social Skills Training.',
      color: 'bg-pink-500'
    },
    {
      icon: Brain,
      title: 'Emotional Regulation/Intelligence',
      description: 'Social Skills Curriculum, Stress Management, Anger Management, Self-Esteem, Conflict Resolution, Relationship Building, and the Impacts of behavior on self and others.',
      color: 'bg-rose-500'
    },
    {
      icon: GraduationCap,
      title: 'Post Secondary Learning',
      description: 'College Prep Programs, College Support Programs, Post Secondary connections to agencies for life learning',
      color: 'bg-pink-500'
    },
    {
      icon: Briefcase,
      title: 'Employment Skills',
      description: 'Job Skills, Attitudes and Performance, Self Evaluation, Feedback, Job Search, Job retention, Strengths and Weaknesses, Volunteer Opportunities, Work ethic, Job Placement.',
      color: 'bg-rose-500'
    },
    {
      icon: DollarSign,
      title: 'Money Management',
      description: 'Focuses on Daily Budgets, Understanding your Paycheck, Filing Taxes, Borrowing Money, Credit, Financial Assistance for Education, and Checking and Savings Accounts.',
      color: 'bg-pink-500'
    }
  ];

  return (
    <section className="bg-white">

      <div className="bg-gradient-to-br from-slate-50 to-rose-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-rose-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`md:w-48 flex items-center justify-center p-8 bg-gradient-to-br ${service.color}`}>
                  <service.icon className="w-20 h-20 text-white" />
                </div>
                <div className="flex-1 p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                  {service.highlight && (
                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-4 rounded-r-lg">
                      <p className="font-semibold text-pink-800">{service.highlight}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-rose-600 to-rose-600 text-white px-10 py-4 rounded-full font-semibold hover:from-rose-700 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl text-lg">
              Register Today
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-red-600 rounded-3xl p-12 lg:p-16 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Wellness Women's Support Seminars</h2>
              <div className="w-32 h-1 bg-white/40 mx-auto rounded-full mb-8" />
              <p className="text-lg text-white/90 leading-relaxed">
                These seminars are designed to inspire, empower, motivate, encourage, and to move women forward in
                their divine healing and in to their designed purpose. By attending, women will have the opportunity
                to hear extraordinary breakout session speakers share their experiences and receive practical
                tools and resources to not just live, but to soar beyond their current situations.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                {['Mental Wellness', 'Art Therapy', 'Business Strategies', 'Financial Empowerment'].map((topic, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="font-semibold">{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Life Skills Training</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6">
              Our life skills training program provides curriculum addressing social, psychological,
              cognitive, and attitudinal factors associated with mental health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`${skill.color} p-6 flex items-center justify-between`}>
                  <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                  <skill.icon className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
