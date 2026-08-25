import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div
      id="notification-toast"
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl border border-slate-800 animate-in fade-in slide-in-from-bottom-5 duration-200"
    >
      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      <span id="toast-message-text" className="text-sm font-medium pr-2">
        {message}
      </span>
      <button
        id="toast-close-btn"
        onClick={onClose}
        aria-label="Close notification"
        className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
