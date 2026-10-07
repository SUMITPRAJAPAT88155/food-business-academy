import { Lightbulb, Focus, DollarSign, ListChecks, Headset, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const sideImage = 'https://images.pexels.com/photos/8112160/pexels-photo-8112160.jpeg?auto=compress&cs=tinysrgb&w=900';

const benefits = [
  {
    icon: Lightbulb,
    title: 'Practical Business Guidance',
    description: 'No fluff. Real, actionable strategies you can implement in your food business immediately.',
  },
  {
    icon: Focus,
    title: 'Industry-Focused Strategy',
    description: 'Every recommendation is tailored specifically to the food business industry and its unique challenges.',
  },
  {
    icon: DollarSign,
    title: 'Profitability First',
    description: 'We focus on what actually matters — building a food business that is genuinely profitable.',
  },
  {
    icon: ListChecks,
    title: 'Step-by-Step Systems',
    description: 'Clear, structured systems that take the guesswork out of running and growing your business.',
  },
  {
    icon: Headset,
    title: 'Personalized Support',
    description: 'Guidance tailored to your specific business situation, not one-size-fits-all advice.',
  },
  {
    icon: TrendingUp,
    title: 'Growth-Focused Approach',
    description: 'Everything is designed with one goal in mind — helping your food business grow sustainably.',
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-24 lg:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Background image strip */}
      <div className="absolute top-0 right-0 w-full h-1/2 opacity-10">
        <img
          src={sideImage}
          alt="Business professionals in a meeting discussing strategy"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/50 to-charcoal-950" />
      </div>

      {/* Glow accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-terracotta-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-gold-400 uppercase tracking-[0.2em] mb-4">
            Why Food Business Academy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-[1.15] mb-5">
            The Difference That
            <span className="text-gold-400 italic"> Drives Results</span>
          </h2>
          <p className="text-cream-200/50 text-base leading-relaxed max-w-xl mx-auto">
            We don&rsquo;t just give advice. We work alongside you to build systems that create
            lasting, measurable growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`group relative bg-charcoal-900/60 backdrop-blur-sm border border-charcoal-800 hover:border-gold-400/30 rounded-xl p-7 transition-all duration-500 hover:bg-charcoal-900/90 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Number */}
                <span className="absolute top-6 right-6 font-serif text-xl font-bold text-charcoal-700/40 group-hover:text-gold-400/20 transition-colors duration-500">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center flex-shrink-0 mb-5 group-hover:bg-gold-400 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-gold-400 group-hover:text-charcoal-900 transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-bold text-cream-50 mb-2.5 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-sm text-cream-200/50 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
