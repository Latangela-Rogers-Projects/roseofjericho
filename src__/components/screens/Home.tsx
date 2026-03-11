import { useState, useEffect, useRef, useCallback } from 'react';
import {
	ChevronLeft,
	ChevronRight,
	Heart,
	PiggyBank,
	Sprout,
	Award,
	PlayCircle,
	Mail,
	Menu,
	X, Pause, Play, ArrowRight, CheckCircle,
	Users,
	Zap,
	Globe,
	Quote
} from 'lucide-react';

function App() {
	const [activeSlide, setActiveSlide] = useState(0);
	const [activeTab, setActiveTab] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const slides = [
		{
			image: 'assets/img/218036353_146968374201847_1134335439513124336_n.jpg',
			title: 'OUR MISSION',
			subtitle: 'EMPOWER',
			description: 'Empowering Communities. Removing Stigma. Ending Poverty.',
		},
		{
			image: 'assets/img/241182659_1447218092325649_729760777811111968_n.jpg',
			title: 'Hearts For Wellness',
			subtitle: 'Clean Water Project',
			description: '',
			cta: 'Donate Now',
			ctaLink: 'https://www.paypal.me/roseofjerichocd?locale.x=en_US',
		},
		{
			image: 'assets/img/about.png',
			title: '',
			subtitle: 'Hearts For Missions',
			description: 'Our mission trip\'s core focus is to contribute to the health care infrastructure by improving upon health care delivery.',
		},
	];

	const services = [
		{
			id: 1,
			title: '2023 Ghana Medical Mission',
			description: 'Operation "Heal the Land" - Providing essential healthcare services to underserved communities in Ghana.',
			image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1920',
			ctaText: 'Sign Up',
			ctaLink: '#signup',
		},
		{
			id: 2,
			title: 'Volunteer Opportunities',
			description: 'A great way to connect with your community is by volunteering your time and talents for one of our community projects or events.',
			image: 'https://images.pexels.com/photos/3759656/pexels-photo-3759656.jpeg?auto=compress&cs=tinysrgb&w=1920',
			ctaText: 'Learn More',
			ctaLink: '#volunteer',
		},
		{
			id: 3,
			title: 'Make a Donation',
			description: 'Your tax-deductible donation will help to build, stabilize, and strengthen the local communities that we serve.',
			image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920',
			ctaText: 'Donate Now',
			ctaLink: 'https://www.paypal.me/roseofjerichocd?locale.x=en_US',
		},
	];
	const missionPoints = [
		'Community engagement and revitalization',
		'Economic development opportunities',
		'Vocational and professional development',
		'Life skills training and education',
	];

	const stats = [
		{ icon: <Globe className="w-5 h-5 lg:w-8 lg:h-8" />, value: '15+', label: 'Communities Served' },
		{ icon: <Heart className="w-5 h-5 lg:w-8 lg:h-8" />, value: '256', label: 'Active Volunteers' },
		{ icon: <Sprout className="w-5 h-5 lg:w-8 lg:h-8" />, value: '86', label: 'Campaigns' },
		{ icon: <Award className="w-5 h-5 lg:w-8 lg:h-8" />, value: '22', label: 'Awards' },
	];

	// const stats = [
	// 	{ icon: Heart, value: '256', label: 'Volunteers' },
	// 	{ icon: PiggyBank, value: '$10,000', label: 'Donations' },
	// 	{ icon: Sprout, value: '86', label: 'Campaigns' },
	// 	{ icon: Award, value: '22', label: 'Awards' },
	// ];

	const programs = [
		{
			title: 'COMMUNITY FEEDINGS',
			content:
				'Millions of people face hunger on a daily basis. Hunger can happen to anyone, at any time. Hunger increases the risk of chronic diseases. Our feeding program provides nutritious meals to women and children. Our 2023 initiative is to provide fresh food to families in Temecula, CA and 10,000 meals to women in children in the Western Region of Ghana.',
		},
		{
			title: 'LIFE SKILL TRAINING',
			content:
				'Our life skills training program provides curriculum addressing social, psychological, cognitive, and attitudinal factors associated with mental health. Our primary objective is to enhance the development of basic life skills, personal competence, and skills related to resistance to social influences that promote mental illnesses.',
		},
		{
			title: 'COMMUNITY MENTAL HEALTH SERVICES',
			content:
				'Mental health is a critical concern across the globe. The prevalence of mental disorders is increasing at an alarming rate, particularly among young people. Our mental health program provides mental health education, community mental health clubs, and community mental health awareness activities.',
		},
	];

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		startSlideshow();
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, []);

	const startSlideshow = () => {
		if (intervalRef.current) clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setActiveSlide((prev) => (prev + 1) % slides.length);
		}, 8000);
	};

	const handleSlideChange = (direction: 'prev' | 'next') => {
		if (intervalRef.current) clearInterval(intervalRef.current);
		setActiveSlide((prev) =>
			direction === 'next'
				? (prev + 1) % slides.length
				: prev === 0
					? slides.length - 1
					: prev - 1
		);
		startSlideshow();
	};

	return (
		<div className="min-h-screen bg-white">
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md' : 'bg-transparent'
					}`}
			>
				<nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center">
							<Heart className="w-6 h-6 text-white" fill="white" />
						</div>
						<span
							className={`font-bold text-lg transition-colors ${scrollY > 50 ? 'text-gray-900' : 'text-white'
								}`}
						>
							Rose of Jericho
						</span>
					</div>

					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className={`lg:hidden transition-colors ${scrollY > 50 ? 'text-gray-900' : 'text-white'
							}`}
					>
						{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>

					<div className="hidden lg:flex items-center gap-8">
						{['About', 'Programs', 'Impact', 'Partners', 'Contact'].map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className={`font-medium transition-colors hover:text-rose-600 ${scrollY > 50 ? 'text-gray-700' : 'text-white'
									}`}
							>
								{item}
							</a>
						))}
						<a
							href="https://www.paypal.me/roseofjerichocd?locale.x=en_US"
							className="px-6 py-2 bg-rose-600 text-white rounded-full font-medium hover:bg-rose-700 transition-colors"
						>
							Donate
						</a>
					</div>
				</nav>

				{isMenuOpen && (
					<div className="lg:hidden bg-white border-t">
						<div className="px-6 py-4 flex flex-col gap-4">
							{['About', 'Programs', 'Impact', 'Partners', 'Contact'].map((item) => (
								<a
									key={item}
									href={`#${item.toLowerCase()}`}
									className="text-gray-700 font-medium hover:text-rose-600 transition-colors"
									onClick={() => setIsMenuOpen(false)}
								>
									{item}
								</a>
							))}
							<a
								href="https://www.paypal.me/roseofjerichocd?locale.x=en_US"
								className="px-6 py-2 bg-rose-600 text-white rounded-full font-medium hover:bg-rose-700 transition-colors text-center"
							>
								Donate
							</a>
						</div>
					</div>
				)}
			</header>

			{/* <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105 animate-[ken-burns_20s_ease-in-out_infinite]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === activeSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8 absolute'
                  }`}
                >
                  <h2 className="text-rose-400 font-semibold text-lg mb-4 tracking-wider">
                    {slide.title}
                  </h2>
                  <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.subtitle}
                  </h1>
                  {slide.description && (
                    <p className="text-xl text-gray-200 mb-8">{slide.description}</p>
                  )}
                  {slide.cta && (
                    <a
                      href={slide.ctaLink}
                      className="inline-block px-8 py-4 bg-rose-600 text-white rounded-full font-medium hover:bg-rose-700 transition-all hover:scale-105"
                    >
                      {slide.cta}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => handleSlideChange('prev')}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => handleSlideChange('next')}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveSlide(index);
                if (intervalRef.current) clearInterval(intervalRef.current);
                startSlideshow();
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section> */}

			<HeroCarousel slides={slides} />

			<section className="py-24 px-6 bg-white" id="about">
				<div className="max-w-7xl mx-auto">
					<div className="mb-20 text-center space-y-4">
						<h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
							Connect with those in need
						</h2>
						<p className="text-xl text-neutral-600 max-w-2xl mx-auto">
							Multiple ways to make a meaningful difference in our communities
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{services.map((service) => (
							<div
								key={service.id}
								className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:shadow-2xl"
							>
								<div className="relative h-96 overflow-hidden">
									<img
										src={service.image}
										alt={service.title}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/40 to-transparent" />
								</div>

								<div className="absolute inset-0 flex flex-col justify-end p-8">
									<div className="space-y-4">
										<div className="space-y-2">
											<h3 className="text-2xl font-bold text-white leading-tight group-hover:translate-y-0 md:translate-y-20 transition-all duration-500">
												{service.title}
											</h3>
											<div className="w-12 h-1 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full transition-all duration-700 group-hover:w-16 group-hover:translate-y-0 md:translate-y-20" />
										</div>

										<p className="text-neutral-200 text-sm leading-relaxed md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
											{service.description}
										</p>

										<a
											href={service.ctaLink}
											className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-600 to-orange-600 text-white rounded-full font-semibold hover:from-rose-700 hover:to-orange-700 transition-all hover:scale-105 active:scale-95 md:opacity-0 group-hover:opacity-100 group-hover:translate-y-0 md:translate-y-2 transition-all duration-500"
										>
											{service.ctaText}
											<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 px-6 bg-neutral-50">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="relative overflow-hidden rounded-3xl shadow-2xl h-96 lg:h-full min-h-96">
							<img
								src="https://images.pexels.com/photos/3932500/pexels-photo-3932500.jpeg?auto=compress&cs=tinysrgb&w=1920"
								alt="Our Mission"
								className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-tr from-rose-900/40 via-transparent to-transparent" />
						</div>

						<div className="space-y-8">
							<div className="space-y-4">
								<h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">
									Our Mission
								</h2>
								<div className="w-16 h-1.5 bg-gradient-to-r from-rose-600 to-orange-600 rounded-full" />
							</div>

							<div className="space-y-3">
								<h3 className="text-2xl font-bold text-rose-600">
									Rose of Jericho Community Development Center
								</h3>
								<p className="text-neutral-600 font-medium">
									A recognized 501(c)3 nonprofit organization
								</p>
							</div>

							<p className="text-neutral-700 leading-relaxed text-lg">
								ROJCD serves as a grassroots community organization dedicated to being an anchor in many of the local and surrounding communities of Riverside County and Accra, Ghana. We have a social responsibility to provide services that promote community engagement and revitalization.
							</p>

							<div className="space-y-3 pt-4">
								{missionPoints.map((point, index) => (
									<div key={index} className="flex items-start gap-4 group">
										<div className="mt-1 transition-all duration-300 group-hover:scale-110">
											<CheckCircle className="w-6 h-6 text-rose-600 flex-shrink-0" />
										</div>
										<span className="text-neutral-700 font-medium text-lg">{point}</span>
									</div>
								))}
							</div>

							<button className="mt-8 px-8 py-4 bg-gradient-to-r from-rose-600 to-orange-600 text-white rounded-full font-semibold hover:from-rose-700 hover:to-orange-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-rose-600/30">
								Read Our Full Story
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-10 px-6 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800" id="impact">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<div
								key={index}
								className="group relative h-full"
							>
								<div className=" h-full absolute inset-0 bg-gradient-to-br from-rose-600/20 to-orange-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

								<div className=" h-full relative bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8 transition-all duration-500 group-hover:border-rose-500/50 group-hover:bg-neutral-800/80">
									<div className="mb-6 inline-flex items-center justify-center w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-br from-rose-600 to-orange-600 rounded-xl text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 shadow-lg shadow-rose-600/20">
										{stat.icon}
									</div>

									<h3 className="text-4xl font-bold text-white mb-2 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:to-orange-400">
										{stat.value}
									</h3>
									<p className="text-neutral-300 font-medium text-sm md:text-sm lg:text-lg">{stat.label}</p>

									<div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-rose-600 to-orange-600 rounded-full w-0 group-hover:w-full transition-all duration-500" />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-rose-600 to-red-700">
				<div className="max-w-6xl mx-auto">
					<div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
						<div className="animate-fade-in">
							<img
								src="assets/img/Chase_logo.png"
								alt="Chase Logo"
								className="h-12 mx-auto mb-6 object-contain"
							/>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
								Chase Educational Courses
							</h2>
						</div>

						<div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
							<div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-6 text-left transform transition-all duration-300 hover:bg-white/15 hover:shadow-lg">
								<p className="text-white leading-relaxed text-sm md:text-base">
									We have been afforded the opportunity to partner with Chase to host the
									Advancing Black Entrepreneurs Educational Courses.
								</p>
								<p className="text-white/90 mt-4 leading-relaxed text-sm md:text-base">
									Advancing Black Entrepreneurs by Chase for Business is partnering with Black
									Enterprise, the National Urban League, the U.S. Black Chambers, the National
									Minority Supplier Development Council, and the Boss Network to help Black-owned
									businesses grow and scale.
								</p>
							</div>
							<div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-6 text-left transform transition-all duration-300 hover:bg-white/15 hover:shadow-lg">
								<p className="text-white leading-relaxed text-sm md:text-base">
									Together, we've created an educational program specifically for Black business
									owners on topics that are vital to business growth and sustainability. These
									90-minute guided sessions are focused on how business owners can address
									immediate and long-term financial needs and build resiliency.
								</p>
								<p className="text-white mt-4 font-semibold text-sm md:text-base">
									Virtual Sessions begin February 23, 2023
								</p>
							</div>
						</div>

						<button
							className="px-6 md:px-8 py-3 bg-white text-rose-700 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
							aria-label="Sign up for Chase Educational Courses"
						>
							Click to sign up
						</button>
					</div>
				</div>
			</section>

			<section className="py-20 md:py-28 px-4 sm:px-6">
				<div className="max-w-7xl mx-auto">
					<div className="relative overflow-hidden rounded-3xl md:rounded-4xl shadow-2xl group">
						<img
							src="assets/img/210359805_197443675659069_4710153733879046348_n.jpg"
							alt="Community members receiving support"
							className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-br from-red-900/85 via-cyan-900/75 to-rose-900/85 group-hover:from-red-900/80 transition-all duration-500" />
						<div className="relative p-8 sm:p-12 lg:p-20 text-center">
							<div className="animate-fade-in">
								<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
									OUR IMPACT
								</h2>
								<div className="flex items-center justify-center gap-4 mb-10">
									<div className="flex-1 h-1 bg-gradient-to-r from-transparent to-red-400" />
									<div className="w-2 h-2 bg-red-400 rounded-full" />
									<div className="flex-1 h-1 bg-gradient-to-l from-transparent to-red-400" />
								</div>
								<p className="text-lg md:text-xl text-gray-50 max-w-4xl mx-auto leading-relaxed mb-10">
									ROJCD is committed to delivering sustainable economic growth and poverty reduction
									within the local communities we serve.
								</p>

								<div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-10 max-w-3xl mx-auto">
									<div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 transform hover:scale-110 transition-transform duration-300">
										<div className="text-3xl md:text-4xl font-bold text-white mb-2">7</div>
										<p className="text-white/80 text-sm">Total Phases</p>
										<p className="text-white/70 text-xs">5-Year Plan</p>
									</div>
									<div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 transform hover:scale-110 transition-transform duration-300">
										<div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
										<p className="text-white/80 text-sm">Women & Children</p>
										<p className="text-white/70 text-xs">Community Feeding</p>
									</div>
									<div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/20 transform hover:scale-110 transition-transform duration-300">
										<div className="text-3xl md:text-4xl font-bold text-white mb-2">400+</div>
										<p className="text-white/80 text-sm">Adults Served</p>
										<p className="text-white/70 text-xs">Medical Missions</p>
									</div>
								</div>

								<button
									className="px-8 md:px-10 py-3 md:py-4 bg-white text-red-900 rounded-full font-bold md:text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-95"
									aria-label="Read more about our impact"
								>
									Read More
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="py-16 md:py-24 px-4 sm:px-6" id="partners">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16">
						Our Community Partners & Sponsors
					</h2>

					<div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-11 xl:grid-cols-11 gap-4 md:gap-6 mb-12">
						{[
							{ src: 'assets/img/Chase_logo.png', name: 'Chase' },
							{ src: 'assets/img/Encompass_Health_logo.png', name: 'Encompass Health' },
							{ src: 'assets/img/Accra_Psych_Hospital_logo.jpg', name: 'Accra Psychiatric Hospital' },
							{ src: 'assets/img/ReMax_png_logo.jpg', name: 'ReMax' },
							{ src: 'assets/img/Cheryl_Williams_logo.png', name: 'Cheryl Williams' },
							{ src: 'assets/img/Shama_District_Logo.jpg', name: 'Shama District' },
							{ src: 'assets/img/Ghana_Health_Services_Logo.jpg', name: 'Ghana Health Services' },
							{ src: 'assets/img/VRA.png', name: 'VRA' },
							{ src: 'assets/img/Starbucks.jpg', name: 'Starbucks' },
							{ src: 'assets/img/Costco.png', name: 'Costco' },
							{ src: 'assets/img/Nothing_bunt_cakes.png', name: 'Nothing Bundt Cakes' },
						].map((partner, index) => (
							<div
								key={index}
								className="aspect-square bg-white rounded-xl shadow-md p-4 md:p-2 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
								style={{ animationDelay: `${index * 50}ms` }}
							>
								<img
									src={partner.src}
									alt={partner.name}
									className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
								/>
							</div>
						))}
					</div>

					<p className="text-center text-gray-600 max-w-4xl mx-auto leading-relaxed text-sm sm:text-base">
						We are not able to do the work that we do to rebuild the communities we serve
						without our community partners and sponsors. If you are interested in becoming one
						of our community partners or sponsors contact us by sending an email at{' '}
						<a
							href="mailto:info@roseofjericho-cd.org"
							className="text-rose-600 hover:text-rose-700 font-medium transition-colors duration-200 underline decoration-rose-300 hover:decoration-rose-600"
						>
							info@roseofjericho-cd.org
						</a>
					</p>
				</div>
			</section>

			<section className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
				<img
					src="assets/img/210359805_197443675659069_4710153733879046348_n.jpg"
					alt=""
					className="absolute inset-0 w-full h-full object-cover"
					aria-hidden="true"
				/>
				<div className="absolute inset-0 bg-gray-900/80" />
				<div className="relative max-w-4xl mx-auto text-center">
					<div className="bg-rose-900/50 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 sm:p-12 shadow-2xl transform transition-all duration-500 hover:scale-105">
						<Quote className="w-12 h-12 md:w-16 md:h-16 text-rose-400 mx-auto mb-6 opacity-50" aria-hidden="true" />
						<blockquote>
							<p className="text-xl sm:text-2xl text-white leading-relaxed italic mb-6">
								"Powerful and sustained change requires constant communication, not only
								throughout the rollout but after the major elements of the plan are in place. The
								more kinds of communication employed, the more effective they are."
							</p>
							<footer>
								<cite className="text-lg md:text-xl text-rose-400 font-semibold not-italic">
									DeAnne Aguirre
								</cite>
							</footer>
						</blockquote>
					</div>
				</div>
			</section>

			<section className="py-20 md:py-28 px-4 sm:px-6">
				<div className="max-w-7xl mx-auto">
					<div className="relative overflow-hidden rounded-3xl md:rounded-4xl shadow-2xl group">
						<img
							src="assets/img/WELLNESS_WOMEN.jpg"
							alt="Women receiving wellness care"
							className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-rose-950/95 via-rose-900/60 to-transparent group-hover:from-rose-950/90 transition-all duration-500" />
						<div className="relative py-24 sm:py-32 md:py-40 px-6 sm:px-12 lg:px-16 text-center">
							<div className="max-w-4xl mx-auto animate-fade-in">
								<div className="inline-block mb-6 px-4 py-2 bg-rose-500/20 backdrop-blur-sm rounded-full border border-rose-400/30">
									<span className="text-rose-200 text-sm font-semibold tracking-wider">Coming Soon</span>
								</div>
								<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight">
									The Women's Center Building Project
								</h2>
								<div className="w-16 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-8" />
								<p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
									We are building a state-of-the-art wellness center where women can receive compassionate,
									first-class care in a safe and nurturing environment.
								</p>

								<div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-10 max-w-2xl mx-auto">
									<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
										<div className="text-2xl mb-2">✓</div>
										<p className="text-white/90 text-sm font-medium">Wellness Checks</p>
									</div>
									<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
										<div className="text-2xl mb-2">✓</div>
										<p className="text-white/90 text-sm font-medium">Mental Health Care</p>
									</div>
									<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
										<div className="text-2xl mb-2">✓</div>
										<p className="text-white/90 text-sm font-medium">Health Education</p>
									</div>
								</div>

								<button
									className="px-8 md:px-10 py-4 bg-white text-rose-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-95"
									aria-label="Read more about the Women's Center Building Project"
								>
									Read More
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-3 md:py-4 px-4 sm:px-6 bg-gray-50" id="programs">
				<div className="max-w-7xl mx-auto text-center">
					<div className="relative p-8 text-center">
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
							OUR PROGRAMS
						</h2>
						<div className="w-24 h-1 bg-cyan-400 mx-auto mb-6 md:mb-8 rounded-full" />
						<p className="text-base sm:text-lg text-gray-900 max-w-4xl mx-auto leading-relaxed">
							Rose of Jericho Community Development (ROJCD) has a social responsibility to
							provide services that promote community engagement and revitalization through
							economic development, life skills training and development, mental health
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
						{programs.map((program, index) => (
							<div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl mb-2 group">
								<img
									src="assets/img/210332277_3612565248969229_2735237555521414950_n.jpg"
									alt="Community programs in action"
									className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-red-900/80 to-rose-900/90" />
								<div className="relative p-8 sm:p-12 lg:p-20 text-center">
									<h2 className="text-lg sm:text-xl font-bold text-white mb-4">
										{program.title}
									</h2>
									<div className="w-24 h-1 bg-cyan-400 mx-auto mb-2 md:mb-2 rounded-full" />
									<p className="text-sm sm:text-md text-gray-100 max-w-4xl mx-auto leading-relaxed mb-8">
										{program.content}
									</p>
								</div>
							</div>
						))}
					</div>

					<button
						className="px-6 md:px-8 py-3 my-4 bg-white text-cyan-900 rounded-full shadow-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
						aria-label="Read more about our programs"
					>
						Read More
					</button>
				</div>
			</section>

			<footer className="bg-gray-900 text-white py-16 px-6" id="contact">
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-3 gap-12 mb-12">
						<div>
							<div className="flex items-center gap-2 mb-4">
								<div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center">
									<Heart className="w-6 h-6 text-white" fill="white" />
								</div>
								<span className="font-bold text-lg">Rose of Jericho</span>
							</div>
							<p className="text-gray-400 leading-relaxed">
								Empowering communities, removing stigma, and ending poverty through dedicated
								service and development.
							</p>
						</div>

						<div>
							<h3 className="font-bold text-lg mb-4">Quick Links</h3>
							<div className="flex flex-col gap-2">
								{['About', 'Programs', 'Impact', 'Partners', 'Contact'].map((item) => (
									<a
										key={item}
										href={`#${item.toLowerCase()}`}
										className="text-gray-400 hover:text-rose-400 transition-colors"
									>
										{item}
									</a>
								))}
							</div>
						</div>

						<div>
							<h3 className="font-bold text-lg mb-4">Contact Us</h3>
							<a
								href="mailto:info@roseofjericho-cd.org"
								className="flex items-center gap-2 text-gray-400 hover:text-rose-400 transition-colors"
							>
								<Mail className="w-5 h-5" />
								info@roseofjericho-cd.org
							</a>
						</div>
					</div>

					<div className="border-t border-gray-800 pt-8 text-center">
						<p className="text-gray-400">
							© {new Date().getFullYear()} Rose of Jericho Community Development Center. All
							rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;



<section className="py-20 px-6 bg-gray-50">
	<div className="max-w-7xl mx-auto">
		<div className="relative overflow-hidden rounded-3xl shadow-lg bg-black">
			<video
				controls
				className="w-full aspect-video"
				poster="assets/img/210359805_197443675659069_4710153733879046348_n.jpg"
			>
				<source src="assets/img/Ghana_Clean_Water_Project.mp4" type="video/mp4" />
			</video>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
				<PlayCircle className="w-20 h-20 text-white opacity-70" />
			</div>
		</div>
	</div>
</section>

interface Slide {
	image: string;
	title: string;
	subtitle: string;
	description?: string;
	cta?: string;
	ctaLink?: string;
}

interface HeroCarouselProps {
	slides: Slide[];
	autoPlayInterval?: number;
}

function HeroCarousel({ slides, autoPlayInterval = 3000 }: HeroCarouselProps) {
	const [activeSlide, setActiveSlide] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const [direction, setDirection] = useState<'next' | 'prev'>('next');
	const intervalRef = useRef<number | null>(null);
	const containerRef = useRef<HTMLElement>(null);

	const startSlideshow = useCallback(() => {
		if (intervalRef.current) clearInterval(intervalRef.current);
		intervalRef.current = window.setInterval(() => {
			setDirection('next');
			setActiveSlide((prev) => (prev + 1) % slides.length);
		}, autoPlayInterval);
	}, [slides.length, autoPlayInterval]);

	const handleSlideChange = useCallback((dir: 'next' | 'prev') => {
		setDirection(dir);
		setActiveSlide((prev) => {
			if (dir === 'next') {
				return (prev + 1) % slides.length;
			}
			return prev === 0 ? slides.length - 1 : prev - 1;
		});

		if (isPlaying) {
			startSlideshow();
		}
	}, [slides.length, isPlaying, startSlideshow]);

	const togglePlayPause = useCallback(() => {
		setIsPlaying((prev) => !prev);
		if (!isPlaying) {
			startSlideshow();
		} else if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	}, [isPlaying, startSlideshow]);

	const goToSlide = useCallback((index: number) => {
		setDirection(index > activeSlide ? 'next' : 'prev');
		setActiveSlide(index);
		if (isPlaying) {
			startSlideshow();
		}
	}, [activeSlide, isPlaying, startSlideshow]);

	useEffect(() => {
		if (isPlaying) {
			startSlideshow();
		}
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [isPlaying, startSlideshow]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') {
				handleSlideChange('prev');
			} else if (e.key === 'ArrowRight') {
				handleSlideChange('next');
			} else if (e.key === ' ') {
				e.preventDefault();
				togglePlayPause();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [handleSlideChange, togglePlayPause]);

	const handleMouseEnter = () => {
		if (isPlaying && intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	};

	const handleMouseLeave = () => {
		if (isPlaying) {
			startSlideshow();
		}
	};

	return (
		<section
			ref={containerRef}
			className="relative h-screen overflow-hidden bg-neutral-900"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			role="region"
			aria-roledescription="carousel"
			aria-label="Hero carousel"
		>
			{slides.map((slide, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === activeSlide
						? 'opacity-100 scale-100 z-10'
						: index === activeSlide - 1 || (activeSlide === 0 && index === slides.length - 1)
							? 'opacity-0 scale-95 z-0'
							: 'opacity-0 scale-105 z-0'
						}`}
					aria-hidden={index !== activeSlide}
				>
					<div className="absolute inset-0 overflow-hidden">
						<img
							src={slide.image}
							alt=""
							className={`w-full h-full object-cover transition-transform duration-[20s] ease-linear ${index === activeSlide ? 'scale-110' : 'scale-100'
								}`}
							style={{
								animation: index === activeSlide ? 'ken-burns 20s ease-in-out infinite alternate' : 'none',
							}}
						/>
					</div>

					<div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-transparent" />

					<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent" />
				</div>
			))}

			<div className="relative h-full flex items-center z-20 justify-center">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center backdrop-blur-lg w-[80%] h-[50%] rounded-3xl bg-white/20 p-5">
					<div className="flex items-center justify-center overflow-hidden w-full bg-transparent">
						{slides.map((slide, index) => (
							<div
								key={index}
								className={`transition-all duration-700 ease-out ${index === activeSlide
									? 'opacity-100 translate-y-0 translate-x-0'
									: direction === 'next'
										? 'opacity-0 -translate-x-12 absolute pointer-events-none'
										: 'opacity-0 translate-x-12 absolute pointer-events-none'
									}`}
							>
								<div className="space-y-6">
									<div className="overflow-hidden">
										<h2
											className={`text-rose-400 font-semibold text-sm lg:text-base uppercase tracking-[0.2em] transition-all duration-700 delay-100 ${index === activeSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
												}`}
										>
											{slide.title}
										</h2>
									</div>

									<div className="overflow-hidden">
										<h1
											className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight transition-all duration-700 delay-200 ${index === activeSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
												}`}
										>
											{slide.subtitle}
										</h1>
									</div>

									{slide.description && (
										<div className="overflow-hidden">
											<p
												className={`text-lg lg:text-xl text-neutral-200 leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${index === activeSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
													}`}
											>
												{slide.description}
											</p>
										</div>
									)}

									{slide.cta && (
										<div
											className={`transition-all duration-700 delay-500 ${index === activeSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
												}`}
										>
											<a
												href={slide.ctaLink || '#'}
												className="group inline-flex items-center gap-3 px-8 py-4 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/50 active:scale-95"
											>
												{slide.cta}
												<ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
											</a>
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<button
				onClick={() => handleSlideChange('prev')}
				className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 active:scale-95 transition-all shadow-xl"
				aria-label="Previous slide"
			>
				<ChevronLeft className="w-6 h-6" />
			</button>

			<button
				onClick={() => handleSlideChange('next')}
				className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 active:scale-95 transition-all shadow-xl"
				aria-label="Next slide"
			>
				<ChevronRight className="w-6 h-6" />
			</button>

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
				<button
					onClick={togglePlayPause}
					className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
					aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
				>
					{isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
				</button>

				<div className="flex gap-2 bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`relative h-2 rounded-full transition-all overflow-hidden ${index === activeSlide ? 'bg-white w-12' : 'bg-white/40 w-2 hover:bg-white/60'
								}`}
							aria-label={`Go to slide ${index + 1}`}
							aria-current={index === activeSlide}
						>
							{index === activeSlide && isPlaying && (
								<div
									className="absolute inset-0 bg-white/40 origin-left animate-progress"
									style={{ animationDuration: `${autoPlayInterval}ms` }}
								/>
							)}
						</button>
					))}
				</div>
			</div>

			<style>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1.1) translate(0, 0);
          }
          50% {
            transform: scale(1.15) translate(-2%, -1%);
          }
          100% {
            transform: scale(1.1) translate(0, 0);
          }
        }

        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-progress {
          animation: progress linear forwards;
        }
      `}</style>
		</section>
	);
}
