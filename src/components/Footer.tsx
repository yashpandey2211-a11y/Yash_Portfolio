import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      aria-label="Footer"
      className="bg-[#F1F5F9] border-t border-slate-200 py-12 text-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200 items-start">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                YP
              </div>
              <span id="footer-brand-title" className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-600 font-normal leading-relaxed max-w-sm">
              {PERSONAL_INFO.role} &bull; {PERSONAL_INFO.subHeadline}
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li>
                <a id="footer-link-about" href="#about" className="hover:text-[#2563EB] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a id="footer-link-skills" href="#skills" className="hover:text-[#2563EB] transition-colors">
                  Skills &amp; Tools
                </a>
              </li>
              <li>
                <a id="footer-link-projects" href="#projects" className="hover:text-[#2563EB] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a id="footer-link-certifications" href="https://www.credly.com/badges/e6ed7c18-f09a-4f1a-933f-09912db79c4f/public_url" className="hover:text-[#2563EB] transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a id="footer-link-contact" href="#contact" className="hover:text-[#2563EB] transition-colors">
                  Contact &amp; Reach Out
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 block">
              Direct Channels
            </span>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div>
                <a
                  id="footer-email-link"
                  href={PERSONAL_INFO.links.email}
                  className="hover:text-[#2563EB] font-medium transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                id="footer-social-github"
                href={https://github.com/yashpandey2211-a11y}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-white hover:bg-slate-200 text-slate-800 transition-colors border border-slate-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-social-linkedin"
                href={https://www.linkedin.com/in/yash-pandey-577106381/}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-white hover:bg-slate-200 text-[#2563EB] transition-colors border border-slate-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-social-leetcode"
                href={https://leetcode.com/u/YASH_2211/}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="p-2 rounded-lg bg-white hover:bg-slate-200 text-amber-600 transition-colors border border-slate-200"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p id="footer-copyright-text">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript &amp; Tailwind CSS.
          </p>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-700 hover:text-[#2563EB] font-semibold transition-colors px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
