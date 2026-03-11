'use client';

import { Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Blog'],
  Company: ['About', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'API', 'Community', 'Support'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'License'],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 bg-background/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        {/* Main footer content */}
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold">✨</span>
              </div>
              <span className="text-lg font-bold text-foreground">Nexus</span>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Premium digital solutions crafted with luxury and precision.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 glass rounded-lg hover:bg-primary/20 transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-foreground/60 group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/10 my-8" />

        {/* Bottom footer */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-sm text-foreground/60">
              © 2024 Nexus. All rights reserved.
            </p>
            <p className="text-xs text-foreground/50">
              Crafted with elegance and precision for the modern era.
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 sm:justify-end">
            <a
              href="mailto:hello@nexus.com"
              className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>hello@nexus.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl -z-10" />
    </footer>
  );
}
