import { useState, useEffect, useCallback } from 'react';
import { Check, ArrowRight, X, Star, Award, Crown, Sparkles, Target, Users, Layers } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type Tier = 'silver' | 'gold' | 'platinum';

interface Program {
  tier: Tier;
  badge: string;
  name: string;
  headline: string;
  bestFor: string;
  description: string;
  benefits: string[];
  cta: string;
  featured: boolean;
  icon: typeof Sparkles;
}

interface ProgramDetail {
  whoItsFor: string;
  whatYouLearn: string[];
  keyOutcomes: string[];
  howItWorks: string[];
}

const programs: Program[] = [
  {
    tier: 'silver',
    badge: 'FOUNDATION',
    name: 'Silver',
    headline: 'Build the Right Foundation',
    bestFor: 'For aspiring and early-stage food entrepreneurs',
    description: 'Understand the fundamentals of building a strong and profitable food business before you invest your time and money.',
    benefits: [
      'Food Business Fundamentals',
      'Business Concept & Planning',
      'Menu Planning & Costing',
      'Pricing & Profit Basics',
      'Business Setup Roadmap',
      'Practical Growth Guidance',
    ],
    cta: 'Explore Silver',
    featured: false,
    icon: Sparkles,
  },
  {
    tier: 'gold',
    badge: 'GROWTH',
    name: 'Gold',
    headline: 'Launch & Grow Your Food Business',
    bestFor: 'For entrepreneurs ready to launch, improve or grow their food business',
    description: 'Learn practical systems for launching and growing a restaurant, cloud kitchen or food brand with better strategy, operations and marketing.',
    benefits: [
      'Business Launch Strategy',
      'Restaurant / Cloud Kitchen Setup',
      'Menu & Pricing Strategy',
      'Food Cost & Margin Management',
      'Marketing & Customer Acquisition',
      'Operations & Business Systems',
      'Growth Planning',
    ],
    cta: 'Explore Gold',
    featured: true,
    icon: Award,
  },
  {
    tier: 'platinum',
    badge: 'MASTERY',
    name: 'Platinum',
    headline: 'Build a Scalable Food Business',
    bestFor: 'For serious food entrepreneurs seeking deeper strategy and accountability',
    description: 'Get a more advanced business-growth approach focused on strategy, systems, profitability and sustainable expansion.',
    benefits: [
      'Personalized Business Strategy',
      'Advanced Profitability Planning',
      'Operations & Management Systems',
      'Marketing & Sales Strategy',
      'Growth & Expansion Planning',
      'Accountability & Implementation Support',
      'Long-Term Business Roadmap',
    ],
    cta: 'Explore Platinum',
    featured: false,
    icon: Crown,
  },
];

const programDetails: Record<Tier, ProgramDetail> = {
  silver: {
    whoItsFor:
      'Ideal for individuals who are planning to start a food business or are in the very early stages of setting one up. If you have an idea but are unsure where to begin, this is your starting point.',
    whatYouLearn: [
      'How the food business actually works — the real fundamentals',
      'How to validate your business concept before investing',
      'Menu planning, food costing and pricing basics',
      'How to create a practical business setup roadmap',
      'Common mistakes first-time food entrepreneurs make and how to avoid them',
    ],
    keyOutcomes: [
      'Clarity on whether your food business idea is viable',
      'A foundational understanding of costs, pricing and profitability',
      'A step-by-step roadmap for setting up your business',
      'Confidence to move forward with the right foundations',
    ],
    howItWorks: [
      'Structured guidance sessions covering core business fundamentals',
      'Practical exercises and frameworks you can apply immediately',
      'Access to resources and templates for planning and costing',
      'Ongoing guidance to keep you on the right track',
    ],
  },
  gold: {
    whoItsFor:
      'Designed for entrepreneurs who are ready to launch their food business or have recently started and want to grow. Whether it is a restaurant, cloud kitchen, cafe or food brand — this program helps you build real momentum.',
    whatYouLearn: [
      'A complete launch strategy tailored to your business type',
      'Restaurant and cloud kitchen setup essentials',
      'Menu engineering and pricing strategy for profitability',
      'Food cost and margin management systems',
      'Marketing and customer acquisition strategies that work',
      'Operations and business systems for smoother day-to-day running',
      'How to plan and prepare for sustainable growth',
    ],
    keyOutcomes: [
      'A clear launch or growth strategy for your specific business',
      'Better control over your costs, margins and pricing',
      'A structured approach to marketing and customer acquisition',
      'Operational systems that make your business easier to run',
      'A practical growth plan you can implement step by step',
    ],
    howItWorks: [
      'Deep-dive strategy sessions focused on your business',
      'Custom frameworks for operations, costing and marketing',
      'Templates, tools and systems you can implement directly',
      'Regular check-ins to track progress and course-correct',
    ],
  },
  platinum: {
    whoItsFor:
      'For serious food entrepreneurs and business owners who want a deeper, more advanced approach to growth. If you are committed to building a scalable, profitable and sustainable food business, this is for you.',
    whatYouLearn: [
      'Personalized business strategy built around your specific goals',
      'Advanced profitability planning and financial systems',
      'Operations and management systems for multi-location or high-volume growth',
      'Marketing and sales strategy for sustained customer acquisition',
      'Growth and expansion planning — including new locations, brands or revenue streams',
      'Accountability and implementation support to keep you executing',
      'A long-term business roadmap with clear milestones',
    ],
    keyOutcomes: [
      'A personalized, advanced growth strategy for your business',
      'Stronger financial control and profitability systems',
      'Scalable operations that can handle growth without breaking',
      'A clear long-term roadmap with actionable milestones',
      'Ongoing accountability to ensure consistent execution',
    ],
    howItWorks: [
      'One-to-one strategic consulting tailored to your business',
      'Comprehensive business audit and opportunity analysis',
      'Custom growth roadmap with prioritized action steps',
      'Regular accountability sessions to track implementation',
      'Ongoing access to strategic guidance as you scale',
    ],
  },
};

