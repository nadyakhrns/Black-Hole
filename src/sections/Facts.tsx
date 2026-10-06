import Section, { SectionHeading } from '@/components/Section';
import FactCard from '@/components/FactCard';
import { FACT_ITEMS } from '@/data/content';
import { Gauge, Zap, Layers, Atom, Camera, Crosshair } from 'lucide-react';

const ICON_MAP: Record<string, typeof Gauge> = {
  Gauge,
  Zap,
  Layers,
  Atom,
  Camera,
  Crosshair,
};

export default function Facts() {
  return (
    <Section id="fakta" className="bg-space-void">
      <SectionHeading
        kicker="Black Hole dalam Sekilas"
        title="Fakta Singkat"
        description="Ringkasan fakta-fakta kunci tentang black hole"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {FACT_ITEMS.map((item, index) => {
          const Icon = ICON_MAP[item.icon] ?? Gauge;
          return (
            <FactCard
              key={index}
              icon={Icon}
              label={item.label}
              value={item.value}
              delay={(index % 4) + 1}
            />
          );
        })}
      </div>
    </Section>
  );
}
