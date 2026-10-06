import Section, { SectionHeading } from '@/components/Section';
import Starfield from '@/components/Starfield';
import { Camera, Radio, Telescope, Calendar } from 'lucide-react';

const TIMELINE_EHT = [
  { year: '2017', title: 'Observasi Dilakukan', description: 'Event Horizon Telescope melakukan observasi sinkron menggunakan teleskop radio di seluruh dunia.' },
  { year: '2019', title: 'Gambar Pertama M87*', description: 'EHT merilis gambar pertama bayangan black hole M87* di pusat galaksi Messier 87.' },
  { year: '2022', title: 'Gambar Pertama Sgr A*', description: 'EHT merilis gambar pertama Sagittarius A*, black hole supermasif di pusat Bima Sakti.' },
];

export default function FirstImage() {
  return (
    <Section id="gambar-pertama" className="bg-space-void relative overflow-hidden">
      <Starfield count={60} className="z-0 opacity-50" />

      <SectionHeading
        kicker="Melihat Bayangan Black Hole"
        title="Gambar Pertama"
        description="Pencapaian historis dalam sejarah astronomi: untuk pertama kalinya, manusia melihat bayangan black hole"
      />

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left: M87* visual representation */}
        <div className="reveal flex justify-center">
          <div className="relative">
            {/* Simulated M87* image */}
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-glow-amber/20 blur-3xl" />

              {/* Accretion ring — asymmetric like M87* */}
              <div className="absolute inset-[8%] rounded-full accretion-disk opacity-90 animate-spin-slower"
                style={{ transform: 'perspective(600px) rotateX(75deg)' }} />
              <div className="absolute inset-[12%] rounded-full border-[4px] border-glow-amber/60 shadow-[0_0_40px_rgba(255,184,77,0.5)]" />

              {/* Shadow */}
              <div className="absolute inset-[28%] rounded-full bg-black shadow-[inset_0_0_30px_rgba(0,0,0,1)]" />

              {/* Brighter bottom crescent */}
              <div className="absolute inset-[15%] rounded-full border-b-[6px] border-glow-amber/80 shadow-[0_10px_30px_rgba(255,184,77,0.4)]" />
            </div>

            {/* Label */}
            <div className="mt-4 text-center">
              <p className="font-mono text-sm text-glow-amber/80">M87*</p>
              <p className="text-xs text-slate-500">Ilustrasi bayangan black hole</p>
            </div>
          </div>
        </div>

        {/* Right: explanation & timeline */}
        <div className="reveal reveal-delay-1 space-y-6">
          <div className="space-y-4">
            <p className="text-base text-slate-300/90 leading-relaxed">
              Pada tahun <span className="text-white font-medium">2019</span>, kolaborasi{' '}
              <span className="text-glow-cyan font-medium">Event Horizon Telescope (EHT)</span>{' '}
              merilis gambar pertama bayangan black hole.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Objek tersebut adalah black hole supermasif di pusat galaksi Messier 87, yang dikenal
              sebagai <span className="text-white font-medium">M87*</span>. Gambar tersebut
              memperlihatkan emisi dari materi panas di sekitar wilayah bayangan black hole.
              Black hole tidak difoto secara langsung seperti objek biasa.
            </p>
          </div>

          {/* Mini timeline */}
          <div className="space-y-3">
            {TIMELINE_EHT.map((event, index) => (
              <div
                key={event.year}
                className={`reveal reveal-delay-${index + 2} flex gap-4 rounded-xl glass p-4 transition-colors hover:border-glow-blue/30`}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-glow-blue/10 border border-glow-blue/20">
                    {index === 0 ? (
                      <Telescope className="h-5 w-5 text-glow-cyan" strokeWidth={1.5} />
                    ) : index === 1 ? (
                      <Camera className="h-5 w-5 text-glow-amber" strokeWidth={1.5} />
                    ) : (
                      <Radio className="h-5 w-5 text-glow-purple" strokeWidth={1.5} />
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-lg font-bold gradient-text">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{event.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sgr A* info */}
          <div className="rounded-xl border border-glow-purple/20 bg-glow-purple/5 p-5">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-glow-purple" strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-wider text-glow-purple/80">
                Sagittarius A*
              </span>
            </div>
            <p className="text-sm text-slate-300/85 leading-relaxed">
              Black hole supermasif di pusat Galaksi Bima Sakti. Gambar pertama Sagittarius A*
              dirilis oleh EHT pada tahun <span className="text-white font-medium">2022</span>.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