function ProgramCard({
  program,
  index,
  isVisible,
  onExplore,
}: {
  program: Program;
  index: number;
  isVisible: boolean;
  onExplore: (tier: Tier) => void;
}) {
  const Icon = program.icon;
  const featured = program.featured;

  return (
    <div
      className={`relative flex flex-col rounded-xl transition-all duration-500 hover:-translate-y-2 ${
        featured
          ? 'bg-charcoal-900 border border-gold-400/40 shadow-2xl shadow-charcoal-900/25 lg:scale-[1.04] lg:-mt-3 z-10'
          : 'bg-white border border-charcoal-200 shadow-lg shadow-charcoal-900/5'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Most Popular ribbon for Gold */}
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-5 py-1.5 bg-gradient-to-r from-gold-400 to-gold-600 text-charcoal-900 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-lg whitespace-nowrap z-20">
          <Star className="w-3 h-3 fill-charcoal-900" strokeWidth={0} />
          Most Popular
        </div>
      )}

      <div className="p-7 lg:p-8 flex flex-col flex-1">
        {/* Top: Icon + Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            featured ? 'bg-gold-400/15 border border-gold-400/20' : 'bg-charcoal-900/5'
          }`}>
            <Icon className={`w-6 h-6 ${featured ? 'text-gold-400' : 'text-charcoal-700'}`} strokeWidth={1.5} />
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full ${
            featured
              ? 'bg-gold-400/15 text-gold-400 border border-gold-400/20'
              : 'bg-charcoal-100 text-charcoal-500'
          }`}>
            {program.badge}
          </span>
        </div>

        {/* Title + Headline */}
        <h3 className={`font-serif text-2xl font-bold mb-1 ${featured ? 'text-cream-50' : 'text-charcoal-900'}`}>
          {program.name}
        </h3>
        <p className={`font-serif text-sm italic mb-4 ${featured ? 'text-gold-400' : 'text-gold-600'}`}>
          {program.headline}
        </p>

        {/* Best for */}
        <p className={`text-[11px] font-semibold uppercase tracking-wider mb-3 ${featured ? 'text-cream-200/40' : 'text-charcoal-400'}`}>
          Best for
        </p>
        <p className={`text-sm leading-relaxed mb-5 ${featured ? 'text-cream-200/60' : 'text-charcoal-600'}`}>
          {program.bestFor}
        </p>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 ${featured ? 'text-cream-200/50' : 'text-charcoal-500'}`}>
          {program.description}
        </p>

        {/* Divider */}
        <div className={`h-px mb-6 ${featured ? 'bg-cream-200/10' : 'bg-charcoal-100'}`} />

        {/* Benefits */}
        <div className="space-y-2.5 mb-8 flex-1">
          {program.benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-2.5">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                featured ? 'bg-gold-400/20' : 'bg-gold-400/15'
              }`}>
                <Check className={`w-3 h-3 ${featured ? 'text-gold-400' : 'text-gold-600'}`} strokeWidth={3} />
              </div>
              <span className={`text-[13px] leading-snug ${featured ? 'text-cream-100/85' : 'text-charcoal-700'}`}>
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => onExplore(program.tier)}
          className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-md transition-all duration-300 text-sm ${
            featured
              ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-charcoal-900 hover:shadow-xl hover:shadow-gold-600/30'
              : 'bg-charcoal-900 text-cream-50 hover:bg-charcoal-800'
          }`}
        >
          {program.cta}
          <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

