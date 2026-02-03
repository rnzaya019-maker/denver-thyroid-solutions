import React, { useState, useEffect } from 'react';
import { CONTENT } from '../constants';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Symptoms', href: '#symptoms' },
    { label: 'Answers', href: '#answers' },
    { label: 'Our Approach', href: '#methodology' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold text-brand-dark tracking-tight">
          Denver<span className="text-brand-teal">Thyroid</span>
        </a>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-brand-dark hover:text-brand-terracotta font-semibold transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a 
          href={CONTENT.contact.phoneHref}
          className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-white transition-all duration-200 bg-brand-terracotta rounded-full hover:bg-brand-coral shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Call {CONTENT.contact.phone}
        </a>
      </div>
    </header>
  );
};