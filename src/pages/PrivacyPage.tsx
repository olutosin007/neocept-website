import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { SEO } from '../components/SEO';
import { fadeUp, fadeIn } from '../lib/animations';

export function PrivacyPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <SEO
        title="Privacy Policy — Neocept"
        description="How Neocept collects, uses, and protects your personal information."
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
            Privacy Notice
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
            className="prose prose-lg max-w-none"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            <div className="space-y-8 font-body text-navy/80 leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-navy mb-4">
                  1. Who We Are
                </h2>
                <p>
                  Neocept ("we", "us", "our") is a brand strategy and creative
                  consultancy. We are the data controller for the personal
                  information we collect through this website and our services.
                </p>
                <p className="mt-4">
                  <strong>Contact Details:</strong>
                  <br />
                  Email: hello@neocept.co.uk
                  <br />
                  Website: neocept.co
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-navy mb-4">
                  2. Information We Collect
                </h2>
                <p>We collect the following categories of personal information:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    <strong>Contact information:</strong> Name, email address,
                    company name when you submit our contact form or correspond
                    with us.
                  </li>
                  <li>
                    <strong>Enquiry details:</strong> Information about your
                    project or business needs that you provide.
                  </li>
                  <li>
                    <strong>Technical data:</strong> IP address, browser type,
                    device information, and usage data collected through cookies
                    (with your consent).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl text-navy mb-4">
                  3. How We Use Your Information
                </h2>
                <p>We use your personal information for the following purposes:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>To respond to your enquiries and provide requested services</li>
                  <li>To communicate with you about our services</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl text-navy mb-4">
                  4. Legal Basis for Processing
                </h2>
                <p>Under UK GDPR, we rely on the following lawful bases:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    <strong>Consent:</strong> For non-essential cookies and
                    marketing communications.
                  </li>
                  <li>
                    <strong>Legitimate interests:</strong> To respond to
                    enquiries, improve our services, and conduct our business.
                  </li>
                  <li>
                    <strong>Contract:</strong> To provide services you have
                    requested.
                  </li>
                  <li>
                    <strong>Legal obligation:</strong> To comply with applicable
                    laws.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl text-navy mb-4">
                  5. Data Sharing
                </h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>
                    <strong>Service providers:</strong> Third parties who help us
                    operate our website and services (e.g., hosting providers,
                    email services).
                  </li>
                  <li>
                    <strong>Professional advisors:</strong> Lawyers, accountants,
                    and other advisors as needed.
                  </li>
                  <li>
                    <strong>Legal requirements:</strong> When required by law or
                    to protect our rights.
                  </li>
                </ul>
                <p className="mt-4">
                  Our current service providers include Vercel (hosting) and our
                  email service provider. We do not sell your personal
                  information.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-navy mb-4">
                  6. International Transfers
                </h2>
                <p>
                  Some of our service providers are based outside the UK. Where
                  we transfer data internationally, we ensure appropriate
                  safeguards are in place, such as Standard Contractual Clauses
                  or adequacy decisions.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-navy mb-4">
                  7. Data Retention
                </h2>
                <p>
                  We retain your personal information only as long as necessary
                  for the purposes outlined in this notice:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Contact form submissions: 2 years from last contact</li>
                  <li>Client project data: 6 years after project completion</li>
                  <li>
                    Cookie consent records: 1 year from consent date (then
                    renewed)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl text-navy mb-4">
                  8. Your Rights
                </h2>
                <p>Under UK GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to or restrict processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at hello@neocept.co.uk. We
                  will respond within one month.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-navy mb-4">
                  9. Complaints
                </h2>
                <p>
                  If you have concerns about how we handle your data, please
                  contact us first. You also have the right to lodge a complaint
                  with the Information Commissioner's Office (ICO) at{' '}
                  <a
                    href="https://ico.org.uk"
                    className="text-[#1764ae] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ico.org.uk
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-navy mb-4">
                  10. Changes to This Notice
                </h2>
                <p>
                  We may update this privacy notice from time to time. We will
                  notify you of significant changes by posting the new notice on
                  our website with an updated "Last updated" date.
                </p>
              </section>

              <section className="pt-8 border-t border-navy/10">
                <p>
                  For more information about cookies, see our{' '}
                  <Link
                    to="/cookies"
                    className="text-[#1764ae] hover:underline"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
