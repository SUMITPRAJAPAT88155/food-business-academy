import { ArrowUpRight, Check } from 'lucide-react';
import type { BusinessModel } from '@/data/businessModels';

interface BusinessModelCardProps {
  model: BusinessModel;
  index: number;
  isVisible: boolean;
  onExplore: (modelId: string) => void;
}

export default function BusinessModelCard({ model, index, isVisible, onExplore }: BusinessModelCardProps) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-charcoal-200 bg-white shadow-lg shadow-charcoal-900/5 transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/50 hover:shadow-2xl hover:shadow-charcoal-900/10 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 70}ms` }}
      aria-label={`${model.name} business model`}
    >
      <div className="relative h-48 overflow-hidden sm:h-52">
        <img
          src={model.image}
          alt={model.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/75 via-charcoal-950/10 to-transparent" />
        <span className="absolute bottom-4 left-5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-300">
          {model.categoryLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-bold text-charcoal-900">{model.name}</h3>
        <p className="mt-2 min-h-[72px] text-sm leading-relaxed text-charcoal-600">{model.description}</p>

        <div className="my-5 h-px bg-charcoal-100" />
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal-400">Focus Areas</p>
        <ul className="mb-7 grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
          {model.focusAreas.map((area) => (
            <li key={area} className="flex items-start gap-2 text-xs leading-snug text-charcoal-700">
              <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gold-400/15">
                <Check className="h-2.5 w-2.5 text-gold-600" strokeWidth={3} />
              </span>
              {area}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onExplore(model.id)}
          className="group/button inline-flex w-full items-center justify-center gap-2 rounded-md bg-charcoal-900 px-5 py-3.5 text-sm font-semibold text-cream-50 transition-all duration-300 hover:bg-charcoal-800 hover:shadow-xl"
        >
          Explore Model
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}
