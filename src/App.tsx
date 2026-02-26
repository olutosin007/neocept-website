import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Compass, Eye, Megaphone, PenTool, Cpu, Zap, MessageCircle, BarChart3 } from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  useScroll,
  animate } from
'framer-motion';

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
          let best = '';
          let bestRatio = 0;
          visibleSections.forEach((ratio, sectionId) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = sectionId;
            }
          });
          if (best) setActive(best);
        },
        { threshold: [0, 0.25, 0.5], rootMargin: '-80px 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);
  return active;
}
// ─── Fade-up animation variant ───────────────────────────────────────────────
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      delay
    }
  })
};
const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delay
    }
  })
};
const slideLeft = {
  hidden: {
    opacity: 0,
    x: -24
  },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay
    }
  })
};
// ─── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1.4) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration,
        ease: 'easeOut'
      });
      return controls.stop;
    }
  }, [inView, target, duration, count]);
  return {
    ref,
    rounded
  };
}
// ─── Stat Item ────────────────────────────────────────────────────────────────
function StatItem({
  value,
  suffix,
  label,
  delay = 0
}: {value: number; suffix: string; label: string; delay?: number;}) {
  const { ref, rounded } = useCountUp(value);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col items-center justify-center py-10 px-6"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}>
      <div className="flex items-end gap-0.5">
        <motion.span
          ref={ref}
          className="font-display text-5xl md:text-6xl text-white leading-none">
          {rounded}
        </motion.span>
        {suffix && (
          <span className="font-display text-white leading-none" style={{ fontSize: '0.75em', opacity: 0.9 }}>
            {suffix}
          </span>
        )}
      </div>
      <span className="font-body text-sm text-white/70 mt-2 tracking-widest uppercase">
        {label}
      </span>
    </motion.div>);
}
// ─── SVG Grid Pattern ─────────────────────────────────────────────────────────
const LOGO_URL = "/Neocept_logo_blu.png";

// ─── Main App ─────────────────────────────────────────────────────────────────
const NAV_SECTIONS = ['services', 'about', 'thinking', 'contact'];
const NAV_LINKS = ['Services', 'About', 'Thinking'];

