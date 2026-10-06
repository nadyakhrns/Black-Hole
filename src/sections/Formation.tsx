import Section, { SectionHeading } from '@/components/Section';
import InformationCard from '@/components/InformationCard';
import { FORMATION_CARDS } from '@/data/content';
import { Star, Combine, Atom, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, typeof Star> = {
  Star,
  Combine,
  Atom,
};

export default function Formation() {
  return (
    <Section id="pembentukan" className="bg-space-void">
      <SectionHeading
        kicker="Kelahiran Black Hole"
        title="Bagaimana Black Hole Terbentuk?"
        description="Beberapa mekanisme yang dapat menghasilkan black hole di alam semesta"
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12">
        {FORMATION_CARDS.map((card, index) => {
          const Icon = ICON_MAP[card.icon] ?? Star;
          return (
            <InformationCard
              key={card.id}
              icon={Icon}
              title={card.title}
              description={card.description}
              delay={index + 1}
              accentColor={
                index === 0
                  ? 'from-glow-amber/20 to-glow-rose/10'
                  : index === 1
                  ? 'from-glow-blue/20 to-glow-cyan/10'
                  : 'from-glow-purple/20 to-glow-blue/10'
              }
            />
          );
        })}
      </div>

      {/* Visual flow: Star → Collapse → Black Hole */}
      <div className="reveal reveal-delay-2 rounded-2xl glass p-8 md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-glow-cyan/70 mb-6 text-center">
          Proses Pembentukan — Keruntuhan Bintang
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {/* Star */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-glow-amber/40 to-glow-rose/20 border border-glow-amber/30">
              <div className="absolute inset-0 rounded-full bg-glow-amber/20 blur-xl animate-pulse-glow" />
              <Star className="relative h-8 w-8 text-glow-amber" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-white">Bintang Masif</span>
          </div>

          <ArrowRight className="h-6 w-6 text-slate-500 rotate-90 md:rotate-0" />

          {/* Collapse */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-glow-rose/30 to-glow-purple/20 border border-glow-rose/30">
              <div className="absolute inset-0 rounded-full bg-glow-rose/20 blur-xl" />
              <div className="relative font-mono text-xs text-glow-rose text-center leading-tight">
                Keruntuhan<br />Gravitasi
              </div>
            </div>
            <span className="text-sm font-medium text-white">Inti Runtuh</span>
          </div>

          <ArrowRight className="h-6 w-6 text-slate-500 rotate-90 md:rotate-0" />

          {/* Black Hole */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-black border-2 border-glow-blue/40 shadow-[0_0_30px_rgba(77,139,255,0.3)]">
              <div className="absolute inset-2 rounded-full border border-glow-amber/40" />
              <div className="absolute inset-0 rounded-full bg-glow-blue/10 blur-lg" />
            </div>
            <span className="text-sm font-medium text-white">Black Hole</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
