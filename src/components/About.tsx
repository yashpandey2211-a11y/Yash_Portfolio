import React from 'react';
import { PERSONAL_INFO, INTEREST_PILLARS } from '../data/portfolioData';
import {
  BrainCircuit,
  DatabaseZap,
  Sparkles,
  Trophy,
  CheckCircle2,
  Cpu,
  GraduationCap,
} from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-slate-700" />;
      case 'DatabaseZap':
        return <DatabaseZap className="w-5 h-5 text-slate-700" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-slate-700" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-slate-700" />;
      default:
        return <Cpu className="w-5 h-5 text-slate-700" />;
    }
  };

  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="py-16 md:py-24 bg-[#FAFAFA] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Slate Neutral (Not Accent Blue) */}
        <div className="max-w-3xl mb-8 md:mb-12">
          <span
            id="about-section-badge"
            className="inline-block px-3 py-1 rounded-md bg-[#F1F5F9] text-slate-600 text-xs font-semibold uppercase tracking-widest mb-2 border border-slate-200"
          >
            Profile &amp; Background
          </span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug"
          >
            About Me
          </h2>
        </div>

        {/* Main Content Grid with 16-24px gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Distinct Structural 30% Card (#F1F5F9) with exact 24px padding (p-6) */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              id="about-exact-text-card"
              className="h-full bg-[#F1F5F9] rounded-2xl p-6 border border-slate-200 flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  <GraduationCap className="w-4 h-4 text-slate-700" />
                  <span>Academic Focus &amp; Practical Philosophy</span>
                </div>

                {/* Exact Required Text */}
                <p
                  id="about-me-exact-text"
                  className="text-base text-slate-600 font-normal leading-relaxed whitespace-pre-line"
                >
                  {PERSONAL_INFO.aboutExactText}
                </p>
              </div>

              {/* Bottom Summary Tags */}
              <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-slate-200 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 tracking-tight leading-snug">Hands-on Modeling</h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">Model design &amp; optimization</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-slate-200 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-slate-800" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 tracking-tight leading-snug">Open to Opportunities</h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">AI/ML initiatives &amp; internships</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Grouped Interest Pillars (Gestalt grouped inside #F1F5F9 cards, p-6) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <h3 id="about-interests-title" className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-1">
              Core Technical Interests &amp; Focus Areas
            </h3>

            <div className="grid grid-cols-1 gap-4 flex-1">
              {INTEREST_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  id={`interest-card-${pillar.id}`}
                  className="p-4 bg-[#F1F5F9] rounded-xl border border-slate-200 transition-all duration-150 flex items-start gap-3 shadow-xs"
                >
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shrink-0">
                    {getIcon(pillar.icon)}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
