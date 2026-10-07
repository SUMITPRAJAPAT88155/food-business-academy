import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Placeholder testimonials — replace with real ones when available
const testimonials = [
  {
    quote:
      'The guidance helped me understand the real numbers behind my cloud kitchen. I finally have clarity on my costs and margins. The practical approach made all the difference.',
    name: 'Rahul Sharma',
    role: 'Cloud Kitchen Owner',
    location: 'Mumbai',
    initials: 'RS',
  },
  {
    quote:
      'I was struggling to manage operations across two outlets. The systems and processes we put in place transformed how my restaurant runs day to day.',
    name: 'Priya Nair',
    role: 'Restaurant Owner',
    location: 'Bengaluru',
    initials: 'PN',
  },
  {
    quote:
      'As someone starting from scratch, the step-by-step approach gave me the confidence to launch my food brand properly. Worth every minute invested.',
    name: 'Arjun Patel',
    role: 'Food Entrepreneur',
    location: 'Ahmedabad',
    initials: 'AP',
  },
  {
    quote:
      'The marketing strategy completely changed how we attract customers. We now have a steady flow of orders instead of relying on walk-ins alone.',
    name: 'Sneha Reddy',
    role: 'Cafe Owner',
    location: 'Hyderabad',
    initials: 'SR',
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoPlay || !isVisible) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, isVisible, next]);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-charcoal-900 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-400/[0.04] rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-gold-400 uppercase tracking-[0.2em] mb-4">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-[1.15] mb-5">
            What Food Entrepreneurs
            <span className="text-gold-400 italic"> Say</span>
          </h2>
          <p className="text-cream-200/40 text-sm">
            Placeholder testimonials for layout reference. Replace with real endorsements when available.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-charcoal-800/40 border border-charcoal-700/40 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center">
                    {/* Large decorative quote */}
                    <Quote className="w-12 h-12 text-gold-400/20 mx-auto mb-6" fill="currentColor" />

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-7">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="font-serif text-lg sm:text-xl lg:text-2xl text-cream-50/90 leading-[1.6] italic mb-8 max-w-3xl mx-auto">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Profile */}
                    <div className="flex items-center justify-center gap-4">
                      {/* Initials avatar */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-charcoal-900 font-bold text-sm flex-shrink-0">
                        {testimonial.initials}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gold-400 text-base">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-cream-200/40 mt-0.5">
                          {testimonial.role} &middot; {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 -left-1 sm:-left-5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-charcoal-800 border border-charcoal-700 text-cream-100 hover:bg-gold-400 hover:text-charcoal-900 hover:border-gold-400 transition-all duration-300 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 -right-1 sm:-right-5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-charcoal-800 border border-charcoal-700 text-cream-100 hover:bg-gold-400 hover:text-charcoal-900 hover:border-gold-400 transition-all duration-300 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i
                    ? 'w-8 bg-gold-400'
                    : 'w-2 bg-cream-200/20 hover:bg-cream-200/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
