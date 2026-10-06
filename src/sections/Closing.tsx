import { ArrowUp } from 'lucide-react';
import Starfield from '@/components/Starfield';
import BlackHoleVisual from '@/components/BlackHoleVisual';

export default function Closing() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="penutup"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-space-void py-20 md:py-28"
    >
      <Starfield count={80} className="z-0" />

      {/* Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-glow-purple/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
        {/* Small black hole visual */}
        <div className="reveal flex justify-center mb-10">
          <BlackHoleVisual size="sm" />
        </div>

        <div className="reveal reveal-delay-1 inline-flex items-center gap-2 mb-8">
          <span className="h-px w-6 bg-glow-cyan/60" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-glow-cyan/80">
            Penutup
          </span>
          <span className="h-px w-6 bg-glow-cyan/60" />
        </div>

        <h2 className="reveal reveal-delay-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white leading-tight max-w-3xl mx-auto">
          "Black hole bukan sekadar objek dalam kegelapan. Ia adalah{' '}
          <span className="gradient-text">laboratorium alami</span> tempat gravitasi, waktu, cahaya,
          dan ruang-waktu mencapai kondisi yang paling ekstrem."
        </h2>

        <p className="reveal reveal-delay-3 mt-8 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Alam semesta lebih aneh dari yang kita bayangkan. Setiap penemuan baru membuka pertanyaan
          baru, dan setiap jawaban membawa kita lebih dekat untuk memahami sifat dasar realitas.
        </p>

        <div className="reveal reveal-delay-4 mt-10">
          <button
            onClick={handleBackToTop}
            className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-glow-blue to-glow-purple px-7 py-3.5 text-sm font-semibold text-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(77,139,255,0.5)] hover:scale-105"
          >
            <span>Kembali Menjelajahi Alam Semesta</span>
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
