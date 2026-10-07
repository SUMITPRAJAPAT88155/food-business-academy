import { Briefcase, Target, TrendingUp, Award, ArrowRight, AlertTriangle as ChallengeIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Placeholder content — replace with your real case studies
const stories = [
  {
    icon: Briefcase,
    businessType: 'Cloud Kitchen',
    tag: 'Delivery Operations',
    challenge: 'Struggling with inconsistent orders and high food costs affecting profitability.',
    strategy: 'Restructured menu pricing, optimized kitchen workflow and built a targeted delivery-platform strategy.',
    result: 'Improved order consistency and reduced food waste significantly within the first quarter.',
  },
  {
    icon: Target,
    businessType: 'Fine Dining Restaurant',
    tag: 'Brand & Marketing',
    challenge: 'Low table occupancy during weekdays and limited brand visibility in the local market.',
    strategy: 'Implemented a weekday marketing campaign, refined the menu and introduced a customer loyalty program.',
    result: 'Increased weekday footfall and built a growing base of repeat customers.',
  },
  {
    icon: TrendingUp,
    businessType: 'Food Brand (QSR)',
    tag: 'Multi-Outlet Operations',
    challenge: 'Rapid expansion leading to operational inconsistencies across multiple outlets.',
    strategy: 'Created standardized operating procedures, training systems and a centralized supply chain model.',
    result: 'Achieved consistent quality across all outlets and smoother day-to-day operations.',
  },
  {
    icon: Award,
    businessType: 'Home Kitchen to Brand',
    tag: 'Business Transition',
    challenge: 'Wanted to transition from a home kitchen to a commercially viable food brand.',
    strategy: 'Built a step-by-step transition plan covering licensing, branding, costing and initial marketing.',
    result: 'Successfully launched as a registered food brand with a clear growth roadmap.',
  },
];

function CaseCard({ story, index, isVisible }: { story: typeof stories[number]; index: number; isVisible: boolean }) {
  const Icon = story.icon;
  return (
    <div
      className={`group relative bg-white border border-charcoal-200 rounded-2xl overflow-hidden shadow-lg shadow-charcoal-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-charcoal-900/10 hover:border-gold-400/30 hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:h-1.5 transition-all duration-500" />

      <div className="p-7 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-gold-400/15 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-gold-600" strokeWidth={1.5} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              {story.businessType}
            </span>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wider text-charcoal-400 bg-charcoal-50 px-2.5 py-1 rounded-full hidden sm:inline-block">
            {story.tag}
          </span>
        </div>

        {/* Case study body */}
        <div className="space-y-5">
          <div className="flex gap-3">
            <ChallengeIcon className="w-4 h-4 text-terracotta-500 flex-shrink-0 mt-1" strokeWidth={2} />
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400 mb-1">Challenge</h4>
              <p className="text-sm text-charcoal-700 leading-relaxed">{story.challenge}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Target className="w-4 h-4 text-charcoal-500 flex-shrink-0 mt-1" strokeWidth={2} />
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-charcoal-400 mb-1">Strategy</h4>
              <p className="text-sm text-charcoal-700 leading-relaxed">{story.strategy}</p>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-charcoal-100">
            <TrendingUp className="w-4 h-4 text-gold-600 flex-shrink-0 mt-1" strokeWidth={2} />
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gold-600 mb-1">Outcome</h4>
              <p className="text-sm text-charcoal-800 leading-relaxed font-medium">{story.result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="success-stories" className="py-24 lg:py-32 bg-cream-50">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold text-gold-600 uppercase tracking-[0.2em] mb-4">
              Success Stories
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-[1.15]">
              Real Businesses.
              <span className="text-gold-600 italic"> Real Approaches.</span>
            </h2>
          </div>
          <p className="text-charcoal-500 text-sm leading-relaxed max-w-md">
            Placeholder case studies showing the kinds of challenges we help food businesses
            overcome. Replace with your own real stories.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {stories.map((story, i) => (
            <CaseCard key={story.businessType} story={story} index={i} isVisible={isVisible} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xs text-charcoal-400 italic mb-5">
            These are placeholder case studies for layout reference. Replace with your actual
            client stories when ready.
          </p>
          <button
            onClick={() => scrollTo('#contact')}
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal-900 text-cream-50 font-semibold rounded-md hover:bg-charcoal-800 transition-all duration-300 hover:shadow-xl text-sm"
          >
            Become Our Next Success Story
            <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
