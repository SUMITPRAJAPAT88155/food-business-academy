import { useEffect, useRef, useState } from 'react';
import { stats } from '@/config/site';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function useCountUp(target: number, start: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return count;
}

function StatItem({ stat, start, index }: { stat: typeof stats[number]; start: boolean; index: number }) {
  const count = useCountUp(stat.value, start);
  return (
    <div
      className={`relative text-center group px-4 ${
        index !== 0 ? 'lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:h-16 lg:before:w-px lg:before:bg-charcoal-700' : ''
      }`}
    >
      <div className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gold-400 mb-2 group-hover:scale-110 transition-transform duration-500 origin-center">
        {count}
        <span className="text-gold-400/80">{stat.suffix}</span>
      </div>
      <div className="text-xs sm:text-sm text-cream-200/50 font-medium tracking-[0.1em] uppercase leading-relaxed">
        {stat.label}
      </div>
      <div className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/[0.03] rounded-xl transition-colors duration-500 -z-10" />
    </div>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative -mt-1 py-16 lg:py-20 bg-charcoal-900 border-y border-charcoal-700/40">
      {/* Subtle gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold-400/5 blur-3xl rounded-full" />
      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0"
      >
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} start={isVisible} index={i} />
        ))}
      </div>
    </section>
  );
}
