import Section, { SectionHeading } from '@/components/Section';
import MythFactCard from '@/components/MythFactCard';

export default function MythFact() {
  return (
    <Section id="mitos" className="bg-space-navy">
      <SectionHeading
        kicker="Benarkah Black Hole Menyedot Segalanya?"
        title="Mitos vs Fakta"
        description="Memisahkan kesalahpahaman umum dari pengetahuan ilmiah yang sudah mapan"
      />

      <MythFactCard />
    </Section>
  );
}
