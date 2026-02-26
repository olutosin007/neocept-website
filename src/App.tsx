import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CookieBanner } from './components/CookieBanner';
import { CookiePreferences } from './components/CookiePreferences';

const HomePage = lazy(() =>
  import('./pages/HomePage').then((m) => ({ default: m.HomePage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const ThinkingPage = lazy(() =>
  import('./pages/ThinkingPage').then((m) => ({ default: m.ThinkingPage }))
);
const ThinkingArticlePage = lazy(() =>
  import('./pages/ThinkingArticlePage').then((m) => ({
    default: m.ThinkingArticlePage,
  }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const PrivacyPage = lazy(() =>
  import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage }))
);
const CookiesPage = lazy(() =>
  import('./pages/CookiesPage').then((m) => ({ default: m.CookiesPage }))
);
const TermsPage = lazy(() =>
  import('./pages/TermsPage').then((m) => ({ default: m.TermsPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#0F1B35] flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-[#C9A84C] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Layout() {
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white font-body overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C9A84C] focus:text-navy focus:font-medium focus:outline-none"
      >
        Skip to main content
      </a>

      <header>
        <Nav />
      </header>

      <main id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-[#080E1C] border-t border-[#C9A84C]/30">
        <Footer onOpenCookieSettings={() => setShowCookiePreferences(true)} />
      </footer>

      <CookieBanner onOpenPreferences={() => setShowCookiePreferences(true)} />

      {showCookiePreferences && (
        <CookiePreferences onClose={() => setShowCookiePreferences(false)} />
      )}
    </div>
  );
}

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/thinking" element={<ThinkingPage />} />
              <Route path="/thinking/:slug" element={<ThinkingArticlePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
        <Analytics />
      </BrowserRouter>
    </HelmetProvider>
  );
}
