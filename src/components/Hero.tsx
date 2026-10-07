import { ArrowRight, ChevronDown, Star } from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/37708443/pexels-photo-37708443.jpeg?auto=compress&cs=tinysrgb&w=1920';
const heroSecondaryImage = 'https://images.pexels.com/photos/31860139/pexels-photo-31860139.jpeg?auto=compress&cs=tinysrgb&w=600';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with Ken Burns effect */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional chef preparing food in a warm restaurant kitchen"
          className="w-full h-full object-cover scale-105 animate-[float_20s_ease-in-out_infinite]"
          fetchPriority="high"
        />
        {/* Multi-layer overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-charcoal-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/40" />
        <div className="absolute inset-0 bg-charcoal-950/10" />
      </div>

      {/* Decorative gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Main content */}
          <div className="lg:col-span-7 max-w-2xl">
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/30 backdrop-blur-sm mb-7 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0s', animationFillMode: 'forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-[11px] font-semibold text-gold-300 uppercase tracking-[0.2em]">
                Premium Food Business Consulting
              </span>
            </div>

            <h1
              className="font-serif text-[2.5rem] sm:text-5xl lg:text-[4.2rem] xl:text-7xl font-bold text-cream-50 leading-[1.05] mb-7 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
            >
              Build, Scale &amp; Grow
              <span className="block text-gold-400 italic mt-1">Your Food Business</span>
            </h1>

            <p
              className="text-base sm:text-lg lg:text-xl text-cream-100/75 leading-[1.7] max-w-xl mb-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              Practical business strategies, systems and guidance to help food entrepreneurs
              build profitable restaurants, cloud kitchens and food brands.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
            >
              <button
                onClick={() => scrollTo('#contact')}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-charcoal-900 font-semibold rounded-md hover:shadow-2xl hover:shadow-gold-600/40 hover:scale-[1.03] active:scale-100 transition-all duration-300 text-[15px]"
              >
                Book a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#programs')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-cream-50/5 backdrop-blur-md border border-cream-100/20 text-cream-50 font-semibold rounded-md hover:bg-cream-50/10 hover:border-gold-400/50 transition-all duration-300 text-[15px]"
              >
                Explore Our Programs
              </button>
            </div>

            {/* Trust indicator with stars */}
            <div
              className="flex items-center gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <div className="h-4 w-px bg-cream-200/20" />
              <p className="text-sm text-cream-200/60 font-light tracking-wide">
                Helping Food Entrepreneurs Build Smarter Businesses
              </p>
            </div>
          </div>

          {/* Right: Floating image card (desktop only) */}
          <div className="hidden lg:block lg:col-span-5">
            <div
              className="relative opacity-0 animate-scale-in"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cream-50/10">
                <img
                  src={heroSecondaryImage}
                  alt="Gourmet Indian tandoori chicken with herb rice"
                  className="w-full h-[420px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-5 -left-5 bg-charcoal-900/90 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-gold-400/20 w-40">
                <div className="font-serif text-2xl font-bold text-gold-400">500+</div>
                <div className="text-[11px] text-cream-200/60 uppercase tracking-wider mt-0.5">
                  Entrepreneurs Guided
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold-400/30 rounded-tr-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream-200/40 hover:text-gold-400 transition-colors flex flex-col items-center gap-1 group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}
