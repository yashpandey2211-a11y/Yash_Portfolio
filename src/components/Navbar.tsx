import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'nav-link-about' },
    { name: 'Skills', href: '#skills', id: 'nav-link-skills' },
    { name: 'Projects', href: '#projects', id: 'nav-link-projects' },
    { name: 'Certifications', href: '#certifications', id: 'nav-link-certifications' },
    { name: 'Contact', href: '#contact', id: 'nav-link-contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200 py-3'
          : 'bg-[#FAFAFA]/90 backdrop-blur-xs border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Top Left Anchor */}
        <a
          id="navbar-brand-logo"
          href="#hero"
          className="group flex items-center gap-3 text-slate-900 font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] rounded-lg p-1"
        >
          <span
            id="navbar-monogram-badge"
            className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-base tracking-tight shadow-xs group-hover:bg-blue-700 transition-colors"
          >
            YP
          </span>
          <div className="flex flex-col">
            <span id="navbar-brand-name" className="text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#2563EB] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span id="navbar-brand-tag" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              CS & AIML
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-2 bg-[#F1F5F9] p-1.5 rounded-full border border-slate-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-white text-[#2563EB] font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Action Buttons */}
        <div id="desktop-nav-actions" className="hidden md:flex items-center gap-3">
          <a
            id="nav-social-github"
            href={https://github.com/yashpandey2211-a11y}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-[#F1F5F9] transition-colors border border-slate-200"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            id="nav-social-linkedin"
            href={https://www.linkedin.com/in/yash-pandey-577106381/}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-slate-600 hover:text-[#2563EB] hover:bg-[#F1F5F9] transition-colors border border-slate-200"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            id="nav-cta-contact-btn"
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm transition-all duration-150 shadow-xs hover:shadow-md active:scale-98"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            id="mobile-nav-cta-quick"
            href="#contact"
            className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-semibold"
          >
            Contact
          </a>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl bg-[#F1F5F9] text-slate-800 hover:bg-slate-200 transition-colors border border-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={`mobile-${link.id}`}
                id={`mobile-${link.id}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:bg-[#F1F5F9] hover:text-[#2563EB] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                id="mobile-drawer-github"
                href={https://github.com/yashpandey2211-a11y}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#F1F5F9] text-slate-800 hover:text-slate-900 border border-slate-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                id="mobile-drawer-linkedin"
                href={https://www.linkedin.com/in/yash-pandey-577106381/}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#F1F5F9] text-slate-800 hover:text-[#2563EB] border border-slate-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              id="mobile-drawer-email"
              href={PERSONAL_INFO.links.email}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] text-white font-medium text-sm hover:bg-blue-700"
            >
              <span>Email Yash</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
