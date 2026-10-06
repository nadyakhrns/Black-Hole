import Section, { SectionHeading } from '@/components/Section';
import InformationCard from '@/components/InformationCard';
import { OBSERVATION_CARDS } from '@/data/content';
import { Disc, Orbit, Eye, Activity } from 'lucide-react';

const ICON_MAP: Record<string, typeof Disc> = {
  Disc,
  Orbit,
  Eye,
  Activity,
};

export default function Observation() {
  return (
    <Section id="pengamatan" className="bg-space-navy">
      <SectionHeading
        kicker="Objek yang Tidak Terlihat"
        title="Apakah Kita Bisa Melihat Black Hole?"
        description="Black hole tidak memancarkan cahaya, tetapi keberadaannya dapat dideteksi melalui pengaruhnya"
      />

      <div className="reveal mb-10 max-w-3xl mx-auto text-center">
        <div className="rounded-2xl border border-glow-blue/20 bg-gradient-to-br from-glow-blue/10 to-glow-purple/5 p-6">
          <p className="text-base md:text-lg text-slate-200/90 leading-relaxed">
            Black hole sendiri tidak memancarkan cahaya yang dapat kita lihat secara langsung,
            tetapi keberadaannya dapat dideteksi melalui{' '}
            <span className="text-glow-cyan font-medium">pengaruhnya terhadap materi, cahaya,
            dan ruang-waktu</span> di sekitarnya.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {OBSERVATION_CARDS.map((card, index) => {
          const Icon = ICON_MAP[card.icon] ?? Disc;
          return (
            <InformationCard
              key={card.id}
              icon={Icon}
              title={card.title}
              description={card.description}
              delay={(index % 4) + 1}
              accentColor={
                index === 0
                  ? 'from-glow-amber/20 to-glow-rose/10'
                  : index === 1
                  ? 'from-glow-cyan/20 to-glow-blue/10'
                  : index === 2
                  ? 'from-glow-blue/20 to-glow-purple/10'
                  : 'from-glow-purple/20 to-glow-rose/10'
              }
            />
          );
        })}
      </div>
    </Section>
  );
}
