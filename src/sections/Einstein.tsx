import Section, { SectionHeading } from '@/components/Section';
import { Weight, Waves, Zap, Orbit } from 'lucide-react';

const FLOW_STEPS = [
  {
    icon: Weight,
    title: 'Massa',
    description: 'Massa dan energi ada di alam semesta',
    color: 'text-glow-amber',
    bg: 'from-glow-amber/20 to-glow-amber/5',
    border: 'border-glow-amber/30',
  },
  {
    icon: Waves,
    title: 'Ruang-Waktu Melengkung',
    description: 'Massa melengkungkan ruang-waktu di sekitarnya',
    color: 'text-glow-cyan',
    bg: 'from-glow-cyan/20 to-glow-cyan/5',
    border: 'border-glow-cyan/30',
  },
  {
    icon: Zap,
    title: 'Gravitasi Ekstrem',
    description: 'Kelengkungan menjadi sangat ekstrem',
    color: 'text-glow-blue',
    bg: 'from-glow-blue/20 to-glow-blue/5',
    border: 'border-glow-blue/30',
  },
  {
    icon: Orbit,
    title: 'Black Hole',
    description: 'Horizon peristiwa terbentuk',
    color: 'text-glow-purple',
    bg: 'from-glow-purple/20 to-glow-purple/5',
    border: 'border-glow-purple/30',
  },
];

export default function Einstein() {
  return (
    <Section id="einstein" className="bg-space-deep">
      <SectionHeading
        kicker="Relativitas Umum"
        title="Black Hole dan Einstein"
        description="Hubungan antara black hole dan teori gravitasi Einstein"
      />

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
        {/* Left: explanation */}
        <div className="lg:col-span-3 space-y-5">
          <div className="reveal space-y-4">
            <p className="text-base text-slate-300/90 leading-relaxed">
              <span className="text-white font-medium">Relativitas umum</span> menggambarkan
              gravitasi sebagai <span className="text-glow-cyan font-medium">kelengkungan
              ruang-waktu</span>. Benda bermassa seperti bintang dan planet melengkungkan
              ruang-waktu di sekitarnya, dan gerak benda lain dipengaruhi oleh kelengkungan tersebut.
            </p>
          </div>

          <div className="reveal reveal-delay-1 space-y-4">
            <p className="text-base text-slate-300/80 leading-relaxed">
              Black hole merupakan salah satu <span className="text-white font-medium">konsekuensi
              ekstrem</span> dari relativitas umum. Ketika massa terkonsentrasi dalam wilayah yang
              sangat kecil, kelengkungan ruang-waktu menjadi begitu ekstrem sehingga terbentuk
              horizon peristiwa—batas tempat tidak ada jalan kembali.
            </p>
          </div>

          <div className="reveal reveal-delay-2 space-y-4">
            <p className="text-base text-slate-300/80 leading-relaxed">
              Horizon peristiwa muncul dari struktur ruang-waktu di sekitar objek yang sangat padat.
              Pengamatan terhadap black hole membantu menguji teori gravitasi dalam kondisi
              paling ekstrem yang dapat dijangkau.
            </p>
          </div>

          <div className="reveal reveal-delay-3 rounded-2xl border border-glow-blue/20 bg-gradient-to-br from-glow-blue/10 to-glow-purple/5 p-5">
            <p className="text-sm text-slate-300/85 leading-relaxed">
              <span className="text-glow-cyan font-medium">Catatan:</span> Relativitas umum adalah
              teori gravitasi yang sangat teruji, namun di dalam black hole—terutama di
              singularitas—teori ini mungkin tidak lengkap. Kita membutuhkan teori gravitasi
              kuantum untuk memahami sepenuhnya apa yang terjadi di pusat black hole.
            </p>
          </div>
        </div>

        {/* Right: flow diagram */}
        <div className="lg:col-span-2">
          <p className="reveal font-mono text-xs uppercase tracking-[0.15em] text-glow-cyan/70 mb-4 text-center">
            Dari Massa ke Black Hole
          </p>
          <div className="space-y-3">
            {FLOW_STEPS.map((step, index) => {
              const Icon = step.icon;
              const delayClass = `reveal-delay-${index + 1}`;
              return (
                <div key={index}>
                  <div
                    className={`reveal ${delayClass} group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-500 hover:-translate-y-1 hover:${step.border}`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.bg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    />
                    <div className="relative flex items-center gap-4">
                      <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-glow-blue/10 border ${step.border}`}>
                        <Icon className={`h-5 w-5 ${step.color}`} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                        <p className="text-xs text-slate-400 mt-0.5">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  {index < FLOW_STEPS.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="h-4 w-px bg-gradient-to-b from-glow-blue/30 to-glow-blue/10" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
