import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_URL = '/Neocept_logo_blu.png';

interface FooterProps {
  onOpenCookieSettings?: () => void;
}

export function Footer({ onOpenCookieSettings }: FooterProps) {
  const navLinks = [
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Thinking', to: '/thinking' },
    { label: 'Contact', to: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Cookie Policy', to: '/cookies' },
    { label: 'Terms of Use', to: '/terms' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="Neocept"
            className="h-8 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
            loading="lazy"
          />
        </Link>

        <div className="flex flex-wrap gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-body text-xs text-white/50 hover:text-white/90 tracking-[0.12em] uppercase transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/"
          className="font-body text-xs text-white/40 hover:text-white/80 tracking-wide transition-colors duration-200"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Top ↑
        </Link>
      </div>

      <div className="w-full h-px bg-white/10 mb-6" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-6">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="font-body text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          {onOpenCookieSettings && (
            <button
              onClick={onOpenCookieSettings}
              className="font-body text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
            >
              Cookie Settings
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <span className="font-body text-xs text-white/30">
          © {new Date().getFullYear()} Neocept. All rights reserved.
        </span>
        <span className="font-display text-sm italic text-[#C9A84C]/80">
          Where Strategy Meets Intelligence.
        </span>
      </div>
    </div>
  );
}
