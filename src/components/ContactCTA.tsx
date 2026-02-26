import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';

interface ContactCTAProps {
  variant?: 'full' | 'compact';
}

export function ContactCTA({ variant = 'full' }: ContactCTAProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  if (variant === 'compact') {
    return (
      <motion.div
        ref={ref}
        className="mt-16 pt-12 border-t border-navy/10"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}
      >
        <h3 className="font-display text-2xl md:text-3xl text-navy mb-4">
          Ready to start?
        </h3>
        <p className="font-body text-navy/70 mb-6 max-w-md">
          Let's discuss how we can help your brand lead, not follow.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-[#1764ae] text-white font-body text-sm font-medium tracking-wide hover:bg-navy transition-colors duration-200"
          style={{ borderRadius: 0 }}
        >
          Start a Project →
        </Link>
      </motion.div>
    );
  }

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <motion.div
            className="w-16 h-0.5 bg-white/40 mb-8"
            variants={fadeIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          />
          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.1}
          >
            Let's Build What's Next.
          </motion.h2>
          <motion.p
            className="mt-5 font-body text-base text-white/80 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.25}
          >
            We partner with brands that are ready to lead, not follow.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col gap-4"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.35}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy font-body font-medium text-sm tracking-wide hover:bg-[#F8F5EF] transition-all duration-200"
            style={{ borderRadius: 0 }}
          >
            Start a Project
          </Link>
          <a
            href="mailto:hello@neocept.com"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/50 text-white font-body text-sm tracking-wide hover:border-white transition-all duration-200"
            style={{ borderRadius: 0 }}
          >
            hello@neocept.com
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
