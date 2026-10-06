import { ArrowDown, ChevronDown } from 'lucide-react';
import BlackHoleVisual from '@/components/BlackHoleVisual';
import Starfield from '@/components/Starfield';

export default function Hero() {
  const handleExplore = () => {
    const el = document.getElementById('pengenalan');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScrollDown = () => {
    const el = document.getElementById('pengenalan');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-space-void"
    >
      <Starfield count={120} className="z-0" />

      {/* Radial glow background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60rem] w-[60rem] rounded-full bg-glow-blue/5 blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-glow-purple/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="reveal inline-flex items-center gap-2 mb-6">
              <span className="h-px w-6 bg-glow-cyan/60" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-glow-cyan/80">
                Objek Paling Ekstrem di Alam Semesta
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
              BLACK
              <br />
              <span className="gradient-text text-glow-blue">HOLE</span>
            </h1>

            <p className="reveal reveal-delay-2 mt-6 text-lg sm:text-xl md:text-2xl font-display font-light text-slate-300 italic">
              "Di tempat gravitasi menjadi ekstrem."
            </p>

            <p className="reveal reveal-delay-3 mt-6 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-slate-400 leading-relaxed">
              Jelajahi salah satu objek paling misterius di alam semesta—dari horizon peristiwa hingga
              fisika yang membuat cahaya sekalipun tidak dapat melarikan diri.
            </p>

            <div className="reveal reveal-delay-4 mt-8 flex justify-center lg:justify-start">
              <button
                onClick={handleExplore}
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-glow-blue to-glow-purple px-7 py-3.5 text-sm font-semibold text-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(77,139,255,0.5)] hover:scale-105"
              >
                <span>Jelajahi Black Hole</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </button>
            </div>
          </div>

          {/* Right: black hole visual */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="reveal reveal-delay-2 relative">
              <BlackHoleVisual size="xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-glow-cyan/60 hover:text-glow-cyan transition-colors duration-300"
        aria-label="Gulir ke bawah"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Gulir</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}
