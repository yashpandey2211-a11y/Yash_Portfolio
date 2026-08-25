import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Server, Lightbulb, Code2, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'core_ml' | 'web_db' | 'concepts'>('all');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'core_ml':
        return <Cpu className="w-5 h-5 text-slate-800" />;
      case 'web_db':
        return <Server className="w-5 h-5 text-slate-800" />;
      case 'concepts':
        return <Lightbulb className="w-5 h-5 text-slate-800" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-800" />;
    }
  };

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.category === activeTab);

  return (
    <section
      id="skills"
      aria-label="Skills Section"
      className="py-16 md:py-24 bg-[#FAFAFA] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Slate Neutral Heading (Not Accent Blue) */}
        <div className="max-w-3xl mb-8 md:mb-12">
          <span
            id="skills-section-badge"
            className="inline-block px-3 py-1 rounded-md bg-[#F1F5F9] text-slate-600 text-xs font-semibold uppercase tracking-widest mb-2 border border-slate-200"
          >
            Technical Toolset
          </span>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug"
          >
            Skills &amp; Competencies
          </h2>
          <p id="skills-subheading" className="mt-2 text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
            Categorized overview of programming languages, frameworks, data tools, and computational concepts.
          </p>
        </div>

        {/* Category Filter Pills (10% Accent #2563EB for Active State) */}
        <div id="skills-filter-tabs" className="flex flex-wrap items-center gap-2 mb-8 bg-[#F1F5F9] p-1.5 rounded-xl border border-slate-200 w-fit">
          <button
            id="skills-filter-all"
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
              activeTab === 'all'
                ? 'bg-[#2563EB] text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            All Skills
          </button>
          <button
            id="skills-filter-core-ml"
            onClick={() => setActiveTab('core_ml')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
              activeTab === 'core_ml'
                ? 'bg-[#2563EB] text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Core &amp; ML
          </button>
          <button
            id="skills-filter-web-db"
            onClick={() => setActiveTab('web_db')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
              activeTab === 'web_db'
                ? 'bg-[#2563EB] text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Web &amp; DB
          </button>
          <button
            id="skills-filter-concepts"
            onClick={() => setActiveTab('concepts')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
              activeTab === 'concepts'
                ? 'bg-[#2563EB] text-white shadow-xs'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Concepts
          </button>
        </div>

        {/* Skill Category Cards Grid (30% Secondary #F1F5F9, Uniform 24px Padding p-6, 16-24px gap) */}
        <div id="skills-cards-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              id={`skill-category-card-${category.category}`}
              className="bg-[#F1F5F9] rounded-2xl p-6 border border-slate-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shrink-0">
                    {getCategoryIcon(category.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                      {category.title}
                    </h3>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-widest">
                      {category.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      id={`skill-tag-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-800 text-xs font-semibold border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
                      <span>{skill.name}</span>
                      {skill.badge && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium border border-slate-200">
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Verified Competency</span>
                <span className="font-semibold text-slate-700">Practical &amp; Applied</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
