import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Linkedin,
  Github,
  Code2,
  Copy,
  ExternalLink,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
} from 'lucide-react';

interface ContactProps {
  onCopyText: (text: string, label: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyText }) => {
  const [formData, setFormData] = useState({
    name: '',
    senderEmail: '',
    subject: 'AI/ML Opportunity / Collaboration Inquiry',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleDirectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.senderEmail,
          _subject: formData.subject || `Inquiry from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || data.message)) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          senderEmail: '',
          subject: 'AI/ML Opportunity / Collaboration Inquiry',
          message: '',
        });
        onCopyText('Message sent directly to Yash!', 'Message Delivered');
      } else {
        throw new Error(data.message || 'Failed to deliver message.');
      }
    } catch (err: unknown) {
      console.error('Email submission error:', err);
      setSubmitStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Could not send message automatically. Please use the direct Gmail or copy button below.'
      );
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PERSONAL_INFO.email
  )}&su=${encodeURIComponent(formData.subject || 'Opportunity Inquiry')}&body=${encodeURIComponent(
    `Hi Yash,\n\n${formData.message || 'I would like to discuss an opportunity with you.'}\n\nBest regards,\n${formData.name || ''}\n${formData.senderEmail || ''}`
  )}`;

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-16 md:py-24 bg-[#FAFAFA] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-12">
          <span
            id="contact-section-badge"
            className="inline-block px-3 py-1 rounded-md bg-[#F1F5F9] text-slate-600 text-xs font-semibold uppercase tracking-widest mb-2 border border-slate-200"
          >
            Get In Touch
          </span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug"
          >
            Connect &amp; Collaborate
          </h2>
          <p id="contact-subheading" className="mt-2 text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
            Seeking opportunities to collaborate, learn, and contribute to AI/ML initiatives, internships, and technical projects.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 id="contact-direct-channels-title" className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-1">
              Direct Communication Channels
            </h3>

            {/* Email Card */}
            <div
              id="contact-email-card"
              className="p-6 bg-[#F1F5F9] rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 shrink-0">
                  <Mail className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block">
                    Email Address
                  </span>
                  <a
                    id="contact-email-link"
                    href={PERSONAL_INFO.links.email}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#2563EB] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  id="contact-email-gmail-btn"
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open in Gmail</span>
                </a>
                <button
                  id="contact-email-copy-btn"
                  onClick={() => onCopyText(PERSONAL_INFO.email, 'Email address copied to clipboard!')}
                  className="py-2 px-3 rounded-xl bg-white hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors inline-flex items-center gap-1.5"
                  aria-label="Copy email address"
                >
                  <Copy className="w-3.5 h-3.5 text-slate-700" />
                  <span>Copy</span>
                </button>
              </div>
            </div>

            {/* Social & Professional Profile Links */}
            <div
              id="contact-profiles-card"
              className="p-6 bg-[#F1F5F9] rounded-2xl border border-slate-200 space-y-3 shadow-xs"
            >
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block">
                Professional &amp; Coding Platforms
              </span>

              <div className="grid grid-cols-1 gap-2.5">
                {/* LinkedIn */}
                <a
                  id="contact-link-linkedin"
                  href={PERSONAL_INFO.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-blue-50 text-[#2563EB]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 tracking-tight leading-snug">LinkedIn Profile</h4>
                      <p className="text-[11px] text-slate-500">linkedin.com/in/yash-pandey-577106381</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  id="contact-link-github"
                  href={PERSONAL_INFO.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-slate-100 text-slate-900">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 tracking-tight leading-snug">GitHub Profile</h4>
                      <p className="text-[11px] text-slate-500">github.com/yashpandey2211-a11y</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </a>

                {/* LeetCode */}
                <a
                  id="contact-link-leetcode"
                  href={PERSONAL_INFO.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 tracking-tight leading-snug">LeetCode Profile</h4>
                      <p className="text-[11px] text-slate-500">Problem Solving &amp; Algorithms</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-card"
              className="bg-[#F1F5F9] rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6"
            >
              <div className="space-y-1 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  <MessageSquare className="w-4 h-4 text-[#2563EB]" />
                  <span>Direct Message Form</span>
                </div>
                <h3 id="contact-form-title" className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                  Send a Direct Email to Yash
                </h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  Submit below to dispatch an automated email directly to Yash&apos;s inbox (<span className="font-semibold text-slate-800">{PERSONAL_INFO.email}</span>).
                </p>
              </div>

              {submitStatus === 'success' ? (
                <div
                  id="contact-form-success-state"
                  className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-emerald-950">
                        Message Successfully Sent!
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed font-normal">
                        Your inquiry has been submitted directly to Yash&apos;s inbox at <span className="font-semibold">{PERSONAL_INFO.email}</span>. Yash will review and get back to you shortly.
                      </p>
                      <p className="text-[11px] text-emerald-700 bg-white/60 p-2 rounded-lg border border-emerald-200 mt-2">
                        💡 <strong>Note for inbox delivery:</strong> FormSubmit forwards incoming messages immediately. If this is your first submission, ensure to check your inbox/spam folder for any verification confirmations.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      id="contact-send-another-btn"
                      type="button"
                      onClick={() => setSubmitStatus('idle')}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-xs"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Send Another Message</span>
                    </button>
                    <a
                      href={gmailComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100 text-xs font-semibold transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Gmail</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form id="contact-message-form" onSubmit={handleDirectSubmit} className="space-y-4">
                  {submitStatus === 'error' && (
                    <div
                      id="contact-form-error-banner"
                      className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3 text-xs"
                    >
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold">{errorMessage}</p>
                        <p className="text-slate-600">
                          You can also directly email Yash via{' '}
                          <a
                            href={gmailComposeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-[#2563EB] underline"
                          >
                            Gmail web composer
                          </a>{' '}
                          or copy <code className="font-mono bg-white px-1 py-0.5 rounded border">{PERSONAL_INFO.email}</code>.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-input-name"
                        className="text-xs font-semibold text-slate-600 uppercase tracking-widest block"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-input-name"
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={submitStatus === 'loading'}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all disabled:opacity-60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-input-email"
                        className="text-xs font-semibold text-slate-600 uppercase tracking-widest block"
                      >
                        Your Email
                      </label>
                      <input
                        id="contact-input-email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.senderEmail}
                        onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                        disabled={submitStatus === 'loading'}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-input-subject"
                      className="text-xs font-semibold text-slate-600 uppercase tracking-widest block"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-input-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      disabled={submitStatus === 'loading'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all disabled:opacity-60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-input-message"
                      className="text-xs font-semibold text-slate-600 uppercase tracking-widest block"
                    >
                      Message / Opportunity Details
                    </label>
                    <textarea
                      id="contact-input-message"
                      rows={4}
                      required
                      placeholder="Hello Yash, I reviewed your portfolio and would like to discuss an AI/ML opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={submitStatus === 'loading'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all resize-y disabled:opacity-60"
                    />
                  </div>

                  {/* 10% Accent CTA button with Loading State */}
                  <div className="space-y-2 pt-1">
                    <button
                      id="contact-submit-email-btn"
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-150 shadow-xs hover:shadow-md active:scale-99 disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {submitStatus === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Message to Yash&apos;s Inbox...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message Directly</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
                      <span>Target: <strong className="text-slate-800">{PERSONAL_INFO.email}</strong></span>
                      <a
                        href={gmailComposeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2563EB] hover:underline font-semibold inline-flex items-center gap-1"
                      >
                        <span>Or open Gmail Web</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