export function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV_SECTIONS);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleMenuKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMobileMenuOpen(false);
      return;
    }
    if (e.key === 'Tab' && mobileMenuRef.current) {
      const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, []);
  return (
    <div className="w-full min-h-screen bg-white font-body overflow-x-hidden">
      {/* ── 1. STICKY NAV ──────────────────────────────────────────────────── */}
      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E8E2D9] transition-shadow duration-300 ${scrolled ? 'nav-scrolled' : ''}`}
        initial={{
          y: -80
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}>

        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
          <a href="#hero" className="flex-shrink-0">
            <img src={LOGO_URL} alt="Neocept" className="h-9 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.toLowerCase();
              return (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`font-body text-sm tracking-[0.12em] uppercase transition-colors duration-200 pb-0.5 border-b-2 ${isActive ? 'text-navy border-gold' : 'text-navy/70 border-transparent hover:text-navy'}`}>
                  {link}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#1764ae] text-white font-body text-sm font-medium tracking-wide hover:bg-navy transition-colors duration-200"
              style={{
                borderRadius: 0
              }}>
              Start a Project
            </a>
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}>

              <span
                className={`block w-6 h-0.5 bg-navy transition-transform duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span
                className={`block w-6 h-0.5 bg-navy transition-opacity duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span
                className={`block w-6 h-0.5 bg-navy transition-transform duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-navy/30 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileMenuOpen(false)}
                style={{ top: 64 }}
              />
              <motion.div
                ref={mobileMenuRef}
                className="md:hidden bg-white border-t border-[#E8E2D9] px-6 py-6 flex flex-col gap-4 relative z-50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onKeyDown={handleMenuKeyDown}>
                {NAV_LINKS.map((link) =>
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-navy/70 tracking-[0.12em] uppercase hover:text-navy transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}>
                    {link}
                  </a>
                )}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1764ae] text-white font-body text-sm font-medium"
                  style={{ borderRadius: 0 }}
                  onClick={() => setMobileMenuOpen(false)}>
                  Start a Project
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ── 2. HERO ────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen bg-[#0F1B35] flex items-center pt-16 overflow-hidden">

        {/* Hero background image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/hero-background-image-1.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blue overlay layer for composition and legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2A52]/70 via-[#0F1B35]/68 to-[#0B1A33]/80 pointer-events-none" />

        {/* Subtle gold accent line — vertical, left side */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gold/20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            {/* Left: Headline */}
            <div className="md:col-span-7">
              {/* Gold rule */}
              <motion.div
                className="w-20 h-0.5 bg-[#C9A84C] mb-8"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={0} />

              <motion.h1
                className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.02] tracking-tight"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.15}>

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
                custom={0.3}>

                We build brands that lead markets — powered by strategic clarity and creative AI.
              </motion.p>
            </div>

            {/* Right: Info block */}
            <motion.div
              className="md:col-span-5 relative"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.45}>

              <div className="border border-[#C9A84C] p-7 md:p-8 bg-[#0f1827]/50 backdrop-blur-sm shadow-[0_32px_80px_rgba(0,0,0,0.72)]">
                {/* Credentials */}
                <div className="mb-6">
                  <span className="font-display text-[32px] text-[#C9A84C] leading-tight block">
                    Insight + Execution
                  </span>
                </div>
                <div className="w-full h-px bg-white/15 mb-5" />

                {/* Services list */}
                <ul className="space-y-3 mb-5">
                  {[
                  'Branding & Creative Consulting',
                  'AI-Driven Solutions',
                  'Campaign Development',
                  'Communication Design'].
                  map((s) =>
                  <li
                    key={s}
                    className="font-body text-[18px] text-white/80 leading-snug flex items-center gap-2.5">

                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                      {s}
                    </li>
                  )}
                </ul>
                <div className="w-full h-px bg-white/15 mb-6" />

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-[#C9A84C] text-[#C9A84C] font-body text-sm px-5 py-3 hover:bg-[#C9A84C] hover:text-[#0F1B35] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 tracking-wide"
                  style={{
                    borderRadius: 0
                  }}>

                  Begin the Conversation →
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom gold rule + scroll indicator */}
          <motion.div
            className="mt-16 md:mt-24 flex items-center gap-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.7}>

            <div className="flex-1 h-px bg-[#C9A84C]/40" />
            <div className="flex flex-col items-center gap-1.5">
              <span className="font-body text-xs text-white/20 tracking-[0.15em] uppercase">
                Scroll
              </span>
              <motion.div
                className="w-px h-8 bg-white/20"
                animate={{
                  scaleY: [1, 0.3, 1]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }} />

            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. STATS BAR ───────────────────────────────────────────────────── */}
      <section className="bg-[#1764ae] w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            <StatItem value={40} suffix="+" label="Clients" delay={0} />
            <StatItem value={120} suffix="+" label="Projects" delay={0.12} />
            <StatItem value={12} suffix="" label="Industries" delay={0.24} />
            <StatItem value={3} suffix="" label="Continents" delay={0.36} />
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ────────────────────────────────────────────────────── */}
      <section id="services" className="bg-[#F8F5EF] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Section label */}
          <ServicesSection />
        </div>
      </section>

      {/* ── 5. SELECTED WORK — HIDDEN: uncomment when ready ─────────────────
      <section
        id="work"
        className="bg-[#F8F5EF] py-24 md:py-32 border-t border-navy/10">

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <WorkSection />
        </div>
      </section>
      ───────────────────────────────────────────────────────────────────────── */}

      {/* ── 6. MANIFESTO ───────────────────────────────────────────────────── */}
      <section className="bg-[#080E1C] py-28 md:py-36 relative overflow-hidden">
        {/* Decorative gold accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A84C]/20" />
        <ManifestoSection />
      </section>

      {/* ── 7. THINKING ────────────────────────────────────────────────────── */}
      <section id="thinking" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ThinkingSection />
        </div>
      </section>

      {/* ── 8. CONTACT CTA ─────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="bg-[#1764ae] grid-pattern-cta py-24 md:py-32 relative overflow-hidden">

        {/* Gold rule above */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A84C]/60" />
        <ContactSection />
      </section>

      {/* ── 9. FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="bg-[#080E1C] border-t border-[#C9A84C]/30">
        <FooterSection />
      </footer>
    </div>);

}
// ─── Services Section ─────────────────────────────────────────────────────────
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

function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px'
  });

  const renderCapabilities = (items: string[]) =>
    items.map((cap) => {
      const Icon = SERVICE_ICONS[cap];
      return (
        <li key={cap} className="flex items-center gap-3">
          {Icon && <Icon size={18} className="text-navy/50 flex-shrink-0" strokeWidth={1.5} />}
          <span className="font-body text-sm text-navy/80">{cap}</span>
        </li>
      );
    });

  return (
    <div ref={ref}>
      <motion.p
        className="font-body text-xs text-[#C9A84C] tracking-[0.22em] uppercase mb-12"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}>
        Our Expertise
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white p-8 md:p-10 border-t-[3px] border-[#1764ae] relative hover:-translate-y-1 hover:shadow-lg hover:border-t-[4px] transition-all duration-[250ms]"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.1}>
          <span className="font-display text-[8rem] leading-none text-navy/[0.06] absolute top-4 right-6 select-none pointer-events-none">
            01
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-navy mb-8 relative z-10">
            Branding &<br />
            Creative Consulting
          </h3>
          <ul className="space-y-4 mb-8">
            {renderCapabilities(['Brand Strategy', 'Visual Identity', 'Campaign Development', 'Creative Direction'])}
          </ul>
          <a
            href="#contact"
            className="link-underline font-body text-sm text-[#1764ae] hover:text-navy transition-colors duration-200 tracking-wide">
            Learn More →
          </a>
        </motion.div>

        <motion.div
          className="bg-white p-8 md:p-10 border-t-[3px] border-[#1764ae] relative hover:-translate-y-1 hover:shadow-lg hover:border-t-[4px] transition-all duration-[250ms]"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.25}>
          <span className="font-display text-[8rem] leading-none text-navy/[0.06] absolute top-4 right-6 select-none pointer-events-none">
            02
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-navy mb-8 relative z-10">
            AI-Driven<br />
            Solutions
          </h3>
          <ul className="space-y-4 mb-8">
            {renderCapabilities(['AI Content Systems', 'Intelligent Automation', 'Conversational Design', 'Data-Driven Creative'])}
          </ul>
          <a
            href="#contact"
            className="link-underline font-body text-sm text-[#1764ae] hover:text-navy transition-colors duration-200 tracking-wide">
            Learn More →
          </a>
        </motion.div>
      </div>
    </div>);
}
// ─── Work Section ─────────────────────────────────────────────────────────────
const WORK_PROJECTS = [
  {
    client: 'Apex Ventures',
    category: 'Brand Identity',
    year: '2025',
    description: 'Repositioned a Series B fintech as the category leader',
    color: '#0F1B35',
  },
  {
    client: 'Solara Health',
    category: 'AI Campaign',
    year: '2025',
    description: 'AI-powered content engine driving 3× patient engagement',
    color: '#1764ae',
  },
  {
    client: 'Heron Capital',
    category: 'Creative Strategy',
    year: '2024',
    description: 'Go-to-market narrative that secured a $40M raise',
    color: '#C9A84C',
  },
  {
    client: 'Canopy Studio',
    category: 'Communication Design',
    year: '2024',
    description: 'Brand voice system adopted across 12 global markets',
    color: '#0F1B35',
  },
];

function WorkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });

  return (
    <div ref={ref}>
      <motion.p
        className="font-body text-xs text-[#C9A84C] tracking-[0.22em] uppercase mb-12"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}>
        Selected Work
      </motion.p>

      <div className="border-t border-navy/15">
        {WORK_PROJECTS.map((project, i) => (
          <motion.div
            key={project.client}
            className="work-row group border-b border-navy/15 px-3 py-6 md:py-7 cursor-pointer"
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={i * 0.1}
            role="article"
            aria-label={`${project.client} — ${project.category}`}>
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
              <div className="hidden md:block md:w-[8%]">
                <div
                  className="w-[72px] h-[50px] rounded-sm overflow-hidden group-hover:scale-[1.03] transition-transform duration-200"
                  style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
                >
                  <svg width="72" height="50" viewBox="0 0 72 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="24" height="24" rx="2" fill={project.color} fillOpacity="0.15" />
                    <rect x="40" y="18" width="20" height="20" rx="2" fill={project.color} fillOpacity="0.1" />
                    <line x1="8" y1="40" x2="64" y2="40" stroke={project.color} strokeOpacity="0.12" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              <span className="font-display text-xl md:text-2xl text-navy md:w-[24%]">
                {project.client}
              </span>
              <span className="font-body text-xs text-[#1764ae] tracking-[0.15em] uppercase md:w-[20%]">
                {project.category}
              </span>
              <span className="font-body text-sm text-navy/50 md:w-[10%]">
                {project.year}
              </span>
              <span className="font-body text-sm text-navy/70 italic md:w-[33%] md:text-right">
                {project.description}
              </span>
              <span className="hidden md:inline-block md:w-[5%] text-right font-body text-sm text-navy/0 group-hover:text-navy/60 translate-x-0 group-hover:translate-x-1 transition-all duration-200">
                →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.5}>
        <a
          href="#work"
          className="link-underline font-body text-sm text-[#1764ae] hover:text-navy transition-colors duration-200 tracking-wide">
          View All Work →
        </a>
      </motion.div>
    </div>);
}
// ─── Manifesto Section ────────────────────────────────────────────────────────
function ManifestoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
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
            custom={i * 0.24}>
            {line}
          </motion.p>
        ))}
      </div>

      <motion.div
        className="mt-16"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.8}>
        <div className="w-10 h-px bg-[#C9A84C]/40 mb-4" />
        <p className="font-body text-xs text-[#C9A84C] tracking-[0.22em] uppercase">
          Our Core Principle
        </p>
      </motion.div>
    </div>);
}
// ─── Thinking Section ─────────────────────────────────────────────────────────
function ThinkingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <div ref={ref}>
      <motion.p
        className="font-body text-xs text-[#C9A84C] tracking-[0.22em] uppercase mb-12"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}>
        Thinking
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.article
          className="border-t-2 border-[#1764ae] pt-6 pb-8 border-b border-navy/10 cursor-pointer group"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.1}>
          <span className="inline-block font-body text-xs text-[#1764ae] tracking-[0.12em] uppercase mb-4 border border-[#1764ae]/40 rounded-full px-3 py-0.5">
            AI & Creativity
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-navy mb-2 group-hover:text-[#1764ae] transition-colors duration-200">
            The Myth of the Creative Machine
          </h3>
          <span className="font-body text-xs text-navy/50 block mb-3">Feb 2026</span>
          <p className="font-body text-sm text-navy/70 leading-relaxed mb-2">
            AI doesn't replace creative thinking — it raises the stakes. The agencies that thrive will be the ones that know the difference.
          </p>
          <span className="font-body text-xs text-navy/40 block mb-6">4 min read</span>
          <a
            href="#thinking"
            className="link-underline font-body text-sm text-[#1764ae] hover:text-navy transition-colors duration-200 tracking-wide">
            Read More →
          </a>
        </motion.article>

        <motion.article
          className="border-t-2 border-[#1764ae] pt-6 pb-8 border-b border-navy/10 cursor-pointer group"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.25}>
          <span className="inline-block font-body text-xs text-[#1764ae] tracking-[0.12em] uppercase mb-4 border border-[#1764ae]/40 rounded-full px-3 py-0.5">
            Brand Strategy
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-navy mb-2 group-hover:text-[#1764ae] transition-colors duration-200">
            Why Most Rebrands Fail Before They Launch
          </h3>
          <span className="font-body text-xs text-navy/50 block mb-3">Jan 2026</span>
          <p className="font-body text-sm text-navy/70 leading-relaxed mb-2">
            Most rebrands collapse under the weight of internal politics, not bad design. Here's how to build alignment before you build anything else.
          </p>
          <span className="font-body text-xs text-navy/40 block mb-6">5 min read</span>
          <a
            href="#thinking"
            className="link-underline font-body text-sm text-[#1764ae] hover:text-navy transition-colors duration-200 tracking-wide">
            Read More →
          </a>
        </motion.article>
      </div>
    </div>);
}
// ─── Contact Section ──────────────────────────────────────────────────────────
function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <motion.div
            className="w-16 h-0.5 bg-white/40 mb-8"
            variants={fadeIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0} />

          <motion.h2
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.1}>
            Let's Build What's Next.
          </motion.h2>
          <motion.p
            className="mt-5 font-body text-base text-white/80 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.25}>
            We partner with brands that are ready to lead, not follow.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col gap-4"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0.35}>
          <a
            href="mailto:hello@neocept.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy font-body font-medium text-sm tracking-wide hover:bg-[#F8F5EF] transition-all duration-200"
            style={{ borderRadius: 0 }}>
            Start a Project
          </a>
          <a
            href="mailto:hello@neocept.com"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/50 text-white font-body text-sm tracking-wide hover:border-white transition-all duration-200"
            style={{ borderRadius: 0 }}>
            hello@neocept.com
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </motion.div>
      </div>
    </div>);
}
// ─── Footer Section ───────────────────────────────────────────────────────────
function FooterSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
        <img
          src={LOGO_URL}
          alt="Neocept"
          className="h-8 w-auto"
          style={{ filter: 'brightness(0) invert(1)' }}
        />

        <div className="flex flex-wrap gap-6">
          {['Services', 'About', 'Thinking', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-xs text-white/50 hover:text-white/90 tracking-[0.12em] uppercase transition-colors duration-200">
              {link}
            </a>
          ))}
        </div>

        <a
          href="#hero"
          className="font-body text-xs text-white/40 hover:text-white/80 tracking-wide transition-colors duration-200">
          Back to Top ↑
        </a>
      </div>

      <div className="w-full h-px bg-white/10 mb-6" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div className="flex gap-6">
          <a href="#" className="font-body text-xs text-white/40 hover:text-white/70 transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="font-body text-xs text-white/40 hover:text-white/70 transition-colors duration-200">
            Terms of Service
          </a>
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
    </div>);
}