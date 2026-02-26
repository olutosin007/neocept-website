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
import { motion, useInView } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ContactCTA } from '../components/ContactCTA';
import { fadeUp, fadeIn } from '../lib/animations';

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

interface ServicePillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: {
    name: string;
    description: string;
  }[];
}

const SERVICE_PILLARS: ServicePillar[] = [
  {
    number: '01',
    title: 'Branding &',
    subtitle: 'Creative Consulting',
    description:
      'We build brands that command attention and earn trust. From strategic positioning to visual identity systems, we craft every element to work harder and last longer.',
    capabilities: [
      {
        name: 'Brand Strategy',
        description:
          'Positioning, messaging architecture, and competitive differentiation that forms the strategic foundation for everything else.',
      },
      {
        name: 'Visual Identity',
        description:
          'Logo systems, typography, colour, and design language that translates strategy into distinctive, ownable visual assets.',
      },
      {
        name: 'Campaign Development',
        description:
          'Integrated creative campaigns that cut through noise and drive measurable business outcomes.',
      },
      {
        name: 'Creative Direction',
        description:
          'Ongoing creative leadership to ensure brand consistency and quality across all touchpoints and channels.',
      },
    ],
  },
  {
    number: '02',
    title: 'AI-Driven',
    subtitle: 'Solutions',
    description:
      "We leverage AI not as a shortcut, but as an amplifier. Our AI solutions scale your brand's impact without diluting its essence — intelligent systems that work as hard as your team.",
    capabilities: [
      {
        name: 'AI Content Systems',
        description:
          'Custom content engines that generate on-brand copy, visuals, and assets at scale while maintaining quality and consistency.',
      },
      {
        name: 'Intelligent Automation',
        description:
          'Workflow automation that frees your team from repetitive tasks, allowing them to focus on high-value creative and strategic work.',
      },
      {
        name: 'Conversational Design',
        description:
          'AI-powered chat and voice experiences that represent your brand authentically across digital touchpoints.',
      },
      {
        name: 'Data-Driven Creative',
        description:
          'Analytics and insights that inform creative decisions, ensuring your marketing spend works harder.',
      },
    ],
  },
];

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Services — Neocept"
        description="Branding, creative consulting, and AI-driven solutions. We build brands that lead markets — powered by strategic clarity and creative AI."
      />

      {/* Hero */}
      <section className="bg-[#0F1B35] pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-[#C9A84C]/20 pointer-events-none" />
        <HeroSection />
      </section>

      {/* Service Pillars */}
      {SERVICE_PILLARS.map((pillar, index) => (
        <section
          key={pillar.number}
          className={`py-24 md:py-32 ${
            index % 2 === 0 ? 'bg-[#F8F5EF]' : 'bg-white'
          }`}
        >
          <ServicePillarSection pillar={pillar} />
        </section>
      ))}

      {/* Contact CTA */}
      <section className="bg-[#1764ae] grid-pattern-cta py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A84C]/60" />
        <ContactCTA />
      </section>
    </>
  );
}

function HeroSection() {
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
        Strategy and execution that moves markets.
      </motion.h1>

      <motion.p
        className="font-body text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.25}
      >
        We combine deep brand strategy expertise with AI-powered creative systems.
        Two pillars designed to work together — giving ambitious brands the clarity 
        to lead and the tools to scale.
      </motion.p>
    </div>
  );
}

function ServicePillarSection({ pillar }: { pillar: ServicePillar }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: Title and description */}
        <div className="lg:col-span-5">
          <motion.span
            className="font-display text-[6rem] md:text-[8rem] leading-none text-navy/[0.08] block mb-4"
            variants={fadeIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            {pillar.number}
          </motion.span>

          <motion.h2
            className="font-display text-3xl md:text-4xl text-navy mb-6"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.1}
          >
            {pillar.title}
            <br />
            {pillar.subtitle}
          </motion.h2>

          <motion.p
            className="font-body text-navy/70 leading-relaxed mb-8"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            {pillar.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.3}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#1764ae] text-white font-body text-sm font-medium tracking-wide hover:bg-navy transition-colors duration-200"
              style={{ borderRadius: 0 }}
            >
              Discuss Your Project →
            </Link>
          </motion.div>
        </div>

        {/* Right: Capabilities */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillar.capabilities.map((capability, i) => {
              const Icon = SERVICE_ICONS[capability.name];
              return (
                <motion.div
                  key={capability.name}
                  className="border-t border-navy/15 pt-6"
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  custom={0.15 + i * 0.1}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {Icon && (
                      <Icon
                        size={24}
                        className="text-[#1764ae] flex-shrink-0"
                        strokeWidth={1.5}
                      />
                    )}
                    <h3 className="font-display text-xl text-navy">
                      {capability.name}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-navy/70 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
