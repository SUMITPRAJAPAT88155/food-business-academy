import { useEffect, useState } from 'react';
import { Menu, X, UtensilsCrossed, Phone } from 'lucide-react';
import { navLinks, siteConfig } from '@/config/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section
      const sections = navLinks.map((link) => link.href.replace('#', ''));
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-900/95 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-gold-400/10'
          : 'bg-gradient-to-b from-charcoal-950/60 to-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-600/25 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <UtensilsCrossed className="w-5 h-5 text-charcoal-900" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-bold text-cream-50 tracking-tight">
                Food Business
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-sans font-semibold">
                Academy
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-gold-400'
                      : 'text-cream-100/70 hover:text-gold-400'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-px bg-gold-400 transition-all duration-300 ${
                      isActive ? 'w-3/4' : 'w-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hidden xl:flex items-center gap-2 text-sm text-cream-100/60 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{siteConfig.contact.phone}</span>
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-gold-400 to-gold-600 text-charcoal-900 text-sm font-semibold rounded-md hover:shadow-lg hover:shadow-gold-600/30 hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-cream-50 hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        } bg-charcoal-900/98 backdrop-blur-xl border-t border-gold-400/10`}
      >
        <div className="px-4 py-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`flex items-center justify-between px-4 py-3.5 rounded-lg transition-all duration-200 font-medium ${
                  isActive
                    ? 'bg-gold-400/10 text-gold-400'
                    : 'text-cream-100/90 hover:text-gold-400 hover:bg-charcoal-800/50'
                }`}
              >
                {link.label}
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />}
              </a>
            );
          })}
          <button
            onClick={() => handleNavClick('#contact')}
            className="w-full mt-4 px-5 py-3.5 bg-gradient-to-r from-gold-400 to-gold-600 text-charcoal-900 font-semibold rounded-lg"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
