import { UtensilsCrossed, Instagram, Facebook, Youtube, Linkedin, ArrowRight, MapPin, Mail } from 'lucide-react';
import { siteConfig, navLinks } from '@/config/site';

const services = [
  'Food Business Consulting',
  'Cloud Kitchen Consulting',
  'Restaurant Growth',
  'Business Strategy',
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
    { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-charcoal-950 border-t border-gold-400/10 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold-400/5 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5 max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-charcoal-900" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold text-cream-50">Food Business</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold">Academy</span>
              </div>
            </div>
            <p className="text-cream-200/50 text-sm leading-relaxed mb-6">
              Helping entrepreneurs build smarter, stronger and more profitable food businesses.
            </p>

            {/* Contact mini info */}
            <div className="space-y-2 mb-6">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-sm text-cream-200/40 hover:text-gold-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-cream-200/40">
                <MapPin className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                Pan India & Remote Consulting
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-cream-200/60 hover:bg-gold-400 hover:text-charcoal-900 hover:border-gold-400 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="font-serif text-base font-bold text-cream-50 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm text-cream-200/50 hover:text-gold-400 transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-gold-400 group-hover:w-3 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-cream-50 mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-sm text-cream-200/50 hover:text-gold-400 transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleNavClick('#contact')}
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-200/40">
            &copy; 2026 Food Business Academy. All rights reserved.
          </p>
          <p className="text-xs text-cream-200/25">
            Built for food entrepreneurs who mean business.
          </p>
        </div>
      </div>
    </footer>
  );
}
