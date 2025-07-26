import React, { useState, useEffect } from 'react';
import Link from '../Link';
import { Menu, X } from 'lucide-react';
import apiData from '../../api/api.json';

const getTheme = () => {
  const screenHeight = window.innerHeight;
  // Default theme configuration
  return [
    {
      range: [0, screenHeight * 0.2],
      background: 'bg-transparent',
      text: 'text-white'
    },
    {
      range: [screenHeight * 0.2, Infinity],
      background: 'bg-deep-purple/65 bg-gradient-to-r from-deep-purple/65 to-black/65 backdrop-blur-lg',
      text: 'text-white'
    }
  ];
};

const getTheme_resources = () => {
  const screenHeight = window.innerHeight;
  // Default theme configuration
  return [
    {
      range: [0, 40],
      background: 'bg-transparent',
      text: 'text-white'
    },
    {
      range: [40, Infinity],
      background: 'bg-deep-purple/65 bg-gradient-to-r from-deep-purple/65 to-black/65 backdrop-blur-lg',
      text: 'text-white'
    }
  ];
};

const Navbar = ({ currentPageSlug }) => {
  const screenHeight = window.innerHeight;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const bgIsWhite = currentPageSlug === "about-us" || currentPageSlug === "resources"
  const bgIsWhite = currentPageSlug === "resources"
  const theme = bgIsWhite ? getTheme_resources() : getTheme();
  const [currentStyle, setCurrentStyle] = useState(theme[0]);
  const staticBG = "bg-deep-purple/65 bg-gradient-to-r from-deep-purple/65 to-black/65 backdrop-blur-lg"

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScrollRange = bgIsWhite ? 40 : screenHeight * 0.2
      setIsScrolled(scrollY > maxScrollRange);

      const newStyle = theme.find(({ range }) =>
        scrollY >= range[0] && scrollY <= range[1]
      );

      if (newStyle && newStyle !== currentStyle) {
        setCurrentStyle(newStyle);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme, currentStyle]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Programs', path: '/programs' },
    { name: 'Events', path: '/events' },
    { name: 'Resources', path: '/resources' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 shadow-lg' : 'py-6'
      } ${isOpen ? staticBG : currentStyle.background}`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={`text-1xl flex items-center justify-between ${bgIsWhite && !isScrolled && !isOpen ? "text-deep-purple" : currentStyle.text}`}>
            <div style={{
              background: `url(${apiData.imgUri}sample-bg4.png) center`, backgroundSize: "contain",
              height: 60, width: 60
            }}></div>
            <div>
              <p className={`px-2 leading-none pt-1 font-phosphate`}>
                Transformation
                <br />
                collective
              </p>
              <p className={`px-2 leading-none pt-0 font-allura`}>Leadership Academy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className='rounded-full bg-black/5 p-2'>
              {navItems.map((item) => {
                const isActive = currentPageSlug === item.path.slice(1);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${isActive
                      ? 'text-tc-gold font-semibold'
                      : bgIsWhite && !isScrolled ? 'text-black hover:text-tc-gold' : 'text-white hover:text-tc-gold'
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <button className="ml-4 px-6 py-2 bg-tc-gold text-deep-purple rounded-lg font-semibold hover:bg-white transition-colors duration-200"
              onClick={() => window.open("https://latangela-rogers.mykajabi.com/offers/DQiq2NuL/checkout", '_blank')}>
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${bgIsWhite ? "text-deep-purple" : "text-white"} hover:text-tc-gold transition-colors`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen
          ? 'max-h-screen opacity-100 visible'
          : 'max-h-0 opacity-0 invisible'
          }`}>
          <div className="pt-4 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = currentPageSlug === item.path.slice(1);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-2 rounded-lg transition-all duration-200 ${isActive
                    ? 'text-tc-gold font-semibold bg-white/10'
                    : 'text-white hover:bg-white/5'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <button className="w-full mt-4 px-6 py-3 bg-tc-gold text-deep-purple rounded-lg font-semibold hover:bg-white transition-colors duration-200">
              Join Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;