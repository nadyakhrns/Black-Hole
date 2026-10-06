import Section, { SectionHeading } from '@/components/Section';
import { TYPE_CARDS, type TypeCard } from '@/data/content';
import { Star, CircleDot, Atom, HelpCircle, AlertCircle } from 'lucide-react';

const ICON_MAP: Record<string, typeof Star> = {
  Star,
  CircleDot,
  Atom,
  HelpCircle,
};

export default function Types() {
  return (
    <Section id="jenis" className="bg-space-navy">
      <SectionHeading
        kicker="Empat Kategori"
        title="Jenis-Jenis Black Hole"
        description="Black hole dikategorikan berdasarkan massanya, dari yang bermassa bintang hingga supermasif"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {TYPE_CARDS.map((card: TypeCard, index: number) => {
          const Icon = ICON_MAP[card.icon] ?? Star;
          const delayClass = `reveal-delay-${(index % 4) + 1}`;

          return (
            <div
              key={card.id}
              className={`reveal ${delayClass} group relative overflow-hidden rounded-2xl glass p-6 md:p-7 transition-all duration-500 hover:border-glow-blue/30 hover:box-glow-blue hover:-translate-y-1 ${
                !card.confirmed ? 'border-dashed' : ''
              }`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  index === 0
                    ? 'from-glow-blue/15 to-glow-cyan/5'
                    : index === 1
                    ? 'from-glow-cyan/15 to-glow-purple/5'
                    : index === 2
                    ? 'from-glow-purple/15 to-glow-blue/5'
                    : 'from-slate-600/15 to-slate-700/5'
                }`}
              />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-blue/10 border border-glow-blue/20 transition-all duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-glow-cyan" strokeWidth={1.5} />
                  </div>
                  {card.confirmed ? (
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
                      Dikonfirmasi
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 rounded-full border border-glow-amber/30 bg-glow-amber/15 px-3 py-1 text-xs font-medium text-glow-amber">
                      <AlertCircle className="h-3 w-3" />
                      Hipotetis
                    </span>
                  )}
                </div>

                <h3 className="mb-2 text-lg md:text-xl font-semibold text-white">{card.title}</h3>
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-glow-amber/70">
                  {card.mass}
                </p>
                <p className="text-sm text-slate-300/80 leading-relaxed">{card.description}</p>

                {!card.confirmed && (
                  <p className="mt-3 text-xs text-glow-amber/80 italic border-t border-glow-amber/15 pt-3">
                    Keberadaan kategori ini belum dikonfirmasi secara observasional.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
