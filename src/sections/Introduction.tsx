import Section, { SectionHeading } from '@/components/Section';
import Starfield from '@/components/Starfield';
import { Sparkles, Star, Atom, Orbit } from 'lucide-react';

const COMPARISON = [
  {
    icon: Sparkles,
    title: 'Objek Biasa',
    description: 'Massa terdistribusi dalam volume yang relatif besar. Kelengkungan ruang-waktu minimal.',
    metric: 'Gravitasi normal',
    color: 'from-slate-500/20 to-slate-600/10',
    accent: 'text-slate-400',
  },
  {
    icon: Star,
    title: 'Bintang Neutron',
    description: 'Sisa bintang yang sangat padat. Satu sendok teh materi dapat memiliki massa miliaran ton.',
    metric: 'Gravitasi sangat kuat',
    color: 'from-glow-amber/20 to-glow-rose/10',
    accent: 'text-glow-amber',
  },
  {
    icon: Orbit,
    title: 'Black Hole',
    description: 'Massa terkonsentrasi sehingga kelengkungan ruang-waktu menjadi ekstrem dan membentuk horizon peristiwa.',
    metric: 'Gravitasi ekstrem',
    color: 'from-glow-blue/20 to-glow-purple/10',
    accent: 'text-glow-cyan',
  },
];

export default function Introduction() {
  return (
    <Section id="pengenalan" className="bg-space-deep">
      <Starfield count={40} className="z-0 opacity-40" />

      <SectionHeading
        kicker="Pengenalan"
        title="Apa Itu Black Hole?"
        description="Memahami objek yang membuat cahaya pun tidak dapat melarikan diri"
      />

      <div className="relative z-10 grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        {/* Left: explanation */}
        <div className="lg:col-span-3 space-y-5">
          <div className="reveal space-y-4">
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed">
              Black hole adalah <span className="text-white font-medium">wilayah ruang-waktu</span>{' '}
              dengan gravitasi yang sangat kuat sehingga tidak ada sesuatu yang dapat melarikan diri
              setelah melewati <span className="text-glow-cyan font-medium">horizon peristiwa</span>—
              termasuk cahaya.
            </p>
          </div>

          <div className="reveal reveal-delay-1 space-y-4">
            <p className="text-base text-slate-300/80 leading-relaxed">
              Black hole bukan sekadar "lubang kosong" di ruang angkasa. Ia terbentuk ketika
              sejumlah besar massa berada dalam wilayah yang sangat kecil, sehingga menghasilkan
              kelengkungan ruang-waktu yang ekstrem.
            </p>
          </div>

          <div className="reveal reveal-delay-2 space-y-4">
            <p className="text-base text-slate-300/80 leading-relaxed">
              Konsep black hole muncul dari{' '}
              <span className="text-white font-medium">Teori Relativitas Umum Einstein</span>,
              yang menggambarkan gravitasi bukan sebagai gaya, melainkan sebagai kelengkungan
              ruang-waktu akibat massa dan energi. Ketika kelengkungan menjadi sangat ekstrem,
              muncullah apa yang kita sebut black hole.
            </p>
          </div>

          {/* Key idea box */}
          <div className="reveal reveal-delay-3 relative overflow-hidden rounded-2xl border border-glow-blue/20 bg-gradient-to-br from-glow-blue/10 to-glow-purple/5 p-6 mt-6">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-glow-blue/20 blur-2xl" />
            <div className="relative flex items-start gap-4">
              <Atom className="h-8 w-8 text-glow-cyan flex-shrink-0" strokeWidth={1} />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-glow-amber/80 mb-2">
                  Gagasan Utama
                </p>
                <p className="text-base md:text-lg font-display font-medium text-white leading-snug">
                  "Black hole bukan penyedot kosmik. Ia adalah wilayah ruang-waktu dengan gravitasi
                  yang sangat ekstrem."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: comparison cards */}
        <div className="lg:col-span-2 space-y-4">
          {COMPARISON.map((item, index) => {
            const delayClass = `reveal-delay-${index + 1}`;
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`reveal ${delayClass} group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-500 hover:border-glow-blue/30 hover:-translate-y-1`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-glow-blue/10 border border-glow-blue/20">
                    <Icon className={`h-6 w-6 ${item.accent}`} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-2">{item.description}</p>
                    <p className={`font-mono text-xs ${item.accent}`}>{item.metric}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
