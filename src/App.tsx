/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyText = (text: string, label: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => {
          setToastMessage(label);
          setTimeout(() => {
            setToastMessage(null);
          }, 3500);
        },
        () => {
          setToastMessage(`Copied: ${text}`);
          setTimeout(() => {
            setToastMessage(null);
          }, 3500);
        }
      );
    } else {
      // Fallback
      setToastMessage(`Copied: ${text}`);
      setTimeout(() => {
        setToastMessage(null);
      }, 3500);
    }
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#FAFAFA] text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <Hero onCopyText={handleCopyText} />
        <About />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Certifications />
        <Contact onCopyText={handleCopyText} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Notification Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
