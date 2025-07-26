import { useState, useEffect } from 'react';
import Link from '../Link';
import getTheme from './NavThemes';
import apiData from '../../api';

function Navbar_1({ currentPageSlug }) {
  const theme = getTheme(currentPageSlug);
  const [currentStyle, setCurrentStyle] = useState(theme[0]); // Initial style

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const newStyle = theme.find(({ range }) => scrollY >= range[0] && scrollY <= range[1]);

      if (newStyle && newStyle !== currentStyle) {
        setCurrentStyle(newStyle);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [theme, currentStyle]);

  const inlineStyle =
    currentStyle.background.startsWith('#') ||
      currentStyle.background.startsWith('rgb') ||
      currentStyle.background.startsWith('linear-gradient')
      ? { backgroundColor: currentStyle.background, background: currentStyle.background }
      : {};

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${currentStyle.background}`}
      style={inlineStyle}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link to="/" className={`text-1xl flex items-center justify-between ${currentStyle.text}`}>
            <div style={{
              background: `url(${apiData.imgUri}sample-bg4.png) center`, backgroundSize: "contain",
              height: 60, width: 60
            }}></div>
            <div>
              <p className='px-2 leading-none pt-1 font-phosphate'>
                Transformation
                <br />
                collective
              </p>
              <p className='px-2 leading-none pt-0 font-allura'>Leadership Academy</p>
            </div>
          </Link>
          <ul className="hidden md:flex space-x-8 bg-white bg-opacity-10 p-3 px-10 rounded-full">
            {['Home', 'About Us', 'Programs', 'Events', 'Resources', 'Contact'].map((item, index) => {
              const url = item.toLowerCase().replace(' ', '-');
              const currentPageSlug_ = currentPageSlug === "about" ? "about-us" : currentPageSlug;
              const active = currentPageSlug_ === url;
              return (<li className='hover:scale-95 transition-transform duration-800 ' key={index}>
                <Link to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={`${currentStyle.text}`}
                  style={{ color: active && "#FEB405", fontWeight: active && "bold" }}>
                  {item}
                </Link>
              </li>)
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar_1;



{/* <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-tc-blue">TC</Link>
          <ul className="hidden md:flex space-x-8">
            <li><Link to="/" className="text-gray-700 hover:text-tc-blue">Home</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-tc-blue">About Us</Link></li>
            <li><Link to="/programs" className="text-gray-700 hover:text-tc-blue">Programs</Link></li>
            <li><Link to="/events" className="text-gray-700 hover:text-tc-blue">Events</Link></li>
            <li><Link to="/resources" className="text-gray-700 hover:text-tc-blue">Resources</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-tc-blue">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header> */}