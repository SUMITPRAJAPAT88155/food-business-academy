import { useState, useEffect, useCallback } from 'react';
import { Check, ArrowRight, X, Star, Rocket, TrendingUp, Crown, Target, Users, Layers, ClipboardList, Settings2, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type Tier = 'silver' | 'gold' | 'platinum';

interface Program {
  tier: Tier;
  badge: string;
  name: string;
  headline: string;
  positioning: string;
  focusAreas: string[];
  bestFor: string;
  cta: string;
  featured: boolean;
  icon: typeof Rocket;
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
    headline: 'Start Your Food Business Right',
    positioning: 'For entrepreneurs who are starting their food-business journey.',
    focusAreas: [
      'Food business idea validation',
      'Business model selection',
      'Market research',
      'Menu planning',
      'Food costing',
      'Pricing strategy',
      'Basic launch planning',
    ],
    bestFor: 'First-time food entrepreneurs and people planning to start a food business.',
    cta: 'Explore Program',
    featured: false,
    icon: Rocket,
  },
  {
    tier: 'gold',
    badge: 'GROWTH',
    name: 'Gold',
    headline: 'Build Systems & Grow',
    positioning: 'For food-business owners who want to build systems and grow.',
    focusAreas: [
      'Business growth strategy',
      'Marketing strategy',
      'Customer acquisition',
      'Sales systems',
      'Operations',
      'Team management',
      'SOPs',
      'Automation',
      'Growth planning',
    ],
    bestFor: 'Existing restaurants, cafes, cloud kitchens and food-business owners who want structured growth.',
    cta: 'Explore Program',
    featured: true,
    icon: TrendingUp,
  },
  {
    tier: 'platinum',
    badge: 'MASTERY',
    name: 'Platinum',
    headline: 'Scale & Systemize',
    positioning: 'For established food businesses that want advanced systems, automation and scaling.',
    focusAreas: [
      'Advanced business systems',
      'SOP implementation',
      'Automation',
      'Dashboards and reporting',
      'Team systems',
      'Process optimization',
      'Scaling strategy',
      'Franchise readiness',
    ],
    bestFor: 'Established food businesses preparing for serious scaling and systemization.',
    cta: 'Explore Program',
    featured: false,
    icon: Crown,
  },
];

