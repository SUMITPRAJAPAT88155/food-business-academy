import { Rocket, Cloud, TrendingUp, Calculator, Megaphone, Settings, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: Rocket,
    title: 'Start Your Food Business',
    description:
      'Understand how to start a food business correctly — from concept to launch, with the right foundations in place.',
  },
  {
    icon: Cloud,
    title: 'Cloud Kitchen',
    description:
      'Build and structure profitable cloud kitchen models that work in today\u2019s delivery-first market.',
  },
  {
    icon: TrendingUp,
    title: 'Restaurant Growth',
    description:
      'Improve operations, marketing and profitability for your existing restaurant business.',
  },
  {
    icon: Calculator,
    title: 'Food Costing',
    description:
      'Understand food costs, margins and pricing strategies to protect and grow your profitability.',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Customer Acquisition',
    description:
      'Build strategies to attract new customers and keep them coming back to your food business.',
  },
  {
    icon: Settings,
    title: 'Business Systems',
    description:
      'Create repeatable systems for smoother operations and sustainable, long-term growth.',
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="services" className="py-24 lg:py-32 bg-charcoal-900 relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-xs font-semibold text-gold-400 uppercase tracking-[0.2em] mb-4">
            What We Help With
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-[1.15] mb-5">
            Everything You Need to
            <span className="text-gold-400 italic"> Build &amp; Grow</span>
          </h2>
          <p className="text-cream-200/60 text-lg leading-relaxed max-w-2xl">
            From starting your first food business to scaling an established brand —
            we cover every critical area of food business growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative bg-charcoal-800/40 border border-charcoal-700/40 rounded-xl p-7 lg:p-8 transition-all duration-500 hover:bg-charcoal-800 hover:border-gold-400/30 hover:shadow-2xl hover:shadow-gold-600/10 hover:-translate-y-1.5 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 font-serif text-5xl font-bold text-charcoal-700/30 group-hover:text-gold-400/10 transition-colors duration-500 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400/15 to-gold-600/5 flex items-center justify-center mb-6 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-500">
                  <Icon className="w-7 h-7 text-gold-400 group-hover:text-charcoal-900 transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-cream-50 mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-cream-200/55 leading-relaxed text-sm mb-5">
                  {service.description}
                </p>

                {/* Learn more link */}
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400/70 group-hover:text-gold-400 transition-colors duration-300"
                >
                  Learn more
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
