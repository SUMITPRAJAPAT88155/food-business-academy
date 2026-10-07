import { Check, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const aboutMainImage = 'https://images.pexels.com/photos/36870973/pexels-photo-36870973.jpeg?auto=compress&cs=tinysrgb&w=800';
const aboutSecondaryImage = 'https://images.pexels.com/photos/38539265/pexels-photo-38539265.jpeg?auto=compress&cs=tinysrgb&w=500';

const capabilities = [
  'Business Strategy',
  'Restaurant Setup',
  'Cloud Kitchen Strategy',
  'Menu Planning',
  'Costing',
  'Marketing',
  'Operations',
  'Team Management',
  'Growth Systems',
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-cream-50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl -z-10" />

      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image collage */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-charcoal-900/20">
              <img
                src={aboutMainImage}
                alt="Professional chef tossing a pan in a commercial kitchen"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/30 to-transparent" />
            </div>

            {/* Secondary overlapping image */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-40 sm:w-52 rounded-xl overflow-hidden shadow-2xl border-4 border-cream-50">
              <img
                src={aboutSecondaryImage}
                alt="Two chefs working with focus in a professional kitchen"
                className="w-full h-28 sm:h-36 object-cover"
                loading="lazy"
              />
            </div>

            {/* Decorative accent frame */}
            <div className="absolute -top-5 -left-5 w-28 h-28 border-t-2 border-l-2 border-gold-400/30 rounded-tl-2xl -z-10" />

            {/* Floating badge */}
            <div className="absolute top-8 left-8 bg-charcoal-900/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gold-400/20">
              <div className="font-serif text-3xl font-bold text-gold-400 leading-none">9+</div>
              <div className="text-[10px] text-cream-200/60 uppercase tracking-[0.15em] mt-1.5 font-medium">
                Core Business
                <br />Areas
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold text-gold-600 uppercase tracking-[0.2em] mb-4">
              About Food Business Academy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-[1.15] mb-6">
              More Than a Course.
              <span className="block text-gold-600 italic mt-1">A Business Growth System.</span>
            </h2>
            <p className="text-charcoal-600 text-base lg:text-lg leading-[1.75] mb-8">
              Food Business Academy helps entrepreneurs understand the practical side of
              building and scaling a food business. We go beyond theory — providing real-world
              systems, frameworks and guidance that food businesses actually need to succeed.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3.5 mb-10">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-center gap-2.5 text-sm text-charcoal-700 font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-gold-400/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-gold-600" strokeWidth={3} />
                  </div>
                  {cap}
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollTo('#services')}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal-900 text-cream-50 font-semibold rounded-md hover:bg-charcoal-800 transition-all duration-300 hover:shadow-xl text-sm"
            >
              Learn More About Us
              <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
