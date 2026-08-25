import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      aria-label="Certifications and Accreditations"
      className="py-16 md:py-24 bg-[#FAFAFA] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-12">
          <span
            id="certifications-section-badge"
            className="inline-block px-3 py-1 rounded-md bg-[#F1F5F9] text-slate-600 text-xs font-semibold uppercase tracking-widest mb-2 border border-slate-200"
          >
            Accreditations
          </span>
          <h2
            id="certifications-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug"
          >
            Certifications
          </h2>
          <p
            id="certifications-subheading"
            className="mt-2 text-slate-600 font-normal text-sm sm:text-base leading-relaxed"
          >
            Verified technical credentials and industry accreditations.
          </p>
        </div>

        {/* Z-Pattern Certification Card */}
        <div
          id="certification-card-azure"
          className="bg-[#F1F5F9] rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between gap-6 transition-all duration-200 hover:border-slate-300"
        >
          {/* Top of Z: Top-Left Title -> Top-Right Issuer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            {/* Top-Left: Certification Title in Bold Dark Slate */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center border border-slate-200 text-[#2563EB] shrink-0 shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3
                  id="cert-title-azure"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug"
                >
                  Microsoft Azure Certification
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Cloud Fundamentals &amp; Workloads
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Top-Right: Issuer in Standard Slate Gray */}
            <div className="flex items-center self-start sm:self-auto">
              <span
                id="cert-issuer-azure"
                className="px-3 py-1 rounded-md bg-white text-slate-600 text-xs font-semibold uppercase tracking-widest border border-slate-200 shadow-2xs"
              >
                Microsoft
              </span>
            </div>
          </div>

          {/* Bottom of Z: Bottom-Left Description -> Bottom-Right CTA */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Bottom-Left: Brief Description */}
            <p
              id="cert-description-azure"
              className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed max-w-2xl"
            >
              Official validation of cloud computing concepts, services, and Microsoft Azure workloads.
            </p>

            {/* Bottom-Right: 10% Accent CTA Button */}
            <div className="shrink-0">
              <a
                id="cert-verify-cta-azure"
                href="https://www.credly.com/badges/e6ed7c18-f09a-4f1a-933f-09912db79c4f/public_url"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verify Microsoft Azure Certification on Credly"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all duration-150 focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 active:scale-98"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
