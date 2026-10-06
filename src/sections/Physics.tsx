import { useState } from 'react';
import Section, { SectionHeading } from '@/components/Section';
import { PHYSICS_ITEMS } from '@/data/content';
import { Clock, Waves, StretchVertical, ArrowLeftRight } from 'lucide-react';

const ICON_MAP: Record<string, typeof Clock> = {
  Clock,
  Waves,
  StretchVertical,
};

export default function Physics() {
  const [comparison, setComparison] = useState<'stellar' | 'supermassive'>('stellar');

  return (
    <Section id="fisika" className="bg-space-dark">
      <SectionHeading
        kicker="Fisika Ekstrem"
        title="Apa yang Terjadi di Dekat Black Hole?"
        description="Relativitas umum memprediksi fenomena yang menantang intuisi sehari-hari"
      />

      {/* Physics items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12">
        {PHYSICS_ITEMS.map((item, index) => {
          const Icon = ICON_MAP[item.icon] ?? Clock;
          const delayClass = `reveal-delay-${index + 1}`;
          return (
            <div
              key={item.id}
              className={`reveal ${delayClass} group relative overflow-hidden rounded-2xl glass p-6 md:p-7 transition-all duration-500 hover:border-glow-blue/30 hover:box-glow-blue hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-glow-blue/15 to-glow-purple/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-glow-blue/10 border border-glow-blue/20 transition-all duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-glow-cyan" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-lg md:text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300/80 leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Spaghettification comparison */}
      <div className="reveal reveal-delay-3 rounded-2xl glass p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <ArrowLeftRight className="h-5 w-5 text-glow-cyan" strokeWidth={1.5} />
          <h3 className="text-lg md:text-xl font-semibold text-white">
            Perbandingan Gaya Pasang Surut
          </h3>
        </div>
        <p className="text-sm text-slate-400 mb-6">
          Gaya pasang surut di sekitar horizon dapat jauh lebih kuat pada black hole yang lebih
          kecil dibandingkan black hole supermasif. Pilih jenis black hole untuk melihat perbedaannya.
        </p>

        {/* Toggle */}
        <div className="inline-flex rounded-full glass-strong p-1 mb-6">
          <button
            onClick={() => setComparison('stellar')}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              comparison === 'stellar'
                ? 'bg-glow-blue/30 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Bermassa Bintang
          </button>
          <button
            onClick={() => setComparison('supermassive')}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              comparison === 'supermassive'
                ? 'bg-glow-blue/30 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Supermasif
          </button>
        </div>

        {/* Visual comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-glow-blue/15 bg-space-void/50 p-5">
            <div className="flex items-end justify-center h-32 gap-2 mb-4">
              {/* Spaghettification visual */}
              {comparison === 'stellar' ? (
                <div className="flex flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-glow-rose" />
                  <div className="h-16 w-1 bg-gradient-to-b from-glow-rose to-glow-amber rounded-full" />
                  <div className="h-2 w-2 rounded-full bg-glow-amber" />
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <div className="h-6 w-6 rounded-full bg-glow-cyan" />
                </div>
              )}
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-glow-cyan/70 mb-1">
              {comparison === 'stellar' ? 'Objek Memanjang' : 'Objek Relatif Utuh'}
            </p>
            <p className="text-sm text-slate-300/80">
              {comparison === 'stellar'
                ? 'Gaya pasang surut sangat kuat di horizon. Objek tertarik dan memanjang jauh sebelum mencapai horizon.'
                : 'Gaya pasang surut di horizon relatif lebih lemah. Objek dapat melewati horizon dalam kondisi relatif utuh.'}
            </p>
          </div>

          <div className="rounded-xl border border-glow-blue/15 bg-space-void/50 p-5">
            <div className="flex items-center justify-center h-32 mb-4">
              <div className="relative">
                {comparison === 'stellar' ? (
                  <div className="h-12 w-12 rounded-full bg-black border-2 border-glow-rose/50 shadow-[0_0_20px_rgba(255,93,143,0.4)]" />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-black border-2 border-glow-blue/50 shadow-[0_0_30px_rgba(77,139,255,0.4)]" />
                )}
              </div>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-glow-cyan/70 mb-1">
              {comparison === 'stellar' ? 'Black Hole Bermassa Bintang' : 'Black Hole Supermasif'}
            </p>
            <p className="text-sm text-slate-300/80">
              {comparison === 'stellar'
                ? 'Horizon berukuran kecil, gradien gravitasi sangat curam. Perbedaan gaya antara ujung dekat dan jauh objek sangat besar.'
                : 'Horizon berukuran sangat besar, gradien gravitasi relatif landai di sekitar horizon. Perbedaan gaya pada objek berukuran manusia minimal.'}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
