import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useConsent } from '../hooks/useConsent';

interface CookieBannerProps {
  onOpenPreferences: () => void;
}

export function CookieBanner({ onOpenPreferences }: CookieBannerProps) {
  const { hasUserConsent, acceptAll, rejectNonEssential } = useConsent();

  if (hasUserConsent === null || hasUserConsent === true) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#080E1C] border-t border-[#C9A84C]/30 p-6 md:p-8"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h2
                id="cookie-banner-title"
                className="font-display text-xl text-white mb-2"
              >
                We value your privacy
              </h2>
              <p
                id="cookie-banner-description"
                className="font-body text-sm text-white/70 leading-relaxed max-w-2xl"
              >
                We use cookies to enhance your browsing experience and analyse
                our traffic. By clicking "Accept all", you consent to our use of
                cookies.{' '}
                <Link
                  to="/cookies"
                  className="text-[#C9A84C] hover:underline"
                >
                  Learn more
                </Link>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={rejectNonEssential}
                className="px-5 py-2.5 border border-white/30 text-white font-body text-sm hover:border-white/60 transition-colors duration-200"
                style={{ borderRadius: 0 }}
              >
                Reject non-essential
              </button>
              <button
                onClick={onOpenPreferences}
                className="px-5 py-2.5 border border-white/30 text-white font-body text-sm hover:border-white/60 transition-colors duration-200"
                style={{ borderRadius: 0 }}
              >
                Preferences
              </button>
              <button
                onClick={acceptAll}
                className="px-5 py-2.5 bg-[#C9A84C] text-[#080E1C] font-body text-sm font-medium hover:bg-[#d4b65d] transition-colors duration-200"
                style={{ borderRadius: 0 }}
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