const programDetails: Record<Tier, ProgramDetail> = {
  silver: {
    whoItsFor:
      'Designed for first-time food entrepreneurs and individuals who are planning to start a food business but have not launched yet. If you have a concept in mind and want to get the foundations right before investing your time and money, this is where you begin.',
    whatYouLearn: [
      'How to validate your food business idea before you spend money',
      'Choosing the right business model — restaurant, cloud kitchen, cafe, food brand or home kitchen',
      'Practical market research to understand your audience and competition',
      'Menu planning that aligns with your concept and target customer',
      'Food costing fundamentals so you understand what each dish really costs',
      'Pricing strategy to protect your margins from day one',
      'A basic launch plan that takes you from idea to opening step by step',
    ],
    keyOutcomes: [
      'Clarity on whether your food business idea is viable and worth pursuing',
      'A clear understanding of which business model fits your goals and resources',
      'A foundational grasp of costing and pricing so you do not underprice',
      'A practical, step-by-step launch plan you can follow with confidence',
    ],
    howItWorks: [
      'Structured guidance sessions covering each foundation area',
      'Practical frameworks and exercises you apply to your own concept',
      'Templates for menu planning, costing and basic launch checklists',
      'Guidance to help you avoid the common mistakes first-time entrepreneurs make',
    ],
  },
  gold: {
    whoItsFor:
      'Built for existing food-business owners — restaurants, cafes, cloud kitchens and food brands — who have launched but are struggling to grow consistently. If your business is running but lacks systems, marketing clarity or a growth plan, this program helps you build the structure you need.',
    whatYouLearn: [
      'A structured growth strategy tailored to your specific business type',
      'Marketing strategy to attract customers consistently rather than relying on word of mouth',
      'Customer acquisition systems that bring in a steady flow of orders or walk-ins',
      'Sales systems to increase average order value and repeat business',
      'Operations improvements that reduce chaos and make day-to-day running smoother',
      'Team management fundamentals so you can delegate without losing control',
      'SOPs (Standard Operating Procedures) so your business runs the same way every day',
      'Automation tools to reduce manual work in marketing, orders and reporting',
      'A practical growth plan with clear priorities and milestones',
    ],
    keyOutcomes: [
      'A clear growth strategy with prioritized actions for your business',
      'Marketing and customer acquisition systems that produce consistent results',
      'Operations and SOPs that make your business less dependent on you personally',
      'A team management structure that allows you to scale without burnout',
      'A growth roadmap with milestones you can track and measure',
    ],
    howItWorks: [
      'Deep-dive strategy sessions focused on your specific business and challenges',
      'Custom frameworks for marketing, operations and team management',
      'SOP templates and automation tools you can implement directly',
      'Regular check-ins to track progress, solve problems and course-correct',
    ],
  },
  platinum: {
    whoItsFor:
      'For established food businesses that are ready for serious scaling and systemization. If you have a working business, a team and revenue — but operations still depend heavily on you, and growth feels blocked by a lack of systems — this program is designed to take you to the next level.',
    whatYouLearn: [
      'Advanced business systems that allow your operation to run without your daily involvement',
      'Full SOP implementation across kitchen, operations, service and management',
      'Automation of repetitive tasks — ordering, inventory, reporting and marketing',
      'Dashboards and reporting systems so you can see your business performance at a glance',
      'Team systems — hiring, training, performance tracking and accountability structures',
      'Process optimization to reduce waste, improve speed and increase consistency',
      'A scaling strategy for new locations, new revenue streams or brand expansion',
      'Franchise readiness — the systems, documentation and standards required to scale replicably',
    ],
    keyOutcomes: [
      'A business that runs on systems rather than on your personal daily effort',
      'Complete SOPs and automation that reduce operational chaos and manual workload',
      'Dashboards that give you real-time visibility into costs, sales and performance',
      'A structured team system that supports growth without losing quality',
      'A clear scaling or expansion roadmap — whether that means new outlets, franchise readiness or brand growth',
    ],
    howItWorks: [
      'One-to-one strategic consulting focused on your scaling goals',
      'Comprehensive business audit to identify system gaps and growth blockers',
      'Custom implementation plan with prioritized systems and SOPs',
      'Hands-on guidance through automation and dashboard setup',
      'Regular accountability sessions to ensure implementation stays on track',
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
        <p className={`font-serif text-sm italic mb-5 ${featured ? 'text-gold-400' : 'text-gold-600'}`}>
          {program.headline}
        </p>

        {/* Positioning */}
        <p className={`text-sm leading-relaxed mb-6 ${featured ? 'text-cream-200/60' : 'text-charcoal-600'}`}>
          {program.positioning}
        </p>

        {/* Divider */}
        <div className={`h-px mb-6 ${featured ? 'bg-cream-200/10' : 'bg-charcoal-100'}`} />

        {/* Focus Areas */}
        <p className={`text-[11px] font-semibold uppercase tracking-wider mb-4 ${featured ? 'text-cream-200/40' : 'text-charcoal-400'}`}>
          Focus Areas
        </p>
        <div className="space-y-2.5 mb-8 flex-1">
          {program.focusAreas.map((area) => (
            <div key={area} className="flex items-start gap-2.5">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                featured ? 'bg-gold-400/20' : 'bg-gold-400/15'
              }`}>
                <Check className={`w-3 h-3 ${featured ? 'text-gold-400' : 'text-gold-600'}`} strokeWidth={3} />
              </div>
              <span className={`text-[13px] leading-snug ${featured ? 'text-cream-100/85' : 'text-charcoal-700'}`}>
                {area}
              </span>
            </div>
          ))}
        </div>

        {/* Best For */}
        <div className={`mb-7 p-4 rounded-lg ${featured ? 'bg-charcoal-800/60' : 'bg-cream-100/70'}`}>
          <p className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 ${featured ? 'text-gold-400/70' : 'text-gold-600/80'}`}>
            Best For
          </p>
          <p className={`text-[13px] leading-relaxed ${featured ? 'text-cream-200/55' : 'text-charcoal-600'}`}>
            {program.bestFor}
          </p>
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
      title: 'Who It\u2019s For',
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
      icon: BarChart3,
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
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-2xl my-4 sm:my-8 rounded-2xl overflow-hidden shadow-2xl animate-scale-in ${
          featured ? 'border-2 border-gold-400/40' : 'border border-charcoal-200'
        }`}
      >
        {/* Header */}
        <div className={`relative px-5 sm:px-8 py-5 sm:py-6 ${featured ? 'bg-charcoal-900' : 'bg-white'}`}>
          {/* Close */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              featured
                ? 'bg-charcoal-800 text-cream-200/60 hover:bg-charcoal-700 hover:text-cream-50'
                : 'bg-charcoal-100 text-charcoal-500 hover:bg-charcoal-200 hover:text-charcoal-800'
            }`}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4 mb-3 pr-10">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
              featured ? 'bg-gold-400/15 border border-gold-400/20' : 'bg-charcoal-900/5'
            }`}>
              <Icon className={`w-6 h-6 ${featured ? 'text-gold-400' : 'text-charcoal-700'}`} strokeWidth={1.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className={`font-serif text-xl sm:text-2xl font-bold ${featured ? 'text-cream-50' : 'text-charcoal-900'}`}>
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
            {program.positioning}
          </p>
        </div>

        {/* Body */}
        <div className="bg-cream-50 px-5 sm:px-8 py-6 sm:py-7 max-h-[55vh] sm:max-h-[60vh] overflow-y-auto">
          <div className="space-y-6 sm:space-y-7">
            {detailSections.map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.title}>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded-md bg-gold-400/15 flex items-center justify-center flex-shrink-0">
                      <SectionIcon className="w-4 h-4 text-gold-600" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-serif text-base font-bold text-charcoal-900">
                      {section.title}
                    </h4>
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
        <div className="bg-white px-5 sm:px-8 py-5 sm:py-6 border-t border-charcoal-100 flex flex-col sm:flex-row items-center justify-between gap-4">
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
