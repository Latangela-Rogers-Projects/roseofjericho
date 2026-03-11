import PageTitle from '@/components/PageTitle';
import { Facebook, Globe, Linkedin, Mail, Twitter } from 'lucide-react';
import React, { Component } from 'react';

class Our_Team extends Component {
	componentDidMount() {
		// window.scrollTo(0, 0)
	}

	render() {
		return (
			<div>
				<PageTitle title="Our Team" />
				<About_3 />
				<CommunityPartners />
			</div>
		)
	}
}

export default Our_Team


const directors = [
	{ name: 'LATANGELA ROGERS, M.A.', role: 'FOUNDER, PRESIDENT' },
	{ name: 'DR. JOSEPH NUERTEY M.D.', role: 'VICE PRESIDENT' },
	{ name: 'THEODORE OWUSU, MISSIONS & TOURISM', role: 'SECRETARY' },
	{ name: 'AMISHA ASKEW, LICENSED VOCATIONAL NURSE', role: 'TREASURER' },
	{ name: 'SAM ABU, EDUCATOR, M.ED.', role: 'EXECUTIVE BOARD MEMBER' },
	{ name: 'MERCEDES MABUSE, EDUCATOR, B.A.', role: 'EXECUTIVE BOARD MEMBER' },
];

export const About_3: React.FC = () => {
	return (
		<section className="relative overflow-hidden px-4 md:px-8 py-5 md:py-10">
			<div className="relative mx-auto p-3 md:p-6 backdrop-blur-sm rounded-lg">
				<div className="absolute w-full h-full bg-white/10 rotate-12 left-1/2 -top-52 -z-10" />
				<div className="absolute w-full h-full bg-white/5 rotate-12 left-1/2 -top-24 -z-10" />

				<h2 className="relative z-10 text-center font-extrabold tracking-wider text-2xl md:text-3xl lg:text-4xl mb-12 text-gray-900">
					Board of Directors
				</h2>

				<div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{directors.map((director, index) => (
						<div
							key={index}
							className="group bg-white/50 backdrop-blur-md hover:bg-white/70 transition-all duration-300 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1"
						>
							<div className='flex w-full h-full rounded-3xl overflow-hidden'>
								<div className="w-[50%] h-full bg-gradient-to-br from-rose-600 to-rose-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
									{director.name.charAt(0)}
								</div>
								<div className="w-[50%] flex flex-col items-center justify-center p-2 md:p-4 py-6 md:py-8 text-center space-y-4">
									<h3 className="font-bold text-base md:text-lg text-gray-900 leading-tight">
										{director.name}
									</h3>

									<div className="w-12 h-0.5 bg-amber-600" />

									<p className="text-sm md:text-base uppercase tracking-wider text-gray-600 font-medium">
										{director.role}
									</p>

									<div className="flex gap-4 text-[28px] text-[tomato]">
										<Facebook className="fab fa-facebook cursor-pointer hover:scale-110 transition" />
										<Twitter className="fab fa-twitter cursor-pointer hover:scale-110 transition" />
										<Globe className="fab fa-google-plus cursor-pointer hover:scale-110 transition" />
										<Linkedin className="fab fa-linkedin cursor-pointer hover:scale-110 transition" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};


const partners = [
	{ name: 'JP Morgan Chase', img: 'assets/img/Chase_logo.png' },
	{ name: 'Encompass Health', img: 'assets/img/Encompass_Health_logo.png' },
	{ name: 'Accra Psychiatric Hospital', img: 'assets/img/Accra_Psych_Hospital_logo.jpg' },
	{ name: 'ReMax', img: 'assets/img/ReMax_png_logo.jpg' },
	{ name: 'Cheryl Williamson', img: 'assets/img/Cheryl_Williams_logo.png' },
	{ name: 'Shama District Assembly', img: 'assets/img/Shama_District_Logo.jpg' },
	{ name: 'Ghana Health Services', img: 'assets/img/Ghana_Health_Services_Logo.jpg' },
	{ name: 'Volta River Authority', img: 'assets/img/VRA.png' },
	{ name: 'Starbucks', img: 'assets/img/Starbucks.jpg' },
	{ name: 'Costco', img: 'assets/img/Costco.png' },
	{ name: 'Nothing Bundt Cakes', img: 'assets/img/Nothing_bunt_cakes.png' },
];

export const CommunityPartners: React.FC = () => {
	return (
		<section className="relative overflow-hidden ">
			<div className="relative mx-auto overflow-hidden py-12 md:py-16 px-6 md:px-12 bg-gradient-to-br from-gray-50/90 to-stone-100/90 backdrop-blur-sm shadow-2xl rounded-lg">
				{/* <div className="absolute w-full h-[200%] bg-black/5 rotate-12 left-1/2 -top-52 -z-10" />
				<div className="absolute w-full h-[200%] bg-black/5 rotate-12 left-1/2 -top-24 -z-10" /> */}

				<div className="relative z-10">
					<h2 className="text-center uppercase tracking-widest font-bold text-2xl md:text-3xl lg:text-4xl mb-12 md:mb-16 text-gray-900">
						Our Community Partners & Sponsors
					</h2>

					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 mb-12 md:mb-16">
						{partners.map((partner, index) => (
							<div
								key={index}
								className="group flex flex-col items-center justify-center text-center space-y-3 transition-transform duration-300 hover:scale-105"
							>
								<div className="w-full h-20 md:h-24 flex items-center justify-center p-2 bg-white rounded-3xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
									<img
										src={partner.img}
										alt={partner.name}
										className="max-h-full max-w-full object-contain"
									/>
								</div>
								<p className="text-xs md:text-sm tracking-wide font-medium text-gray-700">
									{partner.name}
								</p>
							</div>
						))}
					</div>

					<div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg">
						<p className="text-center tracking-wide leading-relaxed text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
							We are not able to do the work that we do to rebuild the communities we serve without our
							community partners and sponsors. If you are interested in becoming one of our community
							partners or sponsors contact us at:
						</p>

						<div className="flex justify-center mt-6">
							<a
								href="mailto:info@roseofjericho-cd.org"
								className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all duration-300 hover:scale-105 shadow-lg font-medium"
							>
								<Mail className="w-5 h-5" />
								info@roseofjericho-cd.org
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
