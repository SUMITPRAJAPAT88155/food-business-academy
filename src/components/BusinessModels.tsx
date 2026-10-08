import { useCallback, useMemo, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import BusinessModelCard from '@/components/BusinessModelCard';
import BusinessModelModal from '@/components/BusinessModelModal';
import {
  businessModelFilters,
  businessModels,
  type BusinessModelFilter,
} from '@/data/businessModels';

export default function BusinessModels() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [activeFilter, setActiveFilter] = useState<BusinessModelFilter>('all');
  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);

  const visibleModels = useMemo(
    () => activeFilter === 'all'
      ? businessModels
      : businessModels.filter((model) => model.category === activeFilter),
    [activeFilter]
  );

  const selectedModel = businessModels.find((model) => model.id === selectedModelId);
  const openModal = useCallback((modelId: string) => setSelectedModelId(modelId), []);
  const closeModal = useCallback(() => setSelectedModelId(null), []);

  return (
    <section id="business-models" aria-label="Food Business Models | Food Business Academy" aria-labelledby="business-models-heading" className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gold-400/5 blur-3xl" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Business Models
          </span>
          <h2 id="business-models-heading" className="font-serif text-3xl font-bold leading-[1.15] text-charcoal-900 sm:text-4xl lg:text-5xl">
            Which Food Business Do You Want to <span className="text-gold-600 italic">Build?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-charcoal-600 lg:text-lg">
            Explore different food-business models and understand the systems, strategy and approach required to build and grow each one.
          </p>
        </header>

        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist" aria-label="Filter business models">
          {businessModelFilters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="business-model-results"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 sm:px-5 ${
                  isActive
                    ? 'border-charcoal-900 bg-charcoal-900 text-cream-50 shadow-lg'
                    : 'border-charcoal-200 bg-white text-charcoal-500 hover:border-gold-400 hover:text-gold-600'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div id="business-model-results" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7" role="tabpanel" aria-label={`${activeFilter === 'all' ? 'All' : activeFilter} business models`}>
          {visibleModels.map((model, index) => (
            <BusinessModelCard
              key={model.id}
              model={model}
              index={index}
              isVisible={isVisible}
              onExplore={openModal}
            />
          ))}
        </div>

        {selectedModel && <BusinessModelModal model={selectedModel} onClose={closeModal} />}
      </div>
    </section>
  );
}
