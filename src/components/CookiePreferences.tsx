import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useConsent } from '../hooks/useConsent';
import { ConsentPreferences, getPreferences } from '../lib/consent';

interface CookiePreferencesProps {
  onClose: () => void;
}

interface CategoryInfo {
  key: keyof ConsentPreferences;
  title: string;
  description: string;
  required: boolean;
}

const CATEGORIES: CategoryInfo[] = [
  {
    key: 'essential',
    title: 'Essential',
    description:
      'Required for the website to function properly. These cookies cannot be disabled.',
    required: true,
  },
  {
    key: 'performance',
    title: 'Performance',
    description:
      'Help us understand how visitors interact with our website by collecting and reporting information anonymously.',
    required: false,
  },
  {
    key: 'analytics',
    title: 'Analytics',
    description:
      'Allow us to count visits and traffic sources to measure and improve site performance.',
    required: false,
  },
  {
    key: 'marketing',
    title: 'Marketing',
    description:
      'Used to deliver advertisements more relevant to you and your interests.',
    required: false,
  },
];

export function CookiePreferences({ onClose }: CookiePreferencesProps) {
  const { savePreferences } = useConsent();
  const [localPreferences, setLocalPreferences] = useState<ConsentPreferences>(
    getPreferences()
  );
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocused?.focus();
    };
  }, [onClose]);

  const handleToggle = (key: keyof ConsentPreferences) => {
    if (key === 'essential') return;
    setLocalPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    savePreferences(localPreferences);
    onClose();
  };

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      essential: true,
      performance: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
    onClose();
  };

  const handleRejectAll = () => {
    const allRejected: ConsentPreferences = {
      essential: true,
      performance: false,
      analytics: false,
      marketing: false,
    };
    savePreferences(allRejected);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          ref={modalRef}
          className="relative bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-labelledby="preferences-title"
          aria-modal="true"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-navy/10 px-6 py-4 flex items-center justify-between">
            <h2
              id="preferences-title"
              className="font-display text-2xl text-navy"
            >
              Cookie Preferences
            </h2>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-2 text-navy/50 hover:text-navy transition-colors"
              aria-label="Close preferences"
            >
              <X size={24} />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-6">
            <p className="font-body text-navy/70 mb-6">
              We use cookies to enhance your browsing experience. You can
              customise your preferences below.{' '}
              <Link
                to="/cookies"
                className="text-[#1764ae] hover:underline"
                onClick={onClose}
              >
                Learn more about our cookies
              </Link>
            </p>

            <div className="space-y-6">
              {CATEGORIES.map((category) => (
                <div
                  key={category.key}
                  className="flex items-start justify-between gap-4 pb-6 border-b border-navy/10 last:border-0"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-lg text-navy">
                        {category.title}
                      </h3>
                      {category.required && (
                        <span className="text-xs text-navy/40 font-body">
                          (Always active)
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm text-navy/60">
                      {category.description}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={localPreferences[category.key]}
                      onChange={() => handleToggle(category.key)}
                      disabled={category.required}
                      className="sr-only peer"
                      aria-label={`${category.title} cookies`}
                    />
                    <div
                      className={`w-11 h-6 rounded-full peer transition-colors duration-200 ${
                        category.required
                          ? 'bg-[#1764ae] cursor-not-allowed'
                          : 'bg-navy/20 peer-checked:bg-[#1764ae]'
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                          localPreferences[category.key]
                            ? 'translate-x-5'
                            : 'translate-x-0'
                        }`}
                      />
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-white border-t border-navy/10 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-3">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 border border-navy/20 text-navy font-body text-sm hover:border-navy/40 transition-colors duration-200"
                style={{ borderRadius: 0 }}
              >
                Reject all
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 border border-navy/20 text-navy font-body text-sm hover:border-navy/40 transition-colors duration-200"
                style={{ borderRadius: 0 }}
              >
                Accept all
              </button>
            </div>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-[#1764ae] text-white font-body text-sm font-medium hover:bg-navy transition-colors duration-200"
              style={{ borderRadius: 0 }}
            >
              Save preferences
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
