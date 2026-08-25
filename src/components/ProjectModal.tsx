import React from 'react';
import { Project } from '../data/portfolioData';
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#F1F5F9] hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-[#F1F5F9] text-slate-700 text-xs font-semibold uppercase tracking-widest border border-slate-200">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              {project.statusBadge}
            </span>
          </div>

          <h3 id="modal-project-title" className="text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-slate-500">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <div className="p-4 rounded-xl bg-[#F1F5F9] border border-slate-200 text-slate-600 font-normal text-sm leading-relaxed">
          {project.description}
        </div>

        {/* Detailed Points */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Key Architectural Highlights &amp; Implementation
          </h4>
          <div className="space-y-2.5">
            {project.detailedPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Technologies &amp; Tools Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg bg-[#F1F5F9] text-slate-800 text-xs font-semibold border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-end gap-3">
          {project.link && (
            <a
              id="modal-github-link-btn"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>Open on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            id="modal-dismiss-btn"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#F1F5F9] hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
