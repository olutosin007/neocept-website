import React, { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ContactCTA } from '../components/ContactCTA';
import { fadeUp, fadeIn } from '../lib/animations';

interface ArticleSection {
  type: 'paragraph' | 'heading' | 'quote' | 'lead';
  content: string;
}

interface ArticleContent {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  sections: ArticleSection[];
}

const ARTICLES: Record<string, ArticleContent> = {
  'the-myth-of-the-creative-machine': {
    slug: 'the-myth-of-the-creative-machine',
    category: 'AI & Creativity',
    title: 'The Myth of the Creative Machine',
    date: 'February 2026',
    readTime: '6 min read',
    excerpt:
      "AI doesn't replace creative thinking — it raises the stakes. The agencies that thrive will be the ones that know the difference.",
    sections: [
      {
        type: 'lead',
        content:
          "There's a persistent myth circulating in creative industries: that AI will replace creative thinking. It's a seductive narrative — simple, dramatic, and entirely wrong.",
      },
      {
        type: 'paragraph',
        content:
          "Walk into any marketing conference, scroll through any industry publication, and you'll encounter some version of this story. AI is coming for creative jobs. Designers, copywriters, strategists — all redundant within a decade. It makes for compelling headlines, but it fundamentally misunderstands both creativity and artificial intelligence.",
      },
      {
        type: 'heading',
        content: 'The Real Distinction',
      },
      {
        type: 'paragraph',
        content:
          "AI doesn't replace creative thinking. It raises the stakes. The agencies and brands that thrive in this new landscape won't be the ones that outsource creativity to machines. They'll be the ones that understand a fundamental distinction: AI is exceptional at execution, but strategy remains irreducibly human.",
      },
      {
        type: 'paragraph',
        content:
          "Consider what AI does well: it can generate variations at scale, analyse patterns in data, produce content that follows established templates. It can create a hundred headline options in seconds. It can produce serviceable copy that hits all the right keywords. It can generate images that are technically competent and visually coherent.",
      },
      {
        type: 'paragraph',
        content:
          "What it cannot do is understand why a particular positioning will resonate with a specific audience at a specific moment in culture. It cannot feel the tension between what a brand says and what it does. It cannot make the intuitive leap from insight to idea — that moment when disparate observations crystallise into something genuinely new.",
      },
      {
        type: 'quote',
        content:
          'The question isn\'t whether AI will replace creative work. It\'s whether creative professionals will adapt to leverage AI as an amplifier rather than fearing it as a replacement.',
      },
      {
        type: 'heading',
        content: 'Execution vs. Strategy',
      },
      {
        type: 'paragraph',
        content:
          "At Neocept, we've built our practice around this distinction. We use AI to scale execution — content systems that maintain brand voice across hundreds of touchpoints, automation that frees teams from repetitive tasks, data-driven optimisation that improves performance continuously. These are genuine productivity gains.",
      },
      {
        type: 'paragraph',
        content:
          "But strategy? That's where human insight is non-negotiable. The decision about what a brand should stand for, the identification of a market opportunity, the creative direction that will cut through noise — these require judgement, taste, and the kind of contextual understanding that emerges from lived experience.",
      },
      {
        type: 'heading',
        content: 'Who Should Be Worried',
      },
      {
        type: 'paragraph',
        content:
          "The agencies that will struggle are the ones that were already commoditising creativity. If your value proposition was 'we make things' rather than 'we solve problems,' AI is indeed a threat. If you were competing primarily on volume and speed, you're now competing against a technology that can outpace any human team.",
      },
      {
        type: 'paragraph',
        content:
          "But for those who lead with strategic thinking and creative judgement, AI is the most powerful amplifier we've ever had. It handles the production work that used to consume creative teams, freeing them to focus on the thinking that actually differentiates brands in crowded markets.",
      },
      {
        type: 'heading',
        content: 'The Stakes Are Higher',
      },
      {
        type: 'paragraph',
        content:
          "Here's the uncomfortable truth: the floor for execution quality is rising. AI-generated content is getting better rapidly. That means the baseline expectation for what brands produce is increasing. Competent execution is no longer a differentiator — it's table stakes.",
      },
      {
        type: 'paragraph',
        content:
          "Differentiation will come from the one place AI cannot go: genuine creative leadership, strategic clarity, and the courage to make work that actually matters. The brands that win won't be the ones with the best AI tools. They'll be the ones with the clearest thinking and the boldest creative vision.",
      },
      {
        type: 'quote',
        content:
          'AI is not the enemy of creativity. Mediocrity is. And mediocrity just got a lot harder to hide behind.',
      },
      {
        type: 'paragraph',
        content:
          "The myth of the creative machine is comforting in its simplicity. But the reality is more nuanced and ultimately more optimistic. AI isn't replacing creativity — it's revealing what creativity actually is. And for those who understand the difference, the opportunities have never been greater.",
      },
    ],
  },
  'why-most-rebrands-fail': {
    slug: 'why-most-rebrands-fail',
    category: 'Brand Strategy',
    title: 'Why Most Rebrands Fail Before They Launch',
    date: 'January 2026',
    readTime: '7 min read',
    excerpt:
      "Most rebrands collapse under the weight of internal politics, not bad design. Here's how to build alignment before you build anything else.",
    sections: [
      {
        type: 'lead',
        content:
          "Most rebrands don't fail because of bad design. They fail because of bad process. Specifically, they fail because the hard work of building internal alignment gets skipped in favour of jumping straight to the 'exciting' creative work.",
      },
      {
        type: 'paragraph',
        content:
          "It's understandable — everyone wants to see the new logo, the fresh colour palette, the sleek website. Executives want tangible progress. Agencies want to demonstrate their creative prowess. The strategic foundation feels like an obstacle to the real work, so it gets rushed or skipped entirely.",
      },
      {
        type: 'paragraph',
        content:
          "This is precisely why so many rebrands collapse under their own weight.",
      },
      {
        type: 'heading',
        content: 'The Predictable Pattern of Failure',
      },
      {
        type: 'paragraph',
        content:
          "The pattern is depressingly predictable: a rebrand is commissioned, an agency produces beautiful work, and then the real problems begin. Key stakeholders who weren't properly consulted start raising objections. The CEO's spouse hates the colour. The sales team points out that customers weren't considered. The legal department flags trademark issues that should have been caught months ago.",
      },
      {
        type: 'paragraph',
        content:
          "Death by a thousand cuts. Each objection seems minor in isolation, but collectively they erode confidence in the entire direction. The agency defends their work. Internal factions form. What was supposed to be a unifying initiative becomes a source of division.",
      },
      {
        type: 'quote',
        content:
          "The solution isn't better design. It's better process. And better process starts before any creative work begins.",
      },
      {
        type: 'heading',
        content: 'The Three Essential Questions',
      },
      {
        type: 'paragraph',
        content:
          "Before any creative work begins, there needs to be absolute clarity on three questions: Why are we doing this? What does success look like? And who needs to be aligned for this to work?",
      },
      {
        type: 'paragraph',
        content:
          "The first question seems obvious, but the answers are often surprisingly vague. 'We need to modernise' or 'Our brand doesn't reflect who we are anymore' aren't strategies — they're symptoms. Dig deeper. What specific business problem is the rebrand solving? What opportunity is it capturing? Without clarity here, every subsequent decision becomes a matter of personal preference.",
      },
      {
        type: 'paragraph',
        content:
          "The second question forces rigour. If you can't define what success looks like, you can't make decisions. Is success measured in brand awareness? Employee pride? Customer perception? Sales impact? Different metrics lead to different creative directions. This isn't about limiting creativity — it's about focusing it.",
      },
      {
        type: 'heading',
        content: 'The Alignment Imperative',
      },
      {
        type: 'paragraph',
        content:
          "That third question is where most brands fail. They assume that executive sign-off is sufficient. It isn't. Every person who will be affected by the rebrand — or who has the power to derail it — needs to be brought into the process early.",
      },
      {
        type: 'paragraph',
        content:
          "This doesn't mean design by committee. It means strategic alignment. There's a crucial difference. Design by committee produces mediocrity because it tries to satisfy everyone's aesthetic preferences. Strategic alignment creates clarity because it ensures everyone agrees on the destination, even if they have different opinions about the vehicle.",
      },
      {
        type: 'paragraph',
        content:
          "Map out every stakeholder who has influence over the outcome. Interview them. Understand their concerns, their aspirations, their fears. Surface conflicts early, when they can be resolved through conversation rather than political warfare.",
      },
      {
        type: 'quote',
        content:
          'The most successful rebrands we\'ve led share a common characteristic: by the time we present creative work, the strategic foundation is so solid that the design feels inevitable.',
      },
      {
        type: 'heading',
        content: 'Making Creative Work Inevitable',
      },
      {
        type: 'paragraph',
        content:
          "When the strategic work is done properly, something remarkable happens. There's no debate about direction because the direction was established through rigorous process. Stakeholders feel ownership because they contributed to the foundation. Objections are rare because potential concerns were addressed before they became problems.",
      },
      {
        type: 'paragraph',
        content:
          "The creative work becomes an expression of shared conviction rather than a proposal to be negotiated. This is when agencies do their best work — not when they're defending their choices, but when they're building on a foundation of genuine alignment.",
      },
      {
        type: 'heading',
        content: 'The Path Forward',
      },
      {
        type: 'paragraph',
        content:
          "If you're considering a rebrand, resist the temptation to start with the exciting stuff. The logo can wait. The colour palette can wait. What cannot wait is the foundational work that will determine whether your rebrand succeeds or becomes another cautionary tale.",
      },
      {
        type: 'paragraph',
        content:
          "Build alignment before you build anything else. Invest in process before you invest in design. The creative work will be better for it — and it will actually survive contact with reality.",
      },
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
        description={article.excerpt}
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

  const renderSection = (section: ArticleSection, index: number) => {
    const baseDelay = index * 0.03;

    switch (section.type) {
      case 'lead':
        return (
          <motion.p
            key={index}
            className="font-body text-xl md:text-2xl text-navy leading-relaxed mb-8"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={baseDelay}
          >
            {section.content}
          </motion.p>
        );

      case 'heading':
        return (
          <motion.h2
            key={index}
            className="font-display text-2xl md:text-3xl text-navy mt-12 mb-6"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={baseDelay}
          >
            {section.content}
          </motion.h2>
        );

      case 'quote':
        return (
          <motion.blockquote
            key={index}
            className="border-l-4 border-[#C9A84C] pl-6 my-10"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={baseDelay}
          >
            <p className="font-display text-xl md:text-2xl text-navy/90 italic leading-relaxed">
              {section.content}
            </p>
          </motion.blockquote>
        );

      case 'paragraph':
      default:
        return (
          <motion.p
            key={index}
            className="font-body text-[18px] text-navy/80 leading-[1.75] mb-8"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={baseDelay}
          >
            {section.content}
          </motion.p>
        );
    }
  };

  return (
    <div ref={ref} className="max-w-[680px] mx-auto px-6 md:px-10">
      {article.sections.map((section, i) => renderSection(section, i))}

      <motion.div
        className="mt-16 pt-8 border-t border-navy/10"
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
