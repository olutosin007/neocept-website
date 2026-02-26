import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { fadeUp } from '../lib/animations';

export function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found — Neocept"
        description="The page you're looking for doesn't exist yet."
      />

      <section className="min-h-screen bg-[#0F1B35] flex items-center justify-center pt-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            className="w-16 h-0.5 bg-[#C9A84C] mx-auto mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          />

          <motion.h1
            className="font-display text-5xl md:text-6xl text-white mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            This page doesn't exist yet.
          </motion.h1>

          <motion.p
            className="font-body text-lg text-white/70 mb-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            The page you're looking for may have moved or is still being built.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy font-body font-medium text-sm tracking-wide hover:bg-[#F8F5EF] transition-all duration-200"
              style={{ borderRadius: 0 }}
            >
              Back to Home →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
