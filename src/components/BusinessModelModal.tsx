import { useEffect, useMemo } from 'react';
import { ArrowRight, Check, ClipboardList, Layers3, Target, Users, X, Zap } from 'lucide-react';
import type { BusinessModel } from '@/data/businessModels';

interface BusinessModelModalProps {
  model: BusinessModel;
  onClose: () => void;
}

export default function BusinessModelModal({ model, onClose }: BusinessModelModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const sections = useMemo(() => [
    { title: 'About This Model', icon: Layers3, content: model.about },
    { title: 'Who Is This For?', icon: Users, content: model.whoItsFor },
    { title: 'Key Areas to Focus On', icon: Target, items: model.focusAreas },
    { title: 'Systems Required', icon: ClipboardList, items: model.systemsRequired },
    { title: 'Growth Considerations', icon: Zap, items: model.growthConsiderations },
  ], [model]);

  const scrollToContact = () => {
    onClose();
    window.setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-3 sm:items-center sm:p-5">
      <button
        type="button"
        aria-label="Close business model details"
        className="fixed inset-0 cursor-default bg-charcoal-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative my-4 w-full max-w-3xl overflow-hidden rounded-2xl border border-gold-400/30 bg-cream-50 shadow-2xl shadow-black/30 sm:my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="business-model-modal-title"
      >
        <div className="relative h-48 overflow-hidden sm:h-56">
          <img src={model.image} alt={model.imageAlt} className="h-full w-full object-cover" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-14 sm:left-8 sm:bottom-7">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">{model.categoryLabel}</p>
            <h2 id="business-model-modal-title" className="font-serif text-3xl font-bold text-cream-50 sm:text-4xl">{model.name}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-950/60 text-cream-50 transition-colors hover:bg-gold-400 hover:text-charcoal-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[58vh] overflow-y-auto px-5 py-7 sm:px-8 sm:py-8">
          <div className="space-y-7">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <section key={section.title}>
                  <div className="mb-3 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-400/15">
                      <Icon className="h-4 w-4 text-gold-600" strokeWidth={1.5} />
                    </span>
                    <h3 className="font-serif text-lg font-bold text-charcoal-900">{section.title}</h3>
                  </div>
                  {'content' in section ? (
                    <p className="pl-10 text-sm leading-relaxed text-charcoal-600">{section.content}</p>
                  ) : (
                    <ul className="space-y-2 pl-10">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-charcoal-700">
                          <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gold-400/15">
                            <Check className="h-2.5 w-2.5 text-gold-600" strokeWidth={3} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}

            <section className="border-t border-charcoal-200 pt-7">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-400/15">
                  <ArrowRight className="h-4 w-4 text-gold-600" strokeWidth={1.5} />
                </span>
                <h3 className="font-serif text-lg font-bold text-charcoal-900">Next Step</h3>
              </div>
              <p className="pl-10 text-sm leading-relaxed text-charcoal-600">{model.nextStep}</p>
            </section>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-charcoal-200 bg-white px-5 py-5 sm:flex-row sm:px-8">
          <p className="text-center text-sm text-charcoal-500 sm:text-left">Want to explore this model for your business?</p>
          <button
            type="button"
            onClick={scrollToContact}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-gold-400 to-gold-600 px-7 py-3.5 text-sm font-semibold text-charcoal-900 transition-all duration-300 hover:shadow-xl hover:shadow-gold-600/30 sm:w-auto"
          >
            Talk to an Expert
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
