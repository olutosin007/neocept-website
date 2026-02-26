import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Eye,
  Megaphone,
  PenTool,
  Cpu,
  Zap,
  MessageCircle,
  BarChart3,
} from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { SEO } from '../components/SEO';
import { StatItem } from '../components/StatItem';
import { ContactCTA } from '../components/ContactCTA';
import { fadeUp, fadeIn, slideLeft } from '../lib/animations';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'Brand Strategy': Compass,
  'Visual Identity': Eye,
  'Campaign Development': Megaphone,
  'Creative Direction': PenTool,
  'AI Content Systems': Cpu,
  'Intelligent Automation': Zap,
  'Conversational Design': MessageCircle,
  'Data-Driven Creative': BarChart3,
};

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Neocept',
  url: 'https://neocept.co',
  logo: 'https://neocept.co/Neocept_logo_blu.png',
  description:
    'Brand strategy and AI solutions for market leaders. We build brands that lead markets — powered by strategic clarity and creative AI.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@neocept.co.uk',
    contactType: 'customer service',
  },
  sameAs: [],
};

export function HomePage() {
  return (
    <>
      <SEO
        title="Neocept — Where Strategy Meets Intelligence"
        description="Brand strategy and AI solutions for market leaders. We build brands that lead markets — powered by strategic clarity and creative AI."
        jsonLd={ORGANIZATION_SCHEMA}
      />

      {/* Hero */}
      <HeroSection />

      {/* Stats Bar */}
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

      {/* Services */}
      <section id="services" className="bg-[#F8F5EF] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ServicesSection />
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-[#080E1C] py-28 md:py-36 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A84C]/20" />
        <ManifestoSection />
      </section>

      {/* Thinking */}
      <section id="thinking" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ThinkingSection />
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="bg-[#1764ae] grid-pattern-cta py-24 md:py-32 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A84C]/60" />
        <ContactCTA />
      </section>
    </>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0F1B35] flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/hero-background-image-1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2A52]/70 via-[#0F1B35]/68 to-[#0B1A33]/80 pointer-events-none" />
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gold/20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7">
            <motion.div
              className="w-20 h-0.5 bg-[#C9A84C] mb-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0}
            />

            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.02] tracking-tight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
            >
              Where Strategy
              <br />
              <em className="not-italic text-white/90">Meets</em>{' '}
              <span className="text-[#C9A84C]">Intelligence.</span>
            </motion.h1>
            <motion.p
              className="mt-6 font-body text-base md:text-lg text-white/85 font-normal max-w-md leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              We build brands that lead markets — powered by strategic clarity
              and creative AI.
            </motion.p>
          </div>

          <motion.div
            className="md:col-span-5 relative"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
          >
            <div className="border border-[#C9A84C] p-7 md:p-8 bg-[#0f1827]/50 backdrop-blur-sm shadow-[0_32px_80px_rgba(0,0,0,0.72)]">
              <div className="mb-6">
                <span className="font-display text-[32px] text-[#C9A84C] leading-tight block">
                  Insight + Execution
                </span>
              </div>
              <div className="w-full h-px bg-white/15 mb-5" />

              <ul className="space-y-3 mb-5">
                {[
                  'Branding & Creative Consulting',
                  'AI-Driven Solutions',
                  'Campaign Development',
                  'Communication Design',
                ].map((s) => (
                  <li
                    key={s}
                    className="font-body text-[18px] text-white/80 leading-snug flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="w-full h-px bg-white/15 mb-6" />

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] font-body text-sm px-5 py-3 hover:bg-[#C9A84C] hover:text-[#0F1B35] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 tracking-wide"
                style={{ borderRadius: 0 }}
              >
                Begin the Conversation →
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 md:mt-24 flex items-center gap-4"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.7}
        >
          <div className="flex-1 h-px bg-[#C9A84C]/40" />
          <div className="flex flex-col items-center gap-1.5">
            <span className="font-body text-xs text-white/20 tracking-[0.15em] uppercase">
              Scroll
            </span>
            <motion.div
              className="w-px h-8 bg-white/20"
              animate={{ scaleY: [1, 0.3, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const renderCapabilities = (items: string[]) =>
    items.map((cap) => {
      const Icon = SERVICE_ICONS[cap];
      return (
        <li key={cap} className="flex items-center gap-3">
          {Icon && (
            <Icon
              size={22}
              className="text-navy/50 flex-shrink-0"
              strokeWidth={1.5}
            />
          )}
          <span className="font-body text-[18px] text-navy/80">{cap}</span>
        </li>
      );
    });

  return (
    <div ref={ref}>
      <motion.p
        className="font-body text-[20px] text-[#C9A84C] tracking-[0.22em] uppercase mb-12"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}
      >
        Our Services
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white p-8 md:p-10 border-t-[3px] border-[#1764ae] relative hover:-translate-y-1 hover:shadow-lg hover:border-t-[4px] transition-all duration-[250ms]"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.1}
        >
          <span className="font-display text-[8rem] leading-none text-navy/[0.06] absolute top-4 right-6 select-none pointer-events-none">
            01
          </span>
          <h3 className="font-display text-[28px] md:text-[34px] text-navy mb-8 relative z-10">
            Branding &<br />
            Creative Consulting
          </h3>
          <ul className="space-y-4 mb-8">
            {renderCapabilities([
              'Brand Strategy',
              'Visual Identity',
              'Campaign Development',
              'Creative Direction',
            ])}
          </ul>
          <Link
            to="/services"
            className="link-underline font-body text-sm text-[#1764ae] hover:text-navy transition-colors duration-200 tracking-wide"
          >
            Learn More →
          </Link>
        </motion.div>

        <motion.div
          className="bg-white p-8 md:p-10 border-t-[3px] border-[#1764ae] relative hover:-translate-y-1 hover:shadow-lg hover:border-t-[4px] transition-all duration-[250ms]"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.25}
        >
          <span className="font-display text-[8rem] leading-none text-navy/[0.06] absolute top-4 right-6 select-none pointer-events-none">
            02
          </span>
          <h3 className="font-display text-[28px] md:text-[34px] text-navy mb-8 relative z-10">
            AI-Driven
            <br />
            Solutions
          </h3>
          <ul className="space-y-4 mb-8">
            {renderCapabilities([
              'AI Content Systems',
              'Intelligent Automation',
              'Conversational Design',
              'Data-Driven Creative',
            ])}
          </ul>
          <Link
            to="/services"
            className="link-underline font-body text-sm text-[#1764ae] hover:text-navy transition-colors duration-200 tracking-wide"
          >
            Learn More →
          </Link>
        </motion.div>
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

function ThinkingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref}>
      <motion.p
        className="font-body text-xs text-[#C9A84C] tracking-[0.22em] uppercase mb-12"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}
      >
        Thinking
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.article
          className="border-t-2 border-[#1764ae] pt-6 pb-8 border-b border-navy/10 cursor-pointer group"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.1}
        >
          <span className="inline-block font-body text-xs text-[#1764ae] tracking-[0.12em] uppercase mb-4 border border-[#1764ae]/40 rounded-full px-3 py-0.5">
            AI & Creativity
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-navy mb-2 group-hover:text-[#1764ae] transition-colors duration-200">
            The Myth of the Creative Machine
          </h3>
          <span className="font-body text-xs text-navy/50 block mb-3">
            Feb 2026
          </span>
          <p className="font-body text-sm text-navy/70 leading-relaxed mb-2">
            AI doesn't replace creative thinking — it raises the stakes. The
            agencies that thrive will be the ones that know the difference.
          </p>
          <span className="font-body text-xs text-navy/40 block mb-6">
            6 min read
          </span>
          <Link
            to="/thinking/the-myth-of-the-creative-machine"
            className="link-underline font-body text-sm text-[#1764ae] hover:text-navy transition-colors duration-200 tracking-wide"
          >
            Read More →
          </Link>
        </motion.article>

        <motion.article
          className="border-t-2 border-[#1764ae] pt-6 pb-8 border-b border-navy/10 cursor-pointer group"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.25}
        >
          <span className="inline-block font-body text-xs text-[#1764ae] tracking-[0.12em] uppercase mb-4 border border-[#1764ae]/40 rounded-full px-3 py-0.5">
            Brand Strategy
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-navy mb-2 group-hover:text-[#1764ae] transition-colors duration-200">
            Why Most Rebrands Fail Before They Launch
          </h3>
          <span className="font-body text-xs text-navy/50 block mb-3">
            Jan 2026
          </span>
          <p className="font-body text-sm text-navy/70 leading-relaxed mb-2">
            Most rebrands collapse under the weight of internal politics, not
            bad design. Here's how to build alignment before you build anything
            else.
          </p>
          <span className="font-body text-xs text-navy/40 block mb-6">
            7 min read
          </span>
          <Link
            to="/thinking/why-most-rebrands-fail"
            className="link-underline font-body text-sm text-[#1764ae] hover:text-navy transition-colors duration-200 tracking-wide"
          >
            Read More →
          </Link>
        </motion.article>
      </div>

      <motion.div
        className="mt-10"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.4}
      >
        <Link
          to="/thinking"
          className="link-underline font-body text-sm text-[#1764ae] hover:text-navy transition-colors duration-200 tracking-wide"
        >
          View All Articles →
        </Link>
      </motion.div>
    </div>
  );
}
