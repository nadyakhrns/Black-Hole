import { useState } from 'react';
import { MYTH_FACTS, type MythFact } from '@/data/content';
import { X, Check } from 'lucide-react';

export default function MythFactCard() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
      {MYTH_FACTS.map((item: MythFact, index: number) => {
        const isExpanded = expandedIndex === index;
        const delayClass = `reveal-delay-${(index % 4) + 1}`;

        return (
          <div
            key={index}
            className={`reveal ${delayClass} group rounded-2xl overflow-hidden glass transition-all duration-500 hover:border-glow-rose/30`}
          >
            <button
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
              className="w-full text-left p-5 md:p-6"
              aria-expanded={isExpanded}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-500/15 border border-red-500/30">
                  <X className="h-5 w-5 text-red-400" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-red-400/80 mb-1">
                    Mitos
                  </p>
                  <p className="text-base md:text-lg font-semibold text-white leading-snug">
                    "{item.myth}"
                  </p>
                </div>
              </div>
            </button>

            <div
              className={`grid transition-all duration-500 ease-out ${
                isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-1">
                  <div className="border-t border-glow-blue/15 pt-4 flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/30">
                      <Check className="h-5 w-5 text-emerald-400" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-emerald-400/80 mb-1">
                        Fakta
                      </p>
                      <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                        {item.fact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {!isExpanded && (
              <div className="px-5 md:px-6 pb-4">
                <p className="text-xs text-glow-cyan/60 font-mono">
                  Klik untuk melihat fakta
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
