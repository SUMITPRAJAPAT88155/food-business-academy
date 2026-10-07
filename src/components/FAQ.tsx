import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
  {
    question: 'What is Food Business Academy?',
    answer:
      'Food Business Academy is a premium food business consultancy and growth academy. We help restaurant owners, cloud kitchen operators and food entrepreneurs build, scale and grow profitable food businesses through practical strategies, systems and personalized guidance.',
  },
  {
    question: 'Who is this for?',
    answer:
      'We work with anyone in the food business space — whether you are planning to start a food business, running an existing restaurant or cloud kitchen, operating a cafe, building a food brand, or running a home kitchen that you want to turn into a commercial business.',
  },
  {
    question: 'Can you help me start a cloud kitchen?',
    answer:
      'Yes. We help entrepreneurs understand the cloud kitchen model, structure their operations, plan their menu and pricing, set up delivery platform strategies, and build a profitable cloud kitchen from the ground up.',
  },
  {
    question: 'Can you help an existing restaurant grow?',
    answer:
      'Absolutely. For existing restaurants, we focus on improving operations, optimizing food costs and margins, building marketing and customer retention strategies, strengthening team management, and creating systems for sustainable growth.',
  },
  {
    question: 'Do you provide one-to-one consulting?',
    answer:
      'Yes, we offer personalized one-to-one business consulting for food entrepreneurs who want strategic guidance tailored to their specific business situation. This includes a business audit, a custom growth roadmap and ongoing support.',
  },
  {
    question: 'How can I book a consultation?',
    answer:
      'You can book a consultation by filling out the contact form on this page, or by reaching out to us via phone, email or WhatsApp. We will get back to you to schedule a consultation call at a time that works for you.',
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: typeof faqs[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-charcoal-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`font-medium text-base sm:text-lg transition-colors duration-200 ${
          isOpen ? 'text-gold-600' : 'text-charcoal-800 group-hover:text-gold-600'
        }`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen
            ? 'bg-gold-400 text-charcoal-900 rotate-0'
            : 'bg-charcoal-100 text-charcoal-600 group-hover:bg-gold-400/20 rotate-0'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? 'max-h-60 pb-5 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-charcoal-600 leading-relaxed text-sm sm:text-base pl-1">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 lg:py-32 bg-cream-50">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: Intro */}
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-semibold text-gold-600 uppercase tracking-[0.2em] mb-4">
              FAQ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-[1.15] mb-6">
              Questions?
              <span className="block text-gold-600 italic mt-1">We Have Answers.</span>
            </h2>
            <p className="text-charcoal-600 text-base leading-relaxed mb-8 max-w-sm">
              Everything you need to know about how Food Business Academy can help you build
              and grow your food business.
            </p>

            {/* Still have questions card */}
            <div className="bg-charcoal-900 rounded-2xl p-6">
              <HelpCircle className="w-7 h-7 text-gold-400 mb-3" strokeWidth={1.5} />
              <h3 className="font-serif text-base font-bold text-cream-50 mb-2">
                Still have questions?
              </h3>
              <p className="text-sm text-cream-200/60 leading-relaxed mb-4">
                We&rsquo;re happy to help. Reach out and we&rsquo;ll answer any questions you have.
              </p>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
              >
                Contact Us &rarr;
              </button>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className={`lg:col-span-7 bg-white rounded-2xl shadow-lg shadow-charcoal-900/5 px-6 sm:px-10 py-2 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
