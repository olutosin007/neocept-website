import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ContactCTA } from '../components/ContactCTA';
import { fadeUp, fadeIn } from '../lib/animations';

interface Article {
  slug: string;
  category: string;
  title: string;
  date: string;
  teaser: string;
  readTime: string;
}

const ARTICLES: Article[] = [
  {
    slug: 'the-myth-of-the-creative-machine',
    category: 'AI & Creativity',
    title: 'The Myth of the Creative Machine',
    date: 'Feb 2026',
    teaser:
      "AI doesn't replace creative thinking — it raises the stakes. The agencies that thrive will be the ones that know the difference.",
    readTime: '4 min read',
  },
  {
    slug: 'why-most-rebrands-fail',
    category: 'Brand Strategy',
    title: 'Why Most Rebrands Fail Before They Launch',
    date: 'Jan 2026',
    teaser:
      "Most rebrands collapse under the weight of internal politics, not bad design. Here's how to build alignment before you build anything else.",
    readTime: '5 min read',
  },
];

export function ThinkingPage() {
  return (
    <>
      <SEO
        title="Thinking — Neocept"
        description="Perspectives on brand strategy, creative leadership, and AI in the creative industry. Insights from the Neocept team."
      />

      {/* Hero */}
      <section className="bg-[#0F1B35] pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-[#C9A84C]/20 pointer-events-none" />
        <HeroSection />
      </section>

      {/* Articles */}
      <section className="bg-white py-24 md:py-32">
        <ArticlesSection articles={ARTICLES} />
      </section>

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
        Thinking
      </motion.h1>

      <motion.p
        className="font-body text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.25}
      >
        Perspectives on brand strategy, creative leadership, and the intersection 
        of human insight and artificial intelligence.
      </motion.p>
    </div>
  );
}

function ArticlesSection({ articles }: { articles: Article[] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-10">
      <motion.p
        className="font-body text-xs text-[#C9A84C] tracking-[0.22em] uppercase mb-12"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}
      >
        Latest Articles
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, i) => (
          <motion.article
            key={article.slug}
            className="border-t-2 border-[#1764ae] pt-6 pb-8 border-b border-navy/10 group"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.1 + i * 0.15}
          >
            <span className="inline-block font-body text-xs text-[#1764ae] tracking-[0.12em] uppercase mb-4 border border-[#1764ae]/40 rounded-full px-3 py-0.5">
              {article.category}
            </span>
            <Link to={`/thinking/${article.slug}`}>
              <h3 className="font-display text-2xl md:text-3xl text-navy mb-2 group-hover:text-[#1764ae] transition-colors duration-200">
                {article.title}
              </h3>
            </Link>
            <span className="font-body text-xs text-navy/50 block mb-3">
              {article.date}
            </span>
            <p className="font-body text-sm text-navy/70 leading-relaxed mb-2">
              {article.teaser}
            </p>
            <span className="font-body text-xs text-navy/40 block mb-6">
              {article.readTime}
            </span>
            <Link
              to={`/thinking/${article.slug}`}
              className="link-underline font-body text-sm text-[#1764ae] hover:text-navy transition-colors duration-200 tracking-wide"
            >
              Read More →
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
