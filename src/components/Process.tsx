import { Calendar, Search, PenTool, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Book a Consultation',
    description: 'Schedule a consultation call to discuss your food business and what you want to achieve.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Understand Your Business',
    description: 'We take a deep look at your current situation, challenges, goals and opportunities.',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Build the Strategy',
    description: 'Together, we create a practical, tailored strategy designed for your specific business.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Implement & Grow',
    description: 'Put the plan into action with ongoing guidance and support to keep your business growing.',
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-400/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-xs font-semibold text-gold-600 uppercase tracking-[0.2em] mb-4">
            How It Works
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-[1.15] mb-5">
            A Clear Path to
            <span className="text-gold-600 italic"> Business Growth</span>
          </h2>
          <p className="text-charcoal-600 text-base leading-relaxed">
            A structured, transparent process designed to take you from where you are to where
            you want to be.
          </p>
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Horizontal connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-400/10 via-gold-400/40 to-gold-400/10" />

          <div className="grid md:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`relative text-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {/* Step number circle */}
                  <div className="relative inline-flex items-center justify-center mb-7">
                    <div className="relative w-20 h-20 rounded-full bg-white border-2 border-gold-400/30 shadow-lg group hover:border-gold-400 transition-all duration-300 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-gold-600" strokeWidth={1.5} />
                      {/* Glow on hover */}
                      <div className="absolute inset-0 rounded-full bg-gold-400/0 group-hover:bg-gold-400/10 transition-colors duration-300" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-8 h-8 rounded-full bg-charcoal-900 text-gold-400 text-xs font-bold flex items-center justify-center shadow-md border border-gold-400/20 font-serif">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg lg:text-xl font-bold text-charcoal-900 mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed max-w-[260px] mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
