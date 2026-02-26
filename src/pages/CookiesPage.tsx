import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { SEO } from '../components/SEO';
import { fadeUp, fadeIn } from '../lib/animations';

interface CookieInfo {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  category: 'Essential' | 'Performance' | 'Analytics' | 'Marketing';
}

const COOKIES: CookieInfo[] = [
  {
    name: 'cookie_consent',
    provider: 'Neocept',
    purpose: 'Stores your cookie consent preferences',
    duration: '1 year',
    category: 'Essential',
  },
  {
    name: '_ga',
    provider: 'Google Analytics',
    purpose: 'Distinguishes unique users by assigning a randomly generated number',
    duration: '2 years',
    category: 'Analytics',
  },
  {
    name: '_ga_*',
    provider: 'Google Analytics',
    purpose: 'Used to persist session state',
    duration: '2 years',
    category: 'Analytics',
  },
];

export function CookiesPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <SEO
        title="Cookie Policy — Neocept"
        description="How Neocept uses cookies and similar technologies on our website."
      />

      <section className="bg-[#0F1B35] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            className="w-20 h-0.5 bg-[#C9A84C] mb-10"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
          />
          <motion.h1
            className="font-display text-4xl md:text-5xl text-white mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            Cookie Policy
          </motion.h1>
          <motion.p
            className="font-body text-white/60"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            Last updated: February 2026 | Version 1.0
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" ref={ref}>
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            className="space-y-8 font-body text-navy/80 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                What Are Cookies?
              </h2>
              <p>
                Cookies are small text files that are stored on your device when
                you visit a website. They help the website remember your
                preferences and understand how you interact with the site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                How We Use Cookies
              </h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong>Essential cookies:</strong> Required for the website
                  to function properly. These cannot be disabled.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Help us understand how
                  visitors interact with our website, allowing us to improve
                  user experience.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                Cookie Categories
              </h2>

              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-navy/20">
                      <th className="text-left py-3 px-4 font-display text-navy">
                        Cookie Name
                      </th>
                      <th className="text-left py-3 px-4 font-display text-navy">
                        Provider
                      </th>
                      <th className="text-left py-3 px-4 font-display text-navy">
                        Purpose
                      </th>
                      <th className="text-left py-3 px-4 font-display text-navy">
                        Duration
                      </th>
                      <th className="text-left py-3 px-4 font-display text-navy">
                        Category
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COOKIES.map((cookie) => (
                      <tr
                        key={cookie.name}
                        className="border-b border-navy/10"
                      >
                        <td className="py-3 px-4 font-mono text-sm">
                          {cookie.name}
                        </td>
                        <td className="py-3 px-4">{cookie.provider}</td>
                        <td className="py-3 px-4 text-sm">{cookie.purpose}</td>
                        <td className="py-3 px-4">{cookie.duration}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2 py-1 text-xs rounded ${
                              cookie.category === 'Essential'
                                ? 'bg-green-100 text-green-800'
                                : cookie.category === 'Analytics'
                                ? 'bg-blue-100 text-blue-800'
                                : cookie.category === 'Performance'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}
                          >
                            {cookie.category}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                Managing Your Preferences
              </h2>
              <p>
                When you first visit our website, you'll see a cookie banner
                that allows you to accept or reject non-essential cookies. You
                can change your preferences at any time by clicking "Cookie
                Settings" in the footer of any page.
              </p>
              <p className="mt-4">
                You can also manage cookies through your browser settings. Most
                browsers allow you to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>View what cookies are stored and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p className="mt-4">
                Note that blocking all cookies may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                Third-Party Cookies
              </h2>
              <p>
                Some cookies are placed by third-party services that appear on
                our pages. We do not control these cookies and recommend
                reviewing the privacy policies of these third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this cookie policy from time to time. Any changes
                will be posted on this page with an updated "Last updated" date.
                If we make significant changes, we will ask for your consent
                again.
              </p>
            </section>

            <section className="pt-8 border-t border-navy/10">
              <p>
                For more information about how we handle your personal data, see
                our{' '}
                <Link to="/privacy" className="text-[#1764ae] hover:underline">
                  Privacy Notice
                </Link>
                .
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </>
  );
}