function ProgramModal({
  tier,
  onClose,
}: {
  tier: Tier;
  onClose: () => void;
}) {
  const program = programs.find((p) => p.tier === tier)!;
  const detail = programDetails[tier];
  const featured = program.featured;
  const Icon = program.icon;

  const scrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  const detailSections = [
    {
      icon: Users,
      title: 'Who It&rsquo;s For',
      content: detail.whoItsFor,
      type: 'text' as const,
    },
    {
      icon: Target,
      title: 'What You Learn',
      items: detail.whatYouLearn,
      type: 'list' as const,
    },
    {
      icon: Award,
      title: 'Key Outcomes',
      items: detail.keyOutcomes,
      type: 'list' as const,
    },
    {
      icon: Layers,
      title: 'How the Program Works',
      items: detail.howItWorks,
      type: 'list' as const,
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-2xl my-8 rounded-2xl overflow-hidden shadow-2xl animate-scale-in ${
          featured ? 'border-2 border-gold-400/40' : 'border border-charcoal-200'
        }`}
      >
        {/* Header */}
        <div className={`relative px-6 sm:px-8 py-6 ${featured ? 'bg-charcoal-900' : 'bg-white'}`}>
          {/* Close */}
          <button
            onClick={onClose}
            className={`absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              featured
                ? 'bg-charcoal-800 text-cream-200/60 hover:bg-charcoal-700 hover:text-cream-50'
                : 'bg-charcoal-100 text-charcoal-500 hover:bg-charcoal-200 hover:text-charcoal-800'
            }`}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4 mb-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
              featured ? 'bg-gold-400/15 border border-gold-400/20' : 'bg-charcoal-900/5'
            }`}>
              <Icon className={`w-6 h-6 ${featured ? 'text-gold-400' : 'text-charcoal-700'}`} strokeWidth={1.5} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className={`font-serif text-2xl font-bold ${featured ? 'text-cream-50' : 'text-charcoal-900'}`}>
                  {program.name}
                </h3>
                <span className={`text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full ${
                  featured
                    ? 'bg-gold-400/15 text-gold-400 border border-gold-400/20'
                    : 'bg-charcoal-100 text-charcoal-500'
                }`}>
                  {program.badge}
                </span>
              </div>
              <p className={`font-serif text-sm italic ${featured ? 'text-gold-400' : 'text-gold-600'}`}>
                {program.headline}
              </p>
            </div>
          </div>
          <p className={`text-sm leading-relaxed ${featured ? 'text-cream-200/60' : 'text-charcoal-600'}`}>
            {program.bestFor}
          </p>
        </div>

        {/* Body */}
        <div className="bg-cream-50 px-6 sm:px-8 py-7 max-h-[60vh] overflow-y-auto">
          <div className="space-y-7">
            {detailSections.map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.title}>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded-md bg-gold-400/15 flex items-center justify-center flex-shrink-0">
                      <SectionIcon className="w-4 h-4 text-gold-600" strokeWidth={1.5} />
                    </div>
                    <h4
                      className="font-serif text-base font-bold text-charcoal-900"
                      dangerouslySetInnerHTML={{ __html: section.title }}
                    />
                  </div>

                  {section.type === 'text' ? (
                    <p className="text-sm text-charcoal-600 leading-relaxed pl-9">
                      {section.content}
                    </p>
                  ) : (
                    <div className="space-y-2 pl-9">
                      {section.items?.map((item) => (
                        <div key={item} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-gold-400/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-gold-600" strokeWidth={3} />
                          </div>
                          <span className="text-sm text-charcoal-700 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-white px-6 sm:px-8 py-6 border-t border-charcoal-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-charcoal-500 text-center sm:text-left">
            Ready to get started with {program.name}?
          </p>
          <button
            onClick={() => scrollTo('#contact')}
            className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-gold-400 to-gold-600 text-charcoal-900 font-semibold rounded-md hover:shadow-xl hover:shadow-gold-600/30 transition-all duration-300 text-sm whitespace-nowrap w-full sm:w-auto"
          >
            Book a Consultation
            <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Programs() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [modalTier, setModalTier] = useState<Tier | null>(null);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = useCallback((tier: Tier) => setModalTier(tier), []);
  const closeModal = useCallback(() => setModalTier(null), []);

  return (
    <section id="programs" className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-terracotta-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-gold-600 uppercase tracking-[0.2em] mb-4">
            Programs &amp; Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-[1.15] mb-5">
            Choose Your Food Business
            <span className="text-gold-600 italic"> Growth Path</span>
          </h2>
          <p className="text-charcoal-600 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you are starting from zero or ready to scale, choose the level of guidance
            that matches your business journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {programs.map((program, i) => (
            <ProgramCard
              key={program.tier}
              program={program}
              index={i}
              isVisible={isVisible}
              onExplore={openModal}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-charcoal-500">
            Pricing varies based on your business needs.{' '}
            <button
              onClick={() => scrollTo('#contact')}
              className="text-gold-600 font-semibold hover:underline"
            >
              Talk to us
            </button>{' '}
            for a personalized discussion.
          </p>
        </div>
      </div>

      {/* Modal */}
      {modalTier && <ProgramModal tier={modalTier} onClose={closeModal} />}
    </section>
  );
}
