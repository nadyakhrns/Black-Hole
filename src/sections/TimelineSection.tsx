import Section, { SectionHeading } from '@/components/Section';
import Timeline from '@/components/Timeline';

export default function TimelineSection() {
  return (
    <Section id="timeline" className="bg-space-dark">
      <SectionHeading
        kicker="Sejarah Penemuan dan Pengamatan"
        title="Timeline"
        description="Perjalanan lebih dari satu abad: dari teori hingga gambar pertama bayangan black hole"
      />

      <div className="reveal">
        <Timeline />
      </div>
    </Section>
  );
}
