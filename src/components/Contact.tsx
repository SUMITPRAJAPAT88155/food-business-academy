import { useState, type FormEvent } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2, Clock, MapPin } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { siteConfig } from '@/config/site';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const businessTypes = [
  'Restaurant',
  'Cloud Kitchen',
  'Cafe',
  'Food Brand',
  'Home Kitchen',
  'Other',
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  business_name: string;
  business_type: string;
  message: string;
}

const initialData: FormData = {
  name: '',
  phone: '',
  email: '',
  business_name: '',
  business_type: '',
  message: '',
};

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    else if (!/^[+\d\s\-()]{7,}$/.test(formData.phone.trim()))
      newErrors.phone = 'Please enter a valid phone number';
    if (!formData.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      newErrors.email = 'Please enter a valid email address';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const { error } = await supabase.from('contact_enquiries').insert({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        business_name: formData.business_name.trim() || null,
        business_type: formData.business_type || null,
        message: formData.message.trim() || null,
      });
      if (error) throw error;
      setStatus('success');
      setFormData(initialData);
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3.5 bg-cream-50/50 border rounded-xl text-charcoal-900 placeholder-charcoal-400/60 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400 focus:bg-white transition-all duration-200 text-sm ${
      errors[field] ? 'border-terracotta-400 bg-terracotta-50/30' : 'border-charcoal-200'
    }`;

  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  const contactCards = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: siteConfig.contact.whatsapp,
      href: whatsappLink,
      external: true,
      hoverClass: 'hover:border-green-500/30',
      iconBg: 'bg-green-500/10 group-hover:bg-green-500',
      iconColor: 'text-green-600 group-hover:text-white',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.contact.phone,
      href: `tel:${siteConfig.contact.phone}`,
      external: false,
      hoverClass: 'hover:border-gold-400/30',
      iconBg: 'bg-gold-400/10 group-hover:bg-gold-400',
      iconColor: 'text-gold-600 group-hover:text-charcoal-900',
    },
    {
      icon: Mail,
      label: 'Email',
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      external: false,
      hoverClass: 'hover:border-terracotta-400/30',
      iconBg: 'bg-terracotta-400/10 group-hover:bg-terracotta-500',
      iconColor: 'text-terracotta-600 group-hover:text-white',
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-terracotta-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold text-gold-600 uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-[1.15] mb-5">
            Let&rsquo;s Build Something
            <span className="text-gold-600 italic"> Great Together</span>
          </h2>
          <p className="text-charcoal-600 text-lg leading-relaxed">
            Fill out the form below and we&rsquo;ll get back to you to schedule your consultation.
          </p>
        </div>

        <div className={`grid lg:grid-cols-5 gap-6 lg:gap-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`group flex items-center gap-4 p-5 bg-white rounded-xl border border-charcoal-200 shadow-sm hover:shadow-lg transition-all duration-300 ${card.hoverClass}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${card.iconBg}`}>
                    <Icon className={`w-6 h-6 transition-colors ${card.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-charcoal-400 font-semibold">{card.label}</div>
                    <div className="text-charcoal-800 font-medium text-sm truncate">{card.value}</div>
                  </div>
                </a>
              );
            })}

            {/* Info card */}
            <div className="p-6 bg-charcoal-900 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-cream-200/40 font-semibold">Response Time</div>
                    <div className="text-cream-50 text-sm font-medium">Within 24 hours</div>
                  </div>
                </div>
                <div className="h-px bg-charcoal-700" />
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-cream-200/40 font-semibold">Service Area</div>
                    <div className="text-cream-50 text-sm font-medium">Pan India & Remote</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl shadow-charcoal-900/5 p-8 sm:p-10 border border-charcoal-100">
            {status === 'success' && (
              <div className="mb-6 flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-green-800 font-semibold">Thank you! Your enquiry has been submitted.</p>
                  <p className="text-xs text-green-700 mt-0.5">We&rsquo;ll be in touch within 24 hours.</p>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 flex items-start gap-3 p-4 bg-terracotta-50 border border-terracotta-200 rounded-xl">
                <AlertCircle className="w-5 h-5 text-terracotta-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-terracotta-800 font-semibold">Something went wrong.</p>
                  <p className="text-xs text-terracotta-700 mt-0.5">Please try again or contact us directly via WhatsApp.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Name <span className="text-terracotta-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass('name')}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-xs text-terracotta-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Phone Number <span className="text-terracotta-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass('phone')}
                    placeholder="Your phone number"
                  />
                  {errors.phone && <p className="text-xs text-terracotta-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                  Email <span className="text-terracotta-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-xs text-terracotta-600 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="business_name" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business_name"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleChange}
                    className={inputClass('business_name')}
                    placeholder="Your business name (optional)"
                  />
                </div>
                <div>
                  <label htmlFor="business_type" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Business Type
                  </label>
                  <select
                    id="business_type"
                    name="business_type"
                    value={formData.business_type}
                    onChange={handleChange}
                    className={inputClass('business_type')}
                  >
                    <option value="">Select type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={inputClass('message') + ' resize-none'}
                  placeholder="Tell us about your business and what you need help with..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-charcoal-900 font-semibold rounded-xl hover:shadow-xl hover:shadow-gold-600/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
