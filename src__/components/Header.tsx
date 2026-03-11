'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3' : 'py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">✨</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Nexus
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#showcase" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            Showcase
          </a>
          <a href="#contact" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Sign In
          </button>
          <button className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-strong mt-2 mx-4 rounded-lg p-4 space-y-3">
          <a href="#features" className="block text-sm text-foreground/80 hover:text-primary transition-colors py-2">
            Features
          </a>
          <a href="#showcase" className="block text-sm text-foreground/80 hover:text-primary transition-colors py-2">
            Showcase
          </a>
          <a href="#contact" className="block text-sm text-foreground/80 hover:text-primary transition-colors py-2">
            Contact
          </a>
          <button className="w-full px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
