import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { SEO } from '../components/SEO';
import { StatItem } from '../components/StatItem';
import { ContactCTA } from '../components/ContactCTA';
import { fadeUp, fadeIn } from '../lib/animations';

export function AboutPage() {
  return (
    <>
      <SEO
        title="About Neocept — Strategy, Creativity & AI"
        description="We exist to close the gap between what brands say and what they do. Discover our approach to building brands that lead."
      />

      {/* Hero / Opening Statement */}
      <section className="bg-[#0F1B35] pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-[#C9A84C]/20 pointer-events-none" />
        <OpeningSection />
      </section>

      {/* Our Approach */}
      <section className="bg-[#F8F5EF] py-24 md:py-32">
        <ApproachSection />
      </section>

      {/* By the Numbers */}
      <section className="bg-[#1764ae] w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            <StatItem value={30} suffix="+" label="Partnerships" delay={0} />
            <StatItem value={80} suffix="+" label="Success Stories" delay={0.12} />
            <StatItem value={12} suffix="" label="Industries" delay={0.24} />
            <StatItem value={3} suffix="" label="Continents" delay={0.36} />
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-[#080E1C] py-28 md:py-36 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A84C]/20" />
        <ManifestoSection />
      </section>

      {/* Contact CTA */}
      <section className="bg-[#1764ae] grid-pattern-cta py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A84C]/60" />
        <ContactCTA />
      </section>
    </>
  );
}

function OpeningSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
      <motion.div
        className="w-20 h-0.5 bg-[#C9A84C] mb-10"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}
      />

      <motion.h1
        className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mb-8"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.1}
      >
        We exist to close the gap between what brands say and what they do.
      </motion.h1>

      <motion.p
        className="font-body text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl mb-6"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.25}
      >
        Neocept was founded on a simple observation: most brands have the ambition 
        to lead, but lack the strategic clarity and creative systems to do so. 
        We build both.
      </motion.p>

      <motion.p
        className="font-body text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.35}
      >
        We combine deep brand strategy expertise with AI-powered creative systems, 
        helping ambitious companies cut through noise and capture market leadership.
      </motion.p>
    </div>
  );
}

function ApproachSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const pillars = [
    {
      title: 'Strategic Clarity',
      description:
        "We start with rigorous strategic thinking. Before any creative work begins, we ensure absolute clarity on positioning, audience, and competitive advantage. Strategy isn't a phase — it's the foundation everything else is built on.",
    },
    {
      title: 'Creative Courage',
      description:
        "Safe work doesn't lead markets. We push brands beyond their comfort zone with creative that commands attention and earns trust. Distinctive, memorable, and impossible to ignore — because that's what market leaders require.",
    },
    {
      title: 'Intelligent Amplification',
      description:
        "We leverage AI not as a shortcut, but as an amplifier. AI content systems, intelligent automation, and data-driven creative — all designed to scale your brand's impact without diluting its essence.",
    },
  ];

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
      <motion.p
        className="font-body text-xs text-[#C9A84C] tracking-[0.22em] uppercase mb-12"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}
      >
        Our Approach
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            className="border-t-2 border-[#1764ae] pt-8"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.1 + i * 0.15}
          >
            <h3 className="font-display text-2xl md:text-3xl text-navy mb-4">
              {pillar.title}
            </h3>
            <p className="font-body text-navy/70 leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ManifestoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const goldMarkY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const lines = [
    "The brands that win don't play it safe.",
    'They lead with conviction.',
    'We bring both — the strategic clarity to know what matters, and the creative courage to make it impossible to ignore.',
    'Powered by human insight. Amplified by AI.',
  ];

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
      <motion.div
        className="w-12 h-1 bg-[#C9A84C] mb-12"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}
        style={{ y: goldMarkY }}
      />

      <div className="max-w-4xl">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className={`font-display leading-snug text-white mb-6 ${
              i < 2
                ? 'text-3xl md:text-4xl lg:text-5xl'
                : i === 2
                ? 'text-xl md:text-2xl text-white/80 font-body font-light leading-relaxed max-w-3xl'
                : 'text-xl md:text-2xl text-[#C9A84C]'
            }`}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={i * 0.24}
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.div
        className="mt-16"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.8}
      >
        <div className="w-10 h-px bg-[#C9A84C]/40 mb-4" />
        <p className="font-body text-xs text-[#C9A84C] tracking-[0.22em] uppercase">
          Our Core Principle
        </p>
      </motion.div>
    </div>
  );
}
