import React, { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ContactCTA } from '../components/ContactCTA';
import { fadeUp, fadeIn } from '../lib/animations';

interface ArticleContent {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  content: string[];
}

const ARTICLES: Record<string, ArticleContent> = {
  'the-myth-of-the-creative-machine': {
    slug: 'the-myth-of-the-creative-machine',
    category: 'AI & Creativity',
    title: 'The Myth of the Creative Machine',
    date: 'February 2026',
    readTime: '4 min read',
    content: [
      "There's a persistent myth circulating in creative industries: that AI will replace creative thinking. It's a seductive narrative — simple, dramatic, and entirely wrong.",
      "AI doesn't replace creative thinking. It raises the stakes.",
      "The agencies and brands that thrive in this new landscape won't be the ones that outsource creativity to machines. They'll be the ones that understand a fundamental distinction: AI is exceptional at execution, but strategy remains irreducibly human.",
      "Consider what AI does well: it can generate variations at scale, analyse patterns in data, produce content that follows established templates. What it cannot do is understand why a particular positioning will resonate with a specific audience at a specific moment in culture. It cannot feel the tension between what a brand says and what it does. It cannot make the intuitive leap from insight to idea.",
      "The real question isn't whether AI will replace creative work. It's whether creative professionals will adapt to leverage AI as an amplifier rather than fearing it as a replacement.",
      "At Neocept, we've built our practice around this distinction. We use AI to scale execution — content systems, automation, data-driven optimisation. But strategy? That's where human insight is non-negotiable.",
      "The agencies that will struggle are the ones that were already commoditising creativity. If your value proposition was 'we make things' rather than 'we solve problems,' AI is indeed a threat. But for those who lead with strategic thinking and creative judgement, AI is the most powerful amplifier we've ever had.",
      "The stakes are higher now. The floor for execution quality is rising. That means differentiation will come from the one place AI cannot go: genuine creative leadership, strategic clarity, and the courage to make work that actually matters.",
    ],
  },
  'why-most-rebrands-fail': {
    slug: 'why-most-rebrands-fail',
    category: 'Brand Strategy',
    title: 'Why Most Rebrands Fail Before They Launch',
    date: 'January 2026',
    readTime: '5 min read',
    content: [
      "Most rebrands don't fail because of bad design. They fail because of bad process.",
      "Specifically, they fail because the hard work of building internal alignment gets skipped in favour of jumping straight to the 'exciting' creative work. It's understandable — everyone wants to see the new logo, the fresh colour palette, the sleek website. But this rush to execution is precisely why so many rebrands collapse under their own weight.",
      "The pattern is predictable: a rebrand is commissioned, an agency produces beautiful work, and then the real problems begin. Key stakeholders who weren't properly consulted start raising objections. The CEO's spouse hates the colour. The sales team points out that customers weren't considered. The legal department flags trademark issues. Death by a thousand cuts.",
      "The solution isn't better design. It's better process.",
      "Before any creative work begins, there needs to be absolute clarity on three questions: Why are we doing this? What does success look like? And who needs to be aligned for this to work?",
      "That third question is where most brands fail. They assume that executive sign-off is sufficient. It isn't. Every person who will be affected by the rebrand — or who has the power to derail it — needs to be brought into the process early. Not to design by committee, but to build the alignment that makes decisive creative direction possible.",
      "The most successful rebrands we've led share a common characteristic: by the time we present creative work, the strategic foundation is so solid that the design feels inevitable. There's no debate about direction because the direction was established through rigorous process.",
      "Build alignment before you build anything else. The creative work will be better for it, and it will actually survive contact with reality.",
    ],
  },
};

export function ThinkingArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? ARTICLES[slug] : null;

  if (!article) {
    return <Navigate to="/thinking" replace />;
  }

  return (
    <>
      <SEO
        title={`${article.title} — Neocept`}
        description={article.content[0]}
        ogType="article"
      />

      {/* Hero */}
      <section className="bg-[#0F1B35] pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-[#C9A84C]/20 pointer-events-none" />
        <ArticleHero article={article} />
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-24">
        <ArticleBody article={article} />
      </section>

      {/* Contact CTA */}
      <section className="bg-[#1764ae] grid-pattern-cta py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A84C]/60" />
        <ContactCTA />
      </section>
    </>
  );
}

function ArticleHero({ article }: { article: ArticleContent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="max-w-4xl mx-auto px-6 md:px-10">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}
      >
        <Link
          to="/thinking"
          className="inline-flex items-center gap-2 font-body text-sm text-white/60 hover:text-white/90 transition-colors duration-200 mb-8"
        >
          ← Back to Thinking
        </Link>
      </motion.div>

      <motion.span
        className="inline-block font-body text-xs text-[#C9A84C] tracking-[0.12em] uppercase mb-6 border border-[#C9A84C]/40 rounded-full px-3 py-0.5"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.1}
      >
        {article.category}
      </motion.span>

      <motion.h1
        className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.15}
      >
        {article.title}
      </motion.h1>

      <motion.div
        className="flex items-center gap-4 font-body text-sm text-white/50"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.25}
      >
        <span>{article.date}</span>
        <span className="w-1 h-1 rounded-full bg-white/30" />
        <span>{article.readTime}</span>
      </motion.div>
    </div>
  );
}

function ArticleBody({ article }: { article: ArticleContent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="max-w-3xl mx-auto px-6 md:px-10">
      {article.content.map((paragraph, i) => (
        <motion.p
          key={i}
          className={`font-body text-lg text-navy/80 leading-relaxed mb-6 ${
            i === 1 ? 'text-xl md:text-2xl text-navy font-display' : ''
          }`}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={i * 0.05}
        >
          {paragraph}
        </motion.p>
      ))}

      <motion.div
        className="mt-12 pt-8 border-t border-navy/10"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.5}
      >
        <Link
          to="/thinking"
          className="link-underline font-body text-sm text-[#1764ae] hover:text-navy transition-colors duration-200 tracking-wide"
        >
          ← Back to All Articles
        </Link>
      </motion.div>
    </div>
  );
}
