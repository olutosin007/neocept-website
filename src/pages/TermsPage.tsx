import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { SEO } from '../components/SEO';
import { fadeUp, fadeIn } from '../lib/animations';

export function TermsPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <SEO
        title="Terms of Use — Neocept"
        description="Terms and conditions for using the Neocept website."
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
            Terms of Use
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
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using this website (neocept.co), you agree to
                be bound by these Terms of Use. If you do not agree to these
                terms, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                2. Use of Website
              </h2>
              <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Infringe the rights of others or restrict their use of the website</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to gain unauthorised access to any part of the website</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
                <li>Collect or harvest information from other users</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                3. Intellectual Property
              </h2>
              <p>
                All content on this website, including but not limited to text,
                graphics, logos, images, and software, is the property of
                Neocept or its content suppliers and is protected by UK and
                international copyright laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, modify, or create derivative
                works from any content on this website without our prior written
                consent.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                4. Third-Party Links
              </h2>
              <p>
                This website may contain links to third-party websites. These
                links are provided for your convenience only. We have no control
                over the content of these sites and accept no responsibility for
                them or for any loss or damage that may arise from your use of
                them.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                5. Disclaimer
              </h2>
              <p>
                The information on this website is provided "as is" without any
                warranties, express or implied. We do not warrant that:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>The website will be available at all times or free from errors</li>
                <li>The information on the website is accurate, complete, or current</li>
                <li>The website is free from viruses or harmful components</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                6. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Neocept shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, arising from:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Your use of, or inability to use, this website</li>
                <li>Any content obtained from this website</li>
                <li>Unauthorised access to or alteration of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                7. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Neocept and its
                officers, directors, employees, and agents from any claims,
                damages, losses, liabilities, and expenses (including legal
                fees) arising out of your use of this website or violation of
                these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes
                will be effective immediately upon posting to this website. Your
                continued use of the website after any changes constitutes
                acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                9. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of England and Wales. Any disputes arising from
                these Terms or your use of this website shall be subject to the
                exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-navy mb-4">
                10. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please contact us
                at{' '}
                <a
                  href="mailto:hello@neocept.com"
                  className="text-[#1764ae] hover:underline"
                >
                  hello@neocept.com
                </a>
                .
              </p>
            </section>

            <section className="pt-8 border-t border-navy/10">
              <p>
                See also our{' '}
                <Link to="/privacy" className="text-[#1764ae] hover:underline">
                  Privacy Notice
                </Link>{' '}
                and{' '}
                <Link to="/cookies" className="text-[#1764ae] hover:underline">
                  Cookie Policy
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
