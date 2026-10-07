import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { siteConfig } from '@/config/site';

const ctaBg = 'https://images.pexels.com/photos/13971183/pexels-photo-13971183.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ctaBg}
          alt="Professional chefs working in a busy industrial kitchen with visible flames"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/90 to-charcoal-900/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-charcoal-950/40" />
      </div>

      {/* Decorative gold accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-3xl" />

      <div
        ref={ref}
        className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Decorative line above */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-gold-400/40" />
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-[0.2em]">
            Let&rsquo;s Talk
          </span>
          <div className="h-px w-12 bg-gold-400/40" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-cream-50 leading-[1.1] mb-6">
          Ready to Build a
          <span className="block text-gold-400 italic mt-1">Better Food Business?</span>
        </h2>
        <p className="text-lg text-cream-200/70 leading-relaxed max-w-2xl mx-auto mb-10">
          Let&rsquo;s understand your business, identify the opportunities and create a
          practical path for growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#contact')}
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-charcoal-900 font-semibold rounded-md hover:shadow-2xl hover:shadow-gold-600/40 hover:scale-105 active:scale-100 transition-all duration-300 text-[15px]"
          >
            Book a Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-cream-50/5 backdrop-blur-md border border-cream-100/20 text-cream-50 font-semibold rounded-md hover:bg-cream-50/10 hover:border-gold-400/50 transition-all duration-300 text-[15px]"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
