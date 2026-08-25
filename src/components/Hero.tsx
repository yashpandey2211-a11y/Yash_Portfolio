import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Code2,
  Terminal,
} from 'lucide-react';

interface HeroProps {
  onCopyText: (text: string, label: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyText }) => {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-24 bg-[#FAFAFA] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Main Hero Copy - Left Column (F-Pattern Top Left Focus) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F1F5F9] border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-widest shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Name & Headlines - High Contrast Slate Neutral */}
            <div className="space-y-2">
              <h1
                id="hero-full-name"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-snug"
              >
                {PERSONAL_INFO.name}
              </h1>
            </div>

            {/* Sub-headline in Slate Gray */}
            <p
              id="hero-sub-headline"
              className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl"
            >
              {PERSONAL_INFO.subHeadline}
            </p>

            {/* Primary Action Buttons (10% Accent #2563EB applied to interactive CTAs) */}
            <div id="hero-cta-group" className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                id="hero-btn-explore-projects"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-150 shadow-xs hover:shadow-md active:scale-98"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-btn-contact-me"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F1F5F9] hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all duration-150 border border-slate-200 shadow-xs active:scale-98"
              >
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <span>Contact Yash</span>
              </a>
            </div>

            {/* Quick Contact & Social Interactive Chips */}
            <div id="hero-quick-chips" className="pt-2 flex flex-wrap items-center gap-2">
              <a
                id="hero-chip-github"
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F1F5F9] hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold border border-slate-200 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-800" />
                <span>GitHub</span>
              </a>

              <a
                id="hero-chip-linkedin"
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F1F5F9] hover:bg-slate-200 text-slate-700 hover:text-[#2563EB] text-xs font-semibold border border-slate-200 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>LinkedIn</span>
              </a>

              <a
                id="hero-chip-leetcode"
                href={PERSONAL_INFO.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F1F5F9] hover:bg-slate-200 text-slate-700 hover:text-amber-600 text-xs font-semibold border border-slate-200 transition-colors"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-600" />
                <span>LeetCode</span>
              </a>

              <a
                id="hero-chip-email"
                href={PERSONAL_INFO.links.email}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F1F5F9] hover:bg-slate-200 text-slate-700 hover:text-[#2563EB] text-xs font-semibold border border-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: 30% Structural Profile Card (#F1F5F9 with 24px uniform padding p-6) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div
              id="hero-interactive-card"
              className="w-full max-w-md bg-[#F1F5F9] rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-lg shadow-xs">
                    YP
                  </div>
                  <div>
                    <h2 id="hero-card-name" className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                      Yash Pandey
                    </h2>
                    <p id="hero-card-role" className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      AI & Machine Learning Track
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-white text-slate-700 font-semibold text-xs border border-slate-200">
                  2nd Year
                </span>
              </div>

              {/* Developer Terminal Snippet */}
              <div
                id="hero-code-snippet"
                className="bg-slate-900 text-slate-200 rounded-xl p-4 font-mono text-xs shadow-inner space-y-2 border border-slate-800"
              >
                <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800 text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>yash_profile.py</span>
                  </div>
                  <span className="text-emerald-400">● Python 3.11</span>
                </div>

                <div className="space-y-1 pt-1 leading-relaxed">
                  <p>
                    <span className="text-blue-400">class</span> <span className="text-amber-300">AIMLStudent</span>:
                  </p>
                  <p className="pl-4">
                    name = <span className="text-emerald-300">"Yash Pandey"</span>
                  </p>
                  <p className="pl-4">
                    focus = [
                  </p>
                  <p className="pl-8 text-slate-300">
                    <span className="text-amber-200">"ML Model Dev"</span>,
                  </p>
                  <p className="pl-8 text-slate-300">
                    <span className="text-amber-200">"Data Pipelines"</span>,
                  </p>
                  <p className="pl-8 text-slate-300">
                    <span className="text-amber-200">"LLM Workflows"</span>
                  </p>
                  <p className="pl-4">]</p>
                </div>
              </div>

              {/* Quick Spec Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block">
                    Degree
                  </span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                    B.Tech (2nd Year)
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block">
                    Specialization
                  </span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                    CS & AIML
                  </span>
                </div>
              </div>

              {/* Action Buttons inside card */}
              <div className="flex gap-3">
                <button
                  id="hero-copy-email-btn"
                  onClick={() => onCopyText(PERSONAL_INFO.email, 'Email address copied!')}
                  className="w-full py-2.5 px-3 rounded-lg bg-white hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Copy Email Address</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
