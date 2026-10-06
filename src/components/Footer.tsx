import { REFERENCES, type Reference } from '@/data/content';
import { BookOpen, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [refsExpanded, setRefsExpanded] = useState(false);

  return (
    <footer className="relative border-t border-glow-blue/10 bg-space-deep">
      <div className="absolute inset-0 bg-gradient-to-t from-glow-blue/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-16">
        {/* References expandable section */}
        <div className="mb-12">
          <button
            onClick={() => setRefsExpanded(!refsExpanded)}
            className="w-full flex items-center justify-between rounded-2xl glass p-5 transition-all duration-300 hover:border-glow-blue/30"
            aria-expanded={refsExpanded}
          >
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-glow-cyan" strokeWidth={1.5} />
              <span className="font-display text-lg font-semibold text-white">Referensi</span>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-glow-cyan transition-transform duration-300 ${
                refsExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`grid transition-all duration-500 ${
              refsExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {REFERENCES.map((ref: Reference, index: number) => (
                  <div
                    key={index}
                    className="rounded-xl glass p-4 transition-colors hover:border-glow-blue/20"
                  >
                    <p className="text-sm font-medium text-white mb-1">{ref.source}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{ref.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="border-t border-glow-blue/10 pt-10">
          <div className="flex flex-col items-center text-center">
            <p className="font-display text-xl md:text-2xl font-bold text-white mb-3">
              <span className="gradient-text">BLACK HOLE</span>
              <span className="text-slate-400 font-normal"> — </span>
              <span className="text-slate-300 font-normal text-base md:text-lg">
                Menjelajahi fisika objek paling ekstrem di alam semesta
              </span>
            </p>
            <p className="text-sm text-slate-500 max-w-2xl leading-relaxed mb-6">
              Proyek edukasi astronomi yang bertujuan menyajikan informasi ilmiah tentang black hole
              dengan cara yang mudah dipahami. Seluruh konten didasarkan pada sumber terpercaya dan
              membedakan antara pengetahuan yang sudah mapan, prediksi teoritis, dan hipotesis.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
              <span>Proyek Edukasi Astronomi</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>Konten Ilmiah</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>Open Source</span>
            </div>
            <p className="mt-6 text-xs text-slate-600 font-mono">
              &copy; {new Date().getFullYear()} Black Hole Exhibition. Dibuat untuk tujuan edukasi oleh Nadia Khoerunisa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
