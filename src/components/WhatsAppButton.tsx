import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setTooltipOpen(true), 1200);
    const closeTimer = setTimeout(() => setTooltipOpen(false), 7000);
    return () => { clearTimeout(timer); clearTimeout(closeTimer); };
  }, [visible]);

  const link = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {/* Tooltip */}
      {tooltipOpen && (
        <div className="relative bg-white rounded-xl shadow-2xl shadow-black/10 px-4 py-3 max-w-[230px] hidden sm:block animate-fade-in">
          <button
            onClick={() => setTooltipOpen(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-charcoal-800 text-cream-50 flex items-center justify-center hover:bg-charcoal-900 transition-colors"
            aria-label="Close"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-charcoal-800">Chat with us on WhatsApp</span>
          </div>
          <p className="text-xs text-charcoal-500 leading-relaxed">
            Quick responses for your food business questions.
          </p>
          {/* Arrow */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45" />
        </div>
      )}

      {/* Button with pulse ring */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl shadow-green-500/30 hover:scale-110 hover:bg-green-600 transition-all duration-300"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-0 transition-opacity" />
        <MessageCircle className="relative w-7 h-7 text-white" fill="currentColor" strokeWidth={0} />
      </a>
    </div>
  );
}
