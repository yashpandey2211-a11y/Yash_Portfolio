import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import {
  Github,
  ExternalLink,
  Eye,
  CheckCircle2,
  FileCode2,
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'Full-Stack' | 'Database Architecture'>('All');

  const filteredProjects =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="py-16 md:py-24 bg-[#FAFAFA] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Slate Neutral Heading (Not Accent Blue) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div>
            <span
              id="projects-section-badge"
              className="inline-block px-3 py-1 rounded-md bg-[#F1F5F9] text-slate-600 text-xs font-semibold uppercase tracking-widest mb-2 border border-slate-200"
            >
              Engineering Portfolio
            </span>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug"
            >
              Featured Projects
            </h2>
            <p id="projects-subheading" className="mt-2 text-slate-600 font-normal text-sm sm:text-base leading-relaxed max-w-xl">
              Practical implementations across machine learning, full-stack systems, and database engineering.
            </p>
          </div>

          {/* Category Filters (10% Accent #2563EB for Active State) */}
          <div id="projects-filter-bar" className="flex flex-wrap items-center gap-2 bg-[#F1F5F9] p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
            {(['All', 'AI/ML', 'Full-Stack', 'Database Architecture'] as const).map((cat) => (
              <button
                key={cat}
                id={`projects-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                  filter === cat
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - 30% Secondary #F1F5F9, Uniform 24px Padding (p-6), 16-24px gap */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-[#F1F5F9] rounded-2xl p-6 border border-slate-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200">
                  <span className="px-2.5 py-1 rounded-md bg-white text-slate-700 text-xs font-semibold uppercase tracking-widest border border-slate-200">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <h3
                  id={`project-title-${project.id}`}
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug"
                >
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p
                  id={`project-desc-${project.id}`}
                  className="text-slate-600 font-normal text-xs sm:text-sm leading-relaxed mb-4"
                >
                  {project.description}
                </p>

                {/* Key Points Bullet List */}
                <div className="space-y-2 mb-6">
                  {project.detailedPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-700 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons - 10% Accent #2563EB applied to interactive CTAs */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-2">
                {project.link ? (
                  <a
                    id={`project-github-btn-${project.id}`}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                ) : (
                  <button
                    id={`project-view-details-btn-${project.id}`}
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-xs"
                  >
                    <FileCode2 className="w-4 h-4" />
                    <span>View Specifications</span>
                  </button>
                )}

                <button
                  id={`project-quick-modal-btn-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  aria-label={`View full details for ${project.title}`}
                  className="p-2 rounded-xl bg-white hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
